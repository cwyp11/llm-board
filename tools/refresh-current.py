"""Merge the November evidence into a static, version-safe dashboard snapshot."""
import copy
import json
import pathlib
import re
import sys

sys.stdout.reconfigure(encoding='utf8', errors='replace')
ROOT = pathlib.Path(__file__).resolve().parents[1]
DATE = '2026-11-16'
PREVIOUS = '2026-10-24'


def read(name):
    return json.loads((ROOT / 'research' / name).read_text(encoding='utf8'))


def write(name, value):
    (ROOT / 'research' / name).write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf8')


data = read(f'previous-{PREVIOUS}.json')
aa = read(f'{DATE}-aa.json')
details = {r['id']: r for r in read(f'{DATE}-gdpval.json')['records'] if r.get('id') and r.get('release')}
selection = read(f'{DATE}-selection.json')
western, chinese, benchmarks = [read(f'{DATE}-{name}.json') for name in ['western', 'chinese', 'benchmarks']]
main = read(f'{DATE}-main.json')
handoffs = [western, chinese, main]
rows = {r['id']: r for r in aa['rows']}
metadata = {r['slug']: r for r in aa['metadata']}
source_release = '97ab1e828376db4351c620b857c88f7e9eeedda4'
auto_conflicts = []
release_conflicts = {}
history_url = f'https://github.com/cwyp11/llm-board/blob/{source_release}/src/js/data.js'
data['SOURCES']['snapshot-oct'] = dict(name='10/24 看板归档', url=history_url, kind='历史档案',
    asOf=PREVIOUS, checkedAt=DATE, sourceDate=PREVIOUS, link='page', note='保留当期已记录事实；本次不重新确认旧结论。')
data['SOURCES']['aa5'] = dict(name='AA 模型榜 · AAII v5.0.1', url=aa['source'], kind='独立评测',
    asOf=DATE, checkedAt=DATE, sourceDate=None, link='page',
    note='按配置 UUID 匹配，保留推理档和回退。源站未给出统一测量日；AAII v4 不参与当前排名。')
method_url = 'https://artificialanalysis.ai/methodology/intelligence-benchmarking'
data['SOURCES']['aa5-method'] = dict(name='AAII v5.0.1 方法说明', url=method_url, kind='独立评测方法',
    asOf=DATE, checkedAt=DATE, sourceDate=None, link='page', note='九项评测，知识工作/编码/科学/通用能力分组；旧版指数和任务成本单独归档。')

for handoff in handoffs + [benchmarks]:
    records = handoff.get('sources', [])
    if isinstance(records, dict):
        records = [dict(id=k, **v) for k, v in records.items()]
    for source in records:
        record = copy.deepcopy(source)
        key = record.pop('id')
        record.setdefault('name', record.pop('title', key))
        record.setdefault('asOf', record.get('checkedAt', DATE))
        record.setdefault('sourceDate', None)
        record.setdefault('link', 'page')
        record['kind'] = {'vendor':'厂商官方','independent':'独立评测','methodology':'方法说明'}.get(record.get('kind'),record.get('kind','来源资料'))
        data['SOURCES'][key] = record

metrics = {m['k']: m for m in data['METRICS']}


def add_metric(key, label, short, basis, hint, unit='%', dec=1, better='high', group='cap', src='aa5'):
    m = dict(k=key, label=label, short=short, basis=basis, hint=hint, unit=unit,
             dec=dec, better=better, g=group, src=src)
    metrics[key] = m
    return m


# Preserve the complete old index/cost scale under different metric keys.
for original, archived, label in [('aaii', 'aaii4', 'AAII v4 · 10/24 档案'),
                                  ('cpt', 'cpt4', 'AAII v4 单任务成本 · 档案'),
                                  ('nonhall', 'nonhallOld', '旧版非幻觉率 · 档案')]:
    definition = copy.deepcopy(metrics[original])
    definition.update(k=archived, g='history', history=True, label=label, short=label, src='snapshot-oct',
        warn='旧版数据与当前版本分开；不可从跨版本分差推断能力或成本变化。')
    metrics[archived] = definition
    for model in data['MODELS']:
        model[archived] = copy.deepcopy(model.get(original))
        if model[archived]:
            model[archived].update(src='snapshot-oct', url=history_url)
        model[original] = None

metrics['aaii'].update(basis='Artificial Analysis Intelligence Index v5.0.1', src='aa5',
    hint='综合知识工作、编码、科学和通用任务能力；由当前九项评测按方法页权重合成。只能和同版本指数比较。',
    warn='v5.0.1 更换了任务构成与标定；旧 v4 分数另存历史评测，不生成跨版涨跌。')
