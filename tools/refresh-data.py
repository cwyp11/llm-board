"""Build a coherent static data source from reviewed, dated evidence files."""
import copy
import json
import pathlib
import re
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
ROOT = pathlib.Path(__file__).resolve().parents[1]
DATE = '2026-10-24'
RELEASE_DATE = '2026-10-25'


def read(name):
    return json.loads((ROOT / 'research' / name).read_text(encoding='utf-8'))


data = read('previous-2026-10-02.json')
aa = read(f'{DATE}-aa.json')
aa_rows = {row['slug']: row for row in aa['rows']}
metadata = {row['slug']: row for row in aa['metadata']}
details = {row['slug']: row for row in read(f'{DATE}-gdpval.json')['records'] if row.get('id') and row.get('slug')}
overrides_path = ROOT / 'research' / f'{DATE}-reviewed.json'
overrides = json.loads(overrides_path.read_text(encoding='utf-8')) if overrides_path.exists() else {}

data['META'].update(pageBuilt=RELEASE_DATE, dataSnapshot=DATE, dataBasis=DATE, checkedAt=DATE,
                    arenaAsOf=overrides.get('arenaAsOf', '待核实'), updatePipeline=False)
data['BRANDS'].update({
    'reflection': {'name': 'Reflection', 'logo': 'assets/logos/reflection.svg'},
    'inclusionai': {'name': '蚂蚁集团 InclusionAI', 'logo': 'assets/logos/inclusionai.png'},
    'meituan': {'name': '美团 Meituan', 'logo': 'assets/logos/meituan.svg', 'wide':True,'light':True},
    'longcat': {'name': 'LongCat', 'logo': 'assets/logos/meituan.svg','of':'meituan','wide':True,'light':True},
})
data['LAB_COLORS'].update(reflection='#C6BCAE', inclusionai='#C4A45D', meituan='#D6B644')


def source(key, name, url, note, kind='独立评测', published=None, brand=None):
    data['SOURCES'][key] = {'name': name, 'url': url, 'kind': kind, 'asOf': DATE,
                            'checkedAt': DATE, 'sourceDate': published, 'note': note, 'link': 'page'}
    if brand:
        data['SOURCES'][key]['brand'] = brand


source('aa', 'Artificial Analysis · 模型榜', aa['source'],
       '10/24 读取公开模型记录，逐项匹配版本与推理档；源站未提供统一测量日期。AAII v4.3.2。')
source('aa-gdp21', 'AA · GDPval-AA v2.1', 'https://artificialanalysis.ai/evaluations/gdpval-aa',
       'Elo 及 95% 置信区间；与旧 GDPval-AA v2 百分比使用不同指标键。')
source('aa-frontier', 'AA · FrontierCode 1.1', 'https://artificialanalysis.ai/evaluations/frontiercode',
       'Stirrup 共用 harness，平均得分而非全通过率；与编码 Agent 框架分项分开。')
source('aa-scicode', 'AA · SciCode（审查中）', 'https://artificialanalysis.ai/evaluations/scicode',
       '源站标记 Under review：数据集审计发现潜在问题，保留分数但不授予最优值。')
source('aa-lcr', 'AA · 长上下文推理 v1.1', 'https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning',
       '100 道问题、10K–100K token 长材料，区别于模型上下文窗口规格。')
source('aa-hle', 'AA · Humanity’s Last Exam', 'https://artificialanalysis.ai/evaluations/humanitys-last-exam',
       '2,500 道高难度学术问题；本页为 AA 独立评测口径。')
source('aa-tb40', 'AA · Terminal-Bench 4.0', 'https://artificialanalysis.ai/evaluations/terminalbench-4-0',
       '模型在 AA 统一运行环境下的结果；不同于各编码 Agent 的终端分项。')
data['SOURCES']['history']={'name':'旧版看板档案（本期未重验）','url':'https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js',
    'kind':'历史档案','asOf':'2026-10-02','checkedAt':DATE,'sourceDate':'2026-10-02','link':'page',
    'note':'保留原始 9/19 与 10/2 字段及研究资料，不把本次打开档案当成外部数据重新验证。'}

metrics = {m['k']: m for m in data['METRICS']}
for key in ['cai', 'deepswe', 'sweatlas', 'tb21', 'swe', 'gdpval', 'gpqa']:
    metrics[key]['history'] = True
    metrics[key]['g'] = 'history'
    metrics[key]['label'] += ' · 历史'
    if key!='swe':metrics[key]['src']='history'
