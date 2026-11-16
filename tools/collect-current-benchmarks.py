"""Read public benchmark HTML; write only the assigned 2026-11-16 research JSON."""
import hashlib
import html
import json
import pathlib
import re
import subprocess
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'research/2026-11-16-benchmarks.json'
DATE = '2026-11-16'


def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=45) as response:
        return response.read().decode('utf-8')


def rsc_objects(document):
    stream = ''
    for match in re.finditer(r'self\.__next_f\.push\((\[.*?\])\)</script>', document, re.S):
        try:
            payload = json.loads(match.group(1))
            if payload[0] == 1 and isinstance(payload[1], str):
                stream += payload[1]
        except (ValueError, IndexError):
            continue
    objects = []
    for line in stream.splitlines():
        _, _, body = line.partition(':')
        if body.startswith(('[', '{')):
            try:
                objects.append(json.loads(body))
            except ValueError:
                pass
    return objects


def walk(value):
    yield value
    if isinstance(value, dict):
        for child in value.values():
            yield from walk(child)
    elif isinstance(value, list):
        for child in value:
            yield from walk(child)


def normalize(name):
    return re.sub(r'[^a-z0-9]', '', name.lower())


def local_models():
    script = """const fs=require('fs'),vm=require('vm'),c={location:{pathname:'/'}};
    vm.createContext(c);vm.runInContext(fs.readFileSync('src/js/data.js','utf8')+
    ';globalThis.out=MODELS.map(x=>({id:x.id,name:x.name,org:x.org,brand:x.brand,variant:x.variant}));',c);
    process.stdout.write(JSON.stringify(c.out));"""
    return json.loads(subprocess.check_output(['node', '-e', script], cwd=ROOT, encoding='utf-8'))


def mapping(name, effort, models):
    # Explicit integration IDs supplied by the main task, retaining effort distinctions.
    planned = {
        ('Claude Fable 5.2', 'max'): 'claude-fable52',
        ('Claude Fable 5.2', 'xhigh'): 'claude-fable52-xhigh',
        ('Gemini 4 Carbon', 'high'): 'gemini4-carbon',
        ('Gemini 4 Hydrogen', 'xhigh'): 'gemini4-hydrogen',
        ('GPT-6.1 Terra', 'max'): 'gpt61-terra',
        ('GPT-6.1 Terra', 'low'): 'gpt61-terra-low',
        ('Muse Ember', 'max'): 'muse-ember',
    }
    if (name, effort.lower() if effort else None) in planned:
        return planned[(name, effort.lower() if effort else None)], 'main_integration_id_exact_effort'
    aliases = {
        'DeepSeek V4.1 Flash 1017': 'ds-v41flash-1017',
        'DeepSeek-V4.1-Flash-20261017': 'ds-v41flash-1017',
        'DeepSeek-V4.1-Flash-20260910': 'ds-v41flash',
        'DeepSeek-V4-Pro-20260813': 'ds-v4pro',
    }
    if name in aliases:
        return aliases[name], 'exact_checkpoint_alias_config_separate'
    for model in models:
        if normalize(model['name']) == normalize(name):
            return model['id'], 'exact_version_config_separate'
    return None, 'unmapped_no_checkpoint_or_effort_assumption'


def safety_summary(safety):
    if not safety:
        return None
    result = {key: value for key, value in safety.items() if key != 'refusals'}
    chains = {}
    for refusal in safety.get('refusals', []):
        if refusal.get('chain'):
            key = json.dumps(refusal['chain'], sort_keys=True)
            if key not in chains:
                chains[key] = {'models': refusal['chain'], 'attemptCount': 0}
            chains[key]['attemptCount'] += refusal['attemptCount']
    result['fallbackChains'] = list(chains.values())
    return result