metrics['cpt'].update(basis='AAII v5.0.1 · 加权平均模型调用成本 · USD / 任务', src='aa5',
    hint='完成本版智能指数任务的加权平均模型调用成本，包含推理与缓存消耗；不等于你的业务调用账单。',
    warn='与旧 AAII v4 的任务集不同，不直接比较两期成本。')
metrics['nonhall'].update(basis='AA-Omniscience v1.1 · 非幻觉率', src='aa5',
    label='非幻觉率 · Omniscience 1.1', hint='在知识问答中衡量模型避免错误断言的比例；需同时看答题覆盖，不能当作整体准确率。')
for key in ['frontiercode', 'hle', 'scicode', 'lcr', 'gdpval21']:
    metrics[key]['g'] = 'history'
    metrics[key]['history'] = True
    if '历史' not in metrics[key]['label']:
        metrics[key]['label'] += ' · 旧基准'

add_metric('briefcase', 'AA-Briefcase v1.1', 'Briefcase', 'AA-Briefcase v1.1 · Crowd-BT Elo · Stirrup',
    '模拟多周专业知识工作：阅读大量文件并完成文档、表格和演示交付；综合分析、呈现与可验证标准，以 Elo 计分。', unit=' Elo', dec=0)
add_metric('automation', 'AutomationBench-AA', 'Automation', 'AutomationBench-AA · 657 个保留任务 · 数据集 1.0.6',
    '跨邮箱、表格、CRM 等应用完成工作流，检查目标是否达成及是否破坏约束；违反约束的任务计零，不只是工具能否调用。')
add_metric('frontiercode2', 'FrontierCode-AA 2.0 · Stirrup', 'FrontierCode 2', 'FrontierCode-AA 2.0 · AA 统一 Stirrup harness',
    '真实仓库开发任务，按当前评测要求检查代码改动与可合并性；与旧 FrontierCode 1.1 是不同版本，不混排。')
add_metric('gdppdf', 'GDP.pdf · AA 实现', 'GDP.pdf', 'GDP.pdf · AA All-pass · 100 任务 × 5 次',
    '阅读真实专业 PDF 并满足任务标准；数值是每次尝试所有判据均通过的比例。不是 GDPval Elo，也不是平均判据通过率。')
add_metric('hleDiamond', 'HLE-Diamond', 'HLE-Diamond', 'HLE-Diamond · AA 当前口径',
    '高难度知识与推理测试，使用当前 Diamond 数据集；不同于旧 Humanity’s Last Exam 分数。')
add_metric('critpt2', 'CritPt v2 · Hard Subset', 'CritPt 2 Hard', 'CritPt v2 Hard Subset · AA',
    '高难度物理研究问题，衡量科学推理和计算解题；仅比较同一个 v2 难题子集。')
add_metric('tbScience', 'Terminal-Bench-Science 0.1', 'TB Science', 'Terminal-Bench-Science 0.1 · AA 统一环境',
    '在终端环境中完成科学计算与研究任务，检验科学推理与工具执行；和通用 Terminal-Bench 4.0 分开。')
add_metric('taskTime', '单任务用时 · AAII v5', '任务用时', 'AAII v5.0.1 · 加权平均用时 · 分钟',
    '源站按本版任务集汇总的平均用时；部分任务由输出 token 与吞吐推算，不等于含工具、判分、OCR 的全流程实测。与输出吞吐和旧版任务时间分开。',
    unit=' 分钟', dec=1, better='low', group='cost')
add_metric('firstAnswer', '首个答案 token 等待', '首答等待', 'AA 实测 · Time to First Answer Token · 秒',
    '从请求开始到首个答案 token 的时间；推理模型可能先内部思考，不能与首个任意 token 延迟混为一项。',
    unit=' 秒', dec=1, better='low', group='cost')

old_ids = {m['id'] for m in data['MODELS']}
for candidate in selection['newModels'] + [p for h in handoffs for p in h.get('models', []) if p.get('isNew')]:
    if candidate['id'] in old_ids:
        continue
    model = {k: candidate[k] for k in ['id', 'name', 'org', 'brand', 'variant', 'aaSlug', 'aaConfigId'] if k in candidate}
    model.setdefault('name', model['id'])
    model.setdefault('variant', '以具体来源配置为准')
    model.update(released='', status='current', tag='本期补录', scenes=['daily', 'coding'], srcs=[],
        fresh=False, license='待核实', openWeights=None, access='见具体官方来源')
    data['MODELS'].append(model)
    old_ids.add(model['id'])

