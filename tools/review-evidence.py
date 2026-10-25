"""Normalize reviewed research handoffs. Never fetches or invents missing facts."""
import copy
import json
import pathlib
import re
import sys

sys.stdout.reconfigure(encoding='utf8', errors='replace')
ROOT=pathlib.Path(__file__).resolve().parents[1]
DATE='2026-10-24'
def load(name):return json.loads((ROOT/'research'/f'{DATE}-{name}.json').read_text(encoding='utf8'))
w,c,b=load('western'),load('chinese'),load('benchmarks')
result=dict(sources={},models=[],newModels=[],agentModels=[],agentMatrix=[],subscriptions=[],changes=[],events=[],notes=[],voices=[],conflicts=[],vendorUpdates={})
patches={}
aliases={'ds-v41flash1017':'ds-v41flash-1017','nemotron35supervl':'nemotron35-supervl','nemotron35bolt':'nemotron35-bolt',
         'nemotron35bolt-e4b':'nemotron35-bolt4gb','mistral-l4preview':'mistral-l4'}
known_new={'kimi-k31pro','muse-wonder-full','muse-wonder','muse-spark-open','claude-haiku55','minimax-m31flash',
           'ds-v41flash-1017','mistral-l4','nemotron35-supervl','nemotron35-bolt','nemotron35-bolt4gb','ling31-flash1019',
           'reflection-beam','claude-sonnet55-xhigh','gpt61-sol-high'}

def source_id(prefix,key):return prefix+'-'+key
for prefix,records in [('official',w['sources']),('vendor',c['sources'])]:
    for s in records:
        key=source_id(prefix,s['id'])
        result['sources'][key]=dict(name=s.get('title',s['id']),url=s['url'],kind='厂商官方',asOf=DATE,checkedAt=DATE,
            sourceDate=s.get('published_date') or s.get('publication_date') or s.get('updated_date'),link='page',note='官方文档 / 模型卡；读取日期不表示该日发布。')
result['sources']['aacai2']=dict(name='AA Coding Agent Index v2.0',url=b['codingAgents']['sourceURL'],kind='独立评测',asOf=DATE,
    checkedAt=DATE,sourceDate=None,link='page',note='24 个框架 × 模型配置（含 3 个路由组合），不等于 24 个独立模型；成绩未给统一发布日期。')
result['sources']['arena-current']=dict(name='Arena · Text Overall',url=b['sources'][0]['sourceURL'],kind='真人偏好评测',asOf=DATE,
    checkedAt=DATE,sourceDate=b['arena']['sourceDate'],link='page',note='公开榜快照 10/22，10/24 读取；保留具体档位、票数及置信区间。')
result['arenaAsOf']=b['arena']['sourceDate']

def patch(ident):
    ident=aliases.get(ident,ident)
    return patches.setdefault(ident,dict(id=ident,fields={},sources=[]))

def register_fact(ident,key,fact,prefix):
    if fact.get('value') is None or not fact.get('status','').startswith('verified'):
        return
    p=patch(ident)
    evidence=fact.get('evidence') or [dict(source_id=k,url=url) for k,url in zip(fact.get('source_ids',[]),fact.get('source_urls',[]))]
    if not evidence:return
    first=evidence[0];src=source_id(prefix,first['source_id'])
    p['sources'].append(src)
    val=fact['value']
    if key in ['ctx','maxOut','paramsTotal','paramsAct','priceIn','priceOut','priceCache']:
        if not isinstance(val,(int,float)):return
        p['fields'][key]=dict(value=val,src=src,url=first['url'],kind='vendor',note=fact.get('conditions',''),
                              sourceDate=first.get('published_date') or first.get('updated_date'))
    elif key in ['released','openWeights','license','access','apiStatus','releaseNote']:
        if isinstance(val,dict):val='；'.join(str(k)+'：'+str(v) for k,v in val.items())
        p['fields'][key]=val