def comparison_checks(data, rows):
    pairs = ['claude-code-vs-codex', 'opencode-vs-kimi-code-cli',
             'antigravity-cli-vs-muse-code', 'mistral-vibe-vs-grok-build',
             'deepseek-harness-vs-mirror', 'devin-fusion-cli-vs-claude-code']
    base = 'https://artificialanalysis.ai/agents/coding-agents/comparisons/'

    def read_pair(pair):
        error = None
        for _ in range(3):
            try:
                return pair, fetch(base + pair), None
            except Exception as exc:
                error = str(exc)
        return pair, None, error

    index = {(row['harnessName'], row['modelLabel']): row for row in rows}
    checked = set()
    with ThreadPoolExecutor(max_workers=4) as pool:
        results = list(pool.map(read_pair, pairs))
    for pair, document, error in results:
        data['unresolved'] = [item for item in data['unresolved'] if item['id'] != 'comparison-' + pair]
        if error:
            data['unresolved'].append({'id': 'comparison-' + pair, 'detail': error})
            continue
        source_id = 'aa-compare-' + pair
        data['sources'] = [item for item in data['sources'] if item['id'] != source_id]
        data['sources'].append({'id': source_id, 'title': 'Coding agent comparison: ' + pair,
            'url': base + pair, 'checkedAt': DATE, 'sourceDate': None, 'kind': 'independent',
            'htmlSha256': hashlib.sha256(document.encode()).hexdigest()})
        for tr in re.findall(r'<tr\b[^>]*>(.*?)</tr>', document, re.S):
            cells = [html.unescape(re.sub(r'<[^>]+>', '', cell)).strip()
                     for cell in re.findall(r'<t[dh]\b[^>]*>(.*?)</t[dh]>', tr, re.S)]
            if len(cells) != 10 or (cells[0], cells[1]) not in index:
                continue
            row = index[(cells[0], cells[1])]
            displayed = [int(cell) for cell in cells[3:7]]
            precise = [row['score'], row['components']['frontierCodeAA20Agent'],
                       row['components']['terminalBench41Agent'], row['components']['sweAtlasQnaAA']]
            assert all(int(value + 0.5) == shown for value, shown in zip(precise, displayed)), (row['configId'], precise, displayed)
            row['publicTableCrossCheck'] = {'index': displayed[0], 'frontierCodeAA20Agent': displayed[1],
                'terminalBench41Agent': displayed[2], 'sweAtlasQnaAA': displayed[3],
                'src': source_id, 'url': base + pair, 'sourceDate': None, 'checkedAt': DATE}
            checked.add(row['configId'])
    return len(checked)