by_id = {m['id']: m for m in data['MODELS']}
data['BRANDS']['thinkingmachines'] = dict(name='Thinking Machines Lab', logo='assets/logos/thinkingmachines.svg', wide=True, light=True)
data['LAB_COLORS']['thinkingmachines'] = '#C4C0B7'
for model in data['MODELS']:
    model['fresh'] = False
    for key in ['strength', 'limits', 'tech']:
        if model.get(key) and not model[key].startswith('历史资料'):
            model[key] = f'历史资料（{PREVIOUS}），未作为本期结论：' + model[key]


def val(number, key, src='aa5', url=None, note='', kind='ind', **extra):
    assert isinstance(number, (int, float)) and not isinstance(number, bool), (key, number)
    m = metrics[key]
    result = dict(v=round(number, 6 if m.get('perM') else m.get('dec', 0)), rawValue=number,
        kind=kind, note=note, disp=None, asOf=DATE, checkedAt=DATE, sourceDate=None,
        src=src, url=url or data['SOURCES'][src]['url'], basis=m['basis'])
    result.update(extra)
    return result


score_map = {'briefcase': ('aa-briefcase', 1), 'automation': ('automationbench-aa', 100),
    'frontiercode2': ('frontiercode-2-0', 100), 'gdppdf': ('gdp-pdf', 100), 'hleDiamond': ('hle-diamond', 100),
    'critpt2': ('critpt-v2-hard', 100), 'tbScience': ('terminal-bench-science', 100),
    'tb40': ('terminalbench-4-0', 100), 'nonhall': ('omniscience-non-hallucination', 100),
    'frontiercode': ('frontiercode', 100), 'hle': ('humanitys-last-exam', 100),
    'lcr': ('artificial-analysis-long-context-reasoning', 100), 'scicode': ('scicode', 100)}
for ident, config_id in selection['selections'].items():
    model, row = by_id[ident], rows[config_id]
    slug = row['release']['slug']
    page = 'https://artificialanalysis.ai/models/' + slug
    model.update(aaSlug=slug, aaConfigId=config_id, variant=row.get('suffix') or 'AA 默认配置', lastVerified=DATE)
    release = metadata.get(slug, {}).get('releaseDate')
    if release:
        model['released'] = release
        model['fresh'] = release > PREVIOUS
    if row['deprecated']:
        model['status'] = 'prev'
    model['srcs'] = list(dict.fromkeys(model.get('srcs', []) + ['aa5']))
    # Missing new-index values remain null, never old v4 scores or fabricated zeros.
    if row.get('intelligenceIndex') is not None:
        model['aaii'] = val(row['intelligenceIndex'], 'aaii', url=page, note=row['name'])
    for key, (field, scale) in score_map.items():
        number = row['scores'].get(field)
        if number is not None:
            extra = {}
            detail = details.get(config_id, {})
            breakdown = detail.get('briefcaseBreakdown') if key == 'briefcase' else None
            if breakdown and abs(breakdown['elo'] - number) < 0.01:
                extra = dict(ciLow=breakdown['lower95ci'], ciHigh=breakdown['upper95ci'])
            model[key] = val(number * scale, key, url=page, note=row['name'], **extra)
    for key, field, scale in [('cpt', 'intelligenceIndexCostPerTask', 1), ('taskTime', 'intelligenceIndexTimePerTask', 1/60),
        ('speed', 'outputSpeed', 1), ('firstAnswer', 'timeToFirstAnswerToken', 1), ('ctx', 'contextWindowTokens', 1),
        ('priceIn', 'price1mInputTokens', 1), ('priceOut', 'price1mOutputTokens', 1), ('priceCache', 'cacheHitPrice', 1)]:
        if row.get(field) is not None:
            note=row['name'] + (' · AA 渠道参考价' if key.startswith('price') else '')
            if key=='taskTime':
                note+=' · AA 汇总时间含推算部分，非全流程墙钟实测'
            model[key] = val(row[field] * scale, key, url=page, note=note,kind='est' if key=='taskTime' else 'ind')
    if any(model.get(k, {}).get('asOf') == DATE for k in ['priceIn', 'priceOut'] if model.get(k)):
        model['priceMode'] = 'AA 榜单推理渠道参考价 · USD / 百万 token'
        model['priceAlt'] = '官方价格以模型具体来源为准；缓存写入、地区、长输入、优惠与订阅分别记录。'
    detail = details.get(config_id, {})
    if detail.get('gdpval') is not None:
        extra = detail.get('gdpvalBreakdown') or {}
        model['gdpval21'] = val(detail['gdpval'], 'gdpval21', url='https://artificialanalysis.ai/evaluations/gdpval-aa',
            note='旧基准，本次读取；' + row['name'], **{k: extra[k] for k in ['ciLow','ciHigh'] if k in extra})
        if 'lower95ci' in extra:
            model['gdpval21'].update(ciLow=extra['lower95ci'], ciHigh=extra['upper95ci'])
    if detail:
        model['inputs'] = ['文本'] + [label for field, label in [('inputModalityImage','图像'),('inputModalitySpeech','音频'),('inputModalityVideo','视频')] if detail.get(field)]
        model['outputs'] = ['文本']
    evidence = [metrics[k]['short'] + ' ' + str(model[k]['v']) + metrics[k].get('unit','')
        for k in ['aaii','frontiercode2','tb40','briefcase'] if model.get(k) and model[k]['asOf'] == DATE]
    model['strength'] = '待比较候选。依据：' + '；'.join(evidence) + '。'
    model['limits'] = '仅代表记录的 checkpoint、推理档与评测环境；业务任务、价格条件、许可与可用地区需要分别检查。'
    model['tech'] = '本次读取 AA 公开配置 ' + config_id + '；不同版本与旧评测保留独立字段。'