for row in w['models']['patches']+w['models']['new_suggestions']:
    ident=row.get('board_id') or row.get('suggested_id')
    facts=row['facts']
    for key in ['priceIn','priceOut','priceCache','ctx','maxOut','paramsTotal','paramsAct','access','openWeights','license','released']:
        if key in facts:register_fact(ident,key,facts[key],'official')
    p=patch(ident)
    if all(k in p['fields'] for k in ['priceIn','priceOut']):
        org=row['org']
        mode={'openai':'官方 Standard · 输入 ≤272K','anthropic':'官方标准 API 价','google':'官方 Paid Standard','xai':'官方 Global Standard · 输入 <200K','meta':'Meta 标准 API'}[org]
        if ident=='claude-haiku55':mode='官方标准价 · 总输入 ≤100K'
        p['fields']['priceMode']=mode+' · USD / 百万 token'
        extras=[]
        if org=='openai':extras.append('超过 272K 输入，整单输入/缓存价 ×2、输出价 ×1.5；Fast ×2，Ultrafast ×6；Batch/Flex 半价（以该模型支持范围为准）。')
        if ident=='gpt53-codex':p['fields']['apiStatus']='deprecated';extras=['官方标为 deprecated；保留记录，不作为新项目默认候选。']
        if org=='anthropic':extras.append('缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。')
        if ident=='claude-haiku55':extras=['超过 100K 总输入，整单输入/输出/缓存读取为 $0.50/$2.50/$0.05；同步最大输出 128K，Batch 另见来源。']
        if org=='google':extras.append('付费文本标准价；缓存存储、Batch/Flex、音频和长请求单独计价。')
        if ident=='gemini4-argon':extras.append('10/13 已普遍开放；Batch/Flex $1/$5、缓存 $0.05 的优惠期至 11/30。')
        if org=='xai':extras.append('长输入整单翻倍；官方表格 ≥200K 与说明文字 >200K 的边界冲突待核实。')
        if org=='meta':extras.append('Contributor 为不同 API 配置，涉及训练授权且不支持 max；不能把其低价套在本行 max。')
        p['fields']['priceAlt']=' '.join(extras)
    if facts.get('modalities',{}).get('status')=='verified':
        modal=facts['modalities']['value'];names={'text':'文本','image':'图像','audio':'音频','video':'视频'}
        p['fields']['inputs']=[names.get(i,i) for i in modal.get('input',[])]
        p['fields']['outputs']=[names.get(i,i) for i in modal.get('output',[])]
    if ident=='gemini4-argon':p['fields'].update(priceMode='官方已开放 · Paid Standard · USD / 百万 token',access='10/13 普遍开放：AI Studio / Gemini API；付费 API，无免费 API 档。',released='2026-09-30',releaseNote='9/30 公布模型；10/13 API 普遍开放，两种事件日期分开。')
    if ident=='muse-wonder-full':p['fields'].update(priceMode='仅 Muse Code 订阅，未公布按 token 计费 API',access='Muse Code 的 Power Usage / Maximum Usage 计划；韩国不可用。')
    if ident=='muse-spark-open':p['fields'].update(license='Muse Spark Open 社区许可；需核对访问表单及商业条件。',priceMode='第三方推理渠道参考价；官方未公布统一 token 标价')

field_map={'context_tokens':'ctx','max_output_tokens':'maxOut','parameters_total':'paramsTotal','parameters_active':'paramsAct',
           'license':'license','weights_available':'openWeights','access':'access','release_date':'released','api_status':'apiStatus'}