def collect():
    data = json.loads(OUTPUT.read_text(encoding='utf-8'))
    models = local_models()
    url = data['codingAgents']['sourceURL']
    document = fetch(url)
    trees = rsc_objects(document)
    source_rows = {obj['id']: obj for tree in trees for obj in walk(tree)
                   if isinstance(obj, dict) and 'indexScore' in obj and 'agentSlug' in obj}
    assert len(source_rows) >= 29, 'Public configuration coverage unexpectedly shrank'
    rows = []
    components = {'frontiercode-v2.0': 'frontierCodeAA20Agent',
                  'terminal-bench-v4': 'terminalBench41Agent',
                  'swe-atlas-qna': 'sweAtlasQnaAA'}
    for original in source_rows.values():
        model = original.get('model') or {}
        label = model.get('name') or original['display']['model']
        base = model.get('release', {}).get('shortName')
        effort = model.get('effort', {}).get('slug')
        local_id, status = mapping(base or label, effort, models) if not original['isRouter'] else (None, 'router_not_a_single_model')
        fallback = safety_summary(original.get('safety'))
        evals = []
        scores = {}
        for evaluation in original['evals']:
            key = components[evaluation['datasetIndexName']]
            scores[key] = evaluation['mean']['reward'] * 100
            evals.append({
                'field': key,
                'sourceDatasetIndexName': evaluation['datasetIndexName'],
                'sourceEvaluationDatasetSlug': evaluation['evaluationDatasetSlug'],
                'refDatasetName': evaluation['refDatasetName'],
                'weight': evaluation['weight'],
                'rawScore': evaluation['mean']['reward'],
                'safety': safety_summary(evaluation.get('safety')),
                'rewardHacking': evaluation.get('rewardHacking'),
                'sourceDate': None,
                'url': url, 'src': 'aa-cai21', 'checkedAt': DATE,
            })
        assert abs(sum(scores.values()) / 3 - original['indexScore'] * 100) < 1e-9
        rows.append({
            'localModelId': local_id, 'mappingStatus': status,
            'modelLabel': label, 'sourceConfigLabel': original['displayLabel'],
            'harnessName': original['agentName'], 'harnessId': original['agentSlug'],
            'configId': original['id'], 'score': original['indexScore'] * 100,
            'components': scores, 'rawScores': {'indexScore': original['indexScore'],
                **{ev['sourceDatasetIndexName']: ev['rawScore'] for ev in evals}},
            'router': original['isRouter'],
            'fallbackObserved': fallback['fallbackAttemptCount'] > 0 if fallback else None,
            'fallbackObservation': fallback,
            'versionInfo': original.get('versions'),
            'url': url, 'sourceDate': None, 'checkedAt': DATE, 'src': 'aa-cai21',
            'indexVersion': '2.1', 'configLabel': model.get('suffix'),
            'reasoningEffort': effort, 'modelMetadata': model,
            'agentRelease': original.get('agentRelease'), 'provider': original.get('provider'),
            'configFlags': {key: original.get(key) for key in ['isDefault', 'isHighlighted', 'isUnavailable', 'variantOf']},
            'efficiencyPerTask': original.get('mean'),
            'evaluations': evals,
        })
    rows.sort(key=lambda row: (-row['score'], row['configId']))
    frameworks = {}
    for original in source_rows.values():
        slug = original['agentSlug']
        framework = frameworks.setdefault(slug, {
            'id': slug, 'name': original['agentName'], 'creator': original.get('agentCreator'),
            'url': url, 'sourceDate': None, 'checkedAt': DATE, 'src': 'aa-cai21', 'configurationIds': []})
        framework['configurationIds'].append(original['id'])
    data['codingAgents'].update(rows=rows, frameworks=sorted(frameworks.values(), key=lambda x: x['id']),
        rawScoreScale='Source proportions multiplied by 100; no integer rounding applied.',
        htmlSha256=hashlib.sha256(document.encode()).hexdigest(),
        sourceDatePolicy='No score publication dates disclosed; audit timestamps and harness releases remain separate.',
        sourceShapeNotes=[
            'Internal terminal-bench-v4 label and 4.0 task hash remain in SSR; current CAI methodology explicitly uses 4.1 verifiers.',
            '29 unique SSR configurations comprise 28 non-router rows plus one router; default chart label reads 16 of 28 models.',
            'Qwen3.8 Max has agentRelease key Claude Code:qwen3-8-max-0803; never map this to local Qwen3.8-Max (0902).',
            'efficiencyPerTask contains absolute per-task token counts and USD cost, not model API USD-per-million prices.',
        ])
    for row in data['arena']['rows']:
        base = row['sourceDisplayName']
        if row['configLabel']:
            base = base[:base.rfind('(')].strip()
        row['localModelId'], row['mappingStatus'] = mapping(base, row['configLabel'], models)
    for source in data['sources']:
        if source['id'] == 'aa-cai21':
            source['htmlSha256'] = data['codingAgents']['htmlSha256']
            source['retrieval'] = 'Unauthenticated official public SSR/RSC; 29 unique indexScore configuration objects.'
    data['coverage'].update(status='complete_with_explicit_unresolved',
        codingAgentRows=len(rows), codingAgentFrameworks=len(frameworks),
        nonRouterConfigurations=sum(not x['router'] for x in rows),
        routerConfigurations=sum(x['router'] for x in rows),
        fallbackConfigurations=sum(x['fallbackObserved'] is True for x in rows),
        arenaMappedRows=sum(x['localModelId'] is not None for x in data['arena']['rows']),
        agentMappedRows=sum(x['localModelId'] is not None for x in rows),
        modelMappingReadMethod='Node vm evaluated current outer src/js/data.js; exact version/checkpoint mapping only.',
        dashboardSourceFilesModified=False, deploymentPerformed=False)
    data['coverage']['publicComparisonTableCrossChecks'] = comparison_checks(data, rows)
    lcr = data['methodology']['benchmarks']['lcr']
    lcr.pop('minimumContextTokens', None)
    lcr['minimumContextSourceLabel'] = '128K'
    for benchmark, source_id in [('frontierCode', 'aa-frontier20'), ('terminalBench', 'tbench41-release'),
                                 ('hle', 'aa-hle'), ('lcr', 'aa-lcr'), ('scicode', 'aa-scicode')]:
        data['methodology']['benchmarks'][benchmark].update(src=source_id, checkedAt=DATE)
    data['methodology']['benchmarks']['frontierCode']['legacyURL'] = 'https://artificialanalysis.ai/evaluations/frontiercode'
    data['methodology']['benchmarks']['terminalBench'].update(
        independentModelHarness='mini-swe-agent', independentModelAttemptsPerTask=3,
        independentModelSourceURL='https://artificialanalysis.ai/evaluations/terminalbench-4-0')
    source_id = 'aa-tb40-method'
    if not any(item['id'] == source_id for item in data['sources']):
        data['sources'].append({'id': source_id, 'title': 'Terminal-Bench 4.0 independent model methodology',
            'url': 'https://artificialanalysis.ai/evaluations/terminalbench-4-0',
            'sourceDate': None, 'checkedAt': DATE, 'kind': 'independent'})
    data['methodology']['benchmarks']['sweAtlasQnaAA'] = {
        'tasks': 124, 'rubricCriteria': 1306, 'rewordedCriteria': 127,
        'judge': 'GPT-6 Luna (xhigh)', 'votesPerCriterion': 5, 'attemptsPerTask': 3,
        'scoring': 'Task Resolve Rate; every rubric criterion must pass; tracked repository modifications fail.',
        'src': 'aa-cai-method', 'url': 'https://artificialanalysis.ai/methodology/coding-agents-benchmarking',
        'sourceDate': None, 'checkedAt': DATE,
    }
    data['methodology']['caiVersionHistory'] = [
        {'version': '2.1', 'effectiveMonth': '2026-11', 'sourceDate': None,
         'basis': 'FrontierCode-AA 2.0 + Terminal-Bench 4.1 + SWE-Atlas-QnA-AA'},
        {'version': '2.0', 'effectiveMonth': '2026-10', 'sourceDate': None,
         'basis': 'FrontierCode 1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA-AA'},
        {'version': '1.5', 'effectiveMonth': '2026-09', 'sourceDate': None,
         'basis': 'DeepSWE 1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA'},
    ]
    for item in data['methodology']['caiVersionHistory']:
        item.update(src='aa-cai-method', url='https://artificialanalysis.ai/methodology/coding-agents-benchmarking', checkedAt=DATE)
    extra = [
        {'id': 'qwen-cai-checkpoint', 'detail': 'Public label Qwen3.8 Max resolves in agentRelease to qwen3-8-max-0803. Existing qwen38max is explicitly 0902. localModelId stays null.'},
        {'id': 'mistral-release-identity', 'detail': 'CAI now labels Mistral Large 4; local row is Mistral Large 4 Preview. No automatic alias asserted.'},
        {'id': 'hydrogen-effort', 'detail': 'Arena Gemini 4 Hydrogen is High; main-board intended ID gemini4-hydrogen is Xhigh. Arena row remains unmapped pending an explicit presentation policy.'},
        {'id': 'agent-run-commands', 'detail': 'Public SSR exposes exact effort, fallback observations, and per-benchmark harness version ranges, but no complete invocation command/environment configuration was exposed in retrieved objects.'},
        {'id': 'ci-calculator-commit', 'detail': 'Arena-Rank official article describes closed-form 95% CIs; the exact calculator commit used for this dated table is undisclosed.'},
    ]
    existing = {item['id'] for item in data['unresolved']}
    data['unresolved'].extend(item for item in extra if item['id'] not in existing)
    OUTPUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(data['coverage'], ensure_ascii=False))


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    collect()