metrics['cai']['warn'] = 'v1.5 历史组合分，不能与当前 v2.0 比较；旧值保留原日期。'
metrics['aaii']['basis'] = 'Artificial Analysis Intelligence Index v4.3.2'
metrics['aaii']['warn'] = '仅比较同一版本。旧 v4.3 / v4.1.1 分数不参与本期榜图和跨版本最优值计算。'
metrics['scicode'].update(underReview=True, src='aa-scicode', dec=1,
    warn='AA 当前标记为审查中，数据集可能修正；本页不授予该项最优值。')
metrics['lcr'].update(src='aa-lcr', dec=1)
metrics['nonhall']['dec'] = 1
metrics['tb40']['src'] = 'aa-tb40'


def metric(key, label, short, basis, src, hint, unit='%', dec=1, warn=None):
    result = dict(k=key, g='cap', label=label, short=short, basis=basis, src=src,
                  hint=hint, better='high', dec=dec, unit=unit)
    if warn:
        result['warn'] = warn
    return result


new_metrics = [
    metric('cai2', '编码 Agent 指数 v2.0', 'CAI 2.0',
           'AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA', 'aacai2',
           '衡量实际编码 Agent 完成仓库开发、终端任务和仓库问答的组合能力；结果属于框架 × 模型 × 推理档。', unit='',
           warn='与 v1.5 的组成不同，不计算跨版涨跌。'),
    metric('frontiercode', 'FrontierCode 1.1 · Stirrup', 'FrontierCode',
           'FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分', 'aa-frontier',
           '100 道真实开源仓库改动任务，不仅验证测试是否通过，还检查改动范围及维护者是否愿意合并。得分不等于全通过率。'),
    metric('frontierAgent', 'FrontierCode 1.1 · 编码 Agent', 'FrontierCode Agent',
           'CAI v2.0 组合分项 · 各自 Agent 框架', 'aacai2',
           '同一仓库开发评测在实际编码 Agent 框架中的结果；框架不同会影响成绩，不能与统一 Stirrup 得分混为一项。'),
    metric('sweatlas2', 'SWE-Atlas-QnA-AA · 编码 Agent', 'SWE-Atlas Agent',
           'CAI v2.0 组合分项 · SWE-Atlas-QnA-AA', 'aacai2',
           '仓库阅读和问答任务：检查 Agent 能否定位代码并正确解释实现；不要求修改代码。'),
    metric('gdpval21', 'GDPval-AA v2.1 · 真实工作', 'GDPval 2.1',
           'GDPval-AA v2.1 · Elo · AA Stirrup', 'aa-gdp21',
           '在 44 类职业的真实工作任务中生成文档、表格、演示等交付物，以匿名成对比较计算 Elo。与旧版百分比不能互换。', unit=' Elo', dec=0,
           warn='Elo 的 95% 置信区间可能重叠；细小分差不能证明模型明显更好。'),
    metric('hle', 'Humanity’s Last Exam', 'HLE', 'AA 独立评测 · HLE', 'aa-hle',
           '2,500 道由专家审定的数学、科学、人文学科难题，衡量高难度知识与推理，不能代表所有日常体验。'),
]
data['METRICS'] = [metrics['aaii']] + new_metrics[:4] + [m for m in data['METRICS'] if m['k'] != 'aaii'] + new_metrics[4:]
metrics = {m['k']: m for m in data['METRICS']}
data['METRIC_GROUPS'].insert(3, {'g': 'history', 'title': '历史评测与旧快照',
                               'note': '旧版数据只用于追溯，与当前版本分开。'})


def value(number, key, src='aa', note='', url=None, kind='ind', **extra):
    if number is None:
        return None
    result = dict(v=round(number, 6 if metrics[key].get('perM') else metrics[key].get('dec', 0)),
                rawValue=number, kind=kind, note=note, disp=None, asOf=DATE,
                src=src, url=url or data['SOURCES'][src]['url'], basis=metrics[key]['basis'],
                checkedAt=DATE, sourceDate=None)
    result.update(extra)
    return result