old_ids={m['id'] for m in json.loads((ROOT/'research/previous-2026-10-02.json').read_text(encoding='utf8'))['MODELS']}
for row in c['model_patches']+c['new_model_suggestions']:
    ident=aliases.get(row.get('existing_model_id') or row.get('suggested_id'),row.get('existing_model_id') or row.get('suggested_id'))
    if ident not in old_ids|known_new:
        brand={'moonshot':'kimi','alibaba':'qwen','tencent':'hunyuan','meituan':'longcat'}.get(row['vendor'],row['vendor'])
        result['newModels'].append(dict(id=ident,name=row['name'],org=row['vendor'],brand=brand,variant='默认 / 官方配置',released='',
            status='current',tag='本期补录',scenes=['daily'],srcs=[],fresh=False,license='待核实',openWeights=None,access='见官方来源'))
    for field,key in field_map.items():
        fact=row['fields'].get(field,{})
        register_fact(ident,key,fact,'vendor')
    p=patch(ident)
    rates=[r for r in row.get('pricing',[]) if r['status']=='verified' and r['value'].get('currency')=='USD' and r['value'].get('input') is not None]
    if rates:
        rate=rates[0]
        for key,field in [('priceIn','input'),('priceOut','output'),('priceCache','cache_read')]:
            fact=copy.deepcopy(rate);fact['value']=rate['value'].get(field)
            register_fact(ident,key,fact,'vendor')
        p['fields']['priceMode']=rate['value']['channel']+' · USD / 百万 token'
        modes=[]
        for r in rates[1:]:
            price=r['value'];modes.append(price['channel']+'：输入 $'+str(price.get('input'))+' / 输出 $'+str(price.get('output'))+' / 缓存读取 $'+str(price.get('cache_read')))
        if row['vendor']=='deepseek':modes.append('主表为高峰价；高峰 UTC 工作日 01–04、06–10，排除中国法定假日；其他时段低谷。')
        if row['vendor']=='xiaomi':modes.append('缓存写入限时免费；Batch 半价；UltraSpeed 不支持 Batch。')
        if row['vendor']=='alibaba':modes.append('主表为国际新加坡渠道；其他地区与显式/隐式缓存有不同费率。')
        if row['vendor']=='zai':modes.append('缓存存储限时免费，未给结束日期；不要混入订阅套餐的优惠。')
        if row['vendor']=='moonshot':modes.append('自动前缀缓存默认 5 分钟；写入与读取另计；K3.1 不套用 K2 Batch 折扣。')
        if row['vendor']=='minimax':modes.append('M3 区分 512K 长输入与 Priority；M3.1 Flash 使用独立平价档。')
        p['fields']['priceAlt']='；'.join(modes)
    if ident=='kimi-k31pro':
        p['fields'].update(openWeights='pending',license='计划开放权重；当前未发布，许可待公开。',released='',
            releaseNote='发布日期待核实：AA 记录 10/23，官方研究档案记录 10/24；可能涉及时间口径，暂不合并。')
    if ident=='mimo25pro':
        p['fields'].update(status='prev',priceMode='原 API 已于 10/21 10:00（北京时间）退役；旧价仅历史记录',access='旧 API ID 已失效；迁移至 MiMo-V2.6-Pro。',
            limits='10/14 开始旧名转发，10/21 10:00 起原 API ID 返回错误；历史权重、模型分数和在线 API 状态是不同事实。')
    if ident in ['ds-v41flash','ds-v4flash0731','gemini37']:
        p['fields']['status']='prev'
    if ident=='minimax-m31flash' and p['fields'].get('openWeights') is False:
        p['fields']['license']='当前权重尚未公开；后续开放计划与许可待公告。'
    p['fields']['verificationNotes']=row.get('notes',[])

# The official Beam architecture table gives exact counts, unlike rounded publicity figures.
result['sources']['reflection-official']=dict(name='Reflection · Beam Model Card',url='https://reflection.ai/beam-model-card',
    kind='厂商官方',asOf=DATE,checkedAt=DATE,sourceDate=None,link='page',note='Architecture 表；501.3B 总参数、23.4B 激活参数。')
beam=patch('reflection-beam')
beam['sources'].append('reflection-official')
for key,val in [('paramsTotal',501300000000),('paramsAct',23400000000),('ctx',1000000)]:
    beam['fields'][key]=dict(value=val,src='reflection-official',url='https://reflection.ai/beam-model-card',kind='vendor',
        note='官方 Architecture 表；总参数、激活参数与上下文分开。',sourceDate=None)
beam['fields'].update(inputs=['文本'],outputs=['文本'])

# Distinct configurations inherit official model specifications, never benchmark results.
for ident,base in [('claude-sonnet55-xhigh','claude-sonnet55'),('gpt61-sol-high','gpt61-sol')]:
    p=patch(ident);p['fields']=copy.deepcopy(patch(base)['fields']);p['sources']=copy.deepcopy(patch(base)['sources'])
    p['fields'].pop('released',None)