for handoff in handoffs:
    for patch in handoff.get('models', []):
        if patch['id'] not in by_id:
            continue
        model = by_id[patch['id']]
        model['srcs'] = list(dict.fromkeys(model.get('srcs', []) + patch.get('evidenceIds', [])))
        for key, content in patch.get('fields', {}).items():
            if key in metrics and isinstance(content, dict) and content.get('value') is not None:
                assert content.get('src') in data['SOURCES'], (patch['id'], key, content.get('src'))
                model[key] = val(content['value'], key, src=content['src'], url=content.get('url'),
                    note=content.get('note', ''), kind=content.get('kind', 'vendor'), sourceDate=content.get('sourceDate'))
                model['srcs'] = list(dict.fromkeys(model.get('srcs', []) + [content['src']]))
            elif key not in metrics:
                if key == 'released' and content and model.get('released') and content != model['released'] and model.get('aaConfigId'):
                    release_conflicts[model['id']] = (model['released'], content)
                    auto_conflicts.append(dict(model=model['id'],field='发布日期 / 开放事件',a='AA 记录 '+model['released'],
                        b='官方资料 '+str(content),status='待核实',why='可能分别表示预告、模型发布或 API 开放；保留差异，不擅自选一个日期。'))
                    model['released'] = ''
                    model['fresh'] = any(date > PREVIOUS for date in release_conflicts[model['id']] if date)
                elif key in ['inputs','outputs']:
                    items = re.split(r'\s*[,/、]\s*',content) if isinstance(content,str) else content
                    names={'text':'文本','image':'图像','audio':'音频','video':'视频','pdf':'PDF'}
                    model[key] = [names.get(str(item).lower(),item) for item in items]
                elif key == 'apiStatus' and isinstance(content,str):
                    model['apiStatusNote'] = content
                    status=content.lower()
                    model[key] = ('deprecated' if status.startswith('deprecated') else 'retired' if status.startswith('retired')
                        else 'restricted' if 'verification required' in status else 'pending' if 'unresolved' in status
                        else 'available')
                else:
                    model[key] = content
            elif content is None:
                model[key] = None
        if model.get('released'):
            model['fresh'] = model['released'] > PREVIOUS and model['released'] <= DATE
for ident, (aa_date, official_date) in release_conflicts.items():
    by_id[ident]['releaseNote'] = ('发布日期口径待核实：AA '+aa_date+'；官方资料 '+str(official_date)+'。'+by_id[ident].get('releaseNote',''))
for model in data['MODELS']:
    rate = model.get('priceIn') or model.get('priceOut')
    if rate and rate.get('asOf') == DATE and rate.get('kind') == 'ind' and not model.get('priceMode','').startswith('AA'):
        model['priceMode'] = 'AA 渠道参考价 · USD / 百万 token；' + model.get('priceMode','')

# Imported effort variants share official specifications only, never benchmark results.
for target, base in [('claude-fable52-xhigh','claude-fable52'),('gpt61-terra-low','gpt61-terra')]:
    for handoff in handoffs:
        patch = next((p for p in handoff.get('models', []) if p['id'] == base), None)
        if not patch:
            continue
        for key in ['ctx','maxOut','paramsTotal','paramsAct','priceIn','priceOut','priceCache','license','openWeights','inputs','outputs','access','priceMode','priceAlt']:
            if key in patch.get('fields', {}):
                by_id[target][key] = copy.deepcopy(by_id[base].get(key))