mapping = {
    'claude-opus55':'claude-opus-5-5','claude-sonnet55':'claude-sonnet-5-5','gemini4-argon':'gemini-4-argon',
    'gpt61-sol':'gpt-6-1-sol','gpt6-luna':'gpt-6-luna','grok47':'grok-4-7','mimo26pro':'mimo-v2-6-pro',
    'mimo26flash':'mimo-v2-6-flash','claude-fable51':'claude-fable-5-1','gpt6-astra':'gpt-6-astra',
    'qwen38max':'qwen3-8-max','glm53':'glm-5-3','step5':'step-5','gpt56-terra':'gpt-5-6-terra',
    'glm53flash':'glm-5-3-flash','gemini38':'gemini-3-8-flash','qwen38flashnext':'qwen3-8-flash-next',
    'ds-v4pro':'deepseek-v4-pro','qwen38-27b':'qwen3-8-27b','motif3':'motif-3',
    'gpt53-codex':'gpt-5-3-codex','gemini31pro':'gemini-3-1-pro-preview','minimax-m3':'minimax-m3',
    'kimi-k27code':'kimi-k2-7-code','hy3':'hy3','nemotron3ultra':'nvidia-nemotron-3-ultra-550b-a55b',
    'gemini35lite':'gemini-3-5-flash-lite','muse-glimmer':'muse-glimmer','nemotron35':'nemotron-3-5-lightning',
}
additions = [
    ('kimi-k31pro','kimi-k3-1-pro','Kimi K3.1 Pro','moonshot','kimi'),
    ('muse-wonder-full','muse-wonder-full','Muse Wonder Full','meta','meta'),
    ('muse-wonder','muse-wonder','Muse Wonder','meta','meta'),
    ('muse-spark-open','muse-spark-open','Muse Spark Open','meta','meta'),
    ('claude-haiku55','claude-haiku-5-5','Claude Haiku 5.5','anthropic','claude'),
    ('minimax-m31flash','minimax-m3-1-flash','MiniMax-M3.1-Flash','minimax','minimax'),
    ('ds-v41flash-1017','deepseek-v4-1-flash-1017','DeepSeek V4.1 Flash · 1017','deepseek','deepseek'),
    ('mistral-l4','mistral-large-4','Mistral Large 4 Preview','mistral','mistral'),
    ('nemotron35-supervl','nemotron-3-5-super-vl','Nemotron 3.5 Super VL','nvidia','nvidia'),
    ('nemotron35-bolt','nemotron-3-5-bolt-74b-a9b','Nemotron 3.5 Bolt 74B-A9B','nvidia','nvidia'),
    ('nemotron35-bolt4gb','nemotron-3-5-bolt-e4b-4gb','Nemotron 3.5 Bolt E4B 4GB','nvidia','nvidia'),
    ('ling31-flash1019','ling-3-1-flash-1019','Ling 3.1 Flash · 1019','inclusionai','inclusionai'),
    ('reflection-beam','reflection-beam','Beam 1.0','reflection','reflection'),
    ('claude-sonnet55-xhigh','claude-sonnet-5-5-xhigh','Claude Sonnet 5.5 · xhigh','anthropic','claude'),
    ('gpt61-sol-high','gpt-6-1-sol-high','GPT-6.1 Sol · high','openai','openai'),
]
old_models = copy.deepcopy(data['MODELS'])
for ident, slug, name, org, brand in additions:
    mapping[ident] = slug
    data['MODELS'].append(dict(id=ident, name=name, org=org, brand=brand,
        variant='', released='', status='current', tag='本期收录', scenes=['daily','coding'],
        srcs=['aa'], fresh=True, license='待核实', openWeights=None, access='以官方开放范围为准'))
existing_ids={m['id'] for m in data['MODELS']}
for model in overrides.get('newModels',[]):
    if model['id'] not in existing_ids:
        data['MODELS'].append(model)
        existing_ids.add(model['id'])
mapping.update({'ling31flash':'ling-3-1-flash','longcat20':'longcat-2-0'})
by_id = {m['id']: m for m in data['MODELS']}
slug_ids = {slug: ident for ident, slug in mapping.items()}
changes = []