# Arena mappings preserve actual configuration; mismatch is explicit and blocks a best-value claim.
arena_aliases={'muse-wonder':'muse-wonder','muse-wonder-full':'muse-wonder-full','claude-haiku55':'claude-haiku55',
    'kimi-k31pro':'kimi-k31pro','minimax-m31flash':'minimax-m31flash','ds-v41flash1017':'ds-v41flash-1017'}
for row in b['arena']['rows']:
    ident=aliases.get(row.get('localModelId'),row.get('localModelId'))
    name=row['sourceDisplayName'].lower()
    for token,matched in [('muse wonder full','muse-wonder-full'),('muse wonder','muse-wonder'),('haiku 5.5','claude-haiku55'),('kimi k3.1','kimi-k31pro'),('m3.1','minimax-m31flash'),('1017','ds-v41flash-1017')]:
        if token in name:ident=matched;break
    if not ident:continue
    target=patch(ident)
    existing=target['fields'].get('arena')
    if existing:continue
    cfg=row.get('configLabel') or ''
    expect={'claude-opus55':'max','claude-sonnet55':'max','gpt61-sol':'max','gpt6-astra':'max','grok47':'xhigh','gemini4-argon':'high'}.get(ident)
    mismatch=bool(expect and cfg and expect.lower()!=cfg.lower())
    target['fields']['arena']=dict(value=row['elo'],src='arena-current',url=row['sourceURL'],kind='ind',
        note=row['sourceDisplayName']+' · '+row['ci']['display']+' · '+str(row['votes'])+' 票 · 源榜 10/22'+(' · 档位与本行 AA 配置不同' if mismatch else ''),
        sourceDate=row['sourceDate'],ciLow=row['ci']['lower'],ciHigh=row['ci']['upper'],variantMismatch=mismatch,
        config=cfg,basis='Arena Text Overall · snapshot 2026-10-22')

# The matrix contains one row per exact configuration, including multi-model routers.
result['agentFrameworks']=b['codingAgents']['matrix']['AGENT_FRAMEWORKS']
framework_ids=[f['id'] for f in b['codingAgents']['matrix']['AGENT_COLS']]
for row in b['codingAgents']['rows']:
    ident=aliases.get(row.get('localModelId'),row.get('localModelId'))
    label=row['modelLabel'].lower()
    for token,matched in [('muse wonder full','muse-wonder-full'),('muse wonder','muse-wonder'),('muse spark open','muse-spark-open'),('haiku 5.5','claude-haiku55'),('1017','ds-v41flash-1017'),('beam','reflection-beam')]:
        if token in label:ident=matched;break
    if row['router']:ident=None
    if ident=='ds-v41flash':ident=None # Current checkpoint is ambiguous for this old Codex alias.
    versions=sorted({d[edge]['version'] for d in row['harnessVersionsByEvaluation'].values() for edge in ['min','max'] if d.get(edge) and d[edge].get('version')})
    note=row['modelLabel']+(' · '+('/'.join(versions)) if versions else '')+(' · 含回退' if row['fallbackObserved'] else '')
    cells=[dict(t='na') for _ in framework_ids]
    idx=framework_ids.index(row['harnessId'])
    cells[idx]=dict(s=round(row['cai2'],1),t='measured',version='2.0',url=row['sourceURL'],note=note,configId=row['sourceConfigId'])
    result['agentMatrix'].append(dict(id=ident,configId=row['sourceConfigId'],label=row['sourceConfigLabel'],cells=cells,router=row['router']))
    if ident:
        result['agentModels'].append(dict(id=ident,fields={key:dict(value=row[field],url=row['sourceURL'],note=row['harnessName']+' + '+note)
            for key,field in [('cai2','cai2'),('frontierAgent','frontiercode'),('sweatlas2','sweatlas2')]}))

for s in w['subscriptions']['replacement_suggestions']:
    item=copy.deepcopy(s['suggested_shape']);group=w['current8subscriptiongroups'][s['existing_group_index']]
    item.update(checkedAt=DATE,url=group['directURLs'][0],sourceDate=None,status=s['verification_status'],sources=group['directURLs'])
    result['subscriptions'].append(item)