# Keep Arena's actual effort even when it differs from the model's AA configuration.
arena_candidates = {}
for row in benchmarks['arena']['rows']:
    ident = row.get('localModelId')
    config = (row.get('configLabel') or '').lower()
    if ident == 'claude-sonnet55' and config == 'xhigh':
        ident = 'claude-sonnet55-xhigh'
    if not ident and row['sourceDisplayName'].startswith('Gemini 4 Hydrogen'):
        ident = 'gemini4-hydrogen'
    if ident not in by_id:
        continue
    model = by_id[ident]
    expected = re.search(r'\b(max|xhigh|high|medium|low|non-reasoning|reasoning)\b', model.get('variant',''), re.I)
    mismatch = bool((expected or config) and (not expected or not config or expected.group(1).lower() != config))
    candidate = (mismatch, row)
    previous = arena_candidates.get(ident)
    if previous is None or (previous[0] and not mismatch):
        arena_candidates[ident] = candidate
for ident, (mismatch, row) in arena_candidates.items():
    note = row['sourceDisplayName'] + ' · ' + str(row['votes']) + ' 票 · 源榜 ' + row['sourceDate']
    if row.get('ciBoundsDerivedFromDisplayedRoundedValues'):
        note += ' · 区间由显示的舍入值推得'
    if row.get('preliminary'):
        note += ' · 初步结果'
    if mismatch:
        note += ' · 来源推理档与本行 AA 配置未确认一致'
    by_id[ident]['arena'] = val(row['elo'], 'arena', src='arena-text', url=row['sourceURL'], note=note,
        sourceDate=row['sourceDate'], config=row.get('configLabel'), variantMismatch=mismatch,
        ciLow=row['ciLow'], ciHigh=row['ciHigh'])

agents = benchmarks['codingAgents']
assert agents['version'] == '2.1', 'Review metric keys when the Agent index changes again'
snapshots = copy.deepcopy(data['AGENT_HISTORY'].get('snapshots') or [data['AGENT_HISTORY']])
snapshots.append(dict(frameworks=copy.deepcopy(data['AGENT_FRAMEWORKS']), rows=copy.deepcopy(data['AGENT_MATRIX']),
    version='2.0', asOf=PREVIOUS))
data['AGENT_HISTORY']['snapshots'] = snapshots
for key in ['cai2','frontierAgent','sweatlas2']:
    metrics[key].update(g='history', history=True)
    if '历史' not in metrics[key]['label']:
        metrics[key]['label'] += ' · 历史'
add_metric('cai21', '编码 Agent 指数 v2.1', 'CAI 2.1',
    'AA Coding Agent Index v2.1 · FrontierCode-AA 2.0 + TB 4.1 + SWE-Atlas-QnA-AA',
    '实际编码 Agent 的仓库开发、终端任务和仓库问答三项等权指数；成绩属于框架、模型、档位和回退配置。',
    unit='', src='aa-cai21')
add_metric('frontierAgent20', 'FrontierCode-AA 2.0 · 编码 Agent', 'FrontierCode 2 Agent',
    'CAI v2.1 · FrontierCode-AA 2.0 · 实际 Agent harness',
    '真实仓库开发任务在各编码 Agent 框架中的成绩；和统一 Stirrup 环境的模型分数分开。', src='aa-cai21')
add_metric('tb41Agent', 'Terminal-Bench 4.1 · 编码 Agent', 'TB 4.1 Agent',
    'CAI v2.1 · Terminal-Bench 4.1 · 实际 Agent harness',
    '终端任务经 4.1 校验器重评分的 Agent 结果；任务环境沿用 4.0，但校验器不同，不直接当作 4.0 模型分数。', src='aa-cai21')
add_metric('sweatlas21', 'SWE-Atlas-QnA-AA · CAI 2.1', 'SWE-Atlas Agent',
    'CAI v2.1 · SWE-Atlas-QnA-AA · Task Resolve Rate',
    '124 个仓库问答任务；每条任务所有标准都通过才算成功，修改被跟踪仓库内容也会失败。', src='aa-cai21')