for model in data['MODELS']:
    previous = next((m for m in old_models if m['id'] == model['id']), None)
    for metric_def in data['METRICS']:
        old = model.get(metric_def['k'])
        if old and not old.get('basis'):
            old['basis'] = ('Artificial Analysis Intelligence Index v4.3' if metric_def['k']=='aaii' and old['asOf']=='2026-09-19'
                            else metric_def['basis'])
        if old:
            old['src']='history'
            old['url']=data['SOURCES']['history']['url']
    model['fresh'] = (model.get('released') or '') >= '2026-10-03'
    slug = mapping.get(model['id'])
    if not slug or slug not in aa_rows:
        for key in ['strength','limits','tech']:
            if model.get(key) and not model[key].startswith('历史资料'):
                model[key] = '历史资料，未按 10/24 逐项复核：' + model[key]
        continue
    row = aa_rows[slug]
    detail = details.get(slug, {})
    page = 'https://artificialanalysis.ai/models/' + slug
    model['aaSlug'] = slug
    model['lastVerified'] = DATE
    suffix = re.search(r'\(([^()]*)\)$', row['name'])
    model['variant'] = suffix.group(1) if suffix else ('推理档见来源' if row['isReasoning'] else '非推理 / 默认')
    if detail.get('suffix'):
        model['variant'] = detail['suffix']
    release = metadata.get(slug, {}).get('releaseDate') or detail.get('releaseDate')
    if release:
        model['released'] = release
    model['fresh'] = bool(release and release >= '2026-10-03')
    if row['deprecated']:
        model['status'] = 'prev'
    model['license'] = '开放权重，具体许可见模型卡' if row['isOpenWeights'] else '闭源 / 尚未发布权重'
    model['openWeights'] = row['isOpenWeights']
    model['srcs'] = list(dict.fromkeys(model.get('srcs', []) + ['aa']))
    for key, field, scale in [('aaii','intelligenceIndex',1),('tb40','terminalBench40',100),
          ('scicode','scicode',100),('lcr','lcr',100),('nonhall','omniscienceNonHallucination',100),
          ('hle','hle',100),('speed','medianOutputTokensPerSecond',1),('cpt','intelligenceIndexCostPerTask',1)]:
        number = row.get(field)
        if number is None:
            continue
        src = metrics[key]['src']
        note = row['name']
        model[key] = value(number*scale, key, src=src, note=note, url=page,
                           kind='est' if key=='aaii' and row['intelligenceIndexIsEstimated'] else 'ind')
    model['ctx'] = value(row['contextWindowTokens'], 'ctx', note='AA 榜单记录；官方规格另行核对', url=page)
    for key, field in [('priceIn','price1mInputTokens'),('priceOut','price1mOutputTokens'),('priceCache','cacheHitPrice')]:
        if row.get(field) is not None:
            model[key] = value(row[field], key, url=page, note='AA 榜单 API 渠道参考价；官方条件见计价方式')
    model['priceMode'] = 'AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源'
    model['priceAlt'] = '不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价'
    for key in ['gdpval21','frontiercode']:
        field = 'gdpval' if key == 'gdpval21' else 'frontierCode'
        if detail.get(field) is not None:
            number = detail[field] * (100 if key=='frontiercode' else 1)
            extra = {}
            if key=='gdpval21' and detail.get('gdpvalBreakdown'):
                breakdown=detail['gdpvalBreakdown'];extra=dict(ciLow=breakdown['lower95ci'],ciHigh=breakdown['upper95ci'])
            model[key] = value(number,key,src=metrics[key]['src'],note='Stirrup · '+row['name'], **extra)
    # AA uses billions here; only official, typed parameter facts are imported below.
    # Tensor count, backbone count and active compute are not interchangeable.
    if detail:
        model['inputs'] = ['文本'] + [label for field,label in [('inputModalityImage','图像'),('inputModalitySpeech','音频'),('inputModalityVideo','视频')] if detail.get(field)]
        model['outputs'] = ['文本']
    model['strength'] = '待比较候选。依据：' + '；'.join(
        metrics[k]['short']+' '+str(model[k]['v'])+metrics[k].get('unit','')
        for k in ['aaii','tb40','lcr'] if model.get(k) and model[k]['asOf']==DATE) + '。'
    model['limits'] = '评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。'
    model['tech'] = '10/24 读取 AA 公开记录；'+row['name']+'。历史分项保留原日期，空白不作为零。'

for key, record in overrides.get('sources', {}).items():
    data['SOURCES'][key] = record