result['models']=list(patches.values())

def editorial(rank,date,title,detail,impact,models,src,view='models'):
    result['changes'].append(dict(rank=rank,kind='评测' if view=='models' else '价格',date=date,title=title,detail=detail,impact=impact,models=models,src=src,view=view))
editorial(1,'2026-10-24','Kimi K3.1 Pro 进入前沿候选；权重尚未公开',
 'AA 当前主榜 AAII 55、统一环境 TB 4.0 为 67.2%，单任务成本 $2.11；官方 API 标准价 $2 输入 / $10 输出 / $0.20 缓存读取。',
 '可与 Sonnet 5.5、Muse Wonder 比较；发布日期存在 10/23 与 10/24 两种来源表述，权重暂按待开放记录。',['kimi-k31pro'],'aa')
editorial(2,'2026-10-24','编码 Agent 指数已换成 v2.0，新旧分数分开',
 '组成改为 FrontierCode v1.1、TB 4.0、SWE-Atlas-QnA-AA；本次读取 24 个配置，包含 3 个路由组合。',
 '选择时核对框架、推理档、回退与指标版本；不把 v1.5 与 v2.0 的分差当成性能涨跌。',['claude-opus55','claude-sonnet55','gpt61-sol'],'aacai2')
editorial(3,'2026-10-12','Meta 新增 Wonder / Wonder Full，API 与订阅边界不同',
 'AAII 当前为 52 / 56。Wonder 提供标准 API $4/$20；Wonder Full 只在特定 Muse Code 计划开放，没有可核实的按 token 任务成本。',
 'Full 的能力与可购买渠道要同时考虑，不能把 Wonder API 价格套给 Full。',['muse-wonder','muse-wonder-full'],'official-mwonder_release')
editorial(4,'2026-10-21','MiMo-V2.5 原 API 已退役，迁移到 V2.6',
 '官方记录 10/14 开始转发，10/21 10:00（北京时间）后原 API ID 失效。V2.6-Pro 标准输入/输出 $0.435/$0.87，缓存读取 $0.0036 / 百万 token。',
 '历史模型分数保留，但原 API 不再当成可用候选；UltraSpeed 和 Batch 使用独立计价条件。',['mimo25pro','mimo26pro'],'vendor-mi_deprecate','pricing')
editorial(5,'2026-10-07','Haiku 5.5 的短输入价与长输入价需要分开',
 '总输入 ≤100K 时 $0.10/$0.50，超过阈值整单按 $0.50/$2.50；当前 AA max 档 AAII 43。',
 '比较成本时要带入总输入长度和推理档，不能把最低短输入标价用于长文档账单。',['claude-haiku55'],'official-an_h55','pricing')
editorial(6,'2026-10-13','Gemini 4 Argon 已普遍开放，不再是预告 API 价',
 '官方 API Paid Standard $2/$10；Batch/Flex 优惠条件单独列出。Arena Text 的最近公开快照为 10/22。',
 '可以加入 API 候选比较；个人订阅用量、免费 API 与付费 API 不是同一种额度。',['gemini4-argon'],'official-gg_price','pricing')
for event in w['events']:
    date=event.get('event_date','')
    if date and date<=DATE:
        result['events'].append(dict(d=date[5:],t=event['title'],x=event['summary']['value'],url=event['sourceURLs'][0]))
for row in c.get('events',[]):
    date=row.get('date') or row.get('event_date') or ''
    if len(date)==10 and date<=DATE:
        fact=row.get('fact',{});event=fact.get('value',{})
        result['events'].append(dict(d=date[5:],t=event.get('title',row.get('title','官方更新')),x=event.get('detail',str(row.get('summary',''))),url=(fact.get('source_urls') or [''])[0]))
result['events'] += [dict(d='10-23',t='AA 收录 Kimi K3.1 Pro',x='AA 记录日期为 10/23；官方档案日期 10/24，页面保留冲突。',url='https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks')]