data['META'].update(caiKey='cai21', caiVersion='2.1')
data['AGENT_FRAMEWORKS'] = [f['name'] for f in agents['frameworks']]
framework_ids = [f['id'] for f in agents['frameworks']]
data['AGENT_MATRIX'] = []
assigned = set()
for row in agents['rows']:
    ident = row.get('localModelId')
    if row['modelLabel'] == 'Mistral Large 4 (High)':
        ident = 'mistral-l4-ga'
    if row.get('router') or ident not in by_id:
        ident = None
    versions = sorted({edge['version'] for bounds in row.get('versionInfo',{}).values()
        for edge in bounds.values() if isinstance(edge,dict) and edge.get('version')})
    note = row['modelLabel'] + (' · '+ '/'.join(versions) if versions else '') + (' · 含回退' if row.get('fallbackObserved') else '')
    cells = [dict(t='na') for _ in framework_ids]
    cells[framework_ids.index(row['harnessId'])] = dict(s=row['score'], t='measured', version='2.1',
        url=row['url'], note=note, configId=row['configId'])
    data['AGENT_MATRIX'].append(dict(id=ident, configId=row['configId'],
        label=row.get('sourceConfigLabel') or row['harnessName']+' + '+row['modelLabel'], cells=cells, router=row.get('router',False)))
    if ident is None or ident in assigned:
        continue
    assigned.add(ident)
    for key, number in [('cai21',row['score'])] + [(key,row['components'].get(field)) for key,field in
        [('frontierAgent20','frontierCodeAA20Agent'),('tb41Agent','terminalBench41Agent'),('sweatlas21','sweAtlasQnaAA')]]:
        if number is not None:
            by_id[ident][key] = val(number,key,src='aa-cai21',url=row['url'],note=row['harnessName']+' + '+note,
                config=row['configId'])
for definition in data['METRIC_GROUPS']:
    if definition['g']=='history':
        definition['note']='AAII v4、旧任务成本、CAI v1.5/v2.0 与旧评测单独留档；不作跨版本涨跌。'

for model in data['MODELS']:
    for key in metrics:
        model.setdefault(key, None)

data['SUBSCRIPTIONS'] = copy.deepcopy(western['subscriptions'])
localized_notes = {
 'openai':'Plus 与 Pro 的美元月费来自当前官方帮助。Go 随地区与币种变化，金额待核实。Pro 200 已恢复新订阅，旧额度到期说法已撤销；Ultrafast、API 条件赠额与订阅额度分别记录。',
 'anthropic':'现行档名为 Max 与 Ultra。Pro 年付总额 $200，不把约 $17/月展示值当作真实月付；Max/Ultra 的用量及条件 API 赠额不同。Ultra 取消五小时限制需验证账号，税费另计。',
 'google':'美区页面计算器显示 Pro $19.99/月、Ultra 5x $99.99/月；购买卡片金额未完整显示，结账价格仍待确认。Ultra 20x、Plus 和年付总额不沿用旧数值；地区与资格限制适用。',
 'xai':'新 X Subscription 将 Grok、Cursor 与 X 权益组合。表中为官方月费和整年实付总额，税费另计；第三方模型另收费，旧订阅迁移与共享额度不能当成额外独立额度。',
 'moonshot':'仅列境内新会员，人民币年费是预付总额。Go 不含 Kimi Code，Plus 及以上包含；国际方案和旧音乐档位另计。官方表格图片日期10/19，购买资格以结账页为准。',
 'minimax':'官方确认 Go / Explore / Build 三档，额度约1×/3×/7.5×。购买金额、币种与周期未读出，继续标待核实。图像/视频有单独周限制，不恢复旧 Coding 套餐金额。',
 'mistral':'官网当前显示美元月费，页面地区选择为法国；Pro $14.99，Team $24.99/人，税费另计。年付总额、学生专项价格未确认，Team 总额控制不能当作单席位费。',
 None:'DeepSeek 官方确认 App 免费聊天，不代表 API 或 Harness 免费。豆包协议确认会员档位但未给金额；千问与智谱的当前免费权益和会员金额未能确认。Kimi 见单列境内方案。'}
for sub in data['SUBSCRIPTIONS']:
    sub['sourceNote']=sub['note']
    sub['note']=localized_notes.get(sub.get('brand'),sub['note'])
    sub['product']={'Kimi (Mainland China new memberships)':'Kimi · 境内新会员','Chinese-provider app free tiers and memberships':'国内应用与会员','Mistral Vibe (formerly Le Chat)':'Mistral Vibe（原 Le Chat）'}.get(sub['product'],sub['product'])
    tiers=[]
    for tier,price in sub['tiers']:
        if price.startswith('Pending'):
            price='待核实'
        elif price.startswith('Free tier') or price.startswith('Limited free'):
            price='免费额度，限制见官网'
        else:
            price=price.replace(' / month',' / 月').replace(' / year',' / 年').replace(' / user',' / 人').replace('(billed monthly)','（月付）').replace('billed upfront','预付').replace('excluding taxes','未含税')
        tiers.append([tier,price])
    if sub.get('brand')=='google':
        tiers=[['AI Plus','待核实'],['AI Pro','USD 19.99 / 月（参考）'],['AI Ultra 5x','USD 99.99 / 月（参考）'],['AI Ultra 20x','待核实']]
    if sub.get('brand') is None:
        tiers=[['DeepSeek App','免费聊天'],['Kimi','见境内方案'],['豆包','档位已确认，金额待核实'],['千问','金额与权益待核实'],['智谱清言','金额与权益待核实']]
    tiers=[[tier,'联系销售' if price=='Contact sales' else price] for tier,price in tiers]
    sub['tiers']=tiers