for patch in overrides.get('models', []):
    model = by_id.get(patch['id'])
    if not model:
        continue
    for key, content in patch.get('fields', {}).items():
        if key in metrics and isinstance(content, dict) and content.get('value') is not None:
            source_key = content['src']
            model[key] = value(content['value'],key,src=source_key,kind=content.get('kind','vendor'),
                               note=content.get('note',''),url=content.get('url'),
                               **{k:content[k] for k in ['sourceDate','ciLow','ciHigh','variantMismatch','config','basis'] if k in content})
        else:
            model[key] = content
    model['srcs'] = list(dict.fromkeys(model.get('srcs', []) + patch.get('sources', [])))
    if model['id']=='gpt6-sol' and model.get('ctx'):
        model['ctx']['note']+='；旧 AA 可用窗口 872K 未重测，与官方最大窗口口径分开。'

# Evidence additions are kept separate from generated presentation data.
for key, record in overrides.get('sources', {}).items():
    data['SOURCES'][key] = record

data['AGENT_HISTORY'] = {'frameworks': copy.deepcopy(data['AGENT_FRAMEWORKS']), 'rows': copy.deepcopy(data['AGENT_MATRIX']),
                          'version':'1.5','asOf':'2026-10-02'}
data['AGENT_FRAMEWORKS'] = overrides.get('agentFrameworks', [])
data['AGENT_MATRIX'] = overrides.get('agentMatrix', [])
for patch in overrides.get('agentModels', []):
    model=by_id.get(patch['id'])
    if not model:
        continue
    for key, record in patch['fields'].items():
        if record.get('value') is not None:
            model[key]=value(record['value'],key,src='aacai2',note=record.get('note',''),url=record['url'])

for model in data['MODELS']:
    for definition in data['METRICS']:
        model.setdefault(definition['k'],None)

data['SUBSCRIPTIONS'] = overrides.get('subscriptions', data['SUBSCRIPTIONS'])

# Rebuild current vendor summaries from actual records; retain prior prose in the archive.
vendors = []
for org in dict.fromkeys(m['org'] for m in data['MODELS']):
    models = [m for m in data['MODELS'] if m['org']==org]
    current = sorted([m for m in models if m.get('aaii') and m['aaii']['asOf']==DATE],key=lambda m:-m['aaii']['v'])
    lead = current[0] if current else None
    facts = [['已收录',str(len(models))+' 个条目'],['本期主榜覆盖',str(len(current))+' 个配置']]
    if lead:
        facts.append(['AAII',lead['name']+' · '+str(lead['aaii']['v'])])
    vendors.append(dict(key=org,models=[m['id'] for m in models],family=' / '.join(m['name'] for m in (current or models)[:3]),
        fresh=any(m.get('fresh') for m in models),facts=facts,
        lede=('本期独立评测：'+lead['name']+'，AAII '+str(lead['aaii']['v'])+'。' if lead else '本期未获得匹配配置的 AA 主榜分数；旧研究与数据保留原日期。'),
        tech='价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。',
        scene='作为待比较候选，依据在模型详情与用途入口中列出。',
        keypoints='核验日 '+DATE+'；源站公开数据可能有滞后。历史资料不作为新的厂商结论。',foot='本页实际收录模型，含历史版本。'))
data['VENDORS']=vendors
for vendor in vendors:
    update=overrides.get('vendorUpdates',{}).get(vendor['key'],{})
    vendor.update({key:val for key,val in update.items() if val})

for old in data['CHANGES']:
    old['rank'] += 100
    old['title'] = '历史资料 · '+old['title'] if not old['title'].startswith('历史资料') else old['title']
    old['impact'] = '保留用于追溯，不能当作 10/24 新结论。'
data['CHANGES'] = overrides.get('changes', []) + data['CHANGES']
for entry in data['TIMELINE']:
    entry['last']=False
    entry['historical']=True
data['TIMELINE'] += overrides.get('events', []) + [dict(d='10-24',t='本期全模块资料核验',
    x='重新核对公开模型榜、Agent 指数、Arena、API 规格与订阅；未重新确认的字段保留原日期。',hot=True,last=True)]
data['TIMELINE'].sort(key=lambda event:event['d'])
data['NOTES'] = overrides.get('notes', []) + data['NOTES'] + [
    {'n':'档案','t':'上一期厂商长文档案','s':'旧版交付包 · 2026-10-02 · 本期未作为当前结论',
     'models':[], 'd':'\n\n'.join(data['BRANDS'][v['key']]['name']+'：'+v.get('tech','')+' '+v.get('keypoints','') for v in read('previous-2026-10-02.json')['VENDORS'])}]