vendor_notes={
 'deepseek':'Flash 1017 与 9/10 旧 checkpoint 分开；当前别名路由、工作日高峰/低谷与工具费分别记录。',
 'alibaba':'托管 API 的区域和缓存方式各有价格；Max 总上下文 1M 与可用输入长度不同，Flash API 与 Flash-Next 权重不是同一行。',
 'zai':'Flash、FlashX 与 GLM-5.3 的价格和档位分别记录；753B 张量大小不能直接解决基座架构参数定义。',
 'moonshot':'K3.1 Pro API 已可用，权重尚待公布；Highspeed 为独立计价档，不能把厂商速度声称当作独立测量。',
 'minimax':'M3.1 Flash API 已上线、权重待发布；M3 的长输入与 Priority 规则不直接套用到新模型。',
 'xiaomi':'V2.5 原 API ID 已于 10/21 失效；V2.6、UltraSpeed 与 Batch 分开记录。',
 'tencent':'国际 TokenHub 的美元价与境内人民币价分别核对；Hy4 Preview 的收录不表示它在本月新发布。',
 'stepfun':'Step 5 Preview 的托管 API 输出上限与自部署权重卡说明分开；渠道缓存读取价也可能不同。',
 'nvidia':'开放权重不代表托管推理免费；Bolt、Super VL 及旧 Lightning 使用各自模型卡和许可，不填造统一官方 token 价格。',
 'mistral':'Large 4 Preview 与仍在列的 Large 3 分开；API、Batch 与 Vibe 订阅分别核验。',
 'motif':'官方权重已发布；未获得统一官方 API token 价格，页面的 AA 渠道参考价不冒充厂商报价。',
 'inclusionai':'Ling-3.1-flash 家族权重与 AA 1019 checkpoint 分开；未确认完全对应前，不转移参数、许可或公开权重状态。',
 'meituan':'补录官方 LongCat-2.0 资料，未声称它是本月新发布；公开权重、自部署成本与 API 标价分开。',
 'reflection':'Beam 1.0 作为新候选收录，独立评测来自 AA；权重、API 规格和费用以官方模型卡为准。',
}
for v in w['vendors']:
    facts=v['facts'];family=facts.get('current_family',{}).get('value',[])
    urls=[e['url'] for fact in facts.values() if isinstance(fact,dict) for e in fact.get('evidence',[])]
    result['vendorUpdates'][v['key']]={'family':' / '.join(family),'keypoints':facts.get('suggested_lede',{}).get('value',''), 'urls':list(dict.fromkeys(urls))}
for v in c['vendor_facts']:
    family=v.get('current_family',{}).get('value',[])
    result['vendorUpdates'][v['vendor']]={'family':' / '.join(family) if isinstance(family,list) else str(family),
        'keypoints':vendor_notes.get(v['vendor'],'本期资料与历史模型记录分开。'),
        'urls':v.get('current_family',{}).get('source_urls',[])}
result['vendorUpdates']['reflection']={'keypoints':vendor_notes['reflection'],'urls':['https://reflection.ai/']}
result['notes']=[
 dict(n='v2.0',t='当前编码 Agent 指数与旧 DeepSWE 分开',s='AA 方法页 · 10/24 读取',url='https://artificialanalysis.ai/methodology/coding-agents-benchmarking',models=[],d='CAI v2.0 由 FrontierCode 1.1、Terminal-Bench 4.0、SWE-Atlas-QnA-AA 等权合成。矩阵展示具体 Agent 配置，路由组合不冒充单模型。v1.5 和 DeepSWE 保留在历史评测中。'),
 dict(n='Elo',t='GDPval-AA v2.1 与旧版百分比是不同指标',s='AA GDPval · 10/24 读取',url='https://artificialanalysis.ai/evaluations/gdpval-aa',models=['kimi-k31pro','muse-wonder-full'],d='v2.1 的真实工作任务使用匿名成对比较得到 Elo，记录 95% 置信区间。旧版 v2 百分比另列，不从归一化合成值反算成 Elo。'),
 dict(n='审查中',t='SciCode 的数据集质量审查',s='AA SciCode · 10/24 读取',url='https://artificialanalysis.ai/evaluations/scicode',models=[],d='源站公开标为 Under review，原因是独立数据集审计发现潜在错误。分数可能在修正后改变；当前保留来源结果，但不授予最优值。'),
 dict(n='10/22',t='Arena 的数据日与读取日分开',s='Arena Text Overall · 10/24 读取',url='https://arena.ai/leaderboard/chat/text',models=[],d='公开榜日期 10/22；本次读取 10/24。418 行并非 418 家公司或独立模型，包含推理配置。不同档位和置信区间重叠时，不给出确定的谁更强结论。'),
 dict(n='计费',t='标准 API、缓存、渠道与订阅独立核对',s='各厂商官方文档 · 10/24 读取',models=[],d='价格主表统一 USD / 百万 token，渠道和适用范围在计价方式中注明。缓存读取、写入、存储及长上下文各有条件。订阅金额按官网公布的币种、月付/年付和地区记录，动态购买价读不到就标待核实。')]