assert all(s.get('checkedAt') == DATE and s.get('url') for s in data['SUBSCRIPTIONS'])

for previous in data['CHANGES']:
    previous['rank'] += 100
    if not previous['title'].startswith('历史资料'):
        previous['title'] = '历史资料 · ' + previous['title']
    previous['impact'] = '上一期资料，保留用于追溯；不能作为本次已核验的新结论。'
data['CHANGES'] = main['changes'] + data['CHANGES']
for event in data['TIMELINE']:
    event.update(historical=True, last=False)
new_events = [e for h in handoffs for e in h.get('events', []) if e['date'] <= DATE]
data['TIMELINE'] += [dict(d=e['date'][5:], t=e['title'], x=e['detail'], url=e['url']) for e in new_events]
data['TIMELINE'] += [dict(d='11-16', t='全模块数据核验', x='当前独立评测、价格、订阅、框架和官方资料分层核对；未重验内容保留原日期。', hot=True, last=True)]
data['TIMELINE'].sort(key=lambda e:e['d'])

for note in data['NOTES']:
    if not note['t'].startswith('历史资料'):
        note['t'] = '历史资料 · ' + note['t']
data['NOTES'] = main['notes'] + data['NOTES']
data['NOTES'].append(dict(n='档案',t='历史资料 · 10/24 厂商长文存档',s='上一期看板，非本次已核验结论',
    url=history_url,models=[],d='\n\n'.join(data['BRANDS'][v['key']]['name']+'：'+' '.join(v.get(k,'') for k in
        ['family','lede','tech','scene','keypoints']) for v in data['VENDORS'])))
for quote in data['VOICES']:
    quote['key'] = False
    quote['legacy'] = True
    if '历史' not in quote['r']:
        quote['r'] = '上期来源解读，未作本次结论 · ' + quote['r']
data['VOICES'] = [dict(q=n['d'], a=n['s'], r='资料转述', d=DATE, key=True, verbatim=False, url=n.get('url')) for n in main['notes']] + data['VOICES']
for conflict in data['CONFLICTS']:
    if not conflict['field'].startswith('历史记录'):
        conflict['field'] = '历史记录 · ' + conflict['field']
    conflict['why'] = '上期记录，状态以本期条目为准。' + conflict['why']
current_conflicts = main.get('conflicts', []) + auto_conflicts + [dict(model=u.get('model','—'), field=u.get('field','资料范围'),
    a=u.get('a','来源或渠道存在限制'), b=u.get('b',u.get('why','待核实')), status=u.get('status','待核实'),
    why=u.get('why','') + (' 来源：' + u['url'] if u.get('url') else '')) for h in handoffs for u in h.get('unresolved', [])]
data['CONFLICTS'] = current_conflicts + data['CONFLICTS']

data['VENDORS'] = []
vendor_updates = {key:value for h in handoffs for key,value in h.get('vendorUpdates', {}).items()}
for org in dict.fromkeys(m['org'] for m in data['MODELS']):
    models = [m for m in data['MODELS'] if m['org'] == org]
    current = sorted([m for m in models if m.get('aaii')], key=lambda m:-m['aaii']['v'])
    lead = current[0] if current else None
    vendor = dict(key=org, models=[m['id'] for m in models], family=' / '.join(m['name'] for m in (current or models)[:3]),
        fresh=any(m['fresh'] for m in models), facts=[['收录',str(len(models))+' 个版本/档位'],['AAII v5 覆盖',str(len(current))+' 个配置']],
        lede=('当前独立评测候选：'+lead['name']+'；AAII v5.0.1 '+str(lead['aaii']['v'])+'。' if lead else '本次未取得匹配配置的 AAII v5 分数；旧版资料另存历史。'),
        tech='模型与 API、上下文与最大输出、参数总量与激活规模分别记录。', scene='按用途入口选择待比较候选，并核对具体来源与限制。',
        keypoints='核验 '+DATE+'；不将官网读取日当作测量或发布日期。', foot='计数包含历史版本与具体推理档位。')
    vendor.update(vendor_updates.get(org, {}))
    data['VENDORS'].append(vendor)