for voice in data['VOICES']:
    voice['key']=False
    voice['legacy']=True
    voice['r']='旧版摘录，未逐字复核 · '+voice['r']
data['VOICES'] = overrides.get('voices', []) + data['VOICES']
for conflict in data['CONFLICTS']:
    conflict['field']='历史记录 · '+conflict['field']
    conflict['why']='旧版处理记录，非本期已核验结论。'+conflict['why']
data['CONFLICTS'] = overrides.get('conflicts', []) + data['CONFLICTS']

for scene in data['SCENES']:
    if scene['k']=='coding':
        scene.update(metrics=['cai2','frontiercode','tb40'],why='先看 CAI v2.0 的实际 Agent 组合，再结合统一 Stirrup 环境的 FrontierCode 与终端任务成绩。',caveat='Agent 框架、模型版本和推理档都影响结果；CAI v2.0 与 v1.5 不互比。')
    if scene['k']=='agent':
        scene.update(metrics=['tb40','cai2','gdpval21'],why='以本期统一环境的 Terminal-Bench 4.0 为起点，参考 Agent 组合与真实工作任务。',caveat='终端、编码 Agent 和知识工作是不同任务，不生成跨维度综合分。')
    if scene['k']=='daily':
        scene.update(metrics=['arena','aaii','nonhall'],caveat='Arena 是用户偏好分；配置和置信区间见数据说明，不能代替个人任务体验。')
    if scene['k']=='longdoc':
        scene.update(metrics=['lcr','ctx','priceIn'],why='先看本期 AA-LCR 的长文档推理表现，再核对上下文、最大输出和实际输入费用。',caveat='AA-LCR 使用 10K–100K token 材料；大窗口不保证整个窗口上的推理质量。')

current_models=sum(m.get('aaii',{}).get('asOf')==DATE for m in data['MODELS'] if m.get('aaii'))
data['COVERAGE'] = overrides.get('coverage',{}) | {
    'models':dict(checkedAt=DATE,updated=current_models,total=len(data['MODELS']),note='AAII、速度、成本及分项按确切配置匹配；历史条目保留。'),
    'pricing':dict(checkedAt=DATE,updated=sum(m.get('priceIn',{}).get('asOf')==DATE for m in data['MODELS'] if m.get('priceIn')),note='官方标准价与 AA 渠道参考价分别标注。'),
    'agents':dict(checkedAt=DATE,updated=len(data['AGENT_MATRIX']),note='当前 v2.0；v1.5 单独存档。'),
    'subscriptions':dict(checkedAt=DATE,updated=len([s for s in data['SUBSCRIPTIONS'] if s.get('checkedAt')==DATE]),note='按地区、币种、月付和年付区分；未确认的计划标待核实。'),
    'vendors':dict(checkedAt=DATE,updated=len(data['VENDORS']),note='用本期实际数据重建摘要，旧长文档案保留。'),
    'research':dict(checkedAt=DATE,updated=len(overrides.get('notes',[])),note='当前方法说明、事件与来源解读和旧摘录分开。'),
}

header='/* Data checked on 2026-10-24. Generated from reviewed research snapshots by tools/refresh-data.py.\n   Read dates are not measurement dates. Unknown values stay null; historical values retain original dates. */\n'
order=['META','BRANDS','LAB_COLORS','MONO_COLOR','SOURCES','METRICS','METRIC_GROUPS','MODELS','SCENES','CHANGES',
       'AGENT_FRAMEWORKS','AGENT_MATRIX','AGENT_HISTORY','SUBSCRIPTIONS','VENDORS','TIMELINE','NOTES','VOICES','CONFLICTS','COVERAGE']
content=header+'\n\n'.join('const '+key+' = '+json.dumps(data[key],ensure_ascii=False,indent=2)+';' for key in order)
content+='\n\nif(/\\/(?:src\\/index|dist\\/artifact)\\.html$/i.test(location.pathname)){Object.values(BRANDS).forEach(b=>{if(b.logo)b.logo="../"+b.logo;});}\n'
(ROOT/'src/js/data.js').write_text(content,encoding='utf-8')
print(json.dumps(dict(models=len(data['MODELS']),current=current_models,vendors=len(vendors),metrics=len(metrics),sources=len(data['SOURCES'])),ensure_ascii=False))