result['voices']=[dict(q=n['d'],a=n['s'].split(' · ')[0],r='来源解读（转述）',d=DATE,key=True,verbatim=False,url=n.get('url')) for n in result['notes']]
result['conflicts']=[
 dict(model='kimi-k31pro',field='发布日期与开放权重',a='AA 发布日期 10/23；官方研究档案 10/24',b='权重计划公布，当前尚未发布',status='待核实',why='本期不擅自选择一个发布日期；权重标待开放，不能当成已开源。'),
 dict(model='glm53',field='总参数定义',a='旧版记录 753B，HF 也显示约 753B 张量规模',b='架构基座与张量总量存在不同定义',status='待核实',why='未把 HF 模型大小显示强行当成已解决的架构参数量。旧值保留原日期。'),
 dict(model='ds-v41flash',field='API 别名与 checkpoint',a='旧模型行是 9/10 checkpoint',b='当前 deepseek-flash 转向 1017',status='已分开',why='旧行保留；1017 新增独立行。Codex 组合未写 checkpoint 的结果只在矩阵按原标签展示。'),
 dict(model='grok47',field='长输入价格阈值',a='官方价格表 ≥200K',b='模型说明文字 >200K',status='待核实',why='阈值边界尚未作付费运行验证；明确记录差异。'),
 dict(model='—',field='SciCode 审查状态',a='源站标记 Under review',b='数值仍公开展示',status='不评最优',why='保留数值和来源，不把审查中数据包装为确定的最优结论。'),
 dict(model='—',field='MiniMax / Google 等动态订阅金额',a='官方公开档位和部分价格已更新',b='部分地区/购买页未读出固定金额',status='待核实',why='不沿用旧金额伪装本期已核价；缺失处直接标待核实。'),
 dict(model='—',field='CAI 当前与历史指数',a='当前 v2.0，替换 DeepSWE 并更新判分',b='历史 v1.5 / DeepSWE 数据仍保留',status='已分开',why='指标键、表格与来源分离，不生成跨版本涨跌。'),
 dict(model='kimi-k31pro',field='AA 任务成本快照',a='10/24 主榜约 $2.11 / 任务',b='10/23 发布文章约 $1.98 / 任务',status='快照差异',why='主表引用本次实际读取的主榜，并记录文章更早的观察值；不是官方 token 标价变动。')]
result['conflicts'] += [
 dict(model='ling31-flash1019',field='权重家族与 1019 checkpoint',a='官方 Ling-3.1-flash 家族有公开权重',b='AA 1019 checkpoint 未确认是同一份可下载权重',status='待核实',why='两行分别保留，不把家族 MIT 许可、参数量及开放状态套给 1019。'),
 dict(model='gpt6-sol',field='官方窗口与旧测量口径',a='10/24 官方最大窗口 1.05M',b='旧版保存 AA 可用窗口 872K（本期未重测）',status='已分口径',why='主字段记录官方上限，旧测量留档，不声称两者可以直接换算。'),
 dict(model='step5',field='托管输出与自部署上限',a='官方托管 API 文档 64K',b='权重模型卡提到 1M 输出',status='已分口径',why='主字段使用对应 API 渠道，不能把自部署上限当作 API 保证。')]
(ROOT/'research'/f'{DATE}-reviewed.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf8')
print(json.dumps({key:len(val) for key,val in result.items() if isinstance(val,(dict,list))},ensure_ascii=False))