scenes = {s['k']:s for s in data['SCENES']}
scenes['coding'].update(metrics=[data['META']['caiKey'],'frontiercode2','tb40'], why='先看当前编码 Agent 的实际配置，再结合统一环境的 FrontierCode-AA 2.0 与终端任务。', caveat='框架、checkpoint 与推理档都影响成绩；不把新旧 CAI 或 FrontierCode 混为一个分数。')
scenes['agent'].update(metrics=['automation','tb40','briefcase'], why='分别核对跨应用工作流、终端执行和专业交付物任务；这些维度不合成为自造总分。', caveat='某类任务领先不能保证另一类业务同样合适；请用自己的任务集验证。')
scenes['daily'].update(metrics=['arena','aaii','nonhall'], why='先看用户偏好，再参考当前 AAII 与避免错误断言的能力。', caveat='Arena 的配置、票数和置信区间不同，不能代替个人日常体验。')
scenes['longdoc'].update(metrics=['gdppdf','ctx','priceIn'], why='先看真实 PDF 文档任务的 All-pass，再核对实际渠道的窗口、输出上限和费用。', caveat='GDP.pdf 不等于窗口长度测试；大上下文不保证整个窗口上的准确性。')

preferred = ['aaii','cai21','frontiercode2','frontierAgent20','tb40','tb41Agent','sweatlas21','briefcase','automation',
    'gdppdf','hleDiamond','critpt2','tbScience','nonhall','arena','cpt','priceIn','priceOut','priceCache','taskTime','firstAnswer','speed',
    'ctx','maxOut','paramsTotal','paramsAct']
data['METRICS'] = [metrics[k] for k in preferred] + [m for k,m in metrics.items() if k not in preferred]
current_count = sum(m['aaii'] is not None for m in data['MODELS'])
data['META'].update(pageBuilt=DATE, dataSnapshot=DATE, dataBasis=DATE, checkedAt=DATE, updatePipeline=False,
    intelligenceVersion='5.0.1', arenaAsOf=benchmarks['arena']['sourceDate'],
    updateCommand='请按当前日期从官方与原始评测来源更新整个大模型看板，包括模型、评测、API价格、订阅、Agent、厂商、动态及来源。区分版本、推理档、渠道与评测口径；保留旧快照和未核实项，不补造数据。修改外层交付包的拆分源码，通过 build.py 生成发布版，运行数据及浏览器检查，再部署并实际验证现有公网地址，最后返回可打开的链接。')
data['COVERAGE'] = {
    'models':dict(checkedAt=DATE,updated=current_count,total=len(data['MODELS']),note='AAII v5 配置 UUID 精确映射；旧 v4 有独立字段。'),
    'pricing':dict(checkedAt=DATE,updated=sum(m.get('priceIn',{}).get('asOf')==DATE for m in data['MODELS'] if m.get('priceIn')),note='官方价格、渠道、地区与优惠条件分别记录。'),
    'agents':dict(checkedAt=DATE,updated=len(data['AGENT_MATRIX']),note='具体框架、版本、推理档和路由配置分开。'),
    'subscriptions':dict(checkedAt=DATE,updated=len(data['SUBSCRIPTIONS']),note='地区、币种和计费周期明确；动态金额未确认则待核实。'),
    'vendors':dict(checkedAt=DATE,updated=len(vendor_updates),total=len(data['VENDORS']),note='由实际模型重建摘要，官方资料覆盖见来源。'),
    'research':dict(checkedAt=DATE,updated=len(main['notes']),note='当前方法变化与旧研究保留分层。')}

header=f'/* Evidence snapshot {DATE}. Generated by tools/refresh-current.py; old dates are preserved. */\n'
order=['META','BRANDS','LAB_COLORS','MONO_COLOR','SOURCES','METRICS','METRIC_GROUPS','MODELS','SCENES','CHANGES',
       'AGENT_FRAMEWORKS','AGENT_MATRIX','AGENT_HISTORY','SUBSCRIPTIONS','VENDORS','TIMELINE','NOTES','VOICES','CONFLICTS','COVERAGE']
content=header+'\n\n'.join('const '+key+' = '+json.dumps(data[key],ensure_ascii=False,indent=2)+';' for key in order)
content+='\n\nif(/\\/(?:src\\/index|dist\\/artifact)\\.html$/i.test(location.pathname)){Object.values(BRANDS).forEach(b=>{if(b.logo)b.logo="../"+b.logo;});}\n'
(ROOT/'src/js/data.js').write_text(content,encoding='utf8')
print(json.dumps(dict(models=len(data['MODELS']),current=current_count,vendors=len(data['VENDORS']),metrics=len(metrics),sources=len(data['SOURCES'])),ensure_ascii=False))
