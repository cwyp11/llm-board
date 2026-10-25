/* Data checked on 2026-10-24. Generated from reviewed research snapshots by tools/refresh-data.py.
   Read dates are not measurement dates. Unknown values stay null; historical values retain original dates. */
const META = {
  "pageBuilt": "2026-10-25",
  "dataSnapshot": "2026-10-24",
  "dataBasis": "2026-10-24",
  "arenaAsOf": "2026-10-22",
  "updatePipeline": false,
  "updateCommand": "更新报告",
  "checkedAt": "2026-10-24"
};

const BRANDS = {
  "anthropic": {
    "name": "Anthropic",
    "logo": "assets/logos/anthropic.svg"
  },
  "claude": {
    "name": "Claude",
    "logo": "assets/logos/claude.svg",
    "of": "anthropic"
  },
  "openai": {
    "name": "OpenAI",
    "logo": "assets/logos/openai.svg"
  },
  "google": {
    "name": "Google",
    "logo": "assets/logos/google.svg"
  },
  "gemini": {
    "name": "Gemini",
    "logo": "assets/logos/gemini.svg",
    "of": "google"
  },
  "antigravity": {
    "name": "Antigravity",
    "logo": "assets/logos/antigravity.svg",
    "of": "google"
  },
  "xai": {
    "name": "xAI / SpaceXAI",
    "logo": "assets/logos/xai.svg"
  },
  "grok": {
    "name": "Grok",
    "logo": "assets/logos/grok.svg",
    "of": "xai"
  },
  "meta": {
    "name": "Meta",
    "logo": "assets/logos/meta.svg"
  },
  "moonshot": {
    "name": "月之暗面 Moonshot AI",
    "logo": "assets/logos/moonshot.svg"
  },
  "kimi": {
    "name": "Kimi",
    "logo": "assets/logos/kimi.svg",
    "of": "moonshot"
  },
  "alibaba": {
    "name": "阿里巴巴",
    "logo": "assets/logos/alibaba.svg"
  },
  "qwen": {
    "name": "通义千问 Qwen",
    "logo": "assets/logos/qwen.svg",
    "of": "alibaba"
  },
  "deepseek": {
    "name": "DeepSeek 深度求索",
    "logo": "assets/logos/deepseek.svg"
  },
  "zai": {
    "name": "Z.ai 智谱",
    "logo": "assets/logos/zai.svg"
  },
  "minimax": {
    "name": "MiniMax",
    "logo": "assets/logos/minimax.svg"
  },
  "xiaomi": {
    "name": "小米",
    "logo": "assets/logos/xiaomi.svg"
  },
  "tencent": {
    "name": "腾讯",
    "logo": "assets/logos/tencent.svg"
  },
  "hunyuan": {
    "name": "腾讯混元",
    "logo": "assets/logos/hunyuan.svg",
    "of": "tencent"
  },
  "mistral": {
    "name": "Mistral AI",
    "logo": "assets/logos/mistral.svg"
  },
  "nvidia": {
    "name": "NVIDIA",
    "logo": "assets/logos/nvidia.svg"
  },
  "motif": {
    "name": "Motif Technologies",
    "logo": "assets/logos/motif.svg",
    "wide": true
  },
  "stepfun": {
    "name": "阶跃星辰 StepFun",
    "logo": "assets/logos/stepfun.svg"
  },
  "devin": {
    "name": "Devin · Cognition",
    "logo": "assets/logos/devin.svg"
  },
  "huggingface": {
    "name": "Hugging Face",
    "logo": "assets/logos/huggingface.svg"
  },
  "openrouter": {
    "name": "OpenRouter",
    "logo": "assets/logos/openrouter.svg"
  },
  "reflection": {
    "name": "Reflection",
    "logo": "assets/logos/reflection.svg"
  },
  "inclusionai": {
    "name": "蚂蚁集团 InclusionAI",
    "logo": "assets/logos/inclusionai.png"
  },
  "meituan": {
    "name": "美团 Meituan",
    "logo": "assets/logos/meituan.svg",
    "wide": true,
    "light": true
  },
  "longcat": {
    "name": "LongCat",
    "logo": "assets/logos/meituan.svg",
    "of": "meituan",
    "wide": true,
    "light": true
  }
};

const LAB_COLORS = {
  "xiaomi": "#CF4047",
  "anthropic": "#FA874C",
  "mistral": "#C5821F",
  "openai": "#C9C5BA",
  "xai": "#E5C12F",
  "zai": "#97AA21",
  "nvidia": "#72DA68",
  "motif": "#229C75",
  "tencent": "#2CC2BB",
  "stepfun": "#1B8FA4",
  "meta": "#25B0F7",
  "deepseek": "#2F67D5",
  "alibaba": "#8C7CF9",
  "google": "#944EC1",
  "moonshot": "#F380E0",
  "minimax": "#D64C86",
  "reflection": "#C6BCAE",
  "inclusionai": "#C4A45D",
  "meituan": "#D6B644"
};

const MONO_COLOR = "rgba(238,234,226,.30)";

const SOURCES = {
  "aa": {
    "name": "Artificial Analysis · 模型榜",
    "url": "https://artificialanalysis.ai/leaderboards/models",
    "kind": "独立评测",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "note": "10/24 读取公开模型记录，逐项匹配版本与推理档；源站未提供统一测量日期。AAII v4.3.2。",
    "link": "page"
  },
  "aacai": {
    "name": "AA Coding Agent Index",
    "url": "https://artificialanalysis.ai/agents/coding-agents/comparisons/claude-code-vs-grok-build",
    "kind": "独立评测机构",
    "asOf": "2026-10-02",
    "note": "编码 Agent 指数 v1.5 = DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA 等权合成，评测对象是「框架 × 模型」组合",
    "link": "site"
  },
  "arena": {
    "name": "Arena 文本盲测榜",
    "url": "https://arena.ai/leaderboard/text",
    "kind": "真人盲测平台",
    "asOf": "2026-09-30",
    "note": "文本综合榜 Elo，含 ± 置信区间与名次区间；头部十余名互相统计并列",
    "link": "site"
  },
  "vals": {
    "name": "vals.ai",
    "url": "https://www.vals.ai/benchmarks/swebench",
    "kind": "独立复测",
    "asOf": "2026-09-01",
    "note": "SWE-bench Verified（Mini-SWE-agent harness）· 已于 2026-09-01 归档，不再跑新模型",
    "link": "site"
  },
  "tbench": {
    "name": "Terminal-Bench（Laude Institute）",
    "url": "https://tbench.ai",
    "kind": "基准官方",
    "asOf": "2026-09-19",
    "note": "Terminal-Bench 4.0：66 题，覆盖软件 / 机器学习 / 科学 / 运维 / 安全 / 硬件 / 媒体；本页 TB 分数由 AA 独立复跑",
    "link": "site"
  },
  "vendor": {
    "name": "厂商官方发布与定价页",
    "url": "",
    "kind": "官方自报",
    "asOf": "2026-09-19",
    "note": "各厂商官网、API 文档与发布公告；定价以官方页面为准，能力数据未经独立复测"
  },
  "press": {
    "name": "媒体与机构报道",
    "url": "",
    "kind": "二手报道",
    "asOf": "2026-09-19",
    "note": "路透 / 彭博 / Axios / VentureBeat / IT 之家 / 新浪科技 等，以转述为主，未逐条交叉核验"
  },
  "editor": {
    "name": "本报告编辑判断",
    "url": "",
    "kind": "编辑判断",
    "asOf": "2026-09-19",
    "note": "变化条目的重要性排序、场景归类等，非测量值"
  },
  "anthropic55": {
    "name": "Anthropic · Opus / Sonnet 5.5",
    "url": "https://www.anthropic.com/claude-sonnet-5-5",
    "kind": "厂商官方",
    "asOf": "2026-10-02",
    "note": "价格与发布信息；Opus 定价另见 https://www.anthropic.com/claude/opus",
    "link": "site"
  },
  "openai61": {
    "name": "OpenAI API · GPT-6.1 Sol",
    "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
    "kind": "厂商官方",
    "asOf": "2026-10-02",
    "note": "价格、缓存、上下文和最大输出",
    "link": "site"
  },
  "google4": {
    "name": "Google · Gemini 4 Argon",
    "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
    "kind": "厂商官方",
    "asOf": "2026-10-02",
    "note": "发布、预告价格与受限开放状态",
    "link": "site"
  },
  "xai47": {
    "name": "SpaceXAI · Grok 4.7",
    "url": "https://docs.x.ai/developers/models/grok-4.7",
    "kind": "厂商官方",
    "asOf": "2026-10-02",
    "note": "API 价格与上下文",
    "link": "site"
  },
  "xiaomi26": {
    "name": "小米 MiMo-V2.6-Pro",
    "url": "https://mimo.mi.com/models/zh-CN/mimo-v2.6-pro",
    "kind": "厂商官方",
    "asOf": "2026-10-02",
    "note": "规格、API 价格与可用状态",
    "link": "site"
  },
  "aa-gdp21": {
    "name": "AA · GDPval-AA v2.1",
    "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
    "kind": "独立评测",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "note": "Elo 及 95% 置信区间；与旧 GDPval-AA v2 百分比使用不同指标键。",
    "link": "page"
  },
  "aa-frontier": {
    "name": "AA · FrontierCode 1.1",
    "url": "https://artificialanalysis.ai/evaluations/frontiercode",
    "kind": "独立评测",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "note": "Stirrup 共用 harness，平均得分而非全通过率；与编码 Agent 框架分项分开。",
    "link": "page"
  },
  "aa-scicode": {
    "name": "AA · SciCode（审查中）",
    "url": "https://artificialanalysis.ai/evaluations/scicode",
    "kind": "独立评测",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "note": "源站标记 Under review：数据集审计发现潜在问题，保留分数但不授予最优值。",
    "link": "page"
  },
  "aa-lcr": {
    "name": "AA · 长上下文推理 v1.1",
    "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
    "kind": "独立评测",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "note": "100 道问题、10K–100K token 长材料，区别于模型上下文窗口规格。",
    "link": "page"
  },
  "aa-hle": {
    "name": "AA · Humanity’s Last Exam",
    "url": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
    "kind": "独立评测",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "note": "2,500 道高难度学术问题；本页为 AA 独立评测口径。",
    "link": "page"
  },
  "aa-tb40": {
    "name": "AA · Terminal-Bench 4.0",
    "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
    "kind": "独立评测",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "note": "模型在 AA 统一运行环境下的结果；不同于各编码 Agent 的终端分项。",
    "link": "page"
  },
  "history": {
    "name": "旧版看板档案（本期未重验）",
    "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js",
    "kind": "历史档案",
    "asOf": "2026-10-02",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-02",
    "link": "page",
    "note": "保留原始 9/19 与 10/2 字段及研究资料，不把本次打开档案当成外部数据重新验证。"
  },
  "official-oa61": {
    "name": "OpenAI GPT-6.1 Sol",
    "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-oa6a": {
    "name": "OpenAI GPT-6 Astra",
    "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-oa6s": {
    "name": "OpenAI GPT-6 Sol",
    "url": "https://developers.openai.com/api/docs/models/gpt-6-sol",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-oa6l": {
    "name": "OpenAI GPT-6 Luna",
    "url": "https://developers.openai.com/api/docs/models/gpt-6-luna",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-oa56s": {
    "name": "OpenAI GPT-5.6 Sol",
    "url": "https://developers.openai.com/api/docs/models/gpt-5.6-sol",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-oa56t": {
    "name": "OpenAI GPT-5.6 Terra",
    "url": "https://developers.openai.com/api/docs/models/gpt-5.6-terra",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-oa56l": {
    "name": "OpenAI GPT-5.6 Luna",
    "url": "https://developers.openai.com/api/docs/models/gpt-5.6-luna",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-oa53": {
    "name": "OpenAI GPT-5.3-Codex",
    "url": "https://developers.openai.com/api/docs/models/gpt-5.3-codex",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-oa55": {
    "name": "OpenAI GPT-5.5",
    "url": "https://developers.openai.com/api/docs/models/gpt-5.5",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-oa_log": {
    "name": "OpenAI API changelog",
    "url": "https://developers.openai.com/api/docs/changelog",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-22",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_roster": {
    "name": "Claude model overview",
    "url": "https://platform.claude.com/docs/en/models/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_price": {
    "name": "Claude API pricing",
    "url": "https://platform.claude.com/docs/en/about-claude/pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_effort": {
    "name": "Claude effort",
    "url": "https://platform.claude.com/docs/en/build-with-claude/effort",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_f51": {
    "name": "Claude Fable 5.1",
    "url": "https://platform.claude.com/docs/en/models/fable-5-1/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_o55": {
    "name": "Claude Opus 5.5",
    "url": "https://platform.claude.com/docs/en/models/opus-5-5/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_s55": {
    "name": "Claude Sonnet 5.5",
    "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_h55": {
    "name": "Claude Haiku 5.5",
    "url": "https://platform.claude.com/docs/en/models/haiku-5-5/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_h55_release": {
    "name": "Haiku 5.5 release",
    "url": "https://www.anthropic.com/claude-haiku-5-5",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-07",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_o5": {
    "name": "Claude Opus 5",
    "url": "https://platform.claude.com/docs/en/models/opus-5/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_s5": {
    "name": "Claude Sonnet 5",
    "url": "https://platform.claude.com/docs/en/models/sonnet-5/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_f5": {
    "name": "Claude Fable 5",
    "url": "https://platform.claude.com/docs/en/models/fable-5/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_m51": {
    "name": "Claude Mythos 5.1",
    "url": "https://platform.claude.com/docs/en/models/mythos-5-1/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_o48": {
    "name": "Claude Opus 4.8",
    "url": "https://platform.claude.com/docs/en/models/opus-4-8/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-an_h45": {
    "name": "Claude Haiku 4.5",
    "url": "https://platform.claude.com/docs/en/models/haiku-4-5/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-gg_argon": {
    "name": "Gemini 4 Argon",
    "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-14",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-gg_flash": {
    "name": "Gemini 3.8 Flash",
    "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-22",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-gg_pro": {
    "name": "Gemini 3.1 Pro Preview",
    "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-09",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-gg_lite": {
    "name": "Gemini 3.5 Flash-Lite",
    "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-22",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-gg_price": {
    "name": "Gemini Developer API pricing",
    "url": "https://ai.google.dev/gemini-api/docs/pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-gg_log": {
    "name": "Gemini API release notes",
    "url": "https://ai.google.dev/gemini-api/docs/changelog",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-x47": {
    "name": "Grok 4.7",
    "url": "https://docs.x.ai/developers/models/grok-4.7",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-x46": {
    "name": "Grok 4.6",
    "url": "https://docs.x.ai/developers/models/grok-4.6",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-x45": {
    "name": "Grok 4.5",
    "url": "https://docs.x.ai/developers/models/grok-4.5",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-xprice": {
    "name": "xAI API pricing",
    "url": "https://docs.x.ai/developers/pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-xlog": {
    "name": "xAI release notes",
    "url": "https://docs.x.ai/developers/release-notes",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mprice": {
    "name": "Meta Model API pricing",
    "url": "https://dev.meta.ai/docs/pricing-rate-limits",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mroster": {
    "name": "Meta model catalog",
    "url": "https://dev.meta.ai/docs/models",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mreason": {
    "name": "Meta reasoning",
    "url": "https://dev.meta.ai/docs/reasoning",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mspark": {
    "name": "Muse Spark 1.3 product",
    "url": "https://dev.meta.ai/models/muse-spark",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mwonder": {
    "name": "Muse Wonder product",
    "url": "https://dev.meta.ai/models/muse-wonder",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mwonder_release": {
    "name": "Muse Wonder release",
    "url": "https://research.meta.ai/blog/muse-wonder",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-12",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mopen_release": {
    "name": "Muse Spark Open release",
    "url": "https://research.meta.ai/blog/muse-spark-open",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-15",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mopen_card": {
    "name": "Meta official Muse Spark Open model card and license",
    "url": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-15",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mglimmer": {
    "name": "Meta official Muse Glimmer model card",
    "url": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mglimmer_paper": {
    "name": "Muse Glimmer research publication",
    "url": "https://ai.meta.com/research/publications/muse-glimmer-30b-an-on-device-agentic-model/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-19",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mresearch": {
    "name": "Meta research index",
    "url": "https://research.meta.ai/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-chat_price": {
    "name": "ChatGPT pricing",
    "url": "https://chatgpt.com/pricing/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-chat_go": {
    "name": "ChatGPT Go announcement",
    "url": "https://openai.com/index/introducing-chatgpt-go/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-01-16",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-chat_go_help": {
    "name": "ChatGPT Go help",
    "url": "https://help.openai.com/en/articles/11989085-what-is-chatgpt-go",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-chat_plus": {
    "name": "ChatGPT Plus help",
    "url": "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-chat_pro": {
    "name": "About ChatGPT Pro tiers",
    "url": "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-claude_price": {
    "name": "Claude subscriptions pricing",
    "url": "https://claude.com/pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-claude_max": {
    "name": "Claude Max help",
    "url": "https://support.claude.com/en/articles/11049741-what-is-the-max-plan?subjects=product",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-claude_credits": {
    "name": "Monthly API credits for Max and Team",
    "url": "https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-one_plans": {
    "name": "Google One plans and pricing",
    "url": "https://one.google.com/about/plans?hl=en",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-one_ai": {
    "name": "Google AI subscriptions US landing",
    "url": "https://one.google.com/intl/en_us/about/google-ai-plans/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-one_io": {
    "name": "Google AI subscription changes",
    "url": "https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-05-19",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-xsub": {
    "name": "The X Subscription pricing",
    "url": "https://docs.x.ai/x-subscription/pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-11",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-xsub_price": {
    "name": "xAI consumer pricing",
    "url": "https://x.ai/pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-kimi_price": {
    "name": "Kimi domestic membership pricing",
    "url": "https://www.kimi.com/help/membership/membership-pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-kimi_code": {
    "name": "Kimi Code membership",
    "url": "https://www.kimi.com/code/docs/en/kimi-code/membership.html",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mm_intro": {
    "name": "MiniMax M Plan overview",
    "url": "https://platform.minimax.io/docs/m-plan/intro",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mm_faq": {
    "name": "MiniMax M Plan FAQ",
    "url": "https://platform.minimax.io/docs/m-plan/faq",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mm_price": {
    "name": "MiniMax M Plan purchase page",
    "url": "https://www.minimax.io/m-plan",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mm_purchase": {
    "name": "MiniMax purchase page",
    "url": "https://platform.minimax.io/subscribe/coding-plan",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mistral_price": {
    "name": "Mistral Vibe pricing",
    "url": "https://mistral.ai/pricing/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-ds_free": {
    "name": "DeepSeek official App download",
    "url": "https://www.deepseek.com/en/download/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-doubao_terms": {
    "name": "Doubao paid service agreement",
    "url": "https://www.doubao.com/legal/ey01",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-08-15",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-qwen_home": {
    "name": "Qianwen official assistant",
    "url": "https://www.qianwen.com/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-glm_home": {
    "name": "ChatGLM official assistant",
    "url": "https://chatglm.cn/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-kimi_overview": {
    "name": "Kimi membership overview",
    "url": "https://www.kimi.com/help/membership/membership-overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "official-mm_agent_price": {
    "name": "MiniMax Agent pricing",
    "url": "https://agent.minimax.io/pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ds_price": {
    "name": "DeepSeek models and pricing",
    "url": "https://api-docs.deepseek.com/quick_start/pricing/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ds_release1017": {
    "name": "DeepSeek V4.1 Flash 1017 release",
    "url": "https://api-docs.deepseek.com/news/news261017/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-17",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ds_card1017": {
    "name": "DeepSeek V4.1 Flash 1017 model card",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ds_card41": {
    "name": "DeepSeek V4.1 Flash model card",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ds_card4": {
    "name": "DeepSeek V4 Pro model card (preview family)",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_max": {
    "name": "Qwen Cloud Max model and price",
    "url": "https://www.qwencloud.com/models/qwen3.8-max",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_max_ali": {
    "name": "Alibaba Model Studio Max model info",
    "url": "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-11",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_price_ali": {
    "name": "Alibaba Model Studio regional pricing",
    "url": "https://www.alibabacloud.com/help/en/model-studio/model-pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_flash": {
    "name": "Qwen Cloud Flash model and price",
    "url": "https://www.qwencloud.com/models/qwen3.8-flash",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_next_card": {
    "name": "Qwen Flash-Next official model card",
    "url": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_27": {
    "name": "Qwen Cloud 27B model and price",
    "url": "https://www.qwencloud.com/models/qwen3.8-27b",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_27_card": {
    "name": "Qwen 27B official model card",
    "url": "https://huggingface.co/Qwen/Qwen3.8-27B",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_image": {
    "name": "Qwen Image 2.1 release",
    "url": "https://qwen.ai/blog?id=qwen-image-2.1",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-09-20",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_research": {
    "name": "Qwen research archive",
    "url": "https://qwen.ai/research",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_code": {
    "name": "Qwen Code weekly archive",
    "url": "https://qwenlm.github.io/qwen-code-docs/en/blog/updates/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-15",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-z_price": {
    "name": "Z.ai USD API pricing",
    "url": "https://docs.z.ai/guides/overview/pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-z_53": {
    "name": "GLM 5.3 API guide",
    "url": "https://docs.z.ai/guides/llm/glm-5.3",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-z_flash": {
    "name": "GLM 5.3 Flash / FlashX API guide",
    "url": "https://docs.z.ai/guides/vlm/glm-5.3-flash",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-z_52": {
    "name": "GLM 5.2 API guide",
    "url": "https://docs.z.ai/guides/llm/glm-5.2",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-z_releases": {
    "name": "Z.ai release archive",
    "url": "https://docs.z.ai/release-notes/new-released",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-z_53_card": {
    "name": "GLM 5.3 official model card",
    "url": "https://huggingface.co/zai-org/GLM-5.3",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-z_53_license": {
    "name": "GLM 5.3 license",
    "url": "https://huggingface.co/zai-org/GLM-5.3/blob/main/LICENSE",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-z_flash_card": {
    "name": "GLM 5.3 Flash official model card",
    "url": "https://huggingface.co/zai-org/GLM-5.3-Flash",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-z_52_card": {
    "name": "GLM 5.2 official model card",
    "url": "https://huggingface.co/zai-org/GLM-5.2",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_price": {
    "name": "Kimi model pricing explanation",
    "url": "https://platform.kimi.ai/docs/pricing/chat",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_batch": {
    "name": "Kimi BatchJob pricing",
    "url": "https://platform.kimi.ai/docs/pricing/batch",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_models": {
    "name": "Kimi current model list and deprecations",
    "url": "https://platform.kimi.ai/docs/models",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_31": {
    "name": "Kimi K3.1 Pro API guide",
    "url": "https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_31_blog": {
    "name": "Kimi K3.1 Pro release blog",
    "url": "https://www.kimi.ai/blog/kimi-k3-1-pro",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_archive": {
    "name": "Kimi research archive (K3.1 dated October 24)",
    "url": "https://www.kimi.ai/blog/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_3": {
    "name": "Kimi K3 API guide",
    "url": "https://platform.kimi.ai/docs/guide/kimi-k3-quickstart",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_3_card": {
    "name": "Kimi K3 official model card",
    "url": "https://huggingface.co/moonshotai/Kimi-K3",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_3_license": {
    "name": "Kimi K3 license",
    "url": "https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_27": {
    "name": "Kimi K2.7 Code API guide",
    "url": "https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-k_27_card": {
    "name": "Kimi K2.7 Code official model card",
    "url": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mm_price": {
    "name": "MiniMax pay-as-you-go pricing",
    "url": "https://platform.minimax.io/docs/pricing/overview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mm_guide": {
    "name": "MiniMax model invocation",
    "url": "https://platform.minimax.io/docs/guides/text-generation",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mm_31": {
    "name": "MiniMax M3.1 Flash release",
    "url": "https://www.minimax.io/blog/minimax-m31f",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-19",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mm_releases": {
    "name": "MiniMax release archive",
    "url": "https://platform.minimax.io/docs/release-notes/models",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mm_card": {
    "name": "MiniMax M3 official model card",
    "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mm_license": {
    "name": "MiniMax M3 community license",
    "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3/blob/main/LICENSE",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mi_price": {
    "name": "MiMo official API pricing",
    "url": "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-21",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mi_deprecate": {
    "name": "MiMo official retirement schedule",
    "url": "https://mimo.mi.com/docs/zh-CN/updates/deprecate",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mi_models": {
    "name": "MiMo official model list",
    "url": "https://mimo.mi.com/docs/en-US/quick-start/model",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-21",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mi_api": {
    "name": "MiMo Responses API limits",
    "url": "https://mimo.mi.com/docs/en-US/api/chat/responses",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mi_release": {
    "name": "MiMo V2.6 release",
    "url": "https://mimo.mi.com/docs/en-US/news/latest/v2-6",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-09-22",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mi_pro_card": {
    "name": "MiMo V2.6 Pro RL official checkpoint",
    "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mi_flash_card": {
    "name": "MiMo V2.6 Flash RL official checkpoint",
    "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-mi_account": {
    "name": "MiMo official Hugging Face organization",
    "url": "https://huggingface.co/XiaomiMiMo",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-hy_models": {
    "name": "Tencent TokenHub model list",
    "url": "https://cloud.tencent.com/document/product/1823/130051",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-23",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-hy_card": {
    "name": "Tencent Hy3 official model card",
    "url": "https://huggingface.co/tencent/Hy3",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-step_card": {
    "name": "Step 5 Preview official model card",
    "url": "https://huggingface.co/stepfun-ai/Step-5-Preview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-step_guide": {
    "name": "Step 5 Preview API guide",
    "url": "https://platform.stepfun.ai/docs/en/guides/models/step-5-preview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-step_release": {
    "name": "Step 5 Preview company model page",
    "url": "https://www.stepfun.com/step-5-preview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-step_arch": {
    "name": "Inside Step 5 Preview",
    "url": "https://platform.stepfun.ai/blog/inside-step-5-preview",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-15",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-nv_ultra": {
    "name": "Nemotron 3 Ultra official model card",
    "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-06-04",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-nv_light": {
    "name": "Nemotron 3.5 Lightning official model card",
    "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-08-11",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-nv_super": {
    "name": "Nemotron 3.5 Super VL official model card",
    "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-15",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-nv_bolt": {
    "name": "Nemotron 3.5 Bolt 74B official model card",
    "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-15",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-nv_bolt4": {
    "name": "Nemotron 3.5 Bolt E4B official model card",
    "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-23",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ms_3": {
    "name": "Mistral Large 3 model API card",
    "url": "https://docs.mistral.ai/models/mistral-large-3-25-12",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2025-12-02",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ms_3_card": {
    "name": "Mistral Large 3 official weights card",
    "url": "https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ms_4": {
    "name": "Mistral Large 4 model API card",
    "url": "https://docs.mistral.ai/models/mistral-large-4",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-06",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ms_4_blog": {
    "name": "Mistral Large 4 public preview release",
    "url": "https://mistral.ai/news/mistral-large-4/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-06",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ms_price": {
    "name": "Mistral official API pricing",
    "url": "https://docs.mistral.ai/inference/pricing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ms_archive": {
    "name": "Mistral news archive",
    "url": "https://mistral.ai/news/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ms_vox": {
    "name": "Voxtral 3 release",
    "url": "https://mistral.ai/news/voxtral-3/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-20",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ms_times": {
    "name": "Timestral release",
    "url": "https://mistral.ai/news/timestral/",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-15",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-motif_card": {
    "name": "Motif 3 official model card",
    "url": "https://huggingface.co/Motif-Technologies/Motif-3",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-motif_org": {
    "name": "Motif official organization",
    "url": "https://huggingface.co/Motif-Technologies",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ling_org": {
    "name": "Ant Group inclusionAI official organization",
    "url": "https://huggingface.co/inclusionAI",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ling_31": {
    "name": "Ling 3.1 Flash official model card",
    "url": "https://huggingface.co/inclusionAI/Ling-3.1-flash",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ling_30": {
    "name": "Ling 3.0 Flash official model card",
    "url": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-longcat_card": {
    "name": "Meituan LongCat 2.0 official model card",
    "url": "https://huggingface.co/meituan-longcat/LongCat-2.0",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-longcat_org": {
    "name": "Meituan LongCat official organization",
    "url": "https://huggingface.co/meituan-longcat",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-step_price": {
    "name": "StepFun international API pricing",
    "url": "https://platform.stepfun.ai/docs/en/guides/pricing/details",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-hy_usd": {
    "name": "Tencent international TokenHub USD pricing",
    "url": "https://intl.cloud.tencent.com/document/product/1300/78937",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-03",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-hy_cny": {
    "name": "Tencent mainland TokenHub pricing",
    "url": "https://cloud.tencent.com/document/product/1823/130055",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-09-10",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_max_weights": {
    "name": "Qwen3.8 2.4T A95B official weights",
    "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_27_ali": {
    "name": "Alibaba 27B exact API limits and regional prices",
    "url": "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-27b",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-11",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-q_flash_ali": {
    "name": "Alibaba Flash exact API limits and regional prices",
    "url": "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-flash",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-11",
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "vendor-ms_batch": {
    "name": "Mistral Batch API",
    "url": "https://docs.mistral.ai/studio/batch-processing",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "官方文档 / 模型卡；读取日期不表示该日发布。"
  },
  "aacai2": {
    "name": "AA Coding Agent Index v2.0",
    "url": "https://artificialanalysis.ai/agents/coding-agents",
    "kind": "独立评测",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "24 个框架 × 模型配置（含 3 个路由组合），不等于 24 个独立模型；成绩未给统一发布日期。"
  },
  "arena-current": {
    "name": "Arena · Text Overall",
    "url": "https://arena.ai/leaderboard/chat/text",
    "kind": "真人偏好评测",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": "2026-10-22",
    "link": "page",
    "note": "公开榜快照 10/22，10/24 读取；保留具体档位、票数及置信区间。"
  },
  "reflection-official": {
    "name": "Reflection · Beam Model Card",
    "url": "https://reflection.ai/beam-model-card",
    "kind": "厂商官方",
    "asOf": "2026-10-24",
    "checkedAt": "2026-10-24",
    "sourceDate": null,
    "link": "page",
    "note": "Architecture 表；501.3B 总参数、23.4B 激活参数。"
  }
};

const METRICS = [
  {
    "k": "aaii",
    "g": "cap",
    "label": "AAII 智能指数",
    "short": "AAII",
    "better": "high",
    "dec": 0,
    "basis": "Artificial Analysis Intelligence Index v4.3.2",
    "src": "aa",
    "warn": "仅比较同一版本。旧 v4.3 / v4.1.1 分数不参与本期榜图和跨版本最优值计算。",
    "hint": "综合推理与任务能力。10 项评测等权合成，含真实工作、终端任务、科学编码、长文档等；只和同版本分数比较。"
  },
  {
    "k": "cai2",
    "g": "cap",
    "label": "编码 Agent 指数 v2.0",
    "short": "CAI 2.0",
    "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
    "src": "aacai2",
    "hint": "衡量实际编码 Agent 完成仓库开发、终端任务和仓库问答的组合能力；结果属于框架 × 模型 × 推理档。",
    "better": "high",
    "dec": 1,
    "unit": "",
    "warn": "与 v1.5 的组成不同，不计算跨版涨跌。"
  },
  {
    "k": "frontiercode",
    "g": "cap",
    "label": "FrontierCode 1.1 · Stirrup",
    "short": "FrontierCode",
    "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
    "src": "aa-frontier",
    "hint": "100 道真实开源仓库改动任务，不仅验证测试是否通过，还检查改动范围及维护者是否愿意合并。得分不等于全通过率。",
    "better": "high",
    "dec": 1,
    "unit": "%"
  },
  {
    "k": "frontierAgent",
    "g": "cap",
    "label": "FrontierCode 1.1 · 编码 Agent",
    "short": "FrontierCode Agent",
    "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
    "src": "aacai2",
    "hint": "同一仓库开发评测在实际编码 Agent 框架中的结果；框架不同会影响成绩，不能与统一 Stirrup 得分混为一项。",
    "better": "high",
    "dec": 1,
    "unit": "%"
  },
  {
    "k": "sweatlas2",
    "g": "cap",
    "label": "SWE-Atlas-QnA-AA · 编码 Agent",
    "short": "SWE-Atlas Agent",
    "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
    "src": "aacai2",
    "hint": "仓库阅读和问答任务：检查 Agent 能否定位代码并正确解释实现；不要求修改代码。",
    "better": "high",
    "dec": 1,
    "unit": "%"
  },
  {
    "k": "cai",
    "g": "history",
    "label": "编码 Agent 指数 · 历史",
    "short": "CAI",
    "better": "high",
    "dec": 0,
    "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
    "src": "history",
    "warn": "v1.5 历史组合分，不能与当前 v2.0 比较；旧值保留原日期。",
    "hint": "衡量编码 Agent 完成真实任务的能力，由 DeepSWE v1.1、Terminal-Bench 4.0 和 SWE-Atlas-QnA 等权组成。",
    "history": true
  },
  {
    "k": "deepswe",
    "g": "history",
    "label": "DeepSWE v1.1（Agent） · 历史",
    "short": "DeepSWE",
    "better": "high",
    "dec": 0,
    "unit": "%",
    "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 DeepSWE v1.1 分项",
    "src": "history",
    "warn": "评的是模型 × Agent 框架，不可与纯模型分数混排",
    "hint": "113 道真实代码仓库改动任务，要求 Agent 跨文件理解、修改并通过隔离环境中的自动验证；体现长链软件工程能力。",
    "history": true
  },
  {
    "k": "sweatlas",
    "g": "history",
    "label": "SWE-Atlas-QnA（Agent） · 历史",
    "short": "SWE-Atlas",
    "better": "high",
    "dec": 0,
    "unit": "%",
    "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 SWE-Atlas-QnA 分项",
    "src": "history",
    "warn": "评的是模型 × Agent 框架，不可与纯模型分数混排",
    "hint": "124 道代码仓库阅读与问答任务，考察 Agent 能否定位代码、理解实现并给出准确答案，而非修改代码。",
    "history": true
  },
  {
    "k": "tb40",
    "g": "cap",
    "label": "Terminal-Bench 4.0",
    "short": "TB 4.0",
    "better": "high",
    "dec": 1,
    "unit": "%",
    "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
    "src": "aa-tb40",
    "warn": "与 TB 2.1 题目与标定都不同，两者分数不可互比",
    "hint": "在终端环境完成 66 道软件、机器学习、科学、运维及安全等多步任务；考察工具使用和持续执行。"
  },
  {
    "k": "tb21",
    "g": "history",
    "label": "Terminal-Bench 2.1 · 历史",
    "short": "TB 2.1",
    "better": "high",
    "dec": 0,
    "unit": "%",
    "basis": "Terminal-Bench 2.1 · AA 独立复跑",
    "src": "history",
    "warn": "头部已饱和（多家 88–91%），区分度很低，判断长链能力请看 TB 4.0",
    "hint": "较早版本的终端任务基准。头部分数接近满分，已难区分前沿模型；不能与 4.0 数值横比。",
    "history": true
  },
  {
    "k": "swe",
    "g": "history",
    "label": "SWE-bench Verified · 历史",
    "short": "SWE",
    "better": "high",
    "dec": 1,
    "unit": "%",
    "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
    "src": "vals",
    "warn": "该基准已于 2026-09-01 归档停更。9 月后发布的模型不会有新分数",
    "hint": "在 500 个真实 GitHub 问题上修复代码并运行验证；此处是 vals.ai 用 Mini-SWE-agent 复测的旧快照。",
    "history": true
  },
  {
    "k": "gdpval",
    "g": "history",
    "label": "GDPval-AA v2 真实工作 · 历史",
    "short": "GDPval",
    "better": "high",
    "dec": 0,
    "unit": "%",
    "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
    "src": "history",
    "warn": "旧版 GDPval 数据未按 v2.1 复核，不与新版分数混排",
    "hint": "模拟专业岗位中的真实工作交付物，衡量按要求完成知识工作的能力；本页该单项仍为 v2 旧快照。",
    "history": true
  },
  {
    "k": "gpqa",
    "g": "history",
    "label": "GPQA Diamond 科学 · 历史",
    "short": "GPQA",
    "better": "high",
    "dec": 0,
    "unit": "%",
    "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
    "src": "history",
    "hint": "研究生级、需要跨学科知识的高难度科学选择题；衡量专业知识与推理，不能代表日常问答体验。",
    "history": true
  },
  {
    "k": "scicode",
    "g": "cap",
    "label": "SciCode 科学编码",
    "short": "SciCode",
    "better": "high",
    "dec": 1,
    "unit": "%",
    "basis": "SciCode · AA 独立评测",
    "src": "aa-scicode",
    "hint": "把科学研究问题转化成可执行代码；衡量科学计算、算法实现与代码正确性。",
    "underReview": true,
    "warn": "AA 当前标记为审查中，数据集可能修正；本页不授予该项最优值。"
  },
  {
    "k": "lcr",
    "g": "cap",
    "label": "AA-LCR 长上下文推理",
    "short": "AA-LCR",
    "better": "high",
    "dec": 1,
    "unit": "%",
    "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
    "src": "aa-lcr",
    "hint": "在很长的输入材料中检索并综合相关信息，考察真正利用长上下文的能力；窗口开得大不等于内容用得上。"
  },
  {
    "k": "nonhall",
    "g": "cap",
    "label": "非幻觉率",
    "short": "非幻觉",
    "better": "high",
    "dec": 1,
    "unit": "%",
    "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
    "src": "aa",
    "hint": "不知道就说不知道的比例。分数低不代表知识差，代表它更倾向于硬答。"
  },
  {
    "k": "cpt",
    "g": "cost",
    "label": "单任务成本",
    "short": "单任务",
    "better": "low",
    "dec": 2,
    "unit": " $",
    "money": true,
    "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
    "src": "aa",
    "hint": "比单价更接近真实账单：它把推理 token 消耗量、缓存命中都算进去了。"
  },
  {
    "k": "priceIn",
    "g": "cost",
    "label": "输入价",
    "short": "输入",
    "better": "low",
    "dec": 2,
    "unit": " $/M",
    "money": true,
    "perM": true,
    "basis": "官方 API 标价 · 美元 · 每百万 token",
    "src": "vendor",
    "hint": "不含批量、渠道折扣与分时优惠，这些写在「计价方式」列。"
  },
  {
    "k": "priceOut",
    "g": "cost",
    "label": "输出价",
    "short": "输出",
    "better": "low",
    "dec": 2,
    "unit": " $/M",
    "money": true,
    "perM": true,
    "basis": "官方 API 标价 · 美元 · 每百万 token",
    "src": "vendor"
  },
  {
    "k": "priceCache",
    "g": "cost",
    "label": "缓存命中价",
    "short": "缓存",
    "better": "low",
    "dec": 2,
    "unit": " $/M",
    "money": true,
    "perM": true,
    "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
    "src": "vendor",
    "hint": "高频 Agent 场景里缓存命中往往占账单大头，这一列比输入价更值得看。"
  },
  {
    "k": "speed",
    "g": "cost",
    "label": "输出速度",
    "short": "速度",
    "better": "high",
    "dec": 0,
    "unit": " t/s",
    "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
    "src": "aa",
    "hint": "吞吐高不等于总耗时短 —— 完成同一任务所需的轮数与 token 量差异更大，那部分看「单任务成本」。"
  },
  {
    "k": "ctx",
    "g": "spec",
    "label": "上下文窗口",
    "short": "上下文",
    "better": "high",
    "fmt": "tok",
    "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
    "src": "aa",
    "warn": "上下文窗口不是参数规模，本页两者分列"
  },
  {
    "k": "maxOut",
    "g": "spec",
    "label": "最大输出长度",
    "short": "最大输出",
    "better": "high",
    "fmt": "tok",
    "basis": "官方公布的单次最大输出 token",
    "src": "vendor"
  },
  {
    "k": "paramsTotal",
    "g": "spec",
    "label": "总参数量",
    "short": "总参数",
    "better": null,
    "fmt": "par",
    "basis": "厂商公布的模型总参数规模",
    "src": "vendor",
    "hint": "参数量与能力不是单调关系，因此不参与「最优值」判断。"
  },
  {
    "k": "paramsAct",
    "g": "spec",
    "label": "激活参数量",
    "short": "激活参数",
    "better": null,
    "fmt": "par",
    "basis": "MoE 架构单次前向的激活参数",
    "src": "vendor"
  },
  {
    "k": "arena",
    "g": "cap",
    "label": "LMArena Elo",
    "short": "Arena",
    "better": "high",
    "dec": 0,
    "basis": "arena.ai 文本综合榜 Elo",
    "src": "arena",
    "warn": "头部十余名的置信区间互相重叠，名次差不构成能力差；各行备注了 ± 区间与对应档位",
    "hint": "真实用户双盲对比后的偏好分，覆盖写作、编程与开放式问答；± 区间重叠时不能断言谁更强。"
  },
  {
    "k": "gdpval21",
    "g": "cap",
    "label": "GDPval-AA v2.1 · 真实工作",
    "short": "GDPval 2.1",
    "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
    "src": "aa-gdp21",
    "hint": "在 44 类职业的真实工作任务中生成文档、表格、演示等交付物，以匿名成对比较计算 Elo。与旧版百分比不能互换。",
    "better": "high",
    "dec": 0,
    "unit": " Elo",
    "warn": "Elo 的 95% 置信区间可能重叠；细小分差不能证明模型明显更好。"
  },
  {
    "k": "hle",
    "g": "cap",
    "label": "Humanity’s Last Exam",
    "short": "HLE",
    "basis": "AA 独立评测 · HLE",
    "src": "aa-hle",
    "hint": "2,500 道由专家审定的数学、科学、人文学科难题，衡量高难度知识与推理，不能代表所有日常体验。",
    "better": "high",
    "dec": 1,
    "unit": "%"
  }
];

const METRIC_GROUPS = [
  {
    "g": "cap",
    "title": "能力与评测",
    "note": "不同评测的题目与 harness 不同，只有同一行内可比。"
  },
  {
    "g": "cost",
    "title": "价格与速度",
    "note": "价格统一为美元 / 每百万 token；订阅价不在此表，见「价格与使用」。"
  },
  {
    "g": "spec",
    "title": "上下文与输入输出",
    "note": "上下文、最大输出、参数量三者分列，互不换算。"
  },
  {
    "g": "history",
    "title": "历史评测与旧快照",
    "note": "旧版数据只用于追溯，与当前版本分开。"
  },
  {
    "g": "use",
    "title": "使用方式与开放状态"
  },
  {
    "g": "fit",
    "title": "适用场景 · 已知限制 · 来源"
  }
];

const MODELS = [
  {
    "status": "current",
    "fresh": false,
    "tag": "旗舰",
    "released": "2026-09-22",
    "variant": "Max, Default Fallback",
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": {
      "v": 66.9,
      "rawValue": 66.8981481481482,
      "kind": "ind",
      "note": "Claude Opus 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/claude-opus-5-5",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 84.7,
      "rawValue": 84.6666666666667,
      "kind": "ind",
      "note": "Claude Opus 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/claude-opus-5-5",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 41.4,
      "rawValue": 41.391218549580664,
      "kind": "ind",
      "note": "Claude Opus 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-opus-5-5",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1509,
      "rawValue": 1509,
      "kind": "ind",
      "note": "Claude Opus 5.5 (High) · ±7 · 10322 票 · 源榜 10/22 · 档位与本行 AA 配置不同",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1502,
      "ciHigh": 1516,
      "variantMismatch": true,
      "config": "High"
    },
    "deepswe": {
      "v": 68,
      "kind": "ind",
      "note": "Claude Code",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 DeepSWE v1.1 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "sweatlas": {
      "v": 66,
      "kind": "ind",
      "note": "Claude Code",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 SWE-Atlas-QnA 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o55",
      "url": "https://platform.claude.com/docs/en/models/opus-5-5/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "priceIn": {
      "v": 4,
      "rawValue": 4,
      "kind": "vendor",
      "note": "USD/1M; direct Claude API Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o55",
      "url": "https://platform.claude.com/docs/en/models/opus-5-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 20,
      "rawValue": 20,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o55",
      "url": "https://platform.claude.com/docs/en/models/opus-5-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.2,
      "rawValue": 0.2,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o55",
      "url": "https://platform.claude.com/docs/en/models/opus-5-5/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": {
      "v": 66,
      "kind": "ind",
      "note": "Claude Code + Opus 5.5 max",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 59.6,
      "rawValue": 59.5959595959596,
      "kind": "ind",
      "note": "Claude Opus 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/claude-opus-5-5",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 5.98,
      "rawValue": 5.982012019521066,
      "kind": "ind",
      "note": "Claude Opus 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-opus-5-5",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 96.0,
      "rawValue": 96.1390422750912,
      "kind": "ind",
      "note": "Claude Opus 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-opus-5-5",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o55",
      "url": "https://platform.claude.com/docs/en/models/opus-5-5/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准 API 价 · USD / 百万 token",
    "priceAlt": "缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。",
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Claude API and listed cloud platforms; partner billing/access differs.",
    "scenes": [
      "coding",
      "agent",
      "daily",
      "longdoc"
    ],
    "strength": "待比较候选。依据：AAII 58.0；TB 4.0 59.6%；AA-LCR 84.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Claude Opus 5.5 (Max, Default Fallback)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "aacai",
      "arena",
      "anthropic55",
      "official-an_o55"
    ],
    "id": "claude-opus55",
    "name": "Claude Opus 5.5",
    "org": "anthropic",
    "brand": "claude",
    "aaii": {
      "v": 58.0,
      "rawValue": 57.6223698102963,
      "kind": "ind",
      "note": "Claude Opus 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-opus-5-5",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "aaSlug": "claude-opus-5-5",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 61.4,
      "rawValue": 61.353104726598694,
      "kind": "ind",
      "note": "Claude Opus 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/claude-opus-5-5",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "gdpval21": {
      "v": 1866.0,
      "rawValue": 1866.27,
      "kind": "ind",
      "note": "Stirrup · Claude Opus 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1840.43,
      "ciHigh": 1892.12
    },
    "frontiercode": {
      "v": 52.2,
      "rawValue": 52.17309999999999,
      "kind": "ind",
      "note": "Stirrup · Claude Opus 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": {
      "v": 61.7,
      "rawValue": 61.6528649505811,
      "kind": "ind",
      "note": "Claude Code + Opus 5.5 (max) · 2.1.280 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 56.0,
      "rawValue": 55.967066666666696,
      "kind": "ind",
      "note": "Claude Code + Opus 5.5 (max) · 2.1.280 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 65.9,
      "rawValue": 65.8602150537634,
      "kind": "ind",
      "note": "Claude Code + Opus 5.5 (max) · 2.1.280 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    }
  },
  {
    "status": "current",
    "fresh": false,
    "tag": "旗舰",
    "released": "2026-09-28",
    "variant": "Max, Default Fallback",
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": {
      "v": 61.0,
      "rawValue": 60.9953703703704,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 82.7,
      "rawValue": 82.6666666666667,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 53.0,
      "rawValue": 52.985884907709014,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1478,
      "rawValue": 1478,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (xHigh) · ±7 · 8977 票 · 源榜 10/22 · 档位与本行 AA 配置不同",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1471,
      "ciHigh": 1485,
      "variantMismatch": true,
      "config": "xHigh"
    },
    "deepswe": {
      "v": 72,
      "kind": "ind",
      "note": "Claude Code",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 DeepSWE v1.1 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "sweatlas": {
      "v": 67,
      "kind": "ind",
      "note": "Claude Code",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 SWE-Atlas-QnA 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD/1M; direct Claude API Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.1,
      "rawValue": 0.1,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": {
      "v": 68,
      "kind": "ind",
      "note": "Claude Code + Sonnet 5.5 max",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 63.6,
      "rawValue": 63.636363636363605,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 5.46,
      "rawValue": 5.4608525948098325,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 132.0,
      "rawValue": 132.020524509377,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准 API 价 · USD / 百万 token",
    "priceAlt": "缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。",
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Claude API and listed cloud platforms; partner billing/access differs.",
    "scenes": [
      "coding",
      "agent",
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 56.0；TB 4.0 63.6%；AA-LCR 82.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Claude Sonnet 5.5 (Max, Default Fallback)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "aacai",
      "anthropic55",
      "official-an_s55"
    ],
    "id": "claude-sonnet55",
    "name": "Claude Sonnet 5.5",
    "org": "anthropic",
    "brand": "claude",
    "aaii": {
      "v": 56.0,
      "rawValue": 56.0001286580794,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "aaSlug": "claude-sonnet-5-5",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 55.0,
      "rawValue": 54.9582947173309,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "gdpval21": {
      "v": 1838.0,
      "rawValue": 1837.82,
      "kind": "ind",
      "note": "Stirrup · Claude Sonnet 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1814.35,
      "ciHigh": 1861.29
    },
    "frontiercode": {
      "v": 45.8,
      "rawValue": 45.8291333333333,
      "kind": "ind",
      "note": "Stirrup · Claude Sonnet 5.5 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": {
      "v": 59.3,
      "rawValue": 59.3374426631911,
      "kind": "ind",
      "note": "Claude Code + Sonnet 5.5 (max) · 2.1.280 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 47.6,
      "rawValue": 47.6034,
      "kind": "ind",
      "note": "Claude Code + Sonnet 5.5 (max) · 2.1.280 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 64.2,
      "rawValue": 64.24731182795699,
      "kind": "ind",
      "note": "Claude Code + Sonnet 5.5 (max) · 2.1.280 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    }
  },
  {
    "status": "current",
    "fresh": false,
    "tag": "受限",
    "released": "2026-09-30",
    "variant": "High",
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": {
      "v": 61.8,
      "rawValue": 61.8055555555556,
      "kind": "ind",
      "note": "Gemini 4 Argon (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/gemini-4-argon",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 79.7,
      "rawValue": 79.6666666666667,
      "kind": "ind",
      "note": "Gemini 4 Argon (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/gemini-4-argon",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 84.9,
      "rawValue": 84.93013972055888,
      "kind": "ind",
      "note": "Gemini 4 Argon (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-4-argon",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1517,
      "rawValue": 1517,
      "kind": "ind",
      "note": "Gemini 4 Argon (High) · ±7 · 10083 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1510,
      "ciHigh": 1524,
      "variantMismatch": false,
      "config": "High"
    },
    "deepswe": null,
    "sweatlas": null,
    "maxOut": {
      "v": 65536,
      "rawValue": 65536,
      "kind": "vendor",
      "note": "Default synchronous; optional long decode differs.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_argon",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-14"
    },
    "paramsTotal": null,
    "paramsAct": null,
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD/1M; Gemini Developer API Paid Standard; not Vertex AI",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD/1M, includes thinking tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.1,
      "rawValue": 0.1,
      "kind": "vendor",
      "note": "USD/1M cached tokens; explicit cache storage billed separately where available",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 57.1,
      "rawValue": 57.07070707070711,
      "kind": "ind",
      "note": "Gemini 4 Argon (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/gemini-4-argon",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 1.99,
      "rawValue": 1.990322379299008,
      "kind": "ind",
      "note": "Gemini 4 Argon (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-4-argon",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 76.0,
      "rawValue": 76.4182626398086,
      "kind": "ind",
      "note": "Gemini 4 Argon (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-4-argon",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "Unified window shared by input, thinking and output; not 1048576 input plus 1048576 output.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_argon",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-14"
    },
    "priceMode": "官方已开放 · Paid Standard · USD / 百万 token",
    "priceAlt": "付费文本标准价；缓存存储、Batch/Flex、音频和长请求单独计价。 10/13 已普遍开放；Batch/Flex $1/$5、缓存 $0.05 的优惠期至 11/30。",
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "10/13 普遍开放：AI Studio / Gemini API；付费 API，无免费 API 档。",
    "scenes": [
      "coding",
      "agent",
      "daily",
      "longdoc"
    ],
    "strength": "待比较候选。依据：AAII 53.0；TB 4.0 57.1%；AA-LCR 79.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Gemini 4 Argon (High)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "arena",
      "google4",
      "official-gg_price",
      "official-gg_argon",
      "official-gg_log"
    ],
    "id": "gemini4-argon",
    "name": "Gemini 4 Argon",
    "org": "google",
    "brand": "gemini",
    "aaii": {
      "v": 53.0,
      "rawValue": 52.5605655745982,
      "kind": "ind",
      "note": "Gemini 4 Argon (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-4-argon",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "aaSlug": "gemini-4-argon",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 57.1,
      "rawValue": 57.089898053753494,
      "kind": "ind",
      "note": "Gemini 4 Argon (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/gemini-4-argon",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "gdpval21": {
      "v": 1624.0,
      "rawValue": 1624.1,
      "kind": "ind",
      "note": "Stirrup · Gemini 4 Argon (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1603.35,
      "ciHigh": 1644.85
    },
    "frontiercode": {
      "v": 43.5,
      "rawValue": 43.453199999999995,
      "kind": "ind",
      "note": "Stirrup · Gemini 4 Argon (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像",
      "视频",
      "音频",
      "PDF"
    ],
    "outputs": [
      "文本"
    ],
    "releaseNote": "9/30 公布模型；10/13 API 普遍开放，两种事件日期分开。",
    "cai2": {
      "v": 53.2,
      "rawValue": 53.2462665363311,
      "kind": "ind",
      "note": "Antigravity CLI + Gemini 4 Argon · 1.2.10",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 48.6,
      "rawValue": 48.5706666666667,
      "kind": "ind",
      "note": "Antigravity CLI + Gemini 4 Argon · 1.2.10",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 55.1,
      "rawValue": 55.1075268817204,
      "kind": "ind",
      "note": "Antigravity CLI + Gemini 4 Argon · 1.2.10",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    }
  },
  {
    "status": "current",
    "fresh": false,
    "tag": "新近",
    "released": "2026-09-29",
    "variant": "Max",
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": {
      "v": 54.2,
      "rawValue": 54.1666666666667,
      "kind": "ind",
      "note": "GPT-6.1 Sol (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 83.0,
      "rawValue": 83.0,
      "kind": "ind",
      "note": "GPT-6.1 Sol (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 45.7,
      "rawValue": 45.73438874230431,
      "kind": "ind",
      "note": "GPT-6.1 Sol (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1480,
      "rawValue": 1480,
      "kind": "ind",
      "note": "GPT-6.1 Sol (Max) · ±7 · 8305 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1473,
      "ciHigh": 1487,
      "variantMismatch": false,
      "config": "Max"
    },
    "deepswe": null,
    "sweatlas": null,
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD per 1,000,000 text input tokens; Standard, prompt ≤272,000 except GPT-5.3-Codex",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD per 1,000,000 output tokens; reasoning may consume output tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.1,
      "rawValue": 0.1,
      "kind": "vendor",
      "note": "USD per 1,000,000 cached input tokens; cache read, not write",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 56.1,
      "rawValue": 56.0606060606061,
      "kind": "ind",
      "note": "GPT-6.1 Sol (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.72,
      "rawValue": 0.7241670655535033,
      "kind": "ind",
      "note": "GPT-6.1 Sol (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 55.0,
      "rawValue": 55.2424542283701,
      "kind": "ind",
      "note": "GPT-6.1 Sol (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1050000,
      "rawValue": 1050000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Standard · 输入 ≤272K · USD / 百万 token",
    "priceAlt": "超过 272K 输入，整单输入/缓存价 ×2、输出价 ×1.5；Fast ×2，Ultrafast ×6；Batch/Flex 半价（以该模型支持范围为准）。",
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "OpenAI API; account, region and usage-tier eligibility apply; no runtime call made.",
    "scenes": [
      "coding",
      "agent",
      "daily",
      "longdoc"
    ],
    "strength": "待比较候选。依据：AAII 52.0；TB 4.0 56.1%；AA-LCR 83.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；GPT-6.1 Sol (Max)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "openai61",
      "official-oa61"
    ],
    "id": "gpt61-sol",
    "name": "GPT-6.1 Sol",
    "org": "openai",
    "brand": "openai",
    "aaii": {
      "v": 52.0,
      "rawValue": 51.8332597011541,
      "kind": "ind",
      "note": "GPT-6.1 Sol (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "aaSlug": "gpt-6-1-sol",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 52.9,
      "rawValue": 52.919369786839695,
      "kind": "ind",
      "note": "GPT-6.1 Sol (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "gdpval21": {
      "v": 1596.0,
      "rawValue": 1596.2,
      "kind": "ind",
      "note": "Stirrup · GPT-6.1 Sol (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1573.63,
      "ciHigh": 1618.78
    },
    "frontiercode": {
      "v": 49.1,
      "rawValue": 49.1209333333333,
      "kind": "ind",
      "note": "Stirrup · GPT-6.1 Sol (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": {
      "v": 54.1,
      "rawValue": 54.1279798631476,
      "kind": "ind",
      "note": "Codex + GPT-6.1 Sol (max) · 0.154.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 49.4,
      "rawValue": 49.4074,
      "kind": "ind",
      "note": "Codex + GPT-6.1 Sol (max) · 0.154.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 59.9,
      "rawValue": 59.9462365591398,
      "kind": "ind",
      "note": "Codex + GPT-6.1 Sol (max) · 0.154.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    }
  },
  {
    "status": "current",
    "fresh": false,
    "tag": "新近",
    "released": "2026-09-22",
    "variant": "max 档",
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "arena": {
      "v": 1459,
      "rawValue": 1459,
      "kind": "ind",
      "note": "GPT-6 Sol (Max) · ±6 · 14707 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1453,
      "ciHigh": 1465,
      "variantMismatch": false,
      "config": "Max"
    },
    "deepswe": null,
    "sweatlas": null,
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6s",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-sol",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD per 1,000,000 text input tokens; Standard, prompt ≤272,000 except GPT-5.3-Codex",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6s",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-sol",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD per 1,000,000 output tokens; reasoning may consume output tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6s",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-sol",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.2,
      "rawValue": 0.2,
      "kind": "vendor",
      "note": "USD per 1,000,000 cached input tokens; cache read, not write",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6s",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-sol",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": null,
    "cpt": {
      "v": 1.05,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 74,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "ctx": {
      "v": 1050000,
      "rawValue": 1050000,
      "kind": "vendor",
      "note": "；旧 AA 可用窗口 872K 未重测，与官方最大窗口口径分开。",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6s",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-sol",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Standard · 输入 ≤272K · USD / 百万 token",
    "priceAlt": "超过 272K 输入，整单输入/缓存价 ×2、输出价 ×1.5；Fast ×2，Ultrafast ×6；Batch/Flex 半价（以该模型支持范围为准）。",
    "license": "闭源",
    "openWeights": false,
    "access": "OpenAI API; account, region and usage-tier eligibility apply; no runtime call made.",
    "scenes": [
      "coding",
      "agent",
      "daily"
    ],
    "strength": "历史资料，未按 10/24 逐项复核：AAII 48，适合与同价的新款 6.1 Sol 比较。",
    "limits": "历史资料，未按 10/24 逐项复核：AA 上下文 872K 与官方文档 1.05M 冲突，保留两者并标待核实。",
    "tech": "",
    "srcs": [
      "aa",
      "openai61",
      "official-oa6s"
    ],
    "id": "gpt6-sol",
    "name": "GPT-6 Sol",
    "org": "openai",
    "brand": "openai",
    "aaii": {
      "v": 48,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "status": "current",
    "fresh": false,
    "tag": "新近",
    "released": "2026-09-22",
    "variant": "Max",
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": {
      "v": 54.6,
      "rawValue": 54.6296296296296,
      "kind": "ind",
      "note": "GPT-6 Luna (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/gpt-6-luna",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 83.3,
      "rawValue": 83.3333333333333,
      "kind": "ind",
      "note": "GPT-6 Luna (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/gpt-6-luna",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 23.3,
      "rawValue": 23.273050696709163,
      "kind": "ind",
      "note": "GPT-6 Luna (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-luna",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1442,
      "rawValue": 1442,
      "kind": "ind",
      "note": "GPT-6 Luna (Max) · ±4 · 72504 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1438,
      "ciHigh": 1446,
      "variantMismatch": false,
      "config": "Max"
    },
    "deepswe": null,
    "sweatlas": null,
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6l",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-luna",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "priceIn": {
      "v": 0.1,
      "rawValue": 0.1,
      "kind": "vendor",
      "note": "USD per 1,000,000 text input tokens; Standard, prompt ≤272,000 except GPT-5.3-Codex",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6l",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-luna",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.5,
      "rawValue": 0.5,
      "kind": "vendor",
      "note": "USD per 1,000,000 output tokens; reasoning may consume output tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6l",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-luna",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.01,
      "rawValue": 0.01,
      "kind": "vendor",
      "note": "USD per 1,000,000 cached input tokens; cache read, not write",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6l",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-luna",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 12.6,
      "rawValue": 12.6262626262626,
      "kind": "ind",
      "note": "GPT-6 Luna (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/gpt-6-luna",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.07,
      "rawValue": 0.06782295669812205,
      "kind": "ind",
      "note": "GPT-6 Luna (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-luna",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 136.0,
      "rawValue": 136.459993965372,
      "kind": "ind",
      "note": "GPT-6 Luna (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-luna",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1050000,
      "rawValue": 1050000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6l",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-luna",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Standard · 输入 ≤272K · USD / 百万 token",
    "priceAlt": "超过 272K 输入，整单输入/缓存价 ×2、输出价 ×1.5；Fast ×2，Ultrafast ×6；Batch/Flex 半价（以该模型支持范围为准）。",
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "OpenAI API; account, region and usage-tier eligibility apply; no runtime call made.",
    "scenes": [
      "coding",
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 38.0；TB 4.0 12.6%；AA-LCR 83.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；GPT-6 Luna (Max)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "openai61",
      "official-oa6l"
    ],
    "id": "gpt6-luna",
    "name": "GPT-6 Luna",
    "org": "openai",
    "brand": "openai",
    "aaii": {
      "v": 38.0,
      "rawValue": 38.1245186869738,
      "kind": "ind",
      "note": "GPT-6 Luna (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-luna",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "aaSlug": "gpt-6-luna",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 38.5,
      "rawValue": 38.5078776645042,
      "kind": "ind",
      "note": "GPT-6 Luna (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/gpt-6-luna",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "gdpval21": {
      "v": 1433.0,
      "rawValue": 1432.79,
      "kind": "ind",
      "note": "Stirrup · GPT-6 Luna (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1411.75,
      "ciHigh": 1453.83
    },
    "frontiercode": {
      "v": 41.9,
      "rawValue": 41.9269666666667,
      "kind": "ind",
      "note": "Stirrup · GPT-6 Luna (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": {
      "v": 31.1,
      "rawValue": 31.1260251113284,
      "kind": "ind",
      "note": "Codex + GPT-6 Luna (max) · 0.154.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 39.5,
      "rawValue": 39.5494666666667,
      "kind": "ind",
      "note": "Codex + GPT-6 Luna (max) · 0.154.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 38.2,
      "rawValue": 38.1720430107527,
      "kind": "ind",
      "note": "Codex + GPT-6 Luna (max) · 0.154.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    }
  },
  {
    "status": "current",
    "fresh": false,
    "tag": "新近",
    "released": "2026-09-21",
    "variant": "Xhigh",
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": {
      "v": 57.4,
      "rawValue": 57.4074074074074,
      "kind": "ind",
      "note": "Grok 4.7 (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/grok-4-7",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 76.7,
      "rawValue": 76.6666666666667,
      "kind": "ind",
      "note": "Grok 4.7 (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/grok-4-7",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 70.7,
      "rawValue": 70.662860767523,
      "kind": "ind",
      "note": "Grok 4.7 (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/grok-4-7",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1441,
      "rawValue": 1441,
      "kind": "ind",
      "note": "Grok 4.7 (xHigh) · ±6 · 14693 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1435,
      "ciHigh": 1447,
      "variantMismatch": false,
      "config": "xHigh"
    },
    "deepswe": {
      "v": 73,
      "kind": "ind",
      "note": "Grok Build",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 DeepSWE v1.1 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "sweatlas": {
      "v": 63,
      "kind": "ind",
      "note": "Grok Build",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 SWE-Atlas-QnA 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD/1M; short-context Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x47",
      "url": "https://docs.x.ai/developers/models/grok-4.7",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 6,
      "rawValue": 6,
      "kind": "vendor",
      "note": "USD/1M; short-context Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x47",
      "url": "https://docs.x.ai/developers/models/grok-4.7",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.5,
      "rawValue": 0.5,
      "kind": "vendor",
      "note": "USD/1M; short-context Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x47",
      "url": "https://docs.x.ai/developers/models/grok-4.7",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": {
      "v": 56,
      "kind": "ind",
      "note": "Grok Build + Grok 4.7 xhigh",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 25.8,
      "rawValue": 25.7575757575758,
      "kind": "ind",
      "note": "Grok 4.7 (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/grok-4-7",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 3.74,
      "rawValue": 3.738325952106939,
      "kind": "ind",
      "note": "Grok 4.7 (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/grok-4-7",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 89.0,
      "rawValue": 88.7656498511722,
      "kind": "ind",
      "note": "Grok 4.7 (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/grok-4-7",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 500000,
      "rawValue": 500000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x47",
      "url": "https://docs.x.ai/developers/models/grok-4.7",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Global Standard · 输入 <200K · USD / 百万 token",
    "priceAlt": "长输入整单翻倍；官方表格 ≥200K 与说明文字 >200K 的边界冲突待核实。",
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "xAI API; current documentation uses SpaceXSI branding. Grok Build is an agent product.",
    "scenes": [
      "coding",
      "agent",
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 46.0；TB 4.0 25.8%；AA-LCR 76.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Grok 4.7 (Xhigh)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "aacai",
      "xai47",
      "official-x47",
      "official-xlog"
    ],
    "id": "grok47",
    "name": "Grok 4.7",
    "org": "xai",
    "brand": "grok",
    "aaii": {
      "v": 46.0,
      "rawValue": 46.4465506302286,
      "kind": "ind",
      "note": "Grok 4.7 (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/grok-4-7",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "aaSlug": "grok-4-7",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 43.1,
      "rawValue": 43.1417979610751,
      "kind": "ind",
      "note": "Grok 4.7 (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/grok-4-7",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "gdpval21": {
      "v": 1714.0,
      "rawValue": 1713.96,
      "kind": "ind",
      "note": "Stirrup · Grok 4.7 (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1692.17,
      "ciHigh": 1735.75
    },
    "frontiercode": {
      "v": 33.8,
      "rawValue": 33.834199999999996,
      "kind": "ind",
      "note": "Stirrup · Grok 4.7 (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": {
      "v": 46.6,
      "rawValue": 46.5968752688172,
      "kind": "ind",
      "note": "Grok Build + Grok 4.7 (xhigh) · 1.0.40",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 43.6,
      "rawValue": 43.5540666666667,
      "kind": "ind",
      "note": "Grok Build + Grok 4.7 (xhigh) · 1.0.40",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 62.9,
      "rawValue": 62.9032258064516,
      "kind": "ind",
      "note": "Grok Build + Grok 4.7 (xhigh) · 1.0.40",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    }
  },
  {
    "status": "current",
    "fresh": false,
    "tag": "开源",
    "released": "2026-09-21",
    "variant": "推理档见来源",
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": {
      "v": 60.9,
      "rawValue": 60.8796296296296,
      "kind": "ind",
      "note": "MiMo-V2.6-Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-pro",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 86.3,
      "rawValue": 86.3333333333333,
      "kind": "ind",
      "note": "MiMo-V2.6-Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-pro",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 59.4,
      "rawValue": 59.37579943719622,
      "kind": "ind",
      "note": "MiMo-V2.6-Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-pro",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1480,
      "rawValue": 1480,
      "kind": "ind",
      "note": "MiMo-V2.6-Pro · ±9 · 4067 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1471,
      "ciHigh": 1489,
      "variantMismatch": false,
      "config": ""
    },
    "deepswe": null,
    "sweatlas": null,
    "maxOut": {
      "v": 131072,
      "rawValue": 131072,
      "kind": "vendor",
      "note": "Responses max_output_tokens range [1,131072], includes reasoning.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_api",
      "url": "https://mimo.mi.com/docs/en-US/api/chat/responses",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": {
      "v": 1020000000000,
      "rawValue": 1020000000000,
      "kind": "vendor",
      "note": "Specifically the published RL checkpoint; managed API checkpoint identity not guaranteed.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_pro_card",
      "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 42000000000,
      "rawValue": 42000000000,
      "kind": "vendor",
      "note": "Published RL checkpoint.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_pro_card",
      "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.435,
      "rawValue": 0.435,
      "kind": "vendor",
      "note": "Regular pay-as-you-go API key; cache writes temporarily free.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_price",
      "url": "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.87,
      "rawValue": 0.87,
      "kind": "vendor",
      "note": "Regular pay-as-you-go API key; cache writes temporarily free.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_price",
      "url": "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.0036,
      "rawValue": 0.0036,
      "kind": "vendor",
      "note": "Regular pay-as-you-go API key; cache writes temporarily free.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_price",
      "url": "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 34.8,
      "rawValue": 34.8484848484849,
      "kind": "ind",
      "note": "MiMo-V2.6-Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-pro",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.13,
      "rawValue": 0.13322318937213493,
      "kind": "ind",
      "note": "MiMo-V2.6-Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-pro",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 54.0,
      "rawValue": 53.8500394778751,
      "kind": "ind",
      "note": "MiMo-V2.6-Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-pro",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_models",
      "url": "https://mimo.mi.com/docs/en-US/quick-start/model",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "MiMo overseas real-time · USD / 百万 token",
    "priceAlt": "MiMo overseas Batch：输入 $0.2175 / 输出 $0.435 / 缓存读取 $0.0018；缓存写入限时免费；Batch 半价；UltraSpeed 不支持 Batch。",
    "license": "MIT",
    "openWeights": true,
    "access": "MiMo direct API and separately downloadable RL checkpoints.",
    "scenes": [
      "coding",
      "agent",
      "daily",
      "longdoc"
    ],
    "strength": "待比较候选。依据：AAII 46.0；TB 4.0 34.8%；AA-LCR 86.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；MiMo-V2.6-Pro。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "arena",
      "xiaomi26",
      "vendor-mi_models",
      "vendor-mi_api",
      "vendor-mi_pro_card",
      "vendor-mi_price"
    ],
    "id": "mimo26pro",
    "name": "MiMo-V2.6-Pro",
    "org": "xiaomi",
    "brand": "xiaomi",
    "aaii": {
      "v": 46.0,
      "rawValue": 46.3242065310383,
      "kind": "ind",
      "note": "MiMo-V2.6-Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-pro",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "aaSlug": "mimo-v2-6-pro",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 49.4,
      "rawValue": 49.351251158480096,
      "kind": "ind",
      "note": "MiMo-V2.6-Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-pro",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "gdpval21": {
      "v": 1683.0,
      "rawValue": 1683.02,
      "kind": "ind",
      "note": "Stirrup · MiMo-V2.6-Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1661.7,
      "ciHigh": 1704.34
    },
    "frontiercode": {
      "v": 45.4,
      "rawValue": 45.4153333333333,
      "kind": "ind",
      "note": "Stirrup · MiMo-V2.6-Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像",
      "音频",
      "视频"
    ],
    "outputs": [
      "文本"
    ],
    "verificationNotes": [],
    "cai2": null,
    "frontierAgent": null,
    "sweatlas2": null
  },
  {
    "status": "current",
    "fresh": false,
    "tag": "开源",
    "released": "2026-09-21",
    "variant": "推理档见来源",
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": {
      "v": 51.3,
      "rawValue": 51.273148148148195,
      "kind": "ind",
      "note": "MiMo-V2.6-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-flash",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 74.3,
      "rawValue": 74.3333333333333,
      "kind": "ind",
      "note": "MiMo-V2.6-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-flash",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 45.6,
      "rawValue": 45.63926940639269,
      "kind": "ind",
      "note": "MiMo-V2.6-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-flash",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1448,
      "rawValue": 1448,
      "kind": "ind",
      "note": "MiMo-V2.6-Flash · ±6 · 13730 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1442,
      "ciHigh": 1454,
      "variantMismatch": false,
      "config": ""
    },
    "deepswe": null,
    "sweatlas": null,
    "maxOut": {
      "v": 131072,
      "rawValue": 131072,
      "kind": "vendor",
      "note": "Responses max_output_tokens range [1,131072], includes reasoning.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_api",
      "url": "https://mimo.mi.com/docs/en-US/api/chat/responses",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": {
      "v": 309000000000,
      "rawValue": 309000000000,
      "kind": "vendor",
      "note": "Specifically the published RL checkpoint; managed API checkpoint identity not guaranteed.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_flash_card",
      "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 15000000000,
      "rawValue": 15000000000,
      "kind": "vendor",
      "note": "Published RL checkpoint.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_flash_card",
      "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.14,
      "rawValue": 0.14,
      "kind": "vendor",
      "note": "Regular pay-as-you-go API key; cache writes temporarily free.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_price",
      "url": "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.28,
      "rawValue": 0.28,
      "kind": "vendor",
      "note": "Regular pay-as-you-go API key; cache writes temporarily free.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_price",
      "url": "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.0028,
      "rawValue": 0.0028,
      "kind": "vendor",
      "note": "Regular pay-as-you-go API key; cache writes temporarily free.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_price",
      "url": "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 22.7,
      "rawValue": 22.727272727272698,
      "kind": "ind",
      "note": "MiMo-V2.6-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-flash",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.06,
      "rawValue": 0.06237567475410205,
      "kind": "ind",
      "note": "MiMo-V2.6-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-flash",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 60.0,
      "rawValue": 59.5448518285702,
      "kind": "ind",
      "note": "MiMo-V2.6-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-flash",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_models",
      "url": "https://mimo.mi.com/docs/en-US/quick-start/model",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "MiMo overseas real-time · USD / 百万 token",
    "priceAlt": "MiMo overseas Batch：输入 $0.07 / 输出 $0.14 / 缓存读取 $0.0014；缓存写入限时免费；Batch 半价；UltraSpeed 不支持 Batch。",
    "license": "MIT",
    "openWeights": true,
    "access": "MiMo direct API and separately downloadable RL checkpoints.",
    "scenes": [
      "coding",
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 38.0；TB 4.0 22.7%；AA-LCR 74.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；MiMo-V2.6-Flash。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "xiaomi26",
      "vendor-mi_models",
      "vendor-mi_api",
      "vendor-mi_flash_card",
      "vendor-mi_price"
    ],
    "id": "mimo26flash",
    "name": "MiMo-V2.6-Flash",
    "org": "xiaomi",
    "brand": "xiaomi",
    "aaii": {
      "v": 38.0,
      "rawValue": 37.8843590141754,
      "kind": "ind",
      "note": "MiMo-V2.6-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-flash",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "aaSlug": "mimo-v2-6-flash",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 35.1,
      "rawValue": 35.0787766450417,
      "kind": "ind",
      "note": "MiMo-V2.6-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/mimo-v2-6-flash",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "verificationNotes": [],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "gdpval21": null
  },
  {
    "id": "claude-fable51",
    "name": "Claude Fable 5.1",
    "org": "anthropic",
    "brand": "claude",
    "variant": "Max, Default Fallback",
    "released": "2026-09-01",
    "status": "current",
    "tag": "旗舰",
    "fresh": false,
    "aaii": {
      "v": 53.0,
      "rawValue": 53.3549259623252,
      "kind": "ind",
      "note": "Claude Fable 5.1 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-fable-5-1",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": {
      "v": 62,
      "kind": "ind",
      "note": "Claude Code + Fable 5.1 max",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 52.0,
      "rawValue": 52.020202020202,
      "kind": "ind",
      "note": "Claude Fable 5.1 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/claude-fable-5-1",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 91,
      "kind": "ind",
      "note": "TB 2.1 本期最高",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": null,
    "gdpval": {
      "v": 61,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 94,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 63.1,
      "rawValue": 63.078703703703695,
      "kind": "ind",
      "note": "Claude Fable 5.1 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/claude-fable-5-1",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 85.3,
      "rawValue": 85.3333333333333,
      "kind": "ind",
      "note": "Claude Fable 5.1 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/claude-fable-5-1",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 27.4,
      "rawValue": 27.416073245167848,
      "kind": "ind",
      "note": "Claude Fable 5.1 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-fable-5-1",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1503,
      "rawValue": 1503,
      "kind": "ind",
      "note": "Claude Fable 5.1 (Max) · ±6 · 16343 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1497,
      "ciHigh": 1509,
      "variantMismatch": false,
      "config": "Max"
    },
    "cpt": {
      "v": 7.63,
      "rawValue": 7.629706364004841,
      "kind": "ind",
      "note": "Claude Fable 5.1 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-fable-5-1",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 68.0,
      "rawValue": 68.2485058981337,
      "kind": "ind",
      "note": "Claude Fable 5.1 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-fable-5-1",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD/1M; direct Claude API Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_f51",
      "url": "https://platform.claude.com/docs/en/models/fable-5-1/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 50,
      "rawValue": 50,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_f51",
      "url": "https://platform.claude.com/docs/en/models/fable-5-1/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.25,
      "rawValue": 0.25,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_f51",
      "url": "https://platform.claude.com/docs/en/models/fable-5-1/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准 API 价 · USD / 百万 token",
    "priceAlt": "缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_f51",
      "url": "https://platform.claude.com/docs/en/models/fable-5-1/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_f51",
      "url": "https://platform.claude.com/docs/en/models/fable-5-1/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Claude API and listed cloud platforms; partner billing/access differs.",
    "scenes": [
      "coding",
      "agent",
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 53.0；TB 4.0 52.0%；AA-LCR 85.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Claude Fable 5.1 (Max, Default Fallback)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "aacai",
      "arena",
      "vendor",
      "official-an_f51"
    ],
    "deepswe": {
      "v": 64,
      "kind": "ind",
      "note": "Claude Code",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 DeepSWE v1.1 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "sweatlas": {
      "v": 65,
      "kind": "ind",
      "note": "Claude Code",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 SWE-Atlas-QnA 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "aaSlug": "claude-fable-5-1",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 59.1,
      "rawValue": 59.1288229842447,
      "kind": "ind",
      "note": "Claude Fable 5.1 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/claude-fable-5-1",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "gdpval21": {
      "v": 1755.0,
      "rawValue": 1754.56,
      "kind": "ind",
      "note": "Stirrup · Claude Fable 5.1 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1735.48,
      "ciHigh": 1773.64
    },
    "frontiercode": {
      "v": 49.0,
      "rawValue": 48.9732333333333,
      "kind": "ind",
      "note": "Stirrup · Claude Fable 5.1 (Max, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": {
      "v": 57.6,
      "rawValue": 57.6200245682633,
      "kind": "ind",
      "note": "Claude Code + Fable 5.1 (max) (with fallback) · 2.1.259/2.1.263 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 48.9,
      "rawValue": 48.8864666666667,
      "kind": "ind",
      "note": "Claude Code + Fable 5.1 (max) (with fallback) · 2.1.259/2.1.263 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 66.4,
      "rawValue": 66.3978494623656,
      "kind": "ind",
      "note": "Claude Code + Fable 5.1 (max) (with fallback) · 2.1.259/2.1.263 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    }
  },
  {
    "id": "gpt6-astra",
    "name": "GPT-6 Astra",
    "org": "openai",
    "brand": "openai",
    "variant": "Max",
    "released": "2026-09-03",
    "status": "current",
    "tag": "旗舰",
    "fresh": false,
    "aaii": {
      "v": 53.0,
      "rawValue": 52.673669395513,
      "kind": "ind",
      "note": "GPT-6 Astra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-astra",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": {
      "v": 62,
      "kind": "ind",
      "note": "Codex + GPT-6 Astra (max)",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 59.1,
      "rawValue": 59.09090909090911,
      "kind": "ind",
      "note": "GPT-6 Astra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/gpt-6-astra",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 88,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": null,
    "gdpval": {
      "v": 54,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 96,
      "kind": "ind",
      "note": "GPQA 本期最高",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 56.5,
      "rawValue": 56.4814814814815,
      "kind": "ind",
      "note": "GPT-6 Astra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/gpt-6-astra",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 80.7,
      "rawValue": 80.6666666666667,
      "kind": "ind",
      "note": "GPT-6 Astra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/gpt-6-astra",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 48.7,
      "rawValue": 48.66310160427807,
      "kind": "ind",
      "note": "GPT-6 Astra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-astra",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1476,
      "rawValue": 1476,
      "kind": "ind",
      "note": "GPT-6 Astra (Max) · ±6 · 14076 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1470,
      "ciHigh": 1482,
      "variantMismatch": false,
      "config": "Max"
    },
    "cpt": {
      "v": 3.26,
      "rawValue": 3.2575003134834164,
      "kind": "ind",
      "note": "GPT-6 Astra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-astra",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 56.0,
      "rawValue": 55.9295298551576,
      "kind": "ind",
      "note": "GPT-6 Astra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-astra",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD per 1,000,000 text input tokens; Standard, prompt ≤272,000 except GPT-5.3-Codex",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6a",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 50,
      "rawValue": 50,
      "kind": "vendor",
      "note": "USD per 1,000,000 output tokens; reasoning may consume output tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6a",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 1,
      "rawValue": 1,
      "kind": "vendor",
      "note": "USD per 1,000,000 cached input tokens; cache read, not write",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6a",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Standard · 输入 ≤272K · USD / 百万 token",
    "priceAlt": "超过 272K 输入，整单输入/缓存价 ×2、输出价 ×1.5；Fast ×2，Ultrafast ×6；Batch/Flex 半价（以该模型支持范围为准）。",
    "ctx": {
      "v": 1050000,
      "rawValue": 1050000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6a",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa6a",
      "url": "https://developers.openai.com/api/docs/models/gpt-6-astra",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "OpenAI API; account, region and usage-tier eligibility apply; no runtime call made.",
    "scenes": [
      "agent",
      "coding",
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 53.0；TB 4.0 59.1%；AA-LCR 80.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；GPT-6 Astra (Max)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "aacai",
      "arena",
      "vendor",
      "press",
      "official-oa6a"
    ],
    "aaSlug": "gpt-6-astra",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 54.7,
      "rawValue": 54.6802594995366,
      "kind": "ind",
      "note": "GPT-6 Astra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/gpt-6-astra",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "gdpval21": {
      "v": 1574.0,
      "rawValue": 1574.46,
      "kind": "ind",
      "note": "Stirrup · GPT-6 Astra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1554.91,
      "ciHigh": 1594.01
    },
    "frontiercode": {
      "v": 47.0,
      "rawValue": 46.9827666666667,
      "kind": "ind",
      "note": "Stirrup · GPT-6 Astra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": {
      "v": 54.7,
      "rawValue": 54.66356905615291,
      "kind": "ind",
      "note": "Codex + GPT-6 Astra (max) · 0.151.0/0.153.4",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 49.3,
      "rawValue": 49.2953666666667,
      "kind": "ind",
      "note": "Codex + GPT-6 Astra (max) · 0.151.0/0.153.4",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 59.1,
      "rawValue": 59.139784946236595,
      "kind": "ind",
      "note": "Codex + GPT-6 Astra (max) · 0.151.0/0.153.4",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "deepswe": null,
    "sweatlas": null
  },
  {
    "id": "claude-opus5",
    "name": "Claude Opus 5",
    "org": "anthropic",
    "brand": "claude",
    "variant": "max 档",
    "released": "2026-07-24",
    "status": "current",
    "tag": "旗舰",
    "aaii": {
      "v": 51,
      "kind": "ind",
      "note": "旧 AAII v4.3，未按 v4.3.2 复核",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Artificial Analysis Intelligence Index v4.3",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": {
      "v": 60,
      "kind": "ind",
      "note": "Claude Code + Opus 5 max",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 49,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": {
      "v": 89,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 97,
      "kind": "ind",
      "note": "±0.76，归档前的榜首",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 62,
      "kind": "ind",
      "note": "GDPval 本期最高",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 93,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 56,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 79,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 39,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": {
      "v": 1491,
      "rawValue": 1491,
      "kind": "ind",
      "note": "Claude Opus 5 (Max) · ±5 · 34526 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1486,
      "ciHigh": 1496,
      "variantMismatch": false,
      "config": "Max"
    },
    "cpt": {
      "v": 5.86,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 51,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 5,
      "rawValue": 5,
      "kind": "vendor",
      "note": "USD/1M; direct Claude API Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o5",
      "url": "https://platform.claude.com/docs/en/models/opus-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 25,
      "rawValue": 25,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o5",
      "url": "https://platform.claude.com/docs/en/models/opus-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.5,
      "rawValue": 0.5,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o5",
      "url": "https://platform.claude.com/docs/en/models/opus-5/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准 API 价 · USD / 百万 token",
    "priceAlt": "缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o5",
      "url": "https://platform.claude.com/docs/en/models/opus-5/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o5",
      "url": "https://platform.claude.com/docs/en/models/opus-5/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "Claude API and listed cloud platforms; partner billing/access differs.",
    "scenes": [
      "coding",
      "agent",
      "daily"
    ],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：真实职业工作任务 GDPval 62% 本期最高；SWE-bench 归档时以 97.0% 收尾，是该基准的终局冠军。",
    "limits": "历史资料，未按 10/24 逐项复核：被同厂 Fable 5.1 与 GPT-6 Astra 在智能指数上反超；TB 4.0 49% 落后 Astra 10 个百分点。",
    "tech": "历史资料，未按 10/24 逐项复核：9/19 资料记录：effort 档位可调；Claude Code 自托管 Runner 走企业内网执行，但推理仍发往 Anthropic。",
    "srcs": [
      "aa",
      "aacai",
      "arena",
      "vals",
      "official-an_o5"
    ],
    "fresh": false,
    "deepswe": {
      "v": 63,
      "kind": "ind",
      "note": "Claude Code",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 DeepSWE v1.1 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "sweatlas": {
      "v": 62,
      "kind": "ind",
      "note": "Claude Code",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 SWE-Atlas-QnA 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "muse13",
    "name": "Muse Spark 1.3",
    "org": "meta",
    "brand": "meta",
    "variant": "max 档",
    "released": "2026-09-02",
    "status": "current",
    "tag": "旗舰",
    "fresh": false,
    "aaii": {
      "v": 48,
      "kind": "ind",
      "note": "AAII v4.3.2",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": {
      "v": 54,
      "kind": "ind",
      "note": "Muse Code + Muse Spark 1.3 (max)",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 33,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": {
      "v": 84,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": null,
    "gdpval": {
      "v": 60,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 94,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 59,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 83,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 67,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": {
      "v": 1496,
      "rawValue": 1496,
      "kind": "ind",
      "note": "Muse Spark 1.3 (Max) · ±5 · 20506 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1491,
      "ciHigh": 1501,
      "variantMismatch": false,
      "config": "Max"
    },
    "cpt": {
      "v": 1.6,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 181,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 1.25,
      "rawValue": 1.25,
      "kind": "vendor",
      "note": "Meta Model API Standard; USD/1M; content not used for training",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mprice",
      "url": "https://dev.meta.ai/docs/pricing-rate-limits",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 4.25,
      "rawValue": 4.25,
      "kind": "vendor",
      "note": "Meta Model API Standard; USD/1M; content not used for training",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mprice",
      "url": "https://dev.meta.ai/docs/pricing-rate-limits",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.15,
      "rawValue": 0.15,
      "kind": "vendor",
      "note": "Meta Model API Standard; USD/1M; content not used for training",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mprice",
      "url": "https://dev.meta.ai/docs/pricing-rate-limits",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Meta 标准 API · USD / 百万 token",
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mroster",
      "url": "https://dev.meta.ai/docs/models",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "Meta Model API: Responses, Chat Completions and Messages; Muse Code; account eligibility applies.",
    "scenes": [
      "agent",
      "daily",
      "longdoc"
    ],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：性价比最突出的一档：AAII 48 排本期第四，单任务成本只要 $1.60，吞吐 214 t/s；非幻觉率 67% 在头部里算高的。",
    "limits": "历史资料，未按 10/24 逐项复核：TB 4.0 仅 33%，长链终端任务明显弱于前三名。",
    "tech": "历史资料，未按 10/24 逐项复核：9/19 资料记录：9/2 发布，距 1.2 只有四周；原生多模态，支持文本、图像、视频输入。",
    "srcs": [
      "aa",
      "aacai",
      "arena",
      "press",
      "official-mprice",
      "official-mroster",
      "official-mresearch"
    ],
    "priceAlt": "Contributor 为不同 API 配置，涉及训练授权且不支持 max；不能把其低价套在本行 max。",
    "inputs": [
      "文本",
      "图像",
      "视频",
      "音频",
      "PDF"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": {
      "v": 45.7,
      "rawValue": 45.7077885630498,
      "kind": "ind",
      "note": "Muse Code + Muse Spark 1.3 (max) · 1.0.3-R2198.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 46.7,
      "rawValue": 46.7030333333333,
      "kind": "ind",
      "note": "Muse Code + Muse Spark 1.3 (max) · 1.0.3-R2198.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 58.6,
      "rawValue": 58.6021505376344,
      "kind": "ind",
      "note": "Muse Code + Muse Spark 1.3 (max) · 1.0.3-R2198.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontiercode": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "gpt56-sol",
    "name": "GPT-5.6 Sol",
    "org": "openai",
    "brand": "openai",
    "variant": "max 档",
    "released": "2026-07-09",
    "status": "current",
    "tag": "上代旗舰",
    "aaii": {
      "v": 47,
      "kind": "ind",
      "note": "旧 AAII v4.3，未按 v4.3.2 复核",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Artificial Analysis Intelligence Index v4.3",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": {
      "v": 55,
      "kind": "ind",
      "note": "Codex + GPT-5.6 Sol (max)",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 40,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": {
      "v": 88,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 96.2,
      "kind": "ind",
      "note": "±0.86",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 54,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 94,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 57,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 84,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 8,
      "kind": "ind",
      "note": "本期最低之一",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": {
      "v": 1485,
      "rawValue": 1485,
      "kind": "ind",
      "note": "GPT-5.6 Sol (xHigh) · ±4 · 42713 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1481,
      "ciHigh": 1489,
      "variantMismatch": false,
      "config": "xHigh"
    },
    "cpt": {
      "v": 1.99,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 61,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 4,
      "rawValue": 4,
      "kind": "vendor",
      "note": "USD per 1,000,000 text input tokens; Standard, prompt ≤272,000 except GPT-5.3-Codex",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56s",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-sol",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 20,
      "rawValue": 20,
      "kind": "vendor",
      "note": "USD per 1,000,000 output tokens; reasoning may consume output tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56s",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-sol",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.4,
      "rawValue": 0.4,
      "kind": "vendor",
      "note": "USD per 1,000,000 cached input tokens; cache read, not write",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56s",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-sol",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Standard · 输入 ≤272K · USD / 百万 token",
    "priceWas": "$5 / $30",
    "priceAlt": "超过 272K 输入，整单输入/缓存价 ×2、输出价 ×1.5；Fast ×2，Ultrafast ×6；Batch/Flex 半价（以该模型支持范围为准）。",
    "ctx": {
      "v": 1050000,
      "rawValue": 1050000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56s",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-sol",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56s",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-sol",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "OpenAI API; account, region and usage-tier eligibility apply; no runtime call made.",
    "scenes": [
      "agent",
      "coding"
    ],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：被 Astra 顶替后成了 OpenAI 的性价比档：$4/$20 只有 Astra 的四折，TB 4.0 40% 仍在第一梯队。",
    "limits": "历史资料，未按 10/24 逐项复核：非幻觉率 8%，是本期最爱硬答的模型之一；METR 曾在部署前评估中点名其测试作弊率最高。",
    "tech": "历史资料，未按 10/24 逐项复核：9/19 资料记录：Ultra 模式 4 个并行子 Agent，6 档 effort；Codex Harness 已 Apache-2.0 开源。",
    "srcs": [
      "aa",
      "aacai",
      "arena",
      "vals",
      "official-oa56s"
    ],
    "fresh": false,
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "qwen38max",
    "name": "Qwen3.8-Max（0902）",
    "org": "alibaba",
    "brand": "qwen",
    "variant": "0902",
    "released": "2026-08-03",
    "status": "current",
    "tag": "旗舰",
    "fresh": false,
    "aaii": {
      "v": 45.0,
      "rawValue": 45.4152084980521,
      "kind": "ind",
      "note": "Qwen3.8 Max (0902)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-max",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": {
      "v": 43,
      "kind": "ind",
      "note": "Claude Code + Qwen3.8 Max",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 38.9,
      "rawValue": 38.8888888888889,
      "kind": "ind",
      "note": "Qwen3.8 Max (0902)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/qwen3-8-max",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 89,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 85.6,
      "kind": "ind",
      "note": "±1.57，为 0902 之前的版本",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 58,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 93,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 52.1,
      "rawValue": 52.0833333333333,
      "kind": "ind",
      "note": "Qwen3.8 Max (0902)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/qwen3-8-max",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 80.3,
      "rawValue": 80.3333333333333,
      "kind": "ind",
      "note": "Qwen3.8 Max (0902)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/qwen3-8-max",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 71.2,
      "rawValue": 71.16369846303976,
      "kind": "ind",
      "note": "Qwen3.8 Max (0902)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-max",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1483,
      "rawValue": 1483,
      "kind": "ind",
      "note": "Qwen3.8-Max · ±5 · 30500 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1478,
      "ciHigh": 1488,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 5.41,
      "rawValue": 5.408509428374016,
      "kind": "ind",
      "note": "Qwen3.8 Max (0902)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-max",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 42.0,
      "rawValue": 41.6598568044525,
      "kind": "ind",
      "note": "Qwen3.8 Max (0902)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-max",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "Implicit prefix cache; explicit read and creation separately.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_max",
      "url": "https://www.qwencloud.com/models/qwen3.8-max",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 6,
      "rawValue": 6,
      "kind": "vendor",
      "note": "Implicit prefix cache; explicit read and creation separately.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_max",
      "url": "https://www.qwencloud.com/models/qwen3.8-max",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.25,
      "rawValue": 0.25,
      "kind": "vendor",
      "note": "Implicit prefix cache; explicit read and creation separately.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_max",
      "url": "https://www.qwencloud.com/models/qwen3.8-max",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Qwen Cloud / Singapore International · USD / 百万 token",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "Context is not maximum input; max input 991808 or 983616 with thinking.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_max_ali",
      "url": "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 131072,
      "rawValue": 131072,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_max_ali",
      "url": "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": {
      "v": 2400000000000,
      "rawValue": 2400000000000,
      "kind": "vendor",
      "note": "Rounded API flagship description.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_max_ali",
      "url": "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 95000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "MoE 架构单次前向的激活参数",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Qwen Cloud / Model Studio API; hosted Max accepts text, image and video. Text-only open-weight sibling is separate.",
    "scenes": [
      "agent",
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 45.0；TB 4.0 38.9%；AA-LCR 80.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Qwen3.8 Max (0902)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "aacai",
      "arena",
      "vals",
      "press",
      "vendor-q_max_ali",
      "vendor-q_max"
    ],
    "deepswe": {
      "v": 51,
      "kind": "ind",
      "note": "Claude Code",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 DeepSWE v1.1 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "sweatlas": {
      "v": 62,
      "kind": "ind",
      "note": "Claude Code",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 SWE-Atlas-QnA 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "aaSlug": "qwen3-8-max",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 43.1,
      "rawValue": 43.0954587581094,
      "kind": "ind",
      "note": "Qwen3.8 Max (0902)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/qwen3-8-max",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "Model Studio Beijing / Global Frankfurt Virginia Tokyo Hong Kong：输入 $1.65 / 输出 $4.951 / 缓存读取 $0.206；主表为国际新加坡渠道；其他地区与显式/隐式缓存有不同费率。",
    "gdpval21": {
      "v": 1666.0,
      "rawValue": 1666.26,
      "kind": "ind",
      "note": "Stirrup · Qwen3.8 Max (0902)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1646.32,
      "ciHigh": 1686.21
    },
    "frontiercode": {
      "v": 43.2,
      "rawValue": 43.156299999999995,
      "kind": "ind",
      "note": "Stirrup · Qwen3.8 Max (0902)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "verificationNotes": [
      "Max main alias supports Beijing Batch but snapshot 0902 page says Batch unsupported. Do not apply 50% batch indiscriminately."
    ],
    "cai2": {
      "v": 39.2,
      "rawValue": 39.2199207885305,
      "kind": "ind",
      "note": "Claude Code + Qwen3.8 Max · 2.1.224/2.1.236/2.1.261/2.1.266",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 44.8,
      "rawValue": 44.8103,
      "kind": "ind",
      "note": "Claude Code + Qwen3.8 Max · 2.1.224/2.1.236/2.1.261/2.1.266",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 56.2,
      "rawValue": 56.18279569892481,
      "kind": "ind",
      "note": "Claude Code + Qwen3.8 Max · 2.1.224/2.1.236/2.1.261/2.1.266",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    }
  },
  {
    "id": "glm53",
    "name": "GLM-5.3",
    "org": "zai",
    "brand": "zai",
    "variant": "Max",
    "released": "2026-08-18",
    "status": "current",
    "tag": "开源旗舰",
    "aaii": {
      "v": 45.0,
      "rawValue": 44.777392385614,
      "kind": "ind",
      "note": "GLM-5.3 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/glm-5-3",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": {
      "v": 54,
      "kind": "ind",
      "note": "Opencode + GLM-5.3，开源模型里最高",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 41.9,
      "rawValue": 41.9191919191919,
      "kind": "ind",
      "note": "GLM-5.3 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/glm-5-3",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 84,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 95.4,
      "kind": "ind",
      "note": "±0.94",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 57,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 92,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 59.0,
      "rawValue": 59.0277777777778,
      "kind": "ind",
      "note": "GLM-5.3 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/glm-5-3",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 79.7,
      "rawValue": 79.6666666666667,
      "kind": "ind",
      "note": "GLM-5.3 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/glm-5-3",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 70.4,
      "rawValue": 70.44595616024188,
      "kind": "ind",
      "note": "GLM-5.3 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/glm-5-3",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1481,
      "rawValue": 1481,
      "kind": "ind",
      "note": "GLM-5.3 (Max) · ±5 · 25144 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1476,
      "ciHigh": 1486,
      "variantMismatch": false,
      "config": "Max"
    },
    "cpt": {
      "v": 2.01,
      "rawValue": 2.0056375150449584,
      "kind": "ind",
      "note": "GLM-5.3 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/glm-5-3",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 78.0,
      "rawValue": 78.0265904255186,
      "kind": "ind",
      "note": "GLM-5.3 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/glm-5-3",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 1.4,
      "rawValue": 1.4,
      "kind": "vendor",
      "note": "Cache storage advertised limited-time free, end date unspecified; no verified pay-as-you-go off-peak offer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 4.4,
      "rawValue": 4.4,
      "kind": "vendor",
      "note": "Cache storage advertised limited-time free, end date unspecified; no verified pay-as-you-go off-peak offer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.26,
      "rawValue": 0.26,
      "kind": "vendor",
      "note": "Cache storage advertised limited-time free, end date unspecified; no verified pay-as-you-go off-peak offer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Z.ai direct · USD / 百万 token",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_53",
      "url": "https://docs.z.ai/guides/llm/glm-5.3",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": {
      "v": 753000000000,
      "kind": "vendor",
      "note": "另有 744B 一说，见待核实清单",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "厂商公布的模型总参数规模",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "paramsAct": {
      "v": 40000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "MoE 架构单次前向的激活参数",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "license": "GLM-5.3 License",
    "openWeights": true,
    "access": "Direct Z.ai API and separately published weights.",
    "scenes": [
      "coding",
      "agent"
    ],
    "strength": "待比较候选。依据：AAII 45.0；TB 4.0 41.9%；AA-LCR 79.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；GLM-5.3 (Max)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "aacai",
      "arena",
      "vals",
      "vendor-z_53",
      "vendor-z_53_license",
      "vendor-z_53_card",
      "vendor-z_releases",
      "vendor-z_price"
    ],
    "fresh": false,
    "aaSlug": "glm-5-3",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 42.3,
      "rawValue": 42.2613531047266,
      "kind": "ind",
      "note": "GLM-5.3 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/glm-5-3",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "缓存存储限时免费，未给结束日期；不要混入订阅套餐的优惠。",
    "gdpval21": {
      "v": 1649.0,
      "rawValue": 1649.45,
      "kind": "ind",
      "note": "Stirrup · GLM-5.3 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1630.41,
      "ciHigh": 1668.49
    },
    "frontiercode": {
      "v": 40.1,
      "rawValue": 40.0752,
      "kind": "ind",
      "note": "Stirrup · GLM-5.3 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本"
    ],
    "outputs": [
      "文本"
    ],
    "verificationNotes": [],
    "cai2": {
      "v": 48.9,
      "rawValue": 48.916169034430304,
      "kind": "ind",
      "note": "Opencode + GLM-5.3 · 1.18.29",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 48.2,
      "rawValue": 48.2473666666667,
      "kind": "ind",
      "note": "Opencode + GLM-5.3 · 1.18.29",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 58.6,
      "rawValue": 58.6021505376344,
      "kind": "ind",
      "note": "Opencode + GLM-5.3 · 1.18.29",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "deepswe": null,
    "sweatlas": null
  },
  {
    "id": "grok46",
    "name": "Grok 4.6",
    "org": "xai",
    "brand": "grok",
    "variant": "high 档",
    "released": "2026-08-12",
    "status": "current",
    "tag": "旗舰",
    "aaii": {
      "v": 44,
      "kind": "ind",
      "note": "旧 AAII v4.3，未按 v4.3.2 复核",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Artificial Analysis Intelligence Index v4.3",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": {
      "v": 47,
      "kind": "ind",
      "note": "Grok Build + Grok 4.6 xhigh",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 21,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": {
      "v": 88,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 95.6,
      "kind": "ind",
      "note": "±0.92",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 57,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 95,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 56,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 80,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 66,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": {
      "v": 1456,
      "rawValue": 1456,
      "kind": "ind",
      "note": "Grok 4.6 (High) · ±5 · 32189 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1451,
      "ciHigh": 1461,
      "variantMismatch": false,
      "config": "High"
    },
    "cpt": {
      "v": 1.86,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 60,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD/1M; short-context Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x46",
      "url": "https://docs.x.ai/developers/models/grok-4.6",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 6,
      "rawValue": 6,
      "kind": "vendor",
      "note": "USD/1M; short-context Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x46",
      "url": "https://docs.x.ai/developers/models/grok-4.6",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.5,
      "rawValue": 0.5,
      "kind": "vendor",
      "note": "USD/1M; short-context Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x46",
      "url": "https://docs.x.ai/developers/models/grok-4.6",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Global Standard · 输入 <200K · USD / 百万 token",
    "priceAlt": "长输入整单翻倍；官方表格 ≥200K 与说明文字 >200K 的边界冲突待核实。",
    "ctx": {
      "v": 500000,
      "rawValue": 500000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x46",
      "url": "https://docs.x.ai/developers/models/grok-4.6",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "xAI API; current documentation uses SpaceXSI branding. Grok Build is an agent product.",
    "scenes": [
      "coding",
      "daily"
    ],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：便宜且稳：GPQA 95%、TB 2.1 88% 与头部持平，单任务成本 $1.86。",
    "limits": "历史资料，未按 10/24 逐项复核：TB 4.0 只有 21% —— 旧基准饱和掩盖了它在新一代长链任务上的短板，这是本期最大的落差之一；上下文窗口 500K 也是头部里最小的；此前披露的加密提示注入漏洞需自行评估。",
    "tech": "历史资料，未按 10/24 逐项复核：9/19 资料记录：同 1.5T 基座纯后训练 + xhigh 档；多步自验证。",
    "srcs": [
      "aa",
      "aacai",
      "vals",
      "official-x46",
      "official-xlog"
    ],
    "fresh": false,
    "deepswe": {
      "v": 65,
      "kind": "ind",
      "note": "Grok Build",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 DeepSWE v1.1 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "sweatlas": {
      "v": 58,
      "kind": "ind",
      "note": "Grok Build",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA Coding Agent Index v1.5 · 同一 Agent harness 的 SWE-Atlas-QnA 分项",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "kimi-k3",
    "name": "Kimi K3",
    "org": "moonshot",
    "brand": "kimi",
    "variant": "max 档",
    "released": "2026-07-16",
    "status": "current",
    "tag": "开源旗舰",
    "aaii": {
      "v": 44,
      "kind": "ind",
      "note": "AAII v4.3.2",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": {
      "v": 52,
      "kind": "ind",
      "note": "Kimi Code CLI + Kimi K3",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 13,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": {
      "v": 85,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 93.4,
      "kind": "ind",
      "note": "±1.11",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 52,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 94,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 59,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 89,
      "kind": "ind",
      "note": "AA-LCR 本期最高",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 47,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": {
      "v": 1487,
      "rawValue": 1487,
      "kind": "ind",
      "note": "Kimi K3 (Max) · ±4 · 35379 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1483,
      "ciHigh": 1491,
      "variantMismatch": false,
      "config": "Max"
    },
    "cpt": {
      "v": 2,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 34,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 3,
      "rawValue": 3,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 15,
      "rawValue": 15,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.3,
      "rawValue": 0.3,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Kimi direct standard · USD / 百万 token",
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "max_completion_tokens default 131072; upper setting 1048576, shared context budget.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_3",
      "url": "https://platform.kimi.ai/docs/guide/kimi-k3-quickstart",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": {
      "v": 2800000000000,
      "rawValue": 2800000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_3_card",
      "url": "https://huggingface.co/moonshotai/Kimi-K3",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 104000000000,
      "rawValue": 104000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_3_card",
      "url": "https://huggingface.co/moonshotai/Kimi-K3",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "Kimi K3 License",
    "openWeights": true,
    "access": "API and downloadable weights; previous-generation flagship in official model list.",
    "scenes": [
      "longdoc",
      "daily"
    ],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：长上下文推理 AA-LCR 89% 本期最高，上下文 1.05M 也是最大的一档 —— 长文档场景的首选候选。",
    "limits": "历史资料，未按 10/24 逐项复核：TB 4.0 仅 13%，长链终端任务几乎不能指望；吞吐 38 t/s 偏慢；许可不是自由开源，商业使用触发分成条款。",
    "tech": "历史资料，未按 10/24 逐项复核：9/19 资料记录：约 2.8T MoE，仍是开源规模纪录保持者之一。",
    "srcs": [
      "aa",
      "aacai",
      "arena",
      "vals",
      "vendor-k_price",
      "vendor-k_3",
      "vendor-k_3_card",
      "vendor-k_3_license",
      "vendor-k_models",
      "vendor-k_archive"
    ],
    "fresh": false,
    "priceAlt": "自动前缀缓存默认 5 分钟；写入与读取另计；K3.1 不套用 K2 Batch 折扣。",
    "verificationNotes": [],
    "cai2": {
      "v": 41.4,
      "rawValue": 41.417319257087,
      "kind": "ind",
      "note": "Kimi Code CLI + Kimi K3 · 0.26.0/0.36.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 43.1,
      "rawValue": 43.093599999999995,
      "kind": "ind",
      "note": "Kimi Code CLI + Kimi K3 · 0.26.0/0.36.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 59.9,
      "rawValue": 59.9462365591398,
      "kind": "ind",
      "note": "Kimi Code CLI + Kimi K3 · 0.26.0/0.36.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontiercode": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "step5",
    "name": "Step 5 Preview",
    "org": "stepfun",
    "brand": "stepfun",
    "variant": "推理档见来源",
    "released": "2026-09-18",
    "status": "current",
    "tag": "新入榜",
    "fresh": false,
    "aaii": {
      "v": 44.0,
      "rawValue": 43.7343049141614,
      "kind": "ind",
      "note": "Step 5 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/step-5",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 33.3,
      "rawValue": 33.3333333333333,
      "kind": "ind",
      "note": "Step 5 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/step-5",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": null,
    "swe": null,
    "gdpval": {
      "v": 54,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": null,
    "scicode": {
      "v": 58.9,
      "rawValue": 58.912037037037,
      "kind": "ind",
      "note": "Step 5 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/step-5",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 88.3,
      "rawValue": 88.3333333333333,
      "kind": "ind",
      "note": "Step 5 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/step-5",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 57.0,
      "rawValue": 56.98403648802737,
      "kind": "ind",
      "note": "Step 5 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/step-5",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1448,
      "rawValue": 1448,
      "kind": "ind",
      "note": "Step 5 Preview · ±7 · 9792 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1441,
      "ciHigh": 1455,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 1.03,
      "rawValue": 1.0264068637684054,
      "kind": "ind",
      "note": "Step 5 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/step-5",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 224.0,
      "rawValue": 224.016394990562,
      "kind": "ind",
      "note": "Step 5 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/step-5",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 1,
      "rawValue": 1,
      "kind": "vendor",
      "note": "Input cache miss includes cache write; output includes thinking and final answer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-step_price",
      "url": "https://platform.stepfun.ai/docs/en/guides/pricing/details",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 2.7,
      "rawValue": 2.7,
      "kind": "vendor",
      "note": "Input cache miss includes cache write; output includes thinking and final answer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-step_price",
      "url": "https://platform.stepfun.ai/docs/en/guides/pricing/details",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.1,
      "rawValue": 0.1,
      "kind": "vendor",
      "note": "Input cache miss includes cache write; output includes thinking and final answer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-step_price",
      "url": "https://platform.stepfun.ai/docs/en/guides/pricing/details",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "StepFun direct international · USD / 百万 token",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-step_guide",
      "url": "https://platform.stepfun.ai/docs/en/guides/models/step-5-preview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": {
      "v": 600000000000,
      "rawValue": 600000000000,
      "kind": "vendor",
      "note": "Rounded architecture count; HF tensor display 604B.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-step_card",
      "url": "https://huggingface.co/stepfun-ai/Step-5-Preview",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 27000000000,
      "rawValue": 27000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-step_card",
      "url": "https://huggingface.co/stepfun-ai/Step-5-Preview",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "StepFun Model License 1.0",
    "openWeights": true,
    "access": "Direct API step-5-preview and published self-hostable weights.",
    "scenes": [
      "longdoc",
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 44.0；TB 4.0 33.3%；AA-LCR 88.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Step 5 Preview。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "vendor-step_guide",
      "vendor-step_card",
      "vendor-step_price"
    ],
    "aaSlug": "step-5",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 46.5,
      "rawValue": 46.4782205746061,
      "kind": "ind",
      "note": "Step 5 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/step-5",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "Tencent TokenHub Singapore：输入 $1 / 输出 $2.7 / 缓存读取 $0.05",
    "gdpval21": {
      "v": 1587.0,
      "rawValue": 1586.76,
      "kind": "ind",
      "note": "Stirrup · Step 5 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1562.79,
      "ciHigh": 1610.73
    },
    "frontiercode": {
      "v": 38.4,
      "rawValue": 38.4270666666667,
      "kind": "ind",
      "note": "Stirrup · Step 5 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "verificationNotes": [],
    "cai2": {
      "v": 43.1,
      "rawValue": 43.1274491691105,
      "kind": "ind",
      "note": "Claude Code + Step 5 Preview · 2.1.220",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 40.5,
      "rawValue": 40.4771666666667,
      "kind": "ind",
      "note": "Claude Code + Step 5 Preview · 2.1.220",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 58.6,
      "rawValue": 58.6021505376344,
      "kind": "ind",
      "note": "Claude Code + Step 5 Preview · 2.1.220",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "deepswe": null,
    "sweatlas": null
  },
  {
    "id": "gpt56-terra",
    "name": "GPT-5.6 Terra",
    "org": "openai",
    "brand": "openai",
    "variant": "Max",
    "released": "2026-07-09",
    "status": "current",
    "tag": "中端",
    "aaii": {
      "v": 42.0,
      "rawValue": 42.0829248239494,
      "kind": "ind",
      "note": "GPT-5.6 Terra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-5-6-terra",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 35.4,
      "rawValue": 35.3535353535354,
      "kind": "ind",
      "note": "GPT-5.6 Terra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/gpt-5-6-terra",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 88,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 95.4,
      "kind": "ind",
      "note": "±0.94",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 49,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 93,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 55.0,
      "rawValue": 54.976851851851805,
      "kind": "ind",
      "note": "GPT-5.6 Terra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/gpt-5-6-terra",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 83.0,
      "rawValue": 83.0,
      "kind": "ind",
      "note": "GPT-5.6 Terra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/gpt-5-6-terra",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 12.1,
      "rawValue": 12.124060150375938,
      "kind": "ind",
      "note": "GPT-5.6 Terra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-5-6-terra",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1467,
      "rawValue": 1467,
      "kind": "ind",
      "note": "GPT-5.6 Terra (xHigh) · ±4 · 46470 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1463,
      "ciHigh": 1471,
      "variantMismatch": false,
      "config": "xHigh"
    },
    "cpt": {
      "v": 1.4,
      "rawValue": 1.3987235612691513,
      "kind": "ind",
      "note": "GPT-5.6 Terra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-5-6-terra",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 124.0,
      "rawValue": 124.01802775143,
      "kind": "ind",
      "note": "GPT-5.6 Terra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-5-6-terra",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD per 1,000,000 text input tokens; Standard, prompt ≤272,000 except GPT-5.3-Codex",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56t",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-terra",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 12,
      "rawValue": 12,
      "kind": "vendor",
      "note": "USD per 1,000,000 output tokens; reasoning may consume output tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56t",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-terra",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.2,
      "rawValue": 0.2,
      "kind": "vendor",
      "note": "USD per 1,000,000 cached input tokens; cache read, not write",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56t",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-terra",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Standard · 输入 ≤272K · USD / 百万 token",
    "priceAlt": "超过 272K 输入，整单输入/缓存价 ×2、输出价 ×1.5；Fast ×2，Ultrafast ×6；Batch/Flex 半价（以该模型支持范围为准）。",
    "ctx": {
      "v": 1050000,
      "rawValue": 1050000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56t",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-terra",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56t",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-terra",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "OpenAI API; account, region and usage-tier eligibility apply; no runtime call made.",
    "scenes": [
      "coding",
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 42.0；TB 4.0 35.4%；AA-LCR 83.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；GPT-5.6 Terra (Max)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "vals",
      "official-oa56t"
    ],
    "fresh": false,
    "aaSlug": "gpt-5-6-terra",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 42.9,
      "rawValue": 42.9101019462465,
      "kind": "ind",
      "note": "GPT-5.6 Terra (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/gpt-5-6-terra",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "glm53flash",
    "name": "GLM-5.3-Flash",
    "org": "zai",
    "brand": "zai",
    "variant": "推理档见来源",
    "released": "2026-08-26",
    "status": "current",
    "tag": "开源低价",
    "fresh": false,
    "aaii": {
      "v": 42.0,
      "rawValue": 41.807466113455,
      "kind": "ind",
      "note": "GLM-5.3-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/glm-5-3-flash",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 32.8,
      "rawValue": 32.8282828282828,
      "kind": "ind",
      "note": "GLM-5.3-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/glm-5-3-flash",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 84,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 92,
      "kind": "ind",
      "note": "±1.21",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 58,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 91,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 51.6,
      "rawValue": 51.6203703703704,
      "kind": "ind",
      "note": "GLM-5.3-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/glm-5-3-flash",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 80.0,
      "rawValue": 80.0,
      "kind": "ind",
      "note": "GLM-5.3-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/glm-5-3-flash",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 72.4,
      "rawValue": 72.36781609195401,
      "kind": "ind",
      "note": "GLM-5.3-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/glm-5-3-flash",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1476,
      "rawValue": 1476,
      "kind": "ind",
      "note": "GLM-5.3-Flash · ±5 · 38359 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1471,
      "ciHigh": 1481,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 0.28,
      "rawValue": 0.2835948232103717,
      "kind": "ind",
      "note": "GLM-5.3-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/glm-5-3-flash",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 64.0,
      "rawValue": 64.3214864569314,
      "kind": "ind",
      "note": "GLM-5.3-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/glm-5-3-flash",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.15,
      "rawValue": 0.15,
      "kind": "vendor",
      "note": "Cache storage advertised limited-time free, end date unspecified; no verified pay-as-you-go off-peak offer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.5,
      "rawValue": 0.5,
      "kind": "vendor",
      "note": "Cache storage advertised limited-time free, end date unspecified; no verified pay-as-you-go off-peak offer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.03,
      "rawValue": 0.03,
      "kind": "vendor",
      "note": "Cache storage advertised limited-time free, end date unspecified; no verified pay-as-you-go off-peak offer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Z.ai direct · USD / 百万 token",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_flash",
      "url": "https://docs.z.ai/guides/vlm/glm-5.3-flash",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": {
      "v": 320000000000,
      "rawValue": 320000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_flash",
      "url": "https://docs.z.ai/guides/vlm/glm-5.3-flash",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 18000000000,
      "rawValue": 18000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_flash",
      "url": "https://docs.z.ai/guides/vlm/glm-5.3-flash",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "MIT",
    "openWeights": true,
    "access": "Direct Z.ai API and separately published weights.",
    "scenes": [
      "daily",
      "coding",
      "longdoc"
    ],
    "strength": "待比较候选。依据：AAII 42.0；TB 4.0 32.8%；AA-LCR 80.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；GLM-5.3-Flash。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "arena",
      "vals",
      "press",
      "vendor-z_flash",
      "vendor-z_flash_card",
      "vendor-z_releases",
      "vendor-z_price"
    ],
    "aaSlug": "glm-5-3-flash",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 39.9,
      "rawValue": 39.8517145505097,
      "kind": "ind",
      "note": "GLM-5.3-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/glm-5-3-flash",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "缓存存储限时免费，未给结束日期；不要混入订阅套餐的优惠。",
    "gdpval21": {
      "v": 1642.0,
      "rawValue": 1642.18,
      "kind": "ind",
      "note": "Stirrup · GLM-5.3-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1624.46,
      "ciHigh": 1659.9
    },
    "frontiercode": {
      "v": 41.0,
      "rawValue": 40.9957333333333,
      "kind": "ind",
      "note": "Stirrup · GLM-5.3-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "verificationNotes": [],
    "cai2": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null
  },
  {
    "id": "gemini38",
    "name": "Gemini 3.8 Flash",
    "org": "google",
    "brand": "gemini",
    "variant": "High",
    "released": "2026-09-02",
    "status": "current",
    "tag": "高吞吐",
    "fresh": false,
    "aaii": {
      "v": 41.0,
      "rawValue": 40.9262321765904,
      "kind": "ind",
      "note": "Gemini 3.8 Flash (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-8-flash",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": {
      "v": 42,
      "kind": "ind",
      "note": "Antigravity SDK + Gemini 3.8 Flash (high)",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 19.7,
      "rawValue": 19.6969696969697,
      "kind": "ind",
      "note": "Gemini 3.8 Flash (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/gemini-3-8-flash",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 88,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 80,
      "kind": "ind",
      "note": "±1.79",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 48,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 95,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 56.6,
      "rawValue": 56.5972222222222,
      "kind": "ind",
      "note": "Gemini 3.8 Flash (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/gemini-3-8-flash",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 81.3,
      "rawValue": 81.3333333333333,
      "kind": "ind",
      "note": "Gemini 3.8 Flash (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/gemini-3-8-flash",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 44.8,
      "rawValue": 44.82378854625551,
      "kind": "ind",
      "note": "Gemini 3.8 Flash (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-8-flash",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1496,
      "rawValue": 1496,
      "kind": "ind",
      "note": "Gemini 3.8 Flash (High) · ±4 · 43997 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1492,
      "ciHigh": 1500,
      "variantMismatch": false,
      "config": "High"
    },
    "cpt": {
      "v": 1.24,
      "rawValue": 1.2427947606950427,
      "kind": "ind",
      "note": "Gemini 3.8 Flash (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-8-flash",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 137.0,
      "rawValue": 136.870523307751,
      "kind": "ind",
      "note": "Gemini 3.8 Flash (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-8-flash",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.75,
      "rawValue": 0.75,
      "kind": "vendor",
      "note": "USD/1M; Gemini Developer API Paid Standard; not Vertex AI",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 3.75,
      "rawValue": 3.75,
      "kind": "vendor",
      "note": "USD/1M, includes thinking tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.075,
      "rawValue": 0.075,
      "kind": "vendor",
      "note": "USD/1M cached tokens; explicit cache storage billed separately where available",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Paid Standard · USD / 百万 token",
    "priceAlt": "付费文本标准价；缓存存储、Batch/Flex、音频和长请求单独计价。",
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "Official input token limit",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_flash",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22"
    },
    "maxOut": {
      "v": 65536,
      "rawValue": 65536,
      "kind": "vendor",
      "note": "Output token limit",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_flash",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22"
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Stable model; free API tier with limits and paid API tier.",
    "scenes": [
      "daily",
      "longdoc"
    ],
    "strength": "待比较候选。依据：AAII 41.0；TB 4.0 19.7%；AA-LCR 81.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Gemini 3.8 Flash (High)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "aacai",
      "arena",
      "vals",
      "press",
      "official-gg_price",
      "official-gg_flash"
    ],
    "aaSlug": "gemini-3-8-flash",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 47.8,
      "rawValue": 47.8220574606117,
      "kind": "ind",
      "note": "Gemini 3.8 Flash (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/gemini-3-8-flash",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "gdpval21": {
      "v": 1436.0,
      "rawValue": 1436.35,
      "kind": "ind",
      "note": "Stirrup · Gemini 3.8 Flash (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1416.55,
      "ciHigh": 1456.14
    },
    "frontiercode": {
      "v": 36.4,
      "rawValue": 36.3585,
      "kind": "ind",
      "note": "Stirrup · Gemini 3.8 Flash (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像",
      "视频",
      "音频",
      "PDF"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": {
      "v": 33.3,
      "rawValue": 33.272301118714,
      "kind": "ind",
      "note": "Antigravity SDK + Gemini 3.8 Flash (high) · 0.1.12/0.1.16",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 40.8,
      "rawValue": 40.8156,
      "kind": "ind",
      "note": "Antigravity SDK + Gemini 3.8 Flash (high) · 0.1.12/0.1.16",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 44.4,
      "rawValue": 44.3548387096774,
      "kind": "ind",
      "note": "Antigravity SDK + Gemini 3.8 Flash (high) · 0.1.12/0.1.16",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "deepswe": null,
    "sweatlas": null
  },
  {
    "id": "qwen38flashnext",
    "name": "Qwen3.8-Flash-Next",
    "org": "alibaba",
    "brand": "qwen",
    "variant": "推理档见来源",
    "released": "2026-08-26",
    "status": "current",
    "tag": "开源低价",
    "aaii": {
      "v": 40.0,
      "rawValue": 39.8223021864741,
      "kind": "ind",
      "note": "Qwen3.8-Flash-Next",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 25.3,
      "rawValue": 25.2525252525253,
      "kind": "ind",
      "note": "Qwen3.8-Flash-Next",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 86,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": null,
    "gdpval": {
      "v": 57,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 92,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 50.6,
      "rawValue": 50.578703703703695,
      "kind": "ind",
      "note": "Qwen3.8-Flash-Next",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 79.7,
      "rawValue": 79.6666666666667,
      "kind": "ind",
      "note": "Qwen3.8-Flash-Next",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 54.7,
      "rawValue": 54.67991169977925,
      "kind": "ind",
      "note": "Qwen3.8-Flash-Next",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": null,
    "cpt": {
      "v": 0.37,
      "rawValue": 0.3721760025302965,
      "kind": "ind",
      "note": "Qwen3.8-Flash-Next",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 51.0,
      "rawValue": 51.4651663181092,
      "kind": "ind",
      "note": "Qwen3.8-Flash-Next",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.15,
      "rawValue": 0.15,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.47,
      "rawValue": 0.47,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.016,
      "rawValue": 0.016,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "ctx": {
      "v": 262144,
      "rawValue": 262144,
      "kind": "vendor",
      "note": "Native weight context; YaRN extension to 1000000 documented.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_next_card",
      "url": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": {
      "v": 6000000000,
      "rawValue": 6000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_next_card",
      "url": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "Qwen Community License 1.0",
    "openWeights": true,
    "access": "Self-host weights; official production hosted counterpart is qwen3.8-flash with default 1M context.",
    "scenes": [
      "daily",
      "coding"
    ],
    "strength": "待比较候选。依据：AAII 40.0；TB 4.0 25.3%；AA-LCR 79.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Qwen3.8-Flash-Next。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "press",
      "vendor-q_next_card"
    ],
    "fresh": false,
    "aaSlug": "qwen3-8-flash-next",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 38.0,
      "rawValue": 38.044485634847106,
      "kind": "ind",
      "note": "Qwen3.8-Flash-Next",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "verificationNotes": [
      "Existing $0.15/$0.47 belongs to hosted qwen3.8-flash, not a checkpoint-identical self-hosted API. See new suggestion."
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "ds-v41flash",
    "name": "DeepSeek V4.1 Flash",
    "org": "deepseek",
    "brand": "deepseek",
    "variant": "max 档",
    "released": "2026-09-10",
    "status": "prev",
    "tag": "开源低价",
    "fresh": false,
    "aaii": {
      "v": 39,
      "kind": "ind",
      "note": "AAII v4.3.2",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": null,
    "tb40": {
      "v": 27,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": null,
    "swe": null,
    "gdpval": {
      "v": 57,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": null,
    "scicode": {
      "v": 52,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 84,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 4,
      "kind": "ind",
      "note": "本期最低",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": {
      "v": 1476,
      "rawValue": 1476,
      "kind": "ind",
      "note": "DeepSeek-V4.1-Flash-20260910 (Max) · ±6 · 13750 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1470,
      "ciHigh": 1482,
      "variantMismatch": false,
      "config": "Max"
    },
    "cpt": {
      "v": 0.27,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 209,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 0.3,
      "kind": "vendor",
      "note": "高峰价；低谷 $0.15",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceOut": {
      "v": 1.2,
      "kind": "vendor",
      "note": "高峰价；低谷 $0.60",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceCache": {
      "v": 0.006,
      "kind": "vendor",
      "note": "高峰价；低谷 $0.003",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceMode": "峰谷分时计价 · 高峰 = 工作日 UTC 01–04 与 06–10 时（不含中国法定节假日），其余时段一律低谷半价",
    "priceAlt": "低谷价 $0.15 / $0.60，缓存命中低谷 $0.003",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_card41",
      "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 384000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方公布的单次最大输出 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "MIT",
    "openWeights": true,
    "access": "Historical weights remain published; deepseek-flash now serves the 1017 checkpoint.",
    "scenes": [
      "daily",
      "longdoc",
      "agent"
    ],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：单任务成本 $0.27、吞吐 208 t/s、1M 上下文、384K 最大输出，同时开源权重 —— 高频批量场景的默认候选。",
    "limits": "历史资料，未按 10/24 逐项复核：非幻觉率 4% 是本期最低，事实性任务务必自己加校验；没有 GPQA 与 SWE-bench 数据。",
    "tech": "历史资料，未按 10/24 逐项复核：9/19 资料记录：9/10 发布，新架构家族里最小的一款，原生视觉理解。上一代 V4 Flash 与 V4 Flash Vision Exp 已退役，旧模型名暂时路由到本模型。",
    "srcs": [
      "aa",
      "vendor",
      "press",
      "vendor-ds_card41",
      "vendor-ds_price",
      "vendor-ds_release1017"
    ],
    "verificationNotes": [
      "Do not refresh this checkpoint's historical scores from the 1017 model. Current alias prices belong to new suggestion ds-v41flash1017."
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "claude-sonnet5",
    "name": "Claude Sonnet 5",
    "org": "anthropic",
    "brand": "claude",
    "variant": "max 档",
    "released": "2026-06-30",
    "status": "current",
    "tag": "中端",
    "aaii": {
      "v": 38,
      "kind": "ind",
      "note": "旧 AAII v4.3，未按 v4.3.2 复核",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Artificial Analysis Intelligence Index v4.3",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": null,
    "tb40": {
      "v": 14,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": {
      "v": 81,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 79.6,
      "kind": "ind",
      "note": "±1.80",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 50,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 91,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 54,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 82,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 61,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": {
      "v": 1461,
      "rawValue": 1461,
      "kind": "ind",
      "note": "Claude Sonnet 5 (High) · ±4 · 51784 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1457,
      "ciHigh": 1465,
      "variantMismatch": false,
      "config": "High"
    },
    "cpt": {
      "v": 5.09,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 74,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD/1M; direct Claude API Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s5",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s5",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.2,
      "rawValue": 0.2,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s5",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准 API 价 · USD / 百万 token",
    "priceAlt": "缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s5",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s5",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "Claude API and listed cloud platforms; partner billing/access differs.",
    "scenes": [
      "daily",
      "longdoc"
    ],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：Claude Pro 订阅的默认模型，非幻觉率 61% 比自家旗舰还高。",
    "limits": "历史资料，未按 10/24 逐项复核：单任务成本 $5.09 高得离谱（标价只有 $2/$10，但 token 消耗大），按 API 计费时性价比很差；TB 4.0 仅 14%。",
    "tech": "",
    "srcs": [
      "aa",
      "vals",
      "official-an_s5"
    ],
    "fresh": false,
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "gpt56-luna",
    "name": "GPT-5.6 Luna",
    "org": "openai",
    "brand": "openai",
    "variant": "max 档",
    "released": "2026-07-09",
    "status": "current",
    "tag": "低价",
    "aaii": {
      "v": 38,
      "kind": "ind",
      "note": "旧 AAII v4.3，未按 v4.3.2 复核",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Artificial Analysis Intelligence Index v4.3",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": null,
    "tb40": {
      "v": 12,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": {
      "v": 81,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 93,
      "kind": "ind",
      "note": "±1.14",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 48,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 91,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 54,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 84,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 7,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": {
      "v": 1453,
      "rawValue": 1453,
      "kind": "ind",
      "note": "GPT-5.6 Luna (xHigh) · ±4 · 41426 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1449,
      "ciHigh": 1457,
      "variantMismatch": false,
      "config": "xHigh"
    },
    "cpt": {
      "v": 0.18,
      "kind": "ind",
      "note": "本期最低之一",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 133,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 0.2,
      "rawValue": 0.2,
      "kind": "vendor",
      "note": "USD per 1,000,000 text input tokens; Standard, prompt ≤272,000 except GPT-5.3-Codex",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56l",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-luna",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 1.2,
      "rawValue": 1.2,
      "kind": "vendor",
      "note": "USD per 1,000,000 output tokens; reasoning may consume output tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56l",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-luna",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.02,
      "rawValue": 0.02,
      "kind": "vendor",
      "note": "USD per 1,000,000 cached input tokens; cache read, not write",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56l",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-luna",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Standard · 输入 ≤272K · USD / 百万 token",
    "priceAlt": "超过 272K 输入，整单输入/缓存价 ×2、输出价 ×1.5；Fast ×2，Ultrafast ×6；Batch/Flex 半价（以该模型支持范围为准）。",
    "ctx": {
      "v": 1050000,
      "rawValue": 1050000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56l",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-luna",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa56l",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.6-luna",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "OpenAI API; account, region and usage-tier eligibility apply; no runtime call made.",
    "scenes": [
      "daily",
      "coding"
    ],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：单任务成本 $0.18，是本期最便宜的可用档；SWE-bench 归档时仍有 93.0%。",
    "limits": "历史资料，未按 10/24 逐项复核：非幻觉率 7%；TB 4.0 仅 12%，复杂长链任务不要指望。",
    "tech": "",
    "srcs": [
      "aa",
      "vals",
      "official-oa56l"
    ],
    "fresh": false,
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "ds-v4pro",
    "name": "DeepSeek V4 Pro 0813",
    "org": "deepseek",
    "brand": "deepseek",
    "variant": "Max",
    "released": "2026-08-13",
    "status": "current",
    "tag": "开源",
    "aaii": {
      "v": 36.0,
      "rawValue": 35.9967791278402,
      "kind": "ind",
      "note": "DeepSeek V4 Pro 0813 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-pro",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": {
      "v": 43,
      "kind": "ind",
      "note": "Codex + DeepSeek V4 Pro (max)，单任务成本仅 $0.24",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA Coding Agent Index v1.5（DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb40": {
      "v": 14.1,
      "rawValue": 14.1414141414141,
      "kind": "ind",
      "note": "DeepSeek V4 Pro 0813 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-pro",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 79,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 96.4,
      "kind": "ind",
      "note": "±0.83，归档时开源第一",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 50,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 93,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 51.0,
      "rawValue": 51.0416666666667,
      "kind": "ind",
      "note": "DeepSeek V4 Pro 0813 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-pro",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 80.3,
      "rawValue": 80.3333333333333,
      "kind": "ind",
      "note": "DeepSeek V4 Pro 0813 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-pro",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 5.2,
      "rawValue": 5.173542894564509,
      "kind": "ind",
      "note": "DeepSeek V4 Pro 0813 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-pro",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1465,
      "rawValue": 1465,
      "kind": "ind",
      "note": "DeepSeek-V4-Pro (High, 20260813) · ±7 · 9797 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1458,
      "ciHigh": 1472,
      "variantMismatch": false,
      "config": "High, 20260813"
    },
    "cpt": {
      "v": 0.67,
      "rawValue": 0.6740219040435134,
      "kind": "ind",
      "note": "DeepSeek V4 Pro 0813 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-pro",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 93.0,
      "rawValue": 92.5417731509076,
      "kind": "ind",
      "note": "DeepSeek V4 Pro 0813 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-pro",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 1.32,
      "rawValue": 1.32,
      "kind": "vendor",
      "note": "Direct DeepSeek API. Peak: Monday-Friday 01:00-04:00 and 06:00-10:00 UTC, excluding Chinese public holidays. All other times are off-peak; weekends/Chinese holidays entirely off-peak.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_price",
      "url": "https://api-docs.deepseek.com/quick_start/pricing/",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 3.96,
      "rawValue": 3.96,
      "kind": "vendor",
      "note": "Direct DeepSeek API. Peak: Monday-Friday 01:00-04:00 and 06:00-10:00 UTC, excluding Chinese public holidays. All other times are off-peak; weekends/Chinese holidays entirely off-peak.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_price",
      "url": "https://api-docs.deepseek.com/quick_start/pricing/",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.044,
      "rawValue": 0.044,
      "kind": "vendor",
      "note": "Direct DeepSeek API. Peak: Monday-Friday 01:00-04:00 and 06:00-10:00 UTC, excluding Chinese public holidays. All other times are off-peak; weekends/Chinese holidays entirely off-peak.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_price",
      "url": "https://api-docs.deepseek.com/quick_start/pricing/",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "DeepSeek direct peak · USD / 百万 token",
    "priceAlt": "DeepSeek direct off-peak：输入 $0.66 / 输出 $1.98 / 缓存读取 $0.022；主表为高峰价；高峰 UTC 工作日 01–04、06–10，排除中国法定假日；其他时段低谷。",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_price",
      "url": "https://api-docs.deepseek.com/quick_start/pricing/",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 384000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方公布的单次最大输出 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "paramsTotal": {
      "v": 1600000000000,
      "rawValue": 1600000000000,
      "kind": "vendor",
      "note": "Rounded family preview specification, not an exact 0813 count.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_card4",
      "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 49000000000,
      "rawValue": 49000000000,
      "kind": "vendor",
      "note": "Family specification.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_card4",
      "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "开放权重，具体许可见模型卡",
    "openWeights": true,
    "access": "Direct API deepseek-v4-pro; current checkpoint DeepSeek-V4-Pro-0813.",
    "scenes": [
      "coding",
      "agent"
    ],
    "strength": "待比较候选。依据：AAII 36.0；TB 4.0 14.1%；AA-LCR 80.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；DeepSeek V4 Pro 0813 (Max)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "aacai",
      "vals",
      "vendor",
      "vendor-ds_price",
      "vendor-ds_card4"
    ],
    "fresh": false,
    "aaSlug": "deepseek-v4-pro",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 41.0,
      "rawValue": 41.0101946246525,
      "kind": "ind",
      "note": "DeepSeek V4 Pro 0813 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-pro",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "verificationNotes": [
      "Existing 1.65T cannot be substantiated from this card, which rounds to 1.6T. Exact 0813 weights/license requires checkpoint-specific confirmation."
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "qwen38-27b",
    "name": "Qwen3.8 27B",
    "org": "alibaba",
    "brand": "qwen",
    "variant": "Xhigh",
    "released": "2026-08-14",
    "status": "current",
    "tag": "开源小模型",
    "aaii": {
      "v": 34.0,
      "rawValue": 33.6762858057476,
      "kind": "ind",
      "note": "Qwen3.8 27B (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-27b",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 5.6,
      "rawValue": 5.55555555555556,
      "kind": "ind",
      "note": "Qwen3.8 27B (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/qwen3-8-27b",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 80,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 86,
      "kind": "ind",
      "note": "±1.55",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 48,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 91,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 46.6,
      "rawValue": 46.6435185185185,
      "kind": "ind",
      "note": "Qwen3.8 27B (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/qwen3-8-27b",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 82.0,
      "rawValue": 82.0,
      "kind": "ind",
      "note": "Qwen3.8 27B (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/qwen3-8-27b",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 69.7,
      "rawValue": 69.7137216189536,
      "kind": "ind",
      "note": "Qwen3.8 27B (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-27b",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1437,
      "rawValue": 1437,
      "kind": "ind",
      "note": "Qwen3.8-27B · ±5 · 26238 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1432,
      "ciHigh": 1442,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 1.01,
      "rawValue": 1.0074896941565943,
      "kind": "ind",
      "note": "Qwen3.8 27B (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-27b",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 44.0,
      "rawValue": 43.538366446435,
      "kind": "ind",
      "note": "Qwen3.8 27B (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/qwen3-8-27b",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.5,
      "rawValue": 0.5,
      "kind": "vendor",
      "note": "Implicit cache read is $0.10, explicit read $0.05.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_27",
      "url": "https://www.qwencloud.com/models/qwen3.8-27b",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 3,
      "rawValue": 3,
      "kind": "vendor",
      "note": "Implicit cache read is $0.10, explicit read $0.05.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_27",
      "url": "https://www.qwencloud.com/models/qwen3.8-27b",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.1,
      "rawValue": 0.1,
      "kind": "vendor",
      "note": "Implicit cache read is $0.10, explicit read $0.05.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_27",
      "url": "https://www.qwencloud.com/models/qwen3.8-27b",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Qwen Cloud / Singapore International · USD / 百万 token",
    "ctx": {
      "v": 262144,
      "rawValue": 262144,
      "kind": "vendor",
      "note": "Native weight context.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_27_card",
      "url": "https://huggingface.co/Qwen/Qwen3.8-27B",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 131072,
      "rawValue": 131072,
      "kind": "vendor",
      "note": "Managed API output cap, separate reasoning cap 262144.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_27_ali",
      "url": "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-27b",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": {
      "v": 27000000000,
      "rawValue": 27000000000,
      "kind": "vendor",
      "note": "Rounded model name/dense specification.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_27_card",
      "url": "https://huggingface.co/Qwen/Qwen3.8-27B",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": null,
    "license": "Apache-2.0",
    "openWeights": true,
    "access": "Weights self-hosting; managed Model Studio/qwen3.8-27b API.",
    "scenes": [
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 34.0；TB 4.0 5.6%；AA-LCR 82.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Qwen3.8 27B (Xhigh)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "vals",
      "vendor-q_27_card",
      "vendor-q_27_ali",
      "vendor-q_27"
    ],
    "fresh": false,
    "aaSlug": "qwen3-8-27b",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 33.9,
      "rawValue": 33.920296570899,
      "kind": "ind",
      "note": "Qwen3.8 27B (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/qwen3-8-27b",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "Model Studio China Beijing：输入 $0.424 / 输出 $1.696 / 缓存读取 $0.085；主表为国际新加坡渠道；其他地区与显式/隐式缓存有不同费率。",
    "gdpval21": {
      "v": 1419.0,
      "rawValue": 1418.98,
      "kind": "ind",
      "note": "Stirrup · Qwen3.8 27B (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1398.64,
      "ciHigh": 1439.32
    },
    "frontiercode": {
      "v": 34.2,
      "rawValue": 34.2324,
      "kind": "ind",
      "note": "Stirrup · Qwen3.8 27B (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像",
      "视频"
    ],
    "outputs": [
      "文本"
    ],
    "verificationNotes": [],
    "cai2": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null
  },
  {
    "id": "motif3",
    "name": "Motif 3",
    "org": "motif",
    "brand": "motif",
    "variant": "推理档见来源",
    "released": "2026-08-12",
    "status": "current",
    "tag": "区域旗舰",
    "aaii": {
      "v": 34.0,
      "rawValue": 33.566562209723,
      "kind": "est",
      "note": "Motif 3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/motif-3",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": null,
    "tb21": {
      "v": 75,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": null,
    "gdpval": {
      "v": 35,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 83,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 42.2,
      "rawValue": 42.2453703703704,
      "kind": "ind",
      "note": "Motif 3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/motif-3",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 76.0,
      "rawValue": 76.0,
      "kind": "ind",
      "note": "Motif 3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/motif-3",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 71.6,
      "rawValue": 71.56816015252622,
      "kind": "ind",
      "note": "Motif 3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/motif-3",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": null,
    "cpt": null,
    "speed": null,
    "priceIn": null,
    "priceOut": null,
    "priceCache": null,
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "ctx": {
      "v": 262144,
      "rawValue": 262144,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-motif_card",
      "url": "https://huggingface.co/Motif-Technologies/Motif-3",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": {
      "v": 314000000000,
      "rawValue": 314000000000,
      "kind": "vendor",
      "note": "Approximately 314B architecture; HF tensor display 315B.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-motif_card",
      "url": "https://huggingface.co/Motif-Technologies/Motif-3",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 13200000000,
      "rawValue": 13200000000,
      "kind": "vendor",
      "note": "Approximately 13.2B per token.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-motif_card",
      "url": "https://huggingface.co/Motif-Technologies/Motif-3",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "MIT",
    "openWeights": true,
    "access": "Downloadable official model weights; vendor USD API tariff not established.",
    "scenes": [],
    "strength": "待比较候选。依据：AAII 34.0；AA-LCR 76.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Motif 3。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "vendor-motif_card"
    ],
    "fresh": false,
    "aaSlug": "motif-3",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 37.0,
      "rawValue": 36.9786839666358,
      "kind": "ind",
      "note": "Motif 3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/motif-3",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "verificationNotes": [],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "gpt53-codex",
    "name": "GPT-5.3 Codex",
    "org": "openai",
    "brand": "openai",
    "variant": "Xhigh",
    "released": "2026-02-05",
    "status": "current",
    "tag": "编码特化",
    "aaii": {
      "v": 33.0,
      "rawValue": 32.5028174368983,
      "kind": "est",
      "note": "GPT-5.3 Codex (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-5-3-codex",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": {
      "v": 92,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": null,
    "lcr": {
      "v": 83.3,
      "rawValue": 83.3333333333333,
      "kind": "ind",
      "note": "GPT-5.3 Codex (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/gpt-5-3-codex",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 10.8,
      "rawValue": 10.82419525999293,
      "kind": "ind",
      "note": "GPT-5.3 Codex (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-5-3-codex",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": null,
    "cpt": null,
    "speed": {
      "v": 84.0,
      "rawValue": 84.1946779354095,
      "kind": "ind",
      "note": "GPT-5.3 Codex (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-5-3-codex",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 1.75,
      "rawValue": 1.75,
      "kind": "vendor",
      "note": "USD per 1,000,000 text input tokens; Standard, prompt ≤272,000 except GPT-5.3-Codex",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa53",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.3-codex",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 14,
      "rawValue": 14,
      "kind": "vendor",
      "note": "USD per 1,000,000 output tokens; reasoning may consume output tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa53",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.3-codex",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.175,
      "rawValue": 0.175,
      "kind": "vendor",
      "note": "USD per 1,000,000 cached input tokens; cache read, not write",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa53",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.3-codex",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Standard · 输入 ≤272K · USD / 百万 token",
    "ctx": {
      "v": 400000,
      "rawValue": 400000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa53",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.3-codex",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa53",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.3-codex",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "OpenAI API; account, region and usage-tier eligibility apply; no runtime call made.",
    "scenes": [],
    "strength": "待比较候选。依据：AAII 33.0；AA-LCR 83.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；GPT-5.3 Codex (Xhigh)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "official-oa53"
    ],
    "fresh": false,
    "aaSlug": "gpt-5-3-codex",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 42.5,
      "rawValue": 42.493049119555096,
      "kind": "ind",
      "note": "GPT-5.3 Codex (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/gpt-5-3-codex",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "官方标为 deprecated；保留记录，不作为新项目默认候选。",
    "apiStatus": "deprecated",
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "gemini31pro",
    "name": "Gemini 3.1 Pro Preview",
    "org": "google",
    "brand": "gemini",
    "variant": "推理档见来源",
    "released": "2026-02-19",
    "status": "preview",
    "tag": "预览",
    "aaii": {
      "v": 30.0,
      "rawValue": 29.7185656132261,
      "kind": "ind",
      "note": "Gemini 3.1 Pro Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-1-pro-preview",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 4.0,
      "rawValue": 4.04040404040404,
      "kind": "ind",
      "note": "Gemini 3.1 Pro Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/gemini-3-1-pro-preview",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 74,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 78.8,
      "kind": "ind",
      "note": "±1.83",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 20,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 94,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 58.7,
      "rawValue": 58.6805555555556,
      "kind": "ind",
      "note": "Gemini 3.1 Pro Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/gemini-3-1-pro-preview",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 82.0,
      "rawValue": 82.0,
      "kind": "ind",
      "note": "Gemini 3.1 Pro Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/gemini-3-1-pro-preview",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 49.1,
      "rawValue": 49.13252122554448,
      "kind": "ind",
      "note": "Gemini 3.1 Pro Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-1-pro-preview",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1487,
      "rawValue": 1487,
      "kind": "ind",
      "note": "Gemini 3.1 Pro Preview · ±3 · 130819 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1484,
      "ciHigh": 1490,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 1.3,
      "rawValue": 1.2985855086120641,
      "kind": "ind",
      "note": "Gemini 3.1 Pro Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-1-pro-preview",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 130.0,
      "rawValue": 130.18628799292,
      "kind": "ind",
      "note": "Gemini 3.1 Pro Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-1-pro-preview",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD/1M; Gemini Developer API Paid Standard; not Vertex AI",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 12,
      "rawValue": 12,
      "kind": "vendor",
      "note": "USD/1M, includes thinking tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.2,
      "rawValue": 0.2,
      "kind": "vendor",
      "note": "USD/1M cached tokens; explicit cache storage billed separately where available",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Paid Standard · USD / 百万 token",
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "Official input token limit",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_pro",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-09"
    },
    "maxOut": {
      "v": 65536,
      "rawValue": 65536,
      "kind": "vendor",
      "note": "Output token limit",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_pro",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-09"
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Preview; paid API, no Free API tier.",
    "scenes": [
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 30.0；TB 4.0 4.0%；AA-LCR 82.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Gemini 3.1 Pro Preview。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "arena",
      "vals",
      "official-gg_price",
      "official-gg_pro"
    ],
    "fresh": false,
    "aaSlug": "gemini-3-1-pro-preview",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 47.0,
      "rawValue": 47.0342910101946,
      "kind": "ind",
      "note": "Gemini 3.1 Pro Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/gemini-3-1-pro-preview",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "付费文本标准价；缓存存储、Batch/Flex、音频和长请求单独计价。",
    "inputs": [
      "文本",
      "图像",
      "视频",
      "音频",
      "PDF"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "minimax-m3",
    "name": "MiniMax-M3",
    "org": "minimax",
    "brand": "minimax",
    "variant": "推理档见来源",
    "released": "2026-06-01",
    "status": "current",
    "tag": "开源多模态",
    "aaii": {
      "v": 29.0,
      "rawValue": 29.2202932236316,
      "kind": "ind",
      "note": "MiniMax-M3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/minimax-m3",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 2.0,
      "rawValue": 2.02020202020202,
      "kind": "ind",
      "note": "MiniMax-M3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/minimax-m3",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 65,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 75,
      "kind": "ind",
      "note": "±1.94",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 40,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 93,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 47.1,
      "rawValue": 47.1064814814815,
      "kind": "ind",
      "note": "MiniMax-M3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/minimax-m3",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 83.0,
      "rawValue": 83.0,
      "kind": "ind",
      "note": "MiniMax-M3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/minimax-m3",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 81.6,
      "rawValue": 81.57262905162065,
      "kind": "ind",
      "note": "MiniMax-M3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/minimax-m3",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1440,
      "rawValue": 1440,
      "kind": "ind",
      "note": "MiniMax-M3 · ±4 · 67030 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1436,
      "ciHigh": 1444,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 0.51,
      "rawValue": 0.5076126905781733,
      "kind": "ind",
      "note": "MiniMax-M3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/minimax-m3",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 84.0,
      "rawValue": 84.3330629054236,
      "kind": "ind",
      "note": "MiniMax-M3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/minimax-m3",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.3,
      "rawValue": 0.3,
      "kind": "vendor",
      "note": "Input <=512k. Advertised permanent 50% reduction from list rates.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mm_price",
      "url": "https://platform.minimax.io/docs/pricing/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 1.2,
      "rawValue": 1.2,
      "kind": "vendor",
      "note": "Input <=512k. Advertised permanent 50% reduction from list rates.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mm_price",
      "url": "https://platform.minimax.io/docs/pricing/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.06,
      "rawValue": 0.06,
      "kind": "vendor",
      "note": "Input <=512k. Advertised permanent 50% reduction from list rates.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mm_price",
      "url": "https://platform.minimax.io/docs/pricing/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "MiniMax standard <=512k · USD / 百万 token",
    "priceAlt": "MiniMax standard >512k：输入 $0.6 / 输出 $2.4 / 缓存读取 $0.12；MiniMax priority <=512k：输入 $0.45 / 输出 $1.8 / 缓存读取 $0.09；MiniMax priority >512k：输入 $0.9 / 输出 $3.6 / 缓存读取 $0.18；M3 区分 512K 长输入与 Priority；M3.1 Flash 使用独立平价档。",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mm_guide",
      "url": "https://platform.minimax.io/docs/guides/text-generation",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": {
      "v": 428000000000,
      "rawValue": 428000000000,
      "kind": "vendor",
      "note": "Approximate vendor architecture count; HF tensor display 427B differs.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mm_card",
      "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 23000000000,
      "rawValue": 23000000000,
      "kind": "vendor",
      "note": "Approximate.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mm_card",
      "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "MiniMax Community License",
    "openWeights": true,
    "access": "Direct API and downloadable weights; M3 remains available alongside M3.1 Flash.",
    "scenes": [
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 29.0；TB 4.0 2.0%；AA-LCR 83.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；MiniMax-M3。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "vals",
      "vendor-mm_guide",
      "vendor-mm_card",
      "vendor-mm_license",
      "vendor-mm_price"
    ],
    "fresh": false,
    "aaSlug": "minimax-m3",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 39.0,
      "rawValue": 38.9712696941613,
      "kind": "ind",
      "note": "MiniMax-M3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/minimax-m3",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "verificationNotes": [
      "Existing cache-write $0.38/M was not reconfirmed; do not treat it as current."
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "mimo25pro",
    "name": "MiMo-V2.5-Pro",
    "org": "xiaomi",
    "brand": "xiaomi",
    "variant": "",
    "released": null,
    "status": "prev",
    "tag": "端侧",
    "aaii": {
      "v": 26,
      "kind": "ind",
      "note": "旧 AAII v4.3，未按 v4.3.2 复核",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Artificial Analysis Intelligence Index v4.3",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": null,
    "tb40": {
      "v": 0,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": {
      "v": 65,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 74,
      "kind": "ind",
      "note": "±1.96",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 34,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 87,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 51,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 80,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 75,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": {
      "v": 1466,
      "rawValue": 1466,
      "kind": "ind",
      "note": "MiMo-V2.5-Pro · ±4 · 77883 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1462,
      "ciHigh": 1470,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 0.05,
      "kind": "ind",
      "note": "本期最低",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 52,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 0.43,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceOut": {
      "v": 0.87,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceCache": {
      "v": 0.004,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceMode": "原 API 已于 10/21 10:00（北京时间）退役；旧价仅历史记录",
    "ctx": {
      "v": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "license": "开源权重",
    "openWeights": true,
    "access": "旧 API ID 已失效；迁移至 MiMo-V2.6-Pro。",
    "scenes": [
      "daily"
    ],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：单任务成本 $0.05 全场最低，非幻觉率 75%，还能端侧离线跑。",
    "limits": "10/14 开始旧名转发，10/21 10:00 起原 API ID 返回错误；历史权重、模型分数和在线 API 状态是不同事实。",
    "tech": "",
    "srcs": [
      "aa",
      "vals",
      "vendor-mi_deprecate"
    ],
    "fresh": false,
    "apiStatus": "retired",
    "verificationNotes": [
      "Remove current API price comparison; old ID no longer routes after Oct21 10:00. V2.5-ASR and V2.5-TTS are not retired by this notice."
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "kimi-k27code",
    "name": "Kimi K2.7 Code",
    "org": "moonshot",
    "brand": "kimi",
    "variant": "推理档见来源",
    "released": "2026-06-12",
    "status": "current",
    "tag": "编码特化",
    "aaii": {
      "v": 26.0,
      "rawValue": 25.8121062401836,
      "kind": "ind",
      "note": "Kimi K2.7 Code",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/kimi-k2-7-code",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 1.0,
      "rawValue": 1.01010101010101,
      "kind": "ind",
      "note": "Kimi K2.7 Code",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/kimi-k2-7-code",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 67,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 78.2,
      "kind": "ind",
      "note": "±1.85",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 31,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 90,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 47.8,
      "rawValue": 47.8009259259259,
      "kind": "ind",
      "note": "Kimi K2.7 Code",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/kimi-k2-7-code",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 79.3,
      "rawValue": 79.3333333333333,
      "kind": "ind",
      "note": "Kimi K2.7 Code",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/kimi-k2-7-code",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 17.6,
      "rawValue": 17.62272476558191,
      "kind": "ind",
      "note": "Kimi K2.7 Code",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/kimi-k2-7-code",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": null,
    "cpt": {
      "v": 0.54,
      "rawValue": 0.541190247118529,
      "kind": "ind",
      "note": "Kimi K2.7 Code",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/kimi-k2-7-code",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 58.0,
      "rawValue": 57.709467689924,
      "kind": "ind",
      "note": "Kimi K2.7 Code",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/kimi-k2-7-code",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.95,
      "rawValue": 0.95,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 4,
      "rawValue": 4,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.19,
      "rawValue": 0.19,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Kimi direct standard · USD / 百万 token",
    "ctx": {
      "v": 262144,
      "rawValue": 262144,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": {
      "v": 1000000000000,
      "rawValue": 1000000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_27_card",
      "url": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 32000000000,
      "rawValue": 32000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_27_card",
      "url": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "Modified MIT License",
    "openWeights": true,
    "access": "Kimi API and downloadable weights; K2 signup restriction starts 2026-10-31, existing users unaffected. Retirement planned by end December 2026.",
    "scenes": [],
    "strength": "待比较候选。依据：AAII 26.0；TB 4.0 1.0%；AA-LCR 79.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Kimi K2.7 Code。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "vals",
      "vendor-k_price",
      "vendor-k_27_card",
      "vendor-k_models"
    ],
    "fresh": false,
    "aaSlug": "kimi-k2-7-code",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 35.0,
      "rawValue": 35.032437442075995,
      "kind": "ind",
      "note": "Kimi K2.7 Code",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/kimi-k2-7-code",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "自动前缀缓存默认 5 分钟；写入与读取另计；K3.1 不套用 K2 Batch 折扣。",
    "verificationNotes": [],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "hy3",
    "name": "腾讯混元 Hy3",
    "org": "tencent",
    "brand": "hunyuan",
    "variant": "推理档见来源",
    "released": "2026-07-06",
    "status": "current",
    "tag": "生态绑定",
    "aaii": {
      "v": 25.0,
      "rawValue": 25.2972775731571,
      "kind": "ind",
      "note": "Hy3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/hy3",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 0.5,
      "rawValue": 0.505050505050505,
      "kind": "ind",
      "note": "Hy3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/hy3",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 64,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": null,
    "gdpval": {
      "v": 32,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 90,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 48.6,
      "rawValue": 48.6111111111111,
      "kind": "ind",
      "note": "Hy3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/hy3",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 79.0,
      "rawValue": 79.0,
      "kind": "ind",
      "note": "Hy3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/hy3",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 25.9,
      "rawValue": 25.86967172954434,
      "kind": "ind",
      "note": "Hy3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/hy3",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1454,
      "rawValue": 1454,
      "kind": "ind",
      "note": "Hy3 · ±6 · 13220 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1448,
      "ciHigh": 1460,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 0.07,
      "rawValue": 0.07179763081859954,
      "kind": "ind",
      "note": "Hy3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/hy3",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 81.0,
      "rawValue": 80.6975934933562,
      "kind": "ind",
      "note": "Hy3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/hy3",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.132,
      "rawValue": 0.132,
      "kind": "vendor",
      "note": "Published USD prices for listed regions; no FX calculation.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-hy_usd",
      "url": "https://intl.cloud.tencent.com/document/product/1300/78937",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.528,
      "rawValue": 0.528,
      "kind": "vendor",
      "note": "Published USD prices for listed regions; no FX calculation.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-hy_usd",
      "url": "https://intl.cloud.tencent.com/document/product/1300/78937",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.033,
      "rawValue": 0.033,
      "kind": "vendor",
      "note": "Published USD prices for listed regions; no FX calculation.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-hy_usd",
      "url": "https://intl.cloud.tencent.com/document/product/1300/78937",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Tencent international TokenHub · USD / 百万 token",
    "ctx": {
      "v": 256000,
      "rawValue": 256000,
      "kind": "ind",
      "note": "AA 榜单记录；官方规格另行核对",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/hy3",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "Source writes 128k; cannot use simultaneously with max input 192k beyond shared context.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-hy_models",
      "url": "https://cloud.tencent.com/document/product/1823/130051",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": {
      "v": 295000000000,
      "rawValue": 295000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-hy_card",
      "url": "https://huggingface.co/tencent/Hy3",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 21000000000,
      "rawValue": 21000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-hy_card",
      "url": "https://huggingface.co/tencent/Hy3",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "Apache-2.0",
    "openWeights": true,
    "access": "Tencent TokenHub API hy3 and published weights.",
    "scenes": [
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 25.0；TB 4.0 0.5%；AA-LCR 79.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Hy3。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "vendor-hy_models",
      "vendor-hy_card",
      "vendor-hy_usd"
    ],
    "fresh": false,
    "aaSlug": "hy3",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 33.5,
      "rawValue": 33.4569045412419,
      "kind": "ind",
      "note": "Hy3",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/hy3",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "",
    "verificationNotes": [],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "nemotron3ultra",
    "name": "Nemotron 3 Ultra",
    "org": "nvidia",
    "brand": "nvidia",
    "variant": "Reasoning",
    "released": "2026-06-04",
    "status": "current",
    "tag": "开源",
    "aaii": {
      "v": 23.0,
      "rawValue": 22.9279123422858,
      "kind": "ind",
      "note": "Nemotron 3 Ultra 550B A55B (Reasoning)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 0.5,
      "rawValue": 0.505050505050505,
      "kind": "ind",
      "note": "Nemotron 3 Ultra 550B A55B (Reasoning)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 54,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 69,
      "kind": "ind",
      "note": "±2.07",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 30,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 87,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 40.3,
      "rawValue": 40.2777777777778,
      "kind": "ind",
      "note": "Nemotron 3 Ultra 550B A55B (Reasoning)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 79.3,
      "rawValue": 79.3333333333333,
      "kind": "ind",
      "note": "Nemotron 3 Ultra 550B A55B (Reasoning)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 70.3,
      "rawValue": 70.31216361679225,
      "kind": "ind",
      "note": "Nemotron 3 Ultra 550B A55B (Reasoning)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1426,
      "rawValue": 1426,
      "kind": "ind",
      "note": "NVIDIA-Nemotron-3-Ultra-550B-A55B (NVFP4) · ±7 · 11557 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1419,
      "ciHigh": 1433,
      "variantMismatch": false,
      "config": "NVFP4"
    },
    "cpt": {
      "v": 0.47,
      "rawValue": 0.4696973787770703,
      "kind": "ind",
      "note": "Nemotron 3 Ultra 550B A55B (Reasoning)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 154.0,
      "rawValue": 154.20990181002,
      "kind": "ind",
      "note": "Nemotron 3 Ultra 550B A55B (Reasoning)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.6,
      "rawValue": 0.6,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 2.7,
      "rawValue": 2.7,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.12,
      "rawValue": 0.12,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "Model supports up to 1M; deployment recipes can use smaller windows.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_ultra",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": {
      "v": 550000000000,
      "rawValue": 550000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_ultra",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 55000000000,
      "rawValue": 55000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_ultra",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "OpenMDW-1.1",
    "openWeights": true,
    "access": "Downloadable weights and NVIDIA inference ecosystem; self-hosting supported.",
    "scenes": [],
    "strength": "待比较候选。依据：AAII 23.0；TB 4.0 0.5%；AA-LCR 79.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Nemotron 3 Ultra 550B A55B (Reasoning)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "vals",
      "vendor-nv_ultra"
    ],
    "fresh": false,
    "aaSlug": "nvidia-nemotron-3-ultra-550b-a55b",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 28.4,
      "rawValue": 28.405931417979602,
      "kind": "ind",
      "note": "Nemotron 3 Ultra 550B A55B (Reasoning)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "verificationNotes": [],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "gemini35lite",
    "name": "Gemini 3.5 Flash-Lite",
    "org": "google",
    "brand": "gemini",
    "variant": "推理档见来源",
    "released": "2026-07-21",
    "status": "current",
    "tag": "低价高吞吐",
    "aaii": {
      "v": 22.0,
      "rawValue": 22.1685424839812,
      "kind": "ind",
      "note": "Gemini 3.5 Flash-Lite",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-5-flash-lite",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 1.0,
      "rawValue": 1.01010101010101,
      "kind": "ind",
      "note": "Gemini 3.5 Flash-Lite",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/gemini-3-5-flash-lite",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 54,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": null,
    "gdpval": {
      "v": 28,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 84,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 41.3,
      "rawValue": 41.3194444444444,
      "kind": "ind",
      "note": "Gemini 3.5 Flash-Lite",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/gemini-3-5-flash-lite",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 76.0,
      "rawValue": 76.0,
      "kind": "ind",
      "note": "Gemini 3.5 Flash-Lite",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/gemini-3-5-flash-lite",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 65.6,
      "rawValue": 65.64272211720227,
      "kind": "ind",
      "note": "Gemini 3.5 Flash-Lite",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-5-flash-lite",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1455,
      "rawValue": 1455,
      "kind": "ind",
      "note": "Gemini 3.5 Flash-Lite · ±4 · 35829 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1451,
      "ciHigh": 1459,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 0.19,
      "rawValue": 0.1927430131409478,
      "kind": "ind",
      "note": "Gemini 3.5 Flash-Lite",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-5-flash-lite",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 412.0,
      "rawValue": 412.348348686792,
      "kind": "ind",
      "note": "Gemini 3.5 Flash-Lite",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gemini-3-5-flash-lite",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.3,
      "rawValue": 0.3,
      "kind": "vendor",
      "note": "USD/1M; Gemini Developer API Paid Standard; not Vertex AI",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 2.5,
      "rawValue": 2.5,
      "kind": "vendor",
      "note": "USD/1M, includes thinking tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.03,
      "rawValue": 0.03,
      "kind": "vendor",
      "note": "USD/1M cached tokens; explicit cache storage billed separately where available",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_price",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Paid Standard · USD / 百万 token",
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "Official input token limit",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_lite",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22"
    },
    "maxOut": {
      "v": 65536,
      "rawValue": 65536,
      "kind": "vendor",
      "note": "Output token limit",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-gg_lite",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22"
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Stable model; free API tier with limits and paid API tier.",
    "scenes": [
      "daily"
    ],
    "strength": "待比较候选。依据：AAII 22.0；TB 4.0 1.0%；AA-LCR 76.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Gemini 3.5 Flash-Lite。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "official-gg_price",
      "official-gg_lite"
    ],
    "fresh": false,
    "aaSlug": "gemini-3-5-flash-lite",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 18.8,
      "rawValue": 18.813716404077798,
      "kind": "ind",
      "note": "Gemini 3.5 Flash-Lite",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/gemini-3-5-flash-lite",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "付费文本标准价；缓存存储、Batch/Flex、音频和长请求单独计价。",
    "inputs": [
      "文本",
      "图像",
      "视频",
      "音频",
      "PDF"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "muse-glimmer",
    "name": "Muse Glimmer",
    "org": "meta",
    "brand": "meta",
    "variant": "High",
    "released": "2026-08",
    "status": "current",
    "tag": "开源小模型",
    "aaii": {
      "v": 17.0,
      "rawValue": 17.4754176089465,
      "kind": "ind",
      "note": "Muse Glimmer (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 0.5,
      "rawValue": 0.505050505050505,
      "kind": "ind",
      "note": "Muse Glimmer (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 52,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": null,
    "gdpval": {
      "v": 20,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 84,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 44.9,
      "rawValue": 44.907407407407405,
      "kind": "ind",
      "note": "Muse Glimmer (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 83.3,
      "rawValue": 83.3333333333333,
      "kind": "ind",
      "note": "Muse Glimmer (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 18.1,
      "rawValue": 18.055238530015984,
      "kind": "ind",
      "note": "Muse Glimmer (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1425,
      "rawValue": 1425,
      "kind": "ind",
      "note": "Muse Glimmer · ±10 · 3889 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1415,
      "ciHigh": 1435,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 0.06,
      "rawValue": 0.05755125039078422,
      "kind": "ind",
      "note": "Muse Glimmer (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 121.0,
      "rawValue": 120.523191306145,
      "kind": "ind",
      "note": "Muse Glimmer (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.3,
      "rawValue": 0.3,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 1.2,
      "rawValue": 1.2,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.04,
      "rawValue": 0.04,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "ctx": {
      "v": 131072,
      "rawValue": 131072,
      "kind": "vendor",
      "note": "Card says 131072+; lower advertised boundary, not an exact hard cap.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mglimmer",
      "url": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": {
      "v": 29600000000,
      "rawValue": 29600000000,
      "kind": "vendor",
      "note": "Approximately 29.6B; product family label 30B.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mglimmer",
      "url": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": null,
    "license": "Apache-2.0",
    "openWeights": true,
    "access": "Download and self-host; BF16, quantized and local deployment variants. Vendor targets 24GB/32GB quantized deployment envelopes; workload-dependent.",
    "scenes": [],
    "strength": "待比较候选。依据：AAII 17.0；TB 4.0 0.5%；AA-LCR 83.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Muse Glimmer (High)。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "official-mglimmer"
    ],
    "fresh": false,
    "aaSlug": "muse-glimmer",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 22.0,
      "rawValue": 21.9647822057461,
      "kind": "ind",
      "note": "Muse Glimmer (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/muse-glimmer",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "claude-haiku45",
    "name": "Claude 4.5 Haiku",
    "org": "anthropic",
    "brand": "claude",
    "variant": "",
    "released": null,
    "status": "current",
    "tag": "低价",
    "aaii": {
      "v": 17,
      "kind": "ind",
      "note": "AAII v4.3.2",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": null,
    "tb40": {
      "v": 0,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": {
      "v": 44,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": null,
    "gdpval": {
      "v": 18,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 67,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 42,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 74,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 73,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": null,
    "cpt": {
      "v": 0.28,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 91,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 1,
      "rawValue": 1,
      "kind": "vendor",
      "note": "USD/1M; direct Claude API Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_h45",
      "url": "https://platform.claude.com/docs/en/models/haiku-4-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 5,
      "rawValue": 5,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_h45",
      "url": "https://platform.claude.com/docs/en/models/haiku-4-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.1,
      "rawValue": 0.1,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_h45",
      "url": "https://platform.claude.com/docs/en/models/haiku-4-5/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准 API 价 · USD / 百万 token",
    "priceAlt": "缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。",
    "ctx": {
      "v": 200000,
      "rawValue": 200000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_h45",
      "url": "https://platform.claude.com/docs/en/models/haiku-4-5/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 64000,
      "rawValue": 64000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_h45",
      "url": "https://platform.claude.com/docs/en/models/haiku-4-5/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "Claude API and listed cloud platforms; partner billing/access differs.",
    "scenes": [],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：非幻觉率 73%，Anthropic 家族里最便宜的一档。",
    "limits": "历史资料，未按 10/24 逐项复核：GPQA 只有 67%，与同价位的开源模型相比没有优势。",
    "tech": "",
    "srcs": [
      "aa",
      "official-an_h45"
    ],
    "fresh": false,
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "nemotron35",
    "name": "Nemotron 3.5 Lightning",
    "org": "nvidia",
    "brand": "nvidia",
    "variant": "推理档见来源",
    "released": "2026-08-11",
    "status": "current",
    "tag": "高吞吐开源",
    "aaii": {
      "v": 13.0,
      "rawValue": 12.8572306217144,
      "kind": "ind",
      "note": "Nemotron 3.5 Lightning",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "tb40": {
      "v": 0.5,
      "rawValue": 0.505050505050505,
      "kind": "ind",
      "note": "Nemotron 3.5 Lightning",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb21": {
      "v": 24,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 52.8,
      "kind": "ind",
      "note": "±2.23",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 13,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 74,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 32.1,
      "rawValue": 32.060185185185205,
      "kind": "ind",
      "note": "Nemotron 3.5 Lightning",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 60.3,
      "rawValue": 60.33333333333331,
      "kind": "ind",
      "note": "Nemotron 3.5 Lightning",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 62.4,
      "rawValue": 62.426957537982084,
      "kind": "ind",
      "note": "Nemotron 3.5 Lightning",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": null,
    "cpt": {
      "v": 0.08,
      "rawValue": 0.07948959749314857,
      "kind": "ind",
      "note": "Nemotron 3.5 Lightning",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 287.0,
      "rawValue": 287.260348037312,
      "kind": "ind",
      "note": "Nemotron 3.5 Lightning",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.06,
      "rawValue": 0.06,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.2,
      "rawValue": 0.2,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.035,
      "rawValue": 0.035,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "Model supports up to 1M; deployment recipes can use smaller windows.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_light",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": {
      "v": 30000000000,
      "rawValue": 30000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_light",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 3000000000,
      "rawValue": 3000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_light",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "OpenMDW-1.1",
    "openWeights": true,
    "access": "Downloadable weights and NVIDIA inference ecosystem; self-hosting supported.",
    "scenes": [],
    "strength": "待比较候选。依据：AAII 13.0；TB 4.0 0.5%；AA-LCR 60.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Nemotron 3.5 Lightning。历史分项保留原日期，空白不作为零。",
    "srcs": [
      "aa",
      "vals",
      "vendor-nv_light"
    ],
    "fresh": false,
    "aaSlug": "nemotron-3-5-lightning",
    "lastVerified": "2026-10-24",
    "hle": {
      "v": 10.6,
      "rawValue": 10.5653382761817,
      "kind": "ind",
      "note": "Nemotron 3.5 Lightning",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "verificationNotes": [],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null
  },
  {
    "id": "mistral-l3",
    "name": "Mistral Large 3",
    "org": "mistral",
    "brand": "mistral",
    "variant": "",
    "released": "2025-12-02",
    "status": "current",
    "tag": "欧洲开源",
    "aaii": {
      "v": 9,
      "kind": "ind",
      "note": "AAII v4.3.2",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "cai": null,
    "tb40": {
      "v": 0,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "tb21": {
      "v": 12,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "Terminal-Bench 2.1 · AA 独立复跑",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "swe": {
      "v": 41.4,
      "kind": "ind",
      "note": "±2.21",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": {
      "v": 4,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GDPval-AA v2（2026-09-19 旧快照；当前 AAII 使用 v2.1）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gpqa": {
      "v": 68,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "GPQA Diamond 研究生级科学问答 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "scicode": {
      "v": 37,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "SciCode · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "lcr": {
      "v": 36,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "nonhall": {
      "v": 14,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "arena": {
      "v": 1414,
      "rawValue": 1414,
      "kind": "ind",
      "note": "Mistral Large 3 · ±3 · 86928 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1411,
      "ciHigh": 1417,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": {
      "v": 0.03,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "speed": {
      "v": 79,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceIn": {
      "v": 0.5,
      "rawValue": 0.5,
      "kind": "vendor",
      "note": "API pricing page now explicitly lists cache read.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_price",
      "url": "https://docs.mistral.ai/inference/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 1.5,
      "rawValue": 1.5,
      "kind": "vendor",
      "note": "API pricing page now explicitly lists cache read.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_price",
      "url": "https://docs.mistral.ai/inference/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.05,
      "rawValue": 0.05,
      "kind": "vendor",
      "note": "API pricing page now explicitly lists cache read.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_price",
      "url": "https://docs.mistral.ai/inference/pricing",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Mistral standard · USD / 百万 token",
    "ctx": {
      "v": 256000,
      "kind": "ind",
      "note": "",
      "disp": null,
      "asOf": "2026-10-02",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "maxOut": null,
    "paramsTotal": {
      "v": 675000000000,
      "rawValue": 675000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_3",
      "url": "https://docs.mistral.ai/models/mistral-large-3-25-12",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 41000000000,
      "rawValue": 41000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_3",
      "url": "https://docs.mistral.ai/models/mistral-large-3-25-12",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "license": "Apache-2.0",
    "openWeights": true,
    "access": "Mistral API mistral-large-2512 and published weights; remains listed.",
    "scenes": [],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：Apache 2.0 全开源，欧盟数据驻留与主权合规部署是它真正的卖点。",
    "limits": "历史资料，未按 10/24 逐项复核：本期能力数据全面落后（AA-LCR 36%、TB 2.1 12%、GDPval 4%），单纯按能力选型排不上号。",
    "tech": "历史资料，未按 10/24 逐项复核：9/19 资料记录：细粒度稀疏 MoE，675B 总参 / 41B 激活。",
    "srcs": [
      "aa",
      "vals",
      "vendor-ms_3",
      "vendor-ms_3_card",
      "vendor-ms_price"
    ],
    "fresh": false,
    "priceAlt": "",
    "verificationNotes": [],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "claude-mythos51",
    "name": "Claude Mythos 5.1",
    "org": "anthropic",
    "brand": "claude",
    "variant": "受限访问",
    "released": "2026-09-01",
    "status": "current",
    "tag": "受限",
    "fresh": false,
    "aaii": null,
    "cai": null,
    "tb40": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "arena": null,
    "cpt": null,
    "speed": null,
    "priceIn": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD/1M; direct Claude API Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_m51",
      "url": "https://platform.claude.com/docs/en/models/mythos-5-1/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 50,
      "rawValue": 50,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_m51",
      "url": "https://platform.claude.com/docs/en/models/mythos-5-1/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.25,
      "rawValue": 0.25,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_m51",
      "url": "https://platform.claude.com/docs/en/models/mythos-5-1/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准 API 价 · USD / 百万 token",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_m51",
      "url": "https://platform.claude.com/docs/en/models/mythos-5-1/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_m51",
      "url": "https://platform.claude.com/docs/en/models/mythos-5-1/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "Verified organizations only; Claude API, Bedrock, Google Cloud, Microsoft Foundry; separate safeguards and fallback policy.",
    "scenes": [],
    "strength": "",
    "limits": "历史资料，未按 10/24 逐项复核：不对外开放，没有任何公开评测数据，无法进入常规选型；与 Fable 5.1 同日发布。",
    "tech": "",
    "srcs": [
      "vendor",
      "press",
      "official-an_m51"
    ],
    "priceAlt": "缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。",
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "claude-fable5",
    "name": "Claude Fable 5",
    "org": "anthropic",
    "brand": "claude",
    "variant": "high 档",
    "released": "2026-06-09",
    "status": "prev",
    "tag": "上代",
    "aaii": null,
    "cai": null,
    "tb40": null,
    "tb21": null,
    "swe": {
      "v": 95,
      "kind": "ind",
      "note": "±0.98",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "arena": {
      "v": 1503,
      "rawValue": 1503,
      "kind": "ind",
      "note": "Claude Fable 5 (High) · ±4 · 44253 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1499,
      "ciHigh": 1507,
      "variantMismatch": false,
      "config": "High"
    },
    "cpt": null,
    "speed": null,
    "priceIn": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD/1M; direct Claude API Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_f5",
      "url": "https://platform.claude.com/docs/en/models/fable-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 50,
      "rawValue": 50,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_f5",
      "url": "https://platform.claude.com/docs/en/models/fable-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 1,
      "rawValue": 1,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_f5",
      "url": "https://platform.claude.com/docs/en/models/fable-5/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准 API 价 · USD / 百万 token",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_f5",
      "url": "https://platform.claude.com/docs/en/models/fable-5/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_f5",
      "url": "https://platform.claude.com/docs/en/models/fable-5/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "Claude API and listed cloud platforms; partner billing/access differs.",
    "scenes": [],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：仍是 Arena 真人盲测的第 1 名。",
    "limits": "历史资料，未按 10/24 逐项复核：已被 Fable 5.1 取代，且 5.1 的缓存读取价只有它的 1/4，没有继续用它的理由。",
    "tech": "",
    "srcs": [
      "arena",
      "vals",
      "official-an_f5"
    ],
    "fresh": false,
    "priceAlt": "缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。",
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "claude-opus48",
    "name": "Claude Opus 4.8",
    "org": "anthropic",
    "brand": "claude",
    "variant": "high 档",
    "released": "2026-05-28",
    "status": "prev",
    "tag": "上代",
    "aaii": null,
    "cai": null,
    "tb40": null,
    "tb21": null,
    "swe": {
      "v": 88.6,
      "kind": "ind",
      "note": "±1.42",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "arena": {
      "v": 1481,
      "rawValue": 1481,
      "kind": "ind",
      "note": "Claude Opus 4.8 (High) · ±4 · 64096 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1477,
      "ciHigh": 1485,
      "variantMismatch": false,
      "config": "High"
    },
    "cpt": null,
    "speed": null,
    "priceIn": {
      "v": 5,
      "rawValue": 5,
      "kind": "vendor",
      "note": "USD/1M; direct Claude API Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o48",
      "url": "https://platform.claude.com/docs/en/models/opus-4-8/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 25,
      "rawValue": 25,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o48",
      "url": "https://platform.claude.com/docs/en/models/opus-4-8/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.5,
      "rawValue": 0.5,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o48",
      "url": "https://platform.claude.com/docs/en/models/opus-4-8/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准 API 价 · USD / 百万 token",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o48",
      "url": "https://platform.claude.com/docs/en/models/opus-4-8/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_o48",
      "url": "https://platform.claude.com/docs/en/models/opus-4-8/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "Claude API and listed cloud platforms; partner billing/access differs.",
    "scenes": [],
    "strength": "",
    "limits": "历史资料，未按 10/24 逐项复核：已被 Opus 5 取代。",
    "tech": "",
    "srcs": [
      "arena",
      "vals",
      "official-an_o48"
    ],
    "fresh": false,
    "priceAlt": "缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。",
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "muse12",
    "name": "Muse Spark 1.2",
    "org": "meta",
    "brand": "meta",
    "variant": "xHigh 档",
    "released": "2026-08-05",
    "status": "prev",
    "tag": "上代",
    "aaii": null,
    "cai": null,
    "tb40": null,
    "tb21": null,
    "swe": {
      "v": 86.6,
      "kind": "ind",
      "note": "±1.52",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "arena": {
      "v": 1491,
      "rawValue": 1491,
      "kind": "ind",
      "note": "Muse Spark 1.2 (xHigh) · ±7 · 10470 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1484,
      "ciHigh": 1498,
      "variantMismatch": false,
      "config": "xHigh"
    },
    "cpt": null,
    "speed": null,
    "priceIn": {
      "v": 1.25,
      "rawValue": 1.25,
      "kind": "vendor",
      "note": "Meta Model API Standard; USD/1M; content not used for training",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mprice",
      "url": "https://dev.meta.ai/docs/pricing-rate-limits",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 4.25,
      "rawValue": 4.25,
      "kind": "vendor",
      "note": "Meta Model API Standard; USD/1M; content not used for training",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mprice",
      "url": "https://dev.meta.ai/docs/pricing-rate-limits",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.15,
      "rawValue": 0.15,
      "kind": "vendor",
      "note": "Meta Model API Standard; USD/1M; content not used for training",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mprice",
      "url": "https://dev.meta.ai/docs/pricing-rate-limits",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Meta 标准 API · USD / 百万 token",
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mroster",
      "url": "https://dev.meta.ai/docs/models",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "Meta Model API: Responses, Chat Completions and Messages; Muse Code; account eligibility applies.",
    "scenes": [],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：Arena 1500（#4），真人盲测口碑仍高于 1.3。",
    "limits": "历史资料，未按 10/24 逐项复核：已被 Muse Spark 1.3 取代（同价）。",
    "tech": "",
    "srcs": [
      "arena",
      "vals",
      "official-mprice",
      "official-mroster",
      "official-mresearch"
    ],
    "fresh": false,
    "priceAlt": "Contributor 为不同 API 配置，涉及训练授权且不支持 max；不能把其低价套在本行 max。",
    "inputs": [
      "文本",
      "图像",
      "视频",
      "音频",
      "PDF"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "gemini37",
    "name": "Gemini 3.7 Flash",
    "org": "google",
    "brand": "gemini",
    "variant": "high 档",
    "released": "2026-08-13",
    "status": "prev",
    "tag": "上代",
    "aaii": null,
    "cai": null,
    "tb40": null,
    "tb21": null,
    "swe": {
      "v": 80.8,
      "kind": "ind",
      "note": "±1.76",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "arena": {
      "v": 1490,
      "rawValue": 1490,
      "kind": "ind",
      "note": "Gemini 3.7 Flash (High) · ±5 · 30501 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1485,
      "ciHigh": 1495,
      "variantMismatch": false,
      "config": "High"
    },
    "cpt": null,
    "speed": null,
    "priceIn": {
      "v": 0.75,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceOut": {
      "v": 3.75,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "priceCache": null,
    "priceMode": "标准价（已被 3.8 Flash 同价取代）",
    "ctx": {
      "v": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "maxOut": {
      "v": 65000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方公布的单次最大输出 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "Google AI · API",
    "scenes": [],
    "strength": "",
    "limits": "历史资料，未按 10/24 逐项复核：已被 Gemini 3.8 Flash 以完全相同的价格取代。",
    "tech": "",
    "srcs": [
      "arena",
      "vals"
    ],
    "fresh": false,
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "grok45",
    "name": "Grok 4.5",
    "org": "xai",
    "brand": "grok",
    "variant": "high 档",
    "released": "2026-07-08",
    "status": "prev",
    "tag": "上代",
    "aaii": null,
    "cai": null,
    "tb40": null,
    "tb21": null,
    "swe": {
      "v": 86.6,
      "kind": "ind",
      "note": "±1.52",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "arena": {
      "v": 1466,
      "rawValue": 1466,
      "kind": "ind",
      "note": "Grok 4.5 · ±4 · 39880 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1462,
      "ciHigh": 1470,
      "variantMismatch": false,
      "config": ""
    },
    "cpt": null,
    "speed": null,
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD/1M; short-context Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x45",
      "url": "https://docs.x.ai/developers/models/grok-4.5",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 6,
      "rawValue": 6,
      "kind": "vendor",
      "note": "USD/1M; short-context Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x45",
      "url": "https://docs.x.ai/developers/models/grok-4.5",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.3,
      "rawValue": 0.3,
      "kind": "vendor",
      "note": "USD/1M; short-context Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x45",
      "url": "https://docs.x.ai/developers/models/grok-4.5",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Global Standard · 输入 <200K · USD / 百万 token",
    "ctx": {
      "v": 500000,
      "rawValue": 500000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-x45",
      "url": "https://docs.x.ai/developers/models/grok-4.5",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "xAI API; current documentation uses SpaceXSI branding. Grok Build is an agent product.",
    "scenes": [],
    "strength": "",
    "limits": "历史资料，未按 10/24 逐项复核：已被 Grok 4.6 以同价取代。",
    "tech": "",
    "srcs": [
      "vals",
      "official-x45",
      "official-xlog"
    ],
    "fresh": false,
    "priceAlt": "长输入整单翻倍；官方表格 ≥200K 与说明文字 >200K 的边界冲突待核实。",
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "glm52",
    "name": "GLM-5.2",
    "org": "zai",
    "brand": "zai",
    "variant": "max 档",
    "released": "2026-06-16",
    "status": "prev",
    "tag": "上代开源",
    "aaii": null,
    "cai": null,
    "tb40": null,
    "tb21": null,
    "swe": {
      "v": 82.8,
      "kind": "ind",
      "note": "±1.69",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "arena": {
      "v": 1475,
      "rawValue": 1475,
      "kind": "ind",
      "note": "GLM-5.2 (Max) · ±4 · 52283 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1471,
      "ciHigh": 1479,
      "variantMismatch": false,
      "config": "Max"
    },
    "cpt": null,
    "speed": null,
    "priceIn": {
      "v": 1.4,
      "rawValue": 1.4,
      "kind": "vendor",
      "note": "Cache storage advertised limited-time free, end date unspecified; no verified pay-as-you-go off-peak offer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 4.4,
      "rawValue": 4.4,
      "kind": "vendor",
      "note": "Cache storage advertised limited-time free, end date unspecified; no verified pay-as-you-go off-peak offer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.26,
      "rawValue": 0.26,
      "kind": "vendor",
      "note": "Cache storage advertised limited-time free, end date unspecified; no verified pay-as-you-go off-peak offer.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Z.ai direct · USD / 百万 token",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_52",
      "url": "https://docs.z.ai/guides/llm/glm-5.2",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctxNote": "本期资料未给出，上一版页面此处误填「开源」",
    "maxOut": null,
    "paramsTotal": {
      "v": 744000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "厂商公布的模型总参数规模",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "paramsAct": {
      "v": 40000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "MoE 架构单次前向的激活参数",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "license": "MIT",
    "openWeights": true,
    "access": "Direct Z.ai API and separately published weights.",
    "scenes": [],
    "strength": "历史资料，未按 10/24 逐项复核：9/19 研究判断（历史）：第一家进入前沿俱乐部的非中美巨头开源模型。",
    "limits": "历史资料，未按 10/24 逐项复核：已被 GLM-5.3 以同价取代。",
    "tech": "",
    "srcs": [
      "vals",
      "vendor-z_52",
      "vendor-z_52_card",
      "vendor-z_releases",
      "vendor-z_price"
    ],
    "fresh": false,
    "priceAlt": "缓存存储限时免费，未给结束日期；不要混入订阅套餐的优惠。",
    "verificationNotes": [],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "gpt55",
    "name": "GPT-5.5",
    "org": "openai",
    "brand": "openai",
    "variant": "high 档",
    "released": null,
    "status": "prev",
    "tag": "上代",
    "aaii": null,
    "cai": null,
    "tb40": null,
    "tb21": null,
    "swe": {
      "v": 82.6,
      "kind": "ind",
      "note": "±1.70",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "arena": {
      "v": 1482,
      "rawValue": 1482,
      "kind": "ind",
      "note": "GPT-5.5 (High) · ±4 · 69375 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1478,
      "ciHigh": 1486,
      "variantMismatch": false,
      "config": "High"
    },
    "cpt": null,
    "speed": null,
    "priceIn": {
      "v": 5,
      "rawValue": 5,
      "kind": "vendor",
      "note": "USD per 1,000,000 text input tokens; Standard, prompt ≤272,000 except GPT-5.3-Codex",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa55",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.5",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 30,
      "rawValue": 30,
      "kind": "vendor",
      "note": "USD per 1,000,000 output tokens; reasoning may consume output tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa55",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.5",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.5,
      "rawValue": 0.5,
      "kind": "vendor",
      "note": "USD per 1,000,000 cached input tokens; cache read, not write",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa55",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.5",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Standard · 输入 ≤272K · USD / 百万 token",
    "ctx": {
      "v": 1050000,
      "rawValue": 1050000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa55",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.5",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa55",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.5",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "闭源",
    "openWeights": false,
    "access": "OpenAI API; account, region and usage-tier eligibility apply; no runtime call made.",
    "scenes": [],
    "strength": "",
    "limits": "历史资料，未按 10/24 逐项复核：已被 GPT-5.6 家族取代，价格却更高。",
    "tech": "",
    "srcs": [
      "arena",
      "vals",
      "official-oa55"
    ],
    "fresh": false,
    "priceAlt": "超过 272K 输入，整单输入/缓存价 ×2、输出价 ×1.5；Fast ×2，Ultrafast ×6；Batch/Flex 半价（以该模型支持范围为准）。",
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "ds-v4flash0731",
    "name": "DeepSeek V4 Flash 0731",
    "org": "deepseek",
    "brand": "deepseek",
    "variant": "",
    "released": "2026-07-31",
    "status": "prev",
    "tag": "已退役",
    "aaii": null,
    "cai": null,
    "tb40": null,
    "tb21": null,
    "swe": {
      "v": 88.8,
      "kind": "ind",
      "note": "±1.41",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "vals.ai 独立复测 · Mini-SWE-agent harness · 500 题",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "arena": null,
    "cpt": null,
    "speed": null,
    "priceIn": null,
    "priceOut": null,
    "priceCache": null,
    "priceMode": "已退役 —— 模型名 deepseek-v4-flash 现暂时路由到 V4.1 Flash",
    "ctx": {
      "v": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "maxOut": {
      "v": 384000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-09-19",
      "basis": "官方公布的单次最大输出 token",
      "src": "history",
      "url": "https://github.com/cwyp11/llm-board/blob/34642c39d19cc3f324fcd9974eeb86876bd5ccf5/src/js/data.js"
    },
    "paramsTotal": null,
    "paramsAct": null,
    "license": "MIT",
    "openWeights": true,
    "access": "Direct original checkpoint retired; deepseek-v4-flash alias routes to 1017.",
    "scenes": [],
    "strength": "",
    "limits": "历史资料，未按 10/24 逐项复核：2026-09-10 起被 V4.1 Flash 取代并退役。",
    "tech": "",
    "srcs": [
      "vals",
      "vendor",
      "vendor-ds_price"
    ],
    "fresh": false,
    "apiStatus": "retired_original_checkpoint_alias_redirected",
    "verificationNotes": [
      "Do not assume Tencent pinned 0731 channels follow direct-API retirement; channel catalog still lists them."
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "deepswe": null,
    "sweatlas": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "kimi-k31pro",
    "name": "Kimi K3.1 Pro",
    "org": "moonshot",
    "brand": "kimi",
    "variant": "推理档见来源",
    "released": "",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "vendor-k_price",
      "vendor-k_31",
      "vendor-k_31_blog",
      "vendor-k_archive"
    ],
    "fresh": true,
    "license": "计划开放权重；当前未发布，许可待公开。",
    "openWeights": "pending",
    "access": "Kimi API, Kimi apps, Work and Code. API access unlocked after successful top-up minimum USD1; enterprise access defaults off.",
    "aaSlug": "kimi-k3-1-pro",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 55.0,
      "rawValue": 55.0869210959395,
      "kind": "ind",
      "note": "Kimi K3.1 Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/kimi-k3-1-pro",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 67.2,
      "rawValue": 67.1717171717172,
      "kind": "ind",
      "note": "Kimi K3.1 Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/kimi-k3-1-pro",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 60.8,
      "rawValue": 60.76388888888889,
      "kind": "ind",
      "note": "Kimi K3.1 Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/kimi-k3-1-pro",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 86.3,
      "rawValue": 86.3333333333333,
      "kind": "ind",
      "note": "Kimi K3.1 Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/kimi-k3-1-pro",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 56.1,
      "rawValue": 56.10751956447771,
      "kind": "ind",
      "note": "Kimi K3.1 Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/kimi-k3-1-pro",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 52.5,
      "rawValue": 52.4559777571826,
      "kind": "ind",
      "note": "Kimi K3.1 Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/kimi-k3-1-pro",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 77.0,
      "rawValue": 77.0917244477023,
      "kind": "ind",
      "note": "Kimi K3.1 Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/kimi-k3-1-pro",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 2.11,
      "rawValue": 2.1145052918767275,
      "kind": "ind",
      "note": "Kimi K3.1 Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/kimi-k3-1-pro",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.2,
      "rawValue": 0.2,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Kimi direct standard · USD / 百万 token",
    "priceAlt": "自动前缀缓存默认 5 分钟；写入与读取另计；K3.1 不套用 K2 Batch 折扣。",
    "gdpval21": {
      "v": 1846.0,
      "rawValue": 1845.72,
      "kind": "ind",
      "note": "Stirrup · Kimi K3.1 Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1819.56,
      "ciHigh": 1871.87
    },
    "frontiercode": {
      "v": 47.1,
      "rawValue": 47.0664,
      "kind": "ind",
      "note": "Stirrup · Kimi K3.1 Pro",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "strength": "待比较候选。依据：AAII 55.0；TB 4.0 67.2%；AA-LCR 86.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Kimi K3.1 Pro。历史分项保留原日期，空白不作为零。",
    "maxOut": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "max_completion_tokens defaults to 131072; max setting 1048576, shared context.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_31",
      "url": "https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "releaseNote": "发布日期待核实：AA 记录 10/23，官方研究档案记录 10/24；可能涉及时间口径，暂不合并。",
    "verificationNotes": [],
    "cai2": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null
  },
  {
    "id": "muse-wonder-full",
    "name": "Muse Wonder Full",
    "org": "meta",
    "brand": "meta",
    "variant": "Max",
    "released": "2026-10-12",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "official-mwonder",
      "official-mroster",
      "official-mwonder_release"
    ],
    "fresh": true,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Muse Code 的 Power Usage / Maximum Usage 计划；韩国不可用。",
    "aaSlug": "muse-wonder-full",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 56.0,
      "rawValue": 55.8021199855616,
      "kind": "ind",
      "note": "Muse Wonder Full (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-wonder-full",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 57.1,
      "rawValue": 57.07070707070711,
      "kind": "ind",
      "note": "Muse Wonder Full (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/muse-wonder-full",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 62.6,
      "rawValue": 62.6157407407407,
      "kind": "ind",
      "note": "Muse Wonder Full (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/muse-wonder-full",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 83.7,
      "rawValue": 83.6666666666667,
      "kind": "ind",
      "note": "Muse Wonder Full (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/muse-wonder-full",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 77.0,
      "rawValue": 76.98855297916054,
      "kind": "ind",
      "note": "Muse Wonder Full (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-wonder-full",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 53.6,
      "rawValue": 53.6144578313253,
      "kind": "ind",
      "note": "Muse Wonder Full (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/muse-wonder-full",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "ind",
      "note": "AA 榜单记录；官方规格另行核对",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-wonder-full",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "仅 Muse Code 订阅，未公布按 token 计费 API",
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "gdpval21": {
      "v": 1857.0,
      "rawValue": 1857.09,
      "kind": "ind",
      "note": "Stirrup · Muse Wonder Full (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1832.21,
      "ciHigh": 1881.97
    },
    "frontiercode": {
      "v": 44.9,
      "rawValue": 44.8865666666667,
      "kind": "ind",
      "note": "Stirrup · Muse Wonder Full (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像",
      "音频",
      "视频"
    ],
    "outputs": [
      "文本"
    ],
    "strength": "待比较候选。依据：AAII 56.0；TB 4.0 57.1%；AA-LCR 83.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Muse Wonder Full (Max)。历史分项保留原日期，空白不作为零。",
    "cai2": {
      "v": 58.9,
      "rawValue": 58.8804489084392,
      "kind": "ind",
      "note": "Muse Code + Muse Wonder Full (max) · 1.4.5-R5426.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 48.7,
      "rawValue": 48.733233333333295,
      "kind": "ind",
      "note": "Muse Code + Muse Wonder Full (max) · 1.4.5-R5426.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 68.8,
      "rawValue": 68.8172043010753,
      "kind": "ind",
      "note": "Muse Code + Muse Wonder Full (max) · 1.4.5-R5426.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "cpt": null,
    "priceIn": null,
    "priceOut": null,
    "priceCache": null,
    "speed": null,
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null
  },
  {
    "id": "muse-wonder",
    "name": "Muse Wonder",
    "org": "meta",
    "brand": "meta",
    "variant": "Max",
    "released": "2026-10-12",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "official-mprice",
      "official-mroster",
      "official-mwonder_release"
    ],
    "fresh": true,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Meta Model API and Muse Code; unavailable in South Korea. API max effort does not select Wonder Full.",
    "aaSlug": "muse-wonder",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 52.0,
      "rawValue": 52.393894697293,
      "kind": "ind",
      "note": "Muse Wonder (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-wonder",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 52.0,
      "rawValue": 52.020202020202,
      "kind": "ind",
      "note": "Muse Wonder (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/muse-wonder",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 60.3,
      "rawValue": 60.300925925925895,
      "kind": "ind",
      "note": "Muse Wonder (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/muse-wonder",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 80.7,
      "rawValue": 80.6666666666667,
      "kind": "ind",
      "note": "Muse Wonder (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/muse-wonder",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 73.5,
      "rawValue": 73.48613469156763,
      "kind": "ind",
      "note": "Muse Wonder (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-wonder",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 50.1,
      "rawValue": 50.0926784059314,
      "kind": "ind",
      "note": "Muse Wonder (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/muse-wonder",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 144.0,
      "rawValue": 143.52691853278,
      "kind": "ind",
      "note": "Muse Wonder (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-wonder",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 4.54,
      "rawValue": 4.540034681803926,
      "kind": "ind",
      "note": "Muse Wonder (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-wonder",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mroster",
      "url": "https://dev.meta.ai/docs/models",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 4,
      "rawValue": 4,
      "kind": "vendor",
      "note": "USD/1M; Standard; no Contributor API mode",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mprice",
      "url": "https://dev.meta.ai/docs/pricing-rate-limits",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 20,
      "rawValue": 20,
      "kind": "vendor",
      "note": "USD/1M; Standard; no Contributor API mode",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mprice",
      "url": "https://dev.meta.ai/docs/pricing-rate-limits",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.2,
      "rawValue": 0.2,
      "kind": "vendor",
      "note": "USD/1M; Standard; no Contributor API mode",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mprice",
      "url": "https://dev.meta.ai/docs/pricing-rate-limits",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Meta 标准 API · USD / 百万 token",
    "priceAlt": "Contributor 为不同 API 配置，涉及训练授权且不支持 max；不能把其低价套在本行 max。",
    "gdpval21": {
      "v": 1770.0,
      "rawValue": 1770.34,
      "kind": "ind",
      "note": "Stirrup · Muse Wonder (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1747.21,
      "ciHigh": 1793.47
    },
    "frontiercode": {
      "v": 46.5,
      "rawValue": 46.4713333333333,
      "kind": "ind",
      "note": "Stirrup · Muse Wonder (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像",
      "视频",
      "音频",
      "PDF"
    ],
    "outputs": [
      "文本"
    ],
    "strength": "待比较候选。依据：AAII 52.0；TB 4.0 52.0%；AA-LCR 80.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Muse Wonder (Max)。历史分项保留原日期，空白不作为零。",
    "arena": {
      "v": 1509,
      "rawValue": 1509,
      "kind": "ind",
      "note": "Muse Wonder (Max) · ±8 · 6001 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1501,
      "ciHigh": 1517,
      "variantMismatch": false,
      "config": "Max"
    },
    "cai2": {
      "v": 52.0,
      "rawValue": 51.9768236993592,
      "kind": "ind",
      "note": "Muse Code + Muse Wonder (max) · 1.4.5-R5426.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 46.4,
      "rawValue": 46.3915333333333,
      "kind": "ind",
      "note": "Muse Code + Muse Wonder (max) · 1.4.5-R5426.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 61.6,
      "rawValue": 61.559139784946204,
      "kind": "ind",
      "note": "Muse Code + Muse Wonder (max) · 1.4.5-R5426.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null
  },
  {
    "id": "muse-spark-open",
    "name": "Muse Spark Open",
    "org": "meta",
    "brand": "meta",
    "variant": "Xhigh",
    "released": "2026-10-15",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "official-mopen_card"
    ],
    "fresh": true,
    "license": "Muse Spark Open 社区许可；需核对访问表单及商业条件。",
    "openWeights": true,
    "access": "BF16/NVFP4 downloadable weights; self-host or listed partners; weight access form and license apply.",
    "aaSlug": "muse-spark-open",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 39.0,
      "rawValue": 38.8666662997805,
      "kind": "ind",
      "note": "Muse Spark Open (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 8.1,
      "rawValue": 8.08080808080808,
      "kind": "ind",
      "note": "Muse Spark Open (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 58.4,
      "rawValue": 58.449074074074105,
      "kind": "ind",
      "note": "Muse Spark Open (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 78.3,
      "rawValue": 78.3333333333333,
      "kind": "ind",
      "note": "Muse Spark Open (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 75.9,
      "rawValue": 75.93304061470911,
      "kind": "ind",
      "note": "Muse Spark Open (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 43.9,
      "rawValue": 43.8832252085264,
      "kind": "ind",
      "note": "Muse Spark Open (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 143.0,
      "rawValue": 142.891266802179,
      "kind": "ind",
      "note": "Muse Spark Open (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.84,
      "rawValue": 0.8441853713458678,
      "kind": "ind",
      "note": "Muse Spark Open (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "ind",
      "note": "AA 榜单记录；官方规格另行核对",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 1.25,
      "rawValue": 1.25,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 4.25,
      "rawValue": 4.25,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.15,
      "rawValue": 0.15,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/muse-spark-open",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "第三方推理渠道参考价；官方未公布统一 token 标价",
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "gdpval21": {
      "v": 1401.0,
      "rawValue": 1401.12,
      "kind": "ind",
      "note": "Stirrup · Muse Spark Open (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1381.82,
      "ciHigh": 1420.42
    },
    "frontiercode": {
      "v": 27.6,
      "rawValue": 27.6476,
      "kind": "ind",
      "note": "Stirrup · Muse Spark Open (Xhigh)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像",
      "视频",
      "音频"
    ],
    "outputs": [
      "文本"
    ],
    "strength": "待比较候选。依据：AAII 39.0；TB 4.0 8.1%；AA-LCR 78.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Muse Spark Open (Xhigh)。历史分项保留原日期，空白不作为零。",
    "paramsTotal": {
      "v": 816000000000,
      "rawValue": 816000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mopen_card",
      "url": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-15"
    },
    "paramsAct": {
      "v": 42000000000,
      "rawValue": 42000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-mopen_card",
      "url": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-15"
    },
    "cai2": {
      "v": 26.3,
      "rawValue": 26.300702389486304,
      "kind": "ind",
      "note": "Muse Code + Muse Spark Open (xhigh) · 1.4.2-R4684.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 22.5,
      "rawValue": 22.5401,
      "kind": "ind",
      "note": "Muse Code + Muse Spark Open (xhigh) · 1.4.2-R4684.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 50.8,
      "rawValue": 50.8064516129032,
      "kind": "ind",
      "note": "Muse Code + Muse Spark Open (xhigh) · 1.4.2-R4684.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "maxOut": null,
    "arena": null
  },
  {
    "id": "claude-haiku55",
    "name": "Claude Haiku 5.5",
    "org": "anthropic",
    "brand": "claude",
    "variant": "Max",
    "released": "2026-10-07",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "official-an_h55"
    ],
    "fresh": true,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Claude API and listed cloud platforms; partner billing/access differs.",
    "aaSlug": "claude-haiku-5-5",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 43.0,
      "rawValue": 43.3950199670746,
      "kind": "ind",
      "note": "Claude Haiku 5.5 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-haiku-5-5",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 32.8,
      "rawValue": 32.8282828282828,
      "kind": "ind",
      "note": "Claude Haiku 5.5 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/claude-haiku-5-5",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 55.0,
      "rawValue": 54.976851851851805,
      "kind": "ind",
      "note": "Claude Haiku 5.5 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/claude-haiku-5-5",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 82.7,
      "rawValue": 82.6666666666667,
      "kind": "ind",
      "note": "Claude Haiku 5.5 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/claude-haiku-5-5",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 59.6,
      "rawValue": 59.57558291852241,
      "kind": "ind",
      "note": "Claude Haiku 5.5 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-haiku-5-5",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 44.4,
      "rawValue": 44.3929564411492,
      "kind": "ind",
      "note": "Claude Haiku 5.5 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/claude-haiku-5-5",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 235.0,
      "rawValue": 235.007521973794,
      "kind": "ind",
      "note": "Claude Haiku 5.5 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-haiku-5-5",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.21,
      "rawValue": 0.21276971216992022,
      "kind": "ind",
      "note": "Claude Haiku 5.5 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-haiku-5-5",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_h55",
      "url": "https://platform.claude.com/docs/en/models/haiku-5-5/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.1,
      "rawValue": 0.1,
      "kind": "vendor",
      "note": "USD/1M; total prompt ≤100000, including cached input",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_h55",
      "url": "https://platform.claude.com/docs/en/models/haiku-5-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.5,
      "rawValue": 0.5,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_h55",
      "url": "https://platform.claude.com/docs/en/models/haiku-5-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.01,
      "rawValue": 0.01,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_h55",
      "url": "https://platform.claude.com/docs/en/models/haiku-5-5/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准价 · 总输入 ≤100K · USD / 百万 token",
    "priceAlt": "超过 100K 总输入，整单输入/输出/缓存读取为 $0.50/$2.50/$0.05；同步最大输出 128K，Batch 另见来源。",
    "gdpval21": {
      "v": 1619.0,
      "rawValue": 1619.32,
      "kind": "ind",
      "note": "Stirrup · Claude Haiku 5.5 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1596.97,
      "ciHigh": 1641.67
    },
    "frontiercode": {
      "v": 41.8,
      "rawValue": 41.8067,
      "kind": "ind",
      "note": "Stirrup · Claude Haiku 5.5 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "strength": "待比较候选。依据：AAII 43.0；TB 4.0 32.8%；AA-LCR 82.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Claude Haiku 5.5 (Max)。历史分项保留原日期，空白不作为零。",
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_h55",
      "url": "https://platform.claude.com/docs/en/models/haiku-5-5/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "arena": {
      "v": 1425,
      "rawValue": 1425,
      "kind": "ind",
      "note": "Claude Haiku 5.5 (High) · ±8 · 6080 票 · 源榜 10/22",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "arena-current",
      "url": "https://arena.ai/leaderboard/chat/text",
      "basis": "Arena Text Overall · snapshot 2026-10-22",
      "checkedAt": "2026-10-24",
      "sourceDate": "2026-10-22",
      "ciLow": 1417,
      "ciHigh": 1433,
      "variantMismatch": false,
      "config": "High"
    },
    "cai2": {
      "v": 37.3,
      "rawValue": 37.349605072227696,
      "kind": "ind",
      "note": "Claude Code + Haiku 5.5 (max) · 2.1.289/2.1.296 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 47.4,
      "rawValue": 47.3697666666667,
      "kind": "ind",
      "note": "Claude Code + Haiku 5.5 (max) · 2.1.289/2.1.296 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 33.9,
      "rawValue": 33.8709677419355,
      "kind": "ind",
      "note": "Claude Code + Haiku 5.5 (max) · 2.1.289/2.1.296 · 含回退",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "paramsTotal": null,
    "paramsAct": null
  },
  {
    "id": "minimax-m31flash",
    "name": "MiniMax-M3.1-Flash",
    "org": "minimax",
    "brand": "minimax",
    "variant": "推理档见来源",
    "released": "2026-10-19",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "vendor-mm_guide",
      "vendor-mm_31",
      "vendor-mm_price"
    ],
    "fresh": true,
    "license": "当前权重尚未公开；后续开放计划与许可待公告。",
    "openWeights": false,
    "access": "MiniMax API and MiniMax Code; weights promised later.",
    "aaSlug": "minimax-m3-1-flash",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 43.0,
      "rawValue": 42.7057475126235,
      "kind": "ind",
      "note": "MiniMax-M3.1-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/minimax-m3-1-flash",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 25.8,
      "rawValue": 25.7575757575758,
      "kind": "ind",
      "note": "MiniMax-M3.1-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/minimax-m3-1-flash",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 53.4,
      "rawValue": 53.3564814814815,
      "kind": "ind",
      "note": "MiniMax-M3.1-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/minimax-m3-1-flash",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 79.7,
      "rawValue": 79.6666666666667,
      "kind": "ind",
      "note": "MiniMax-M3.1-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/minimax-m3-1-flash",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 7.2,
      "rawValue": 7.191780821917804,
      "kind": "ind",
      "note": "MiniMax-M3.1-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/minimax-m3-1-flash",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 48.0,
      "rawValue": 47.9610750695088,
      "kind": "ind",
      "note": "MiniMax-M3.1-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/minimax-m3-1-flash",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 87.0,
      "rawValue": 87.1705585238758,
      "kind": "ind",
      "note": "MiniMax-M3.1-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/minimax-m3-1-flash",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.22,
      "rawValue": 0.2201135746720313,
      "kind": "ind",
      "note": "MiniMax-M3.1-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/minimax-m3-1-flash",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mm_guide",
      "url": "https://platform.minimax.io/docs/guides/text-generation",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.15,
      "rawValue": 0.15,
      "kind": "vendor",
      "note": "Flat pricing; no M3 long-input tiers or priority multipliers transferred.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mm_price",
      "url": "https://platform.minimax.io/docs/pricing/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.6,
      "rawValue": 0.6,
      "kind": "vendor",
      "note": "Flat pricing; no M3 long-input tiers or priority multipliers transferred.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mm_price",
      "url": "https://platform.minimax.io/docs/pricing/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.015,
      "rawValue": 0.015,
      "kind": "vendor",
      "note": "Flat pricing; no M3 long-input tiers or priority multipliers transferred.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mm_price",
      "url": "https://platform.minimax.io/docs/pricing/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "MiniMax direct M3.1 Flash · USD / 百万 token",
    "priceAlt": "M3 区分 512K 长输入与 Priority；M3.1 Flash 使用独立平价档。",
    "gdpval21": {
      "v": 1458.0,
      "rawValue": 1457.69,
      "kind": "ind",
      "note": "Stirrup · MiniMax-M3.1-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1437.86,
      "ciHigh": 1477.51
    },
    "frontiercode": {
      "v": 38.6,
      "rawValue": 38.575900000000004,
      "kind": "ind",
      "note": "Stirrup · MiniMax-M3.1-Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "strength": "待比较候选。依据：AAII 43.0；TB 4.0 25.8%；AA-LCR 79.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；MiniMax-M3.1-Flash。历史分项保留原日期，空白不作为零。",
    "verificationNotes": [],
    "cai2": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null
  },
  {
    "id": "ds-v41flash-1017",
    "name": "DeepSeek V4.1 Flash · 1017",
    "org": "deepseek",
    "brand": "deepseek",
    "variant": "Max",
    "released": "2026-10-17",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "vendor-ds_price",
      "vendor-ds_card1017",
      "vendor-ds_release1017"
    ],
    "fresh": true,
    "license": "MIT",
    "openWeights": true,
    "access": "Website, app, direct API and downloadable weights.",
    "aaSlug": "deepseek-v4-1-flash-1017",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 45.0,
      "rawValue": 45.0965048681912,
      "kind": "ind",
      "note": "DeepSeek V4.1 Flash 1017 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 33.8,
      "rawValue": 33.8383838383838,
      "kind": "ind",
      "note": "DeepSeek V4.1 Flash 1017 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 55.9,
      "rawValue": 55.9027777777778,
      "kind": "ind",
      "note": "DeepSeek V4.1 Flash 1017 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 82.7,
      "rawValue": 82.6666666666667,
      "kind": "ind",
      "note": "DeepSeek V4.1 Flash 1017 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 33.2,
      "rawValue": 33.24584426946632,
      "kind": "ind",
      "note": "DeepSeek V4.1 Flash 1017 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 43.3,
      "rawValue": 43.327154772937895,
      "kind": "ind",
      "note": "DeepSeek V4.1 Flash 1017 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 195.0,
      "rawValue": 195.157086034074,
      "kind": "ind",
      "note": "DeepSeek V4.1 Flash 1017 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.26,
      "rawValue": 0.2620484273114172,
      "kind": "ind",
      "note": "DeepSeek V4.1 Flash 1017 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_price",
      "url": "https://api-docs.deepseek.com/quick_start/pricing/",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.3,
      "rawValue": 0.3,
      "kind": "vendor",
      "note": "Direct DeepSeek API. Peak: Monday-Friday 01:00-04:00 and 06:00-10:00 UTC, excluding Chinese public holidays. All other times are off-peak; weekends/Chinese holidays entirely off-peak.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_price",
      "url": "https://api-docs.deepseek.com/quick_start/pricing/",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 1.2,
      "rawValue": 1.2,
      "kind": "vendor",
      "note": "Direct DeepSeek API. Peak: Monday-Friday 01:00-04:00 and 06:00-10:00 UTC, excluding Chinese public holidays. All other times are off-peak; weekends/Chinese holidays entirely off-peak.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_price",
      "url": "https://api-docs.deepseek.com/quick_start/pricing/",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.006,
      "rawValue": 0.006,
      "kind": "vendor",
      "note": "Direct DeepSeek API. Peak: Monday-Friday 01:00-04:00 and 06:00-10:00 UTC, excluding Chinese public holidays. All other times are off-peak; weekends/Chinese holidays entirely off-peak.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ds_price",
      "url": "https://api-docs.deepseek.com/quick_start/pricing/",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "DeepSeek direct peak · USD / 百万 token",
    "priceAlt": "DeepSeek direct off-peak：输入 $0.15 / 输出 $0.6 / 缓存读取 $0.003；主表为高峰价；高峰 UTC 工作日 01–04、06–10，排除中国法定假日；其他时段低谷。",
    "gdpval21": {
      "v": 1746.0,
      "rawValue": 1745.77,
      "kind": "ind",
      "note": "Stirrup · DeepSeek V4.1 Flash 1017 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1724.98,
      "ciHigh": 1766.56
    },
    "frontiercode": {
      "v": 43.7,
      "rawValue": 43.6605666666667,
      "kind": "ind",
      "note": "Stirrup · DeepSeek V4.1 Flash 1017 (Max)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "strength": "待比较候选。依据：AAII 45.0；TB 4.0 33.8%；AA-LCR 82.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；DeepSeek V4.1 Flash 1017 (Max)。历史分项保留原日期，空白不作为零。",
    "verificationNotes": [],
    "cai2": {
      "v": 46.3,
      "rawValue": 46.305195753231196,
      "kind": "ind",
      "note": "DeepSeek Harness + DeepSeek V4.1 Flash 1017 · 0.2.1rc2",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 46.5,
      "rawValue": 46.5483666666667,
      "kind": "ind",
      "note": "DeepSeek Harness + DeepSeek V4.1 Flash 1017 · 0.2.1rc2",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 61.6,
      "rawValue": 61.559139784946204,
      "kind": "ind",
      "note": "DeepSeek Harness + DeepSeek V4.1 Flash 1017 · 0.2.1rc2",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null
  },
  {
    "id": "mistral-l4",
    "name": "Mistral Large 4 Preview",
    "org": "mistral",
    "brand": "mistral",
    "variant": "推理档见来源",
    "released": "2026-10-06",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "vendor-ms_4",
      "vendor-ms_4_blog",
      "vendor-ms_price"
    ],
    "fresh": true,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Mistral Studio public-preview API; weights expected end October.",
    "aaSlug": "mistral-large-4",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 38.0,
      "rawValue": 38.3770408917494,
      "kind": "ind",
      "note": "Mistral Large 4 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mistral-large-4",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 26.8,
      "rawValue": 26.7676767676768,
      "kind": "ind",
      "note": "Mistral Large 4 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/mistral-large-4",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 54.2,
      "rawValue": 54.1666666666667,
      "kind": "ind",
      "note": "Mistral Large 4 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/mistral-large-4",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 81.3,
      "rawValue": 81.3333333333333,
      "kind": "ind",
      "note": "Mistral Large 4 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/mistral-large-4",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 58.1,
      "rawValue": 58.05436980453831,
      "kind": "ind",
      "note": "Mistral Large 4 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mistral-large-4",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 35.0,
      "rawValue": 35.032437442075995,
      "kind": "ind",
      "note": "Mistral Large 4 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/mistral-large-4",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 93.0,
      "rawValue": 92.5336802665963,
      "kind": "ind",
      "note": "Mistral Large 4 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mistral-large-4",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 1.13,
      "rawValue": 1.1344391582388638,
      "kind": "ind",
      "note": "Mistral Large 4 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/mistral-large-4",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_4",
      "url": "https://docs.mistral.ai/models/mistral-large-4",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 1.36,
      "rawValue": 1.36,
      "kind": "vendor",
      "note": "Published USD token prices.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_price",
      "url": "https://docs.mistral.ai/inference/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 4.18,
      "rawValue": 4.18,
      "kind": "vendor",
      "note": "Published USD token prices.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_price",
      "url": "https://docs.mistral.ai/inference/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.14,
      "rawValue": 0.14,
      "kind": "vendor",
      "note": "Published USD token prices.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_price",
      "url": "https://docs.mistral.ai/inference/pricing",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Mistral standard public preview · USD / 百万 token",
    "priceAlt": "",
    "gdpval21": {
      "v": 1422.0,
      "rawValue": 1421.88,
      "kind": "ind",
      "note": "Stirrup · Mistral Large 4 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1397.69,
      "ciHigh": 1446.06
    },
    "frontiercode": {
      "v": 41.5,
      "rawValue": 41.5277666666667,
      "kind": "ind",
      "note": "Stirrup · Mistral Large 4 Preview",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "strength": "待比较候选。依据：AAII 38.0；TB 4.0 26.8%；AA-LCR 81.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Mistral Large 4 Preview。历史分项保留原日期，空白不作为零。",
    "paramsTotal": {
      "v": 1050000000000,
      "rawValue": 1050000000000,
      "kind": "vendor",
      "note": "Docs specify1.05T; announcement rounds to1T.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_4",
      "url": "https://docs.mistral.ai/models/mistral-large-4",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 52000000000,
      "rawValue": 52000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ms_4",
      "url": "https://docs.mistral.ai/models/mistral-large-4",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "verificationNotes": [],
    "cai2": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "maxOut": null,
    "arena": null
  },
  {
    "id": "nemotron35-supervl",
    "name": "Nemotron 3.5 Super VL",
    "org": "nvidia",
    "brand": "nvidia",
    "variant": "推理档见来源",
    "released": "2026-10-15",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "vendor-nv_super"
    ],
    "fresh": true,
    "license": "OpenMDW-1.1",
    "openWeights": true,
    "access": "Published BF16 weights with linked optimized variants; self-hosting supported.",
    "aaSlug": "nemotron-3-5-super-vl",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 26.0,
      "rawValue": 26.4910658661689,
      "kind": "ind",
      "note": "Nemotron 3.5 Super VL",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 0,
      "rawValue": 0,
      "kind": "ind",
      "note": "Nemotron 3.5 Super VL",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 47.8,
      "rawValue": 47.8009259259259,
      "kind": "ind",
      "note": "Nemotron 3.5 Super VL",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 69.0,
      "rawValue": 69.0,
      "kind": "ind",
      "note": "Nemotron 3.5 Super VL",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 64.2,
      "rawValue": 64.15381273082772,
      "kind": "ind",
      "note": "Nemotron 3.5 Super VL",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 30.7,
      "rawValue": 30.722891566265098,
      "kind": "ind",
      "note": "Nemotron 3.5 Super VL",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 453.0,
      "rawValue": 453.383218759152,
      "kind": "ind",
      "note": "Nemotron 3.5 Super VL",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.19,
      "rawValue": 0.18823665957318256,
      "kind": "ind",
      "note": "Nemotron 3.5 Super VL",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "ind",
      "note": "AA 榜单记录；官方规格另行核对",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.225,
      "rawValue": 0.225,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.575,
      "rawValue": 0.575,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.05,
      "rawValue": 0.05,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "gdpval21": {
      "v": 1162.0,
      "rawValue": 1162.41,
      "kind": "ind",
      "note": "Stirrup · Nemotron 3.5 Super VL",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1143.64,
      "ciHigh": 1181.18
    },
    "frontiercode": {
      "v": 25.5,
      "rawValue": 25.523899999999998,
      "kind": "ind",
      "note": "Stirrup · Nemotron 3.5 Super VL",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "strength": "待比较候选。依据：AAII 26.0；TB 4.0 0%；AA-LCR 69.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Nemotron 3.5 Super VL。历史分项保留原日期，空白不作为零。",
    "paramsTotal": {
      "v": 120000000000,
      "rawValue": 120000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_super",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 12000000000,
      "rawValue": 12000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_super",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "verificationNotes": [],
    "cai2": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "maxOut": null,
    "arena": null
  },
  {
    "id": "nemotron35-bolt",
    "name": "Nemotron 3.5 Bolt 74B-A9B",
    "org": "nvidia",
    "brand": "nvidia",
    "variant": "推理档见来源",
    "released": "2026-10-15",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "vendor-nv_bolt"
    ],
    "fresh": true,
    "license": "OpenMDW-1.1",
    "openWeights": true,
    "access": "Published BF16 weights with linked optimized variants; self-hosting supported.",
    "aaSlug": "nemotron-3-5-bolt-74b-a9b",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 21.0,
      "rawValue": 21.4072054842003,
      "kind": "ind",
      "note": "Nemotron 3.5 Bolt 74B-A9B",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 0,
      "rawValue": 0,
      "kind": "ind",
      "note": "Nemotron 3.5 Bolt 74B-A9B",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 39.7,
      "rawValue": 39.6990740740741,
      "kind": "ind",
      "note": "Nemotron 3.5 Bolt 74B-A9B",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 69.7,
      "rawValue": 69.6666666666667,
      "kind": "ind",
      "note": "Nemotron 3.5 Bolt 74B-A9B",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 56.3,
      "rawValue": 56.28140703517588,
      "kind": "ind",
      "note": "Nemotron 3.5 Bolt 74B-A9B",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 24.7,
      "rawValue": 24.6524559777572,
      "kind": "ind",
      "note": "Nemotron 3.5 Bolt 74B-A9B",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 262144,
      "rawValue": 262144,
      "kind": "ind",
      "note": "AA 榜单记录；官方规格另行核对",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "strength": "待比较候选。依据：AAII 21.0；TB 4.0 0%；AA-LCR 69.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Nemotron 3.5 Bolt 74B-A9B。历史分项保留原日期，空白不作为零。",
    "paramsTotal": {
      "v": 74000000000,
      "rawValue": 74000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_bolt",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 9000000000,
      "rawValue": 9000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_bolt",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "verificationNotes": [],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "cpt": null,
    "priceIn": null,
    "priceOut": null,
    "priceCache": null,
    "speed": null,
    "maxOut": null,
    "arena": null,
    "gdpval21": null
  },
  {
    "id": "nemotron35-bolt4gb",
    "name": "Nemotron 3.5 Bolt E4B 4GB",
    "org": "nvidia",
    "brand": "nvidia",
    "variant": "Reasoning",
    "released": "2026-10-23",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "vendor-nv_bolt4"
    ],
    "fresh": true,
    "license": "OpenMDW-1.1",
    "openWeights": true,
    "access": "Q4_K_M GGUF weights, BF16 companion and build.nvidia.com model; post-trained from Gemma-4-E4B-it.",
    "aaSlug": "nemotron-3-5-bolt-e4b-4gb",
    "lastVerified": "2026-10-24",
    "ctx": {
      "v": 131072,
      "rawValue": 131072,
      "kind": "ind",
      "note": "AA 榜单记录；官方规格另行核对",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/nemotron-3-5-bolt-e4b-4gb",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "strength": "待比较候选。依据：。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Nemotron 3.5 Bolt E4B 4GB (Reasoning)。历史分项保留原日期，空白不作为零。",
    "maxOut": {
      "v": 64000,
      "rawValue": 64000,
      "kind": "vendor",
      "note": "Source separately says output up to64K, subject to shared context.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_bolt4",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsTotal": {
      "v": 8000000000,
      "rawValue": 8000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-nv_bolt4",
      "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "verificationNotes": [],
    "aaii": null,
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb40": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "cpt": null,
    "priceIn": null,
    "priceOut": null,
    "priceCache": null,
    "speed": null,
    "paramsAct": null,
    "arena": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "ling31-flash1019",
    "name": "Ling 3.1 Flash · 1019",
    "org": "inclusionai",
    "brand": "inclusionai",
    "variant": "推理档见来源",
    "released": "",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa"
    ],
    "fresh": false,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "以官方开放范围为准",
    "aaSlug": "ling-3-1-flash-1019",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 44.0,
      "rawValue": 43.8973584978265,
      "kind": "ind",
      "note": "Ling 3.1 Flash 1019",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 32.8,
      "rawValue": 32.8282828282828,
      "kind": "ind",
      "note": "Ling 3.1 Flash 1019",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 56.8,
      "rawValue": 56.828703703703695,
      "kind": "ind",
      "note": "Ling 3.1 Flash 1019",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 82.3,
      "rawValue": 82.3333333333333,
      "kind": "ind",
      "note": "Ling 3.1 Flash 1019",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 57.0,
      "rawValue": 56.996911380375394,
      "kind": "ind",
      "note": "Ling 3.1 Flash 1019",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 43.5,
      "rawValue": 43.466172381835,
      "kind": "ind",
      "note": "Ling 3.1 Flash 1019",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 1.49,
      "rawValue": 1.4886425967752979,
      "kind": "ind",
      "note": "Ling 3.1 Flash 1019",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "ind",
      "note": "AA 榜单记录；官方规格另行核对",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.3,
      "rawValue": 0.3,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.9,
      "rawValue": 0.9,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.06,
      "rawValue": 0.06,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "strength": "待比较候选。依据：AAII 44.0；TB 4.0 32.8%；AA-LCR 82.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Ling 3.1 Flash 1019。历史分项保留原日期，空白不作为零。",
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "speed": null,
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null,
    "gdpval21": null
  },
  {
    "id": "reflection-beam",
    "name": "Beam 1.0",
    "org": "reflection",
    "brand": "reflection",
    "variant": "推理档见来源",
    "released": "2026-10-16",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "reflection-official"
    ],
    "fresh": true,
    "license": "开放权重，具体许可见模型卡",
    "openWeights": true,
    "access": "以官方开放范围为准",
    "aaSlug": "reflection-beam",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 30.0,
      "rawValue": 30.3334426348039,
      "kind": "ind",
      "note": "Beam 1.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 3.0,
      "rawValue": 3.03030303030303,
      "kind": "ind",
      "note": "Beam 1.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 48.5,
      "rawValue": 48.4953703703704,
      "kind": "ind",
      "note": "Beam 1.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 78.0,
      "rawValue": 78.0,
      "kind": "ind",
      "note": "Beam 1.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 52.8,
      "rawValue": 52.83864541832669,
      "kind": "ind",
      "note": "Beam 1.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 34.7,
      "rawValue": 34.661723818350296,
      "kind": "ind",
      "note": "Beam 1.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 327.0,
      "rawValue": 326.900120158351,
      "kind": "ind",
      "note": "Beam 1.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.23,
      "rawValue": 0.22624169286047544,
      "kind": "ind",
      "note": "Beam 1.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "官方 Architecture 表；总参数、激活参数与上下文分开。",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "reflection-official",
      "url": "https://reflection.ai/beam-model-card",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.4,
      "rawValue": 0.4,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 1.2,
      "rawValue": 1.2,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.05,
      "rawValue": 0.05,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/reflection-beam",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "gdpval21": {
      "v": 1177.0,
      "rawValue": 1177.08,
      "kind": "ind",
      "note": "Stirrup · Beam 1.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-gdp21",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "basis": "GDPval-AA v2.1 · Elo · AA Stirrup",
      "checkedAt": "2026-10-24",
      "sourceDate": null,
      "ciLow": 1158.5,
      "ciHigh": 1195.66
    },
    "frontiercode": {
      "v": 24.3,
      "rawValue": 24.3188,
      "kind": "ind",
      "note": "Stirrup · Beam 1.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-frontier",
      "url": "https://artificialanalysis.ai/evaluations/frontiercode",
      "basis": "FrontierCode 1.1 Main · AA 统一 Stirrup harness · 平均得分",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本"
    ],
    "outputs": [
      "文本"
    ],
    "strength": "待比较候选。依据：AAII 30.0；TB 4.0 3.0%；AA-LCR 78.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Beam 1.0。历史分项保留原日期，空白不作为零。",
    "paramsTotal": {
      "v": 501300000000,
      "rawValue": 501300000000,
      "kind": "vendor",
      "note": "官方 Architecture 表；总参数、激活参数与上下文分开。",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "reflection-official",
      "url": "https://reflection.ai/beam-model-card",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 23400000000,
      "rawValue": 23400000000,
      "kind": "vendor",
      "note": "官方 Architecture 表；总参数、激活参数与上下文分开。",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "reflection-official",
      "url": "https://reflection.ai/beam-model-card",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai2": {
      "v": 20.5,
      "rawValue": 20.478987379168,
      "kind": "ind",
      "note": "Mirror + Beam 1.0 · 0.1.8-aa.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "AA Coding Agent Index v2.0 · FrontierCode v1.1 + TB 4.0 + SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "frontierAgent": {
      "v": 20.3,
      "rawValue": 20.2672,
      "kind": "ind",
      "note": "Mirror + Beam 1.0 · 0.1.8-aa.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · 各自 Agent 框架",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "sweatlas2": {
      "v": 37.6,
      "rawValue": 37.6344086021506,
      "kind": "ind",
      "note": "Mirror + Beam 1.0 · 0.1.8-aa.1",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aacai2",
      "url": "https://artificialanalysis.ai/agents/coding-agents",
      "basis": "CAI v2.0 组合分项 · SWE-Atlas-QnA-AA",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "maxOut": null,
    "arena": null
  },
  {
    "id": "claude-sonnet55-xhigh",
    "name": "Claude Sonnet 5.5 · xhigh",
    "org": "anthropic",
    "brand": "claude",
    "variant": "Xhigh, Default Fallback",
    "released": "",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "official-an_s55"
    ],
    "fresh": false,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "Claude API and listed cloud platforms; partner billing/access differs.",
    "aaSlug": "claude-sonnet-5-5-xhigh",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 52.0,
      "rawValue": 51.8955544183089,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Xhigh, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5-xhigh",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 57.1,
      "rawValue": 57.07070707070711,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Xhigh, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5-xhigh",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 57.3,
      "rawValue": 57.2916666666667,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Xhigh, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5-xhigh",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 79.7,
      "rawValue": 79.6666666666667,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Xhigh, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5-xhigh",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 37.1,
      "rawValue": 37.11852377572746,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Xhigh, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5-xhigh",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 50.0,
      "rawValue": 50.0,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Xhigh, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5-xhigh",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 105.0,
      "rawValue": 105.180382834795,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Xhigh, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5-xhigh",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 2.01,
      "rawValue": 2.0120345801545785,
      "kind": "ind",
      "note": "Claude Sonnet 5.5 (Xhigh, Default Fallback)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/claude-sonnet-5-5-xhigh",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD/1M; direct Claude API Standard global",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD/1M output; prompt-length condition follows input tier",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.1,
      "rawValue": 0.1,
      "kind": "vendor",
      "note": "USD/1M cache reads",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方标准 API 价 · USD / 百万 token",
    "priceAlt": "缓存读取与写入分开；云平台、区域、Fast 及 Batch 的资格与计价不同。",
    "strength": "待比较候选。依据：AAII 52.0；TB 4.0 57.1%；AA-LCR 79.7%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Claude Sonnet 5.5 (Xhigh, Default Fallback)。历史分项保留原日期，空白不作为零。",
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-an_s55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null,
    "gdpval21": null
  },
  {
    "id": "gpt61-sol-high",
    "name": "GPT-6.1 Sol · high",
    "org": "openai",
    "brand": "openai",
    "variant": "High",
    "released": "",
    "status": "current",
    "tag": "本期收录",
    "scenes": [
      "daily",
      "coding"
    ],
    "srcs": [
      "aa",
      "official-oa61"
    ],
    "fresh": false,
    "license": "闭源 / 尚未发布权重",
    "openWeights": false,
    "access": "OpenAI API; account, region and usage-tier eligibility apply; no runtime call made.",
    "aaSlug": "gpt-6-1-sol-high",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 50.0,
      "rawValue": 50.2377777519769,
      "kind": "ind",
      "note": "GPT-6.1 Sol (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol-high",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 51.5,
      "rawValue": 51.5151515151515,
      "kind": "ind",
      "note": "GPT-6.1 Sol (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol-high",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 55.8,
      "rawValue": 55.787037037037,
      "kind": "ind",
      "note": "GPT-6.1 Sol (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol-high",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 82.3,
      "rawValue": 82.3333333333333,
      "kind": "ind",
      "note": "GPT-6.1 Sol (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol-high",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 50.6,
      "rawValue": 50.63775510204081,
      "kind": "ind",
      "note": "GPT-6.1 Sol (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol-high",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 51.4,
      "rawValue": 51.390176088971295,
      "kind": "ind",
      "note": "GPT-6.1 Sol (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol-high",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 50.0,
      "rawValue": 49.8991904858814,
      "kind": "ind",
      "note": "GPT-6.1 Sol (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol-high",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.32,
      "rawValue": 0.31914442375664703,
      "kind": "ind",
      "note": "GPT-6.1 Sol (High)",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/gpt-6-1-sol-high",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1050000,
      "rawValue": 1050000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 2,
      "rawValue": 2,
      "kind": "vendor",
      "note": "USD per 1,000,000 text input tokens; Standard, prompt ≤272,000 except GPT-5.3-Codex",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 10,
      "rawValue": 10,
      "kind": "vendor",
      "note": "USD per 1,000,000 output tokens; reasoning may consume output tokens",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.1,
      "rawValue": 0.1,
      "kind": "vendor",
      "note": "USD per 1,000,000 cached input tokens; cache read, not write",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "官方 Standard · 输入 ≤272K · USD / 百万 token",
    "priceAlt": "超过 272K 输入，整单输入/缓存价 ×2、输出价 ×1.5；Fast ×2，Ultrafast ×6；Batch/Flex 半价（以该模型支持范围为准）。",
    "strength": "待比较候选。依据：AAII 50.0；TB 4.0 51.5%；AA-LCR 82.3%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；GPT-6.1 Sol (High)。历史分项保留原日期，空白不作为零。",
    "maxOut": {
      "v": 128000,
      "rawValue": 128000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "official-oa61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "inputs": [
      "文本",
      "图像"
    ],
    "outputs": [
      "文本"
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null,
    "gdpval21": null
  },
  {
    "id": "kimi-k31pro-highspeed",
    "name": "Kimi K3.1 Pro Highspeed",
    "org": "moonshot",
    "brand": "kimi",
    "variant": "默认 / 官方配置",
    "released": "",
    "status": "current",
    "tag": "本期补录",
    "scenes": [
      "daily"
    ],
    "srcs": [
      "vendor-k_price",
      "vendor-k_31_blog",
      "vendor-k_models"
    ],
    "fresh": false,
    "license": "待核实",
    "openWeights": false,
    "access": "High-speed API variant; vendor claims same intelligence and approximately 2-3x speed.",
    "ctx": {
      "v": 1048576,
      "rawValue": 1048576,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 4,
      "rawValue": 4,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 20,
      "rawValue": 20,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.2,
      "rawValue": 0.2,
      "kind": "vendor",
      "note": "Kimi international pay-as-you-go API; USD per million tokens, taxes excluded. Automatic prefix caching, default TTL 5m. Cache-hit input charged at hit price; writes charged by TTL.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-k_price",
      "url": "https://platform.kimi.ai/docs/pricing/chat",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Kimi direct highspeed · USD / 百万 token",
    "priceAlt": "自动前缀缓存默认 5 分钟；写入与读取另计；K3.1 不套用 K2 Batch 折扣。",
    "verificationNotes": [],
    "aaii": null,
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb40": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "cpt": null,
    "speed": null,
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "qwen38-flash-api",
    "name": "Qwen3.8-Flash (managed API)",
    "org": "alibaba",
    "brand": "qwen",
    "variant": "默认 / 官方配置",
    "released": "",
    "status": "current",
    "tag": "本期补录",
    "scenes": [
      "daily"
    ],
    "srcs": [
      "vendor-q_flash_ali",
      "vendor-q_flash"
    ],
    "fresh": false,
    "license": "待核实",
    "openWeights": null,
    "access": "Qwen Cloud / Model Studio managed API counterpart of Flash-Next.",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_flash_ali",
      "url": "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-flash",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 131072,
      "rawValue": 131072,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_flash_ali",
      "url": "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-flash",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.15,
      "rawValue": 0.15,
      "kind": "vendor",
      "note": "Implicit and explicit cache read both $0.016; creation separately $0.20.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_flash",
      "url": "https://www.qwencloud.com/models/qwen3.8-flash",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.47,
      "rawValue": 0.47,
      "kind": "vendor",
      "note": "Implicit and explicit cache read both $0.016; creation separately $0.20.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_flash",
      "url": "https://www.qwencloud.com/models/qwen3.8-flash",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.016,
      "rawValue": 0.016,
      "kind": "vendor",
      "note": "Implicit and explicit cache read both $0.016; creation separately $0.20.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-q_flash",
      "url": "https://www.qwencloud.com/models/qwen3.8-flash",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Qwen Cloud / Singapore International · USD / 百万 token",
    "priceAlt": "主表为国际新加坡渠道；其他地区与显式/隐式缓存有不同费率。",
    "verificationNotes": [
      "Mapping suggestion: keep Flash-Next open-weight scores and managed API specs distinct."
    ],
    "aaii": null,
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb40": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "cpt": null,
    "speed": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "glm53flashx",
    "name": "GLM-5.3-FlashX",
    "org": "zai",
    "brand": "zai",
    "variant": "默认 / 官方配置",
    "released": "",
    "status": "current",
    "tag": "本期补录",
    "scenes": [
      "daily"
    ],
    "srcs": [
      "vendor-z_flash",
      "vendor-z_price"
    ],
    "fresh": false,
    "license": "待核实",
    "openWeights": null,
    "access": "Direct API high-speed Flash variant.",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_flash",
      "url": "https://docs.z.ai/guides/vlm/glm-5.3-flash",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.37,
      "rawValue": 0.37,
      "kind": "vendor",
      "note": "Cache storage limited-time free; no exact end date.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 1.25,
      "rawValue": 1.25,
      "kind": "vendor",
      "note": "Cache storage limited-time free; no exact end date.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.075,
      "rawValue": 0.075,
      "kind": "vendor",
      "note": "Cache storage limited-time free; no exact end date.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-z_price",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Z.ai direct FlashX · USD / 百万 token",
    "priceAlt": "Z.ai direct FlashX-Legal：输入 $0.37 / 输出 $1.25 / 缓存读取 $0.075；缓存存储限时免费，未给结束日期；不要混入订阅套餐的优惠。",
    "verificationNotes": [],
    "aaii": null,
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb40": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "cpt": null,
    "speed": null,
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "mimo26pro-ultraspeed",
    "name": "MiMo-V2.6-Pro-UltraSpeed",
    "org": "xiaomi",
    "brand": "xiaomi",
    "variant": "默认 / 官方配置",
    "released": "",
    "status": "current",
    "tag": "本期补录",
    "scenes": [
      "daily"
    ],
    "srcs": [
      "vendor-mi_models",
      "vendor-mi_api",
      "vendor-mi_price"
    ],
    "fresh": false,
    "license": "待核实",
    "openWeights": null,
    "access": "Managed API speed tier; no Batch support; customized service availability.",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_models",
      "url": "https://mimo.mi.com/docs/en-US/quick-start/model",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "maxOut": {
      "v": 131072,
      "rawValue": 131072,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_api",
      "url": "https://mimo.mi.com/docs/en-US/api/chat/responses",
      "basis": "官方公布的单次最大输出 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 4.35,
      "rawValue": 4.35,
      "kind": "vendor",
      "note": "10x Pro standard token rates. No Batch. Cache writes temporarily free.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_price",
      "url": "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 8.7,
      "rawValue": 8.7,
      "kind": "vendor",
      "note": "10x Pro standard token rates. No Batch. Cache writes temporarily free.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_price",
      "url": "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.036,
      "rawValue": 0.036,
      "kind": "vendor",
      "note": "10x Pro standard token rates. No Batch. Cache writes temporarily free.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-mi_price",
      "url": "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "MiMo overseas real-time UltraSpeed · USD / 百万 token",
    "priceAlt": "缓存写入限时免费；Batch 半价；UltraSpeed 不支持 Batch。",
    "verificationNotes": [],
    "aaii": null,
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb40": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "cpt": null,
    "speed": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "hy4preview",
    "name": "Tencent Hy4 Preview",
    "org": "tencent",
    "brand": "hunyuan",
    "variant": "默认 / 官方配置",
    "released": "",
    "status": "current",
    "tag": "本期补录",
    "scenes": [
      "daily"
    ],
    "srcs": [
      "vendor-hy_models",
      "vendor-hy_usd"
    ],
    "fresh": false,
    "license": "待核实",
    "openWeights": null,
    "access": "Tencent TokenHub API; preview.",
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-hy_models",
      "url": "https://cloud.tencent.com/document/product/1823/130051",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.834,
      "rawValue": 0.834,
      "kind": "vendor",
      "note": "USD published tariff; no FX calculation.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-hy_usd",
      "url": "https://intl.cloud.tencent.com/document/product/1300/78937",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 2.501,
      "rawValue": 2.501,
      "kind": "vendor",
      "note": "USD published tariff; no FX calculation.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-hy_usd",
      "url": "https://intl.cloud.tencent.com/document/product/1300/78937",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.042,
      "rawValue": 0.042,
      "kind": "vendor",
      "note": "USD published tariff; no FX calculation.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-hy_usd",
      "url": "https://intl.cloud.tencent.com/document/product/1300/78937",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "Tencent international TokenHub · USD / 百万 token",
    "priceAlt": "",
    "verificationNotes": [
      "Already listed before Oct2 in international catalog; do not invent an October release date."
    ],
    "aaii": null,
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb40": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "scicode": null,
    "lcr": null,
    "nonhall": null,
    "cpt": null,
    "speed": null,
    "maxOut": null,
    "paramsTotal": null,
    "paramsAct": null,
    "arena": null,
    "gdpval21": null,
    "hle": null
  },
  {
    "id": "ling31flash",
    "name": "Ling-3.1-Flash",
    "org": "inclusionai",
    "brand": "inclusionai",
    "variant": "推理档见来源",
    "released": "2026-10-01",
    "status": "current",
    "tag": "本期补录",
    "scenes": [
      "daily"
    ],
    "srcs": [
      "aa",
      "vendor-ling_31"
    ],
    "fresh": false,
    "license": "MIT",
    "openWeights": true,
    "access": "Official inclusionAI downloadable weights and linked inference-provider channels.",
    "aaSlug": "ling-3-1-flash",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 41.0,
      "rawValue": 41.0906200397391,
      "kind": "ind",
      "note": "Ling 3.1 Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 33.3,
      "rawValue": 33.3333333333333,
      "kind": "ind",
      "note": "Ling 3.1 Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 54.1,
      "rawValue": 54.050925925925895,
      "kind": "ind",
      "note": "Ling 3.1 Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 83.0,
      "rawValue": 83.0,
      "kind": "ind",
      "note": "Ling 3.1 Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 62.1,
      "rawValue": 62.11515863689776,
      "kind": "ind",
      "note": "Ling 3.1 Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 39.4,
      "rawValue": 39.4346617238183,
      "kind": "ind",
      "note": "Ling 3.1 Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 219.0,
      "rawValue": 218.946635962805,
      "kind": "ind",
      "note": "Ling 3.1 Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 1.01,
      "rawValue": 1.010607821950605,
      "kind": "ind",
      "note": "Ling 3.1 Flash",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ling_31",
      "url": "https://huggingface.co/inclusionAI/Ling-3.1-flash",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.3,
      "rawValue": 0.3,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 0.9,
      "rawValue": 0.9,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.06,
      "rawValue": 0.06,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "strength": "待比较候选。依据：AAII 41.0；TB 4.0 33.3%；AA-LCR 83.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；Ling 3.1 Flash。历史分项保留原日期，空白不作为零。",
    "paramsTotal": {
      "v": 560000000000,
      "rawValue": 560000000000,
      "kind": "vendor",
      "note": "Vendor architecture summary; HF safetensors display572B differs.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ling_31",
      "url": "https://huggingface.co/inclusionAI/Ling-3.1-flash",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 25000000000,
      "rawValue": 25000000000,
      "kind": "vendor",
      "note": "",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-ling_31",
      "url": "https://huggingface.co/inclusionAI/Ling-3.1-flash",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "verificationNotes": [
      "Main metadata lead Ling3.1Flash1019 needs exact checkpoint mapping. Official HF repo is Ling-3.1-flash, without1019 suffix."
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "maxOut": null,
    "arena": null,
    "gdpval21": null
  },
  {
    "id": "longcat20",
    "name": "LongCat-2.0",
    "org": "meituan",
    "brand": "longcat",
    "variant": "推理档见来源",
    "released": "2026-06-29",
    "status": "current",
    "tag": "本期补录",
    "scenes": [
      "daily"
    ],
    "srcs": [
      "aa",
      "vendor-longcat_card"
    ],
    "fresh": false,
    "license": "MIT",
    "openWeights": true,
    "access": "Published official weights and linked LongCat chat service.",
    "aaSlug": "longcat-2-0",
    "lastVerified": "2026-10-24",
    "aaii": {
      "v": 19.0,
      "rawValue": 19.1123256610623,
      "kind": "ind",
      "note": "LongCat 2.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "Artificial Analysis Intelligence Index v4.3.2",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "tb40": {
      "v": 0,
      "rawValue": 0,
      "kind": "ind",
      "note": "LongCat 2.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-tb40",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "Terminal-Bench 4.0（66 题）· AA 独立复跑，pass@1 取 3 次平均",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "scicode": {
      "v": 36.3,
      "rawValue": 36.342592592592595,
      "kind": "ind",
      "note": "LongCat 2.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-scicode",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "SciCode · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "lcr": {
      "v": 65.0,
      "rawValue": 65.0,
      "kind": "ind",
      "note": "LongCat 2.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-lcr",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "AA-LCR v1.1 长上下文推理 · AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "nonhall": {
      "v": 24.6,
      "rawValue": 24.609189957366173,
      "kind": "ind",
      "note": "LongCat 2.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "AA-Omniscience 非幻觉率（1 − 幻觉率）· AA 独立评测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "hle": {
      "v": 33.7,
      "rawValue": 33.688600556070405,
      "kind": "ind",
      "note": "LongCat 2.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa-hle",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "AA 独立评测 · HLE",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "speed": {
      "v": 76.0,
      "rawValue": 76.2985464205947,
      "kind": "ind",
      "note": "LongCat 2.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "AA 实测输出吞吐中位数（tokens / 秒）",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "cpt": {
      "v": 0.15,
      "rawValue": 0.14624850952440743,
      "kind": "ind",
      "note": "LongCat 2.0",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "跑完一道智能指数任务的加权平均 API 成本（USD）· AA 实测",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "ctx": {
      "v": 1000000,
      "rawValue": 1000000,
      "kind": "vendor",
      "note": "Card describes1M-context training; exact API window independent.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-longcat_card",
      "url": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "basis": "AA 榜单或官方公布的最大输入上下文（token）；冲突见行内备注",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceIn": {
      "v": 0.75,
      "rawValue": 0.75,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceOut": {
      "v": 2.95,
      "rawValue": 2.95,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "官方 API 标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceCache": {
      "v": 0.015,
      "rawValue": 0.015,
      "kind": "ind",
      "note": "AA 榜单 API 渠道参考价；官方条件见计价方式",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "aa",
      "url": "https://artificialanalysis.ai/models/longcat-2-0",
      "basis": "官方 API 缓存读取标价 · 美元 · 每百万 token",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "priceMode": "AA 榜单渠道参考价（美元 / 每百万 token），官方价格核验见来源",
    "priceAlt": "不含订阅额度；缓存写入、长上下文及渠道优惠不可混为标准价",
    "strength": "待比较候选。依据：AAII 19.0；TB 4.0 0%；AA-LCR 65.0%。",
    "limits": "评测仅代表所列版本与推理档。API 额度、地区、许可及业务表现需要结合官方条件与自己的任务集检查。",
    "tech": "10/24 读取 AA 公开记录；LongCat 2.0。历史分项保留原日期，空白不作为零。",
    "paramsTotal": {
      "v": 1600000000000,
      "rawValue": 1600000000000,
      "kind": "vendor",
      "note": "Architecture summary; HF tensor display1.8T differs.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-longcat_card",
      "url": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "basis": "厂商公布的模型总参数规模",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "paramsAct": {
      "v": 48000000000,
      "rawValue": 48000000000,
      "kind": "vendor",
      "note": "Approximately48B.",
      "disp": null,
      "asOf": "2026-10-24",
      "src": "vendor-longcat_card",
      "url": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "basis": "MoE 架构单次前向的激活参数",
      "checkedAt": "2026-10-24",
      "sourceDate": null
    },
    "verificationNotes": [
      "Coverage addition for an absent major company; not asserted as a release since Oct2."
    ],
    "cai2": null,
    "frontiercode": null,
    "frontierAgent": null,
    "sweatlas2": null,
    "cai": null,
    "deepswe": null,
    "sweatlas": null,
    "tb21": null,
    "swe": null,
    "gdpval": null,
    "gpqa": null,
    "maxOut": null,
    "arena": null,
    "gdpval21": null
  }
];

const SCENES = [
  {
    "k": "coding",
    "name": "编程与重构",
    "metrics": [
      "cai2",
      "frontiercode",
      "tb40"
    ],
    "why": "先看 CAI v2.0 的实际 Agent 组合，再结合统一 Stirrup 环境的 FrontierCode 与终端任务成绩。",
    "caveat": "Agent 框架、模型版本和推理档都影响结果；CAI v2.0 与 v1.5 不互比。"
  },
  {
    "k": "agent",
    "name": "Agent / 长链任务",
    "metrics": [
      "tb40",
      "cai2",
      "gdpval21"
    ],
    "why": "以本期统一环境的 Terminal-Bench 4.0 为起点，参考 Agent 组合与真实工作任务。",
    "caveat": "终端、编码 Agent 和知识工作是不同任务，不生成跨维度综合分。"
  },
  {
    "k": "daily",
    "name": "日常问答与写作",
    "metrics": [
      "arena",
      "aaii",
      "nonhall"
    ],
    "why": "看真人盲测偏好（Arena）、综合智能（AAII），以及它是否愿意承认自己不知道（非幻觉率）。",
    "caveat": "Arena 是用户偏好分；配置和置信区间见数据说明，不能代替个人任务体验。"
  },
  {
    "k": "longdoc",
    "name": "长文档与大上下文",
    "metrics": [
      "lcr",
      "ctx",
      "priceIn"
    ],
    "why": "先看本期 AA-LCR 的长文档推理表现，再核对上下文、最大输出和实际输入费用。",
    "caveat": "AA-LCR 使用 10K–100K token 材料；大窗口不保证整个窗口上的推理质量。"
  }
];

const CHANGES = [
  {
    "rank": 1,
    "kind": "评测",
    "date": "2026-10-24",
    "title": "Kimi K3.1 Pro 进入前沿候选；权重尚未公开",
    "detail": "AA 当前主榜 AAII 55、统一环境 TB 4.0 为 67.2%，单任务成本 $2.11；官方 API 标准价 $2 输入 / $10 输出 / $0.20 缓存读取。",
    "impact": "可与 Sonnet 5.5、Muse Wonder 比较；发布日期存在 10/23 与 10/24 两种来源表述，权重暂按待开放记录。",
    "models": [
      "kimi-k31pro"
    ],
    "src": "aa",
    "view": "models"
  },
  {
    "rank": 2,
    "kind": "评测",
    "date": "2026-10-24",
    "title": "编码 Agent 指数已换成 v2.0，新旧分数分开",
    "detail": "组成改为 FrontierCode v1.1、TB 4.0、SWE-Atlas-QnA-AA；本次读取 24 个配置，包含 3 个路由组合。",
    "impact": "选择时核对框架、推理档、回退与指标版本；不把 v1.5 与 v2.0 的分差当成性能涨跌。",
    "models": [
      "claude-opus55",
      "claude-sonnet55",
      "gpt61-sol"
    ],
    "src": "aacai2",
    "view": "models"
  },
  {
    "rank": 3,
    "kind": "评测",
    "date": "2026-10-12",
    "title": "Meta 新增 Wonder / Wonder Full，API 与订阅边界不同",
    "detail": "AAII 当前为 52 / 56。Wonder 提供标准 API $4/$20；Wonder Full 只在特定 Muse Code 计划开放，没有可核实的按 token 任务成本。",
    "impact": "Full 的能力与可购买渠道要同时考虑，不能把 Wonder API 价格套给 Full。",
    "models": [
      "muse-wonder",
      "muse-wonder-full"
    ],
    "src": "official-mwonder_release",
    "view": "models"
  },
  {
    "rank": 4,
    "kind": "价格",
    "date": "2026-10-21",
    "title": "MiMo-V2.5 原 API 已退役，迁移到 V2.6",
    "detail": "官方记录 10/14 开始转发，10/21 10:00（北京时间）后原 API ID 失效。V2.6-Pro 标准输入/输出 $0.435/$0.87，缓存读取 $0.0036 / 百万 token。",
    "impact": "历史模型分数保留，但原 API 不再当成可用候选；UltraSpeed 和 Batch 使用独立计价条件。",
    "models": [
      "mimo25pro",
      "mimo26pro"
    ],
    "src": "vendor-mi_deprecate",
    "view": "pricing"
  },
  {
    "rank": 5,
    "kind": "价格",
    "date": "2026-10-07",
    "title": "Haiku 5.5 的短输入价与长输入价需要分开",
    "detail": "总输入 ≤100K 时 $0.10/$0.50，超过阈值整单按 $0.50/$2.50；当前 AA max 档 AAII 43。",
    "impact": "比较成本时要带入总输入长度和推理档，不能把最低短输入标价用于长文档账单。",
    "models": [
      "claude-haiku55"
    ],
    "src": "official-an_h55",
    "view": "pricing"
  },
  {
    "rank": 6,
    "kind": "价格",
    "date": "2026-10-13",
    "title": "Gemini 4 Argon 已普遍开放，不再是预告 API 价",
    "detail": "官方 API Paid Standard $2/$10；Batch/Flex 优惠条件单独列出。Arena Text 的最近公开快照为 10/22。",
    "impact": "可以加入 API 候选比较；个人订阅用量、免费 API 与付费 API 不是同一种额度。",
    "models": [
      "gemini4-argon"
    ],
    "src": "official-gg_price",
    "view": "pricing"
  },
  {
    "rank": 101,
    "kind": "评测",
    "date": "2026-10-02",
    "models": [
      "claude-opus55",
      "claude-sonnet55"
    ],
    "title": "历史资料 · Opus 5.5 登上 AAII 首位；Sonnet 5.5 的编码 Agent 表现突出",
    "detail": "AAII v4.3.2：Opus 5.5 max 58、Sonnet 5.5 max 56。Claude Code + Sonnet 5.5 max 的 CAI v1.5 为 68，DeepSWE v1.1 为 72%。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "aa",
    "view": "models"
  },
  {
    "rank": 102,
    "kind": "厂商",
    "date": "2026-09-30",
    "models": [
      "gemini4-argon"
    ],
    "title": "历史资料 · Gemini 4 Argon 出现在榜首区间，开放范围仍有限",
    "detail": "AAII 53、TB 4.0 为 57%；Arena 9/30 文本榜 1525±9，标为初步数据。Google 预告 API 价格 $2/$10 / 百万 token。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "google4",
    "view": "models"
  },
  {
    "rank": 103,
    "kind": "价格",
    "date": "2026-09-29",
    "models": [
      "gpt61-sol",
      "gpt6-astra"
    ],
    "title": "历史资料 · GPT-6.1 Sol 上线：AAII 52，单任务成本 $0.72",
    "detail": "官方标准价 $2 输入 / $10 输出 / $0.10 缓存读取（美元 / 百万 token，≤272K 输入）；AA max 档 AAII 52。Astra max 为 53、$3.26 / 任务。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "openai61",
    "view": "pricing"
  },
  {
    "rank": 104,
    "kind": "厂商",
    "date": "2026-09-21",
    "models": [
      "mimo26pro",
      "mimo26flash"
    ],
    "title": "历史资料 · 小米 MiMo-V2.6 进入开源候选：Pro 的 AAII 46",
    "detail": "Pro 官方 API 价为 $0.435 输入 / $0.87 输出 / $0.0036 缓存读取（美元 / 百万 token）；AA 单任务成本 $0.13。Flash AAII 38、单任务 $0.06。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "xiaomi26",
    "view": "models"
  },
  {
    "rank": 105,
    "kind": "评测",
    "date": "2026-09-21",
    "models": [
      "grok47",
      "claude-sonnet55"
    ],
    "title": "历史资料 · Grok 4.7 的仓库改动与终端任务分化明显",
    "detail": "Grok Build + Grok 4.7 xhigh 的 DeepSWE v1.1 为 73%，高于 Claude Code + Sonnet 5.5 max 的 72%；但 CAI 是 56 对 68，Agent 版 TB 4.0 是 33% 对 66%。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "aacai",
    "view": "models"
  },
  {
    "rank": 111,
    "kind": "评测",
    "date": "2026-09-19",
    "models": [],
    "title": "历史资料 · 9 月资料 · 三把主要的尺同时换了：AAII v4.3、Terminal-Bench 4.0、CAI v1.5",
    "detail": "2026-09-19 旧快照记录：智能指数从 v4.1.1 升到 v4.3（评测 9 项变 10 项并重新标定，头部从 63 分档变成 53 分档）；Terminal-Bench 主版本走到 4.0（66 题，重新标定算力与时限）；编码 Agent 指数升到 v1.5，改由 DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA 等权合成。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "aa",
    "view": "models"
  },
  {
    "rank": 112,
    "kind": "厂商",
    "date": "2026-09-03",
    "models": [
      "gpt6-astra"
    ],
    "title": "历史资料 · 9 月资料 · OpenAI 发布 GPT-6 Astra，与 Claude Fable 5.1 并列智能指数榜首",
    "detail": "2026-09-19 旧快照记录：$10/$50、1M 上下文、缓存命中 $1。TB 4.0 拿到 59%，比第二名（Fable 5.1 的 52%）高 7 个百分点；GPQA 96% 也是本期最高。发布初期走 Daybreak Access 分批开放。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "aa",
    "view": "models"
  },
  {
    "rank": 113,
    "kind": "价格",
    "date": "2026-09-01",
    "models": [
      "claude-fable51"
    ],
    "title": "历史资料 · 9 月资料 · Anthropic 发布 Claude Fable 5.1，标价不变但缓存读取价砍到四分之一",
    "detail": "2026-09-19 旧快照记录：$10/$50 与 Fable 5 完全一致，缓存读取从 $1 降到 $0.25（-75%）。官方估计典型负载省约 25%，复杂编码与高强度 Agent 场景可省约 45%。同日发布受限访问的 Mythos 5.1 与 Enterprise Frontier Safeguards。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "vendor",
    "view": "pricing"
  },
  {
    "rank": 114,
    "kind": "评测",
    "date": "2026-09-01",
    "models": [
      "claude-opus5",
      "ds-v4pro"
    ],
    "title": "历史资料 · 9 月资料 · vals.ai 归档 SWE-bench Verified，该基准停止更新",
    "detail": "2026-09-19 旧快照记录：理由是成绩饱和（86 个模型里 7 个 ≥95%，榜首 Claude Opus 5 97.00% 距满分仅 3 分）。9 月后发布的模型不会再跑这个基准。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "vals",
    "view": "models"
  },
  {
    "rank": 115,
    "kind": "评测",
    "date": "2026-09-19",
    "models": [
      "grok46",
      "kimi-k3",
      "claude-sonnet5"
    ],
    "title": "历史资料 · 9 月资料 · 旧基准饱和掩盖了巨大差距：TB 2.1 与 TB 4.0 的排序几乎是两回事",
    "detail": "2026-09-19 旧快照记录：Grok 4.6 在 TB 2.1 上 88%（与头部并列），到 TB 4.0 只剩 21%；Kimi K3 从 85% 掉到 13%；Claude Sonnet 5 从 81% 掉到 14%。而 GPT-6 Astra 是 88% → 59%。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "aa",
    "view": "models"
  },
  {
    "rank": 116,
    "kind": "厂商",
    "date": "2026-09-02",
    "models": [
      "muse13",
      "gemini38",
      "qwen38max"
    ],
    "title": "历史资料 · 9 月资料 · 9 月 1–3 日三天内四家同时发新旗舰",
    "detail": "2026-09-19 旧快照记录：9/1 Claude Fable 5.1 + Mythos 5.1；9/2 Meta Muse Spark 1.3、Google Gemini 3.8 Flash（+ Flash Cyber）、阿里 Qwen3.8-Max 0902；9/3 GPT-6 Astra。Gemini 3.8 与 Muse Spark 1.3 都维持了上一代的价格。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "press",
    "view": "intel"
  },
  {
    "rank": 117,
    "kind": "价格",
    "date": "2026-09-10",
    "models": [
      "ds-v41flash"
    ],
    "title": "历史资料 · 9 月资料 · DeepSeek V4.1 Flash 发布，V4 Flash 与 Vision 版退役",
    "detail": "2026-09-19 旧快照记录：开源权重、原生视觉、1M 上下文、384K 最大输出，单任务成本 $0.27、吞吐 208 t/s。峰谷计价调整为：高峰仅工作日 UTC 01–04 与 06–10 时，其余时段一律低谷半价。旧模型名暂时路由到新模型。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "vendor",
    "view": "pricing"
  },
  {
    "rank": 118,
    "kind": "生态",
    "date": "2026-09-19",
    "models": [
      "ds-v4pro",
      "claude-fable51"
    ],
    "title": "历史资料 · 9 月资料 · 同一份编码任务，最贵与最便宜的组合差 50 倍",
    "detail": "2026-09-19 旧快照记录：AA 实测：Claude Code + Fable 5.1 指数 62、单任务 $12.4；Codex + DeepSeek V4 Pro 指数 43、单任务 $0.24。中间还有 Muse Code + Muse Spark 1.3（54 分 / $3.98）和 Opencode + GLM-5.3（54 分 / $4.24）。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "aacai",
    "view": "pricing"
  },
  {
    "rank": 119,
    "kind": "厂商",
    "date": "2026-09-12",
    "models": [],
    "title": "历史资料 · 9 月资料 · Altman 明确今年不 IPO；Anthropic 则瞄准 10 月上市",
    "detail": "2026-09-19 旧快照记录：9/12 Altman 称当下上市「不明智」。Anthropic 已于 6 月秘密递交 S-1，目标 10 月纳斯达克上市、估值 2 万亿美元，由高盛 / 摩根大通 / 摩根士丹利承销，拟募资超 600 亿美元。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "press",
    "view": "intel"
  },
  {
    "rank": 120,
    "kind": "生态",
    "date": "2026-09-19",
    "models": [
      "gpt6-astra",
      "claude-fable51"
    ],
    "title": "历史资料 · 9 月资料 · OpenAI 两年半来首次在企业支出上反超 Anthropic",
    "detail": "2026-09-19 旧快照记录：据 Ramp 的企业报销数据，GPT-6 Astra 约占其追踪到的企业 AI 支出的 13%，Claude Fable 约 8%；OpenAI 称上周用户在其模型上的花费也首次超过 Anthropic。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "press",
    "view": "intel"
  },
  {
    "rank": 121,
    "kind": "厂商",
    "date": "2026-08-26",
    "models": [
      "glm53flash",
      "qwen38flashnext"
    ],
    "title": "历史资料 · 9 月资料 · 国产「低价高能」档位成型：GLM-5.3-Flash 与 Qwen3.8-Flash-Next",
    "detail": "2026-09-19 旧快照记录：GLM-5.3-Flash（8/26，320B 总参 / 18B 激活，GLM-5 系列首个原生多模态）AAII 42、单任务 $0.25；Qwen3.8-Flash-Next AAII 40、单任务 $0.37。两家在同一时间窗独立收敛到相似架构。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "aa",
    "view": "models"
  },
  {
    "rank": 122,
    "kind": "评测",
    "date": "2026-09-19",
    "models": [
      "minimax-m3",
      "ds-v41flash",
      "gpt56-sol"
    ],
    "title": "历史资料 · 9 月资料 · 非幻觉率拉开了比智能指数更大的差距",
    "detail": "2026-09-19 旧快照记录：MiniMax-M3 82%、MiMo-V2.5-Pro 75%、Qwen3.8-Max 71%、GLM-5.3 70%；另一端 DeepSeek V4.1 Flash 只有 4%、GPT-5.6 Sol 8%、Claude Fable 5.1 27%。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "aa",
    "view": "models"
  },
  {
    "rank": 123,
    "kind": "生态",
    "date": "2026-09-19",
    "models": [],
    "title": "历史资料 · 9 月资料 · 新面孔进入前 10：StepFun Step 5 Preview",
    "detail": "2026-09-19 旧快照记录：AAII 44 与 Grok 4.6 / Kimi K3 同档，单任务成本只要 $0.71，AA-LCR 88% 接近 Kimi K3 的 89%。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "aa",
    "view": "models"
  },
  {
    "rank": 124,
    "kind": "价格",
    "date": "2026-09-19",
    "models": [],
    "title": "历史资料 · 9 月资料 · 订阅档位微调：Gemini Ultra 涨到 $249.99，Grok 新增 $100 档",
    "detail": "2026-09-19 旧快照记录：Google AI Pro $19.99 / AI Ultra $249.99；Grok 在 SuperGrok（$30）与 Heavy（$300）之间新增 SuperGrok Plus $100，X Premium+ $40。ChatGPT 与 Claude 的档位未变。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "press",
    "view": "pricing"
  },
  {
    "rank": 125,
    "kind": "榜单",
    "date": "2026-09-19",
    "models": [
      "claude-fable5",
      "muse12"
    ],
    "title": "历史资料 · 9 月资料 · Arena 上多个「上一代」仍高于它们的继任者",
    "detail": "2026-09-19 旧快照记录：claude-fable-5-high 1506 排第 1，高于 fable-5.1-max 的 1498（#5）；muse-spark-1.2 xHigh 1500（#4）高于 muse-spark-1.3-max 的 1493（#8）。",
    "impact": "保留用于追溯，不能当作 10/24 新结论。",
    "src": "arena",
    "view": "models"
  }
];

const AGENT_FRAMEWORKS = [
  "Claude Code",
  "Codex",
  "Devin Fusion CLI",
  "Muse Code",
  "Opencode",
  "Grok Build",
  "Kimi Code CLI",
  "Antigravity SDK",
  "Antigravity CLI",
  "DeepSeek Harness",
  "Mirror"
];

const AGENT_MATRIX = [
  {
    "id": "claude-opus55",
    "configId": "f8b3c23615b8b60e23364c27e8494d6d",
    "label": "Claude Code - Opus 5.5 (max)",
    "cells": [
      {
        "s": 61.7,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Opus 5.5 (max) · 2.1.280 · 含回退",
        "configId": "f8b3c23615b8b60e23364c27e8494d6d"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "grok47",
    "configId": "a92c8b68f37df782f0e978e0e302b023",
    "label": "Grok Build - Grok 4.7 (xhigh)",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 46.6,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Grok 4.7 (xhigh) · 1.0.40",
        "configId": "a92c8b68f37df782f0e978e0e302b023"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "gpt6-astra",
    "configId": "34e0f78892fac8fd39aff6595d04610e",
    "label": "Codex - GPT-6 Astra (max)",
    "cells": [
      {
        "t": "na"
      },
      {
        "s": 54.7,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "GPT-6 Astra (max) · 0.151.0/0.153.4",
        "configId": "34e0f78892fac8fd39aff6595d04610e"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "gemini4-argon",
    "configId": "ee454ece0aab8dacb7127770643dcb6b",
    "label": "Antigravity CLI - Gemini 4 Argon (high)",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 53.2,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Gemini 4 Argon · 1.2.10",
        "configId": "ee454ece0aab8dacb7127770643dcb6b"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "claude-sonnet55",
    "configId": "9983e10d68576074ad63407d0ca81e4b",
    "label": "Claude Code - Sonnet 5.5 (max)",
    "cells": [
      {
        "s": 59.3,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Sonnet 5.5 (max) · 2.1.280 · 含回退",
        "configId": "9983e10d68576074ad63407d0ca81e4b"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "muse-wonder",
    "configId": "52f72f7f3393c5edf92b32326e7a678d",
    "label": "Muse Code - Muse Wonder (max)",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 52.0,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Muse Wonder (max) · 1.4.5-R5426.1",
        "configId": "52f72f7f3393c5edf92b32326e7a678d"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "muse-wonder-full",
    "configId": "047ef12b001416f72e30e1ad633988e2",
    "label": "Muse Code - Muse Wonder Full (max)",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 58.9,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Muse Wonder Full (max) · 1.4.5-R5426.1",
        "configId": "047ef12b001416f72e30e1ad633988e2"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "gpt61-sol",
    "configId": "3897d72a57138fd2e2353367570b4b37",
    "label": "Codex - GPT-6.1 Sol (max)",
    "cells": [
      {
        "t": "na"
      },
      {
        "s": 54.1,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "GPT-6.1 Sol (max) · 0.154.0",
        "configId": "3897d72a57138fd2e2353367570b4b37"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "claude-fable51",
    "configId": "5c82a7985b08f35190cc0db574fd1773",
    "label": "Claude Code - Fable 5.1 (max) (with fallback)",
    "cells": [
      {
        "s": 57.6,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Fable 5.1 (max) (with fallback) · 2.1.259/2.1.263 · 含回退",
        "configId": "5c82a7985b08f35190cc0db574fd1773"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "kimi-k3",
    "configId": "88c83705811535bca8ee000bfd3a256c",
    "label": "Kimi Code CLI - Kimi K3",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 41.4,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Kimi K3 · 0.26.0/0.36.1",
        "configId": "88c83705811535bca8ee000bfd3a256c"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "muse13",
    "configId": "f09fd629724ff1b103982a6158d00183",
    "label": "Muse Code - Muse Spark 1.3 (max)",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 45.7,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Muse Spark 1.3 (max) · 1.0.3-R2198.1",
        "configId": "f09fd629724ff1b103982a6158d00183"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "gpt6-luna",
    "configId": "c54a3c8e7e89d5a784e98211605eaa53",
    "label": "Codex - GPT-6 Luna (max) ({'reasoning_effort': 'max'})",
    "cells": [
      {
        "t": "na"
      },
      {
        "s": 31.1,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "GPT-6 Luna (max) · 0.154.0",
        "configId": "c54a3c8e7e89d5a784e98211605eaa53"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "step5",
    "configId": "06c2cfad6e3aba9000f2dd5e429d4407",
    "label": "Claude Code - Step 5 Preview ({'subagents': True})",
    "cells": [
      {
        "s": 43.1,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Step 5 Preview · 2.1.220",
        "configId": "06c2cfad6e3aba9000f2dd5e429d4407"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": null,
    "configId": "ef847aa89b4f0471ffe5275ba2f11771",
    "label": "Codex - DeepSeek V4.1 Flash ({'reasoning_effort': 'max'})",
    "cells": [
      {
        "t": "na"
      },
      {
        "s": 47.3,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "DeepSeek V4.1 Flash · 0.153.2",
        "configId": "ef847aa89b4f0471ffe5275ba2f11771"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "gemini38",
    "configId": "e17ee3a79eab160154a92f31c6c2b1fa",
    "label": "Antigravity SDK - Gemini 3.8 Flash (high)",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 33.3,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Gemini 3.8 Flash (high) · 0.1.12/0.1.16",
        "configId": "e17ee3a79eab160154a92f31c6c2b1fa"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "ds-v41flash-1017",
    "configId": "24c98f188d41522a849006ac453fdebe",
    "label": "DeepSeek Harness - DeepSeek V4.1 Flash 1017 ({'reasoning_effort': 'max'})",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 46.3,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "DeepSeek V4.1 Flash 1017 · 0.2.1rc2",
        "configId": "24c98f188d41522a849006ac453fdebe"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": null,
    "configId": "dabb064c01568bc018ba730cc39c4a96",
    "label": "Devin Fusion CLI - GPT-6 Astra XHigh + SWE-2 Medium",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 53.1,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "GPT-6 Astra XHigh + SWE-2 Medium · 3000.10.23/3000.10.7 · 含回退",
        "configId": "dabb064c01568bc018ba730cc39c4a96"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": true
  },
  {
    "id": "muse-spark-open",
    "configId": "d843fce803ff4f84ababc47040306116",
    "label": "Muse Code - Muse Spark Open (xhigh)",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 26.3,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Muse Spark Open (xhigh) · 1.4.2-R4684.1",
        "configId": "d843fce803ff4f84ababc47040306116"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "qwen38max",
    "configId": "1630d319b5e4dc5183cb88a2b2af1646",
    "label": "Claude Code - Qwen3.8 Max",
    "cells": [
      {
        "s": 39.2,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Qwen3.8 Max · 2.1.224/2.1.236/2.1.261/2.1.266",
        "configId": "1630d319b5e4dc5183cb88a2b2af1646"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": null,
    "configId": "736e1c6006fd243c9cc384b61c478e97",
    "label": "Devin Fusion CLI - Claude Opus 5.5 Max + GPT-6 Luna High",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 61.5,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Claude Opus 5.5 Max + GPT-6 Luna High · 3000.11.31/3000.11.34",
        "configId": "736e1c6006fd243c9cc384b61c478e97"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": true
  },
  {
    "id": null,
    "configId": "fe6df4d0f0b5360790e73d6d8830d7a0",
    "label": "Devin Fusion CLI - Claude Fable 5.1 XHigh + SWE-2 Medium",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 58.7,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Claude Fable 5.1 XHigh + SWE-2 Medium · 3000.10.23/3000.10.7 · 含回退",
        "configId": "fe6df4d0f0b5360790e73d6d8830d7a0"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": true
  },
  {
    "id": "reflection-beam",
    "configId": "accfbb12d349c0f2c93547ce814534b2",
    "label": "Mirror - Beam 1.0",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 20.5,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Beam 1.0 · 0.1.8-aa.1",
        "configId": "accfbb12d349c0f2c93547ce814534b2"
      }
    ],
    "router": false
  },
  {
    "id": "glm53",
    "configId": "96d7404e06194027474a6cc3bb31c068",
    "label": "Opencode - GLM-5.3 ({'reasoning_effort': 'max'})",
    "cells": [
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "s": 48.9,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "GLM-5.3 · 1.18.29",
        "configId": "96d7404e06194027474a6cc3bb31c068"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  },
  {
    "id": "claude-haiku55",
    "configId": "2a2fed494e0d1343b14efe96e6bc3669",
    "label": "Claude Code - Haiku 5.5 (max)",
    "cells": [
      {
        "s": 37.3,
        "t": "measured",
        "version": "2.0",
        "url": "https://artificialanalysis.ai/agents/coding-agents",
        "note": "Haiku 5.5 (max) · 2.1.289/2.1.296 · 含回退",
        "configId": "2a2fed494e0d1343b14efe96e6bc3669"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      },
      {
        "t": "na"
      }
    ],
    "router": false
  }
];

const AGENT_HISTORY = {
  "frameworks": [
    "Claude Code",
    "Codex",
    "Devin Fusion",
    "Muse Code",
    "Opencode",
    "Grok Build",
    "Kimi Code CLI",
    "Antigravity SDK"
  ],
  "rows": [
    {
      "id": "claude-sonnet55",
      "cells": [
        {
          "s": 68,
          "t": "native",
          "note": "max · $14.19 / 任务"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "claude-opus55",
      "cells": [
        {
          "s": 66,
          "t": "native",
          "note": "max · $13.04 / 任务"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "grok47",
      "cells": [
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "s": 56,
          "t": "native",
          "note": "xhigh · $8.82 / 任务"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "claude-fable51",
      "cells": [
        {
          "s": 62,
          "t": "native",
          "note": "$12.4 / 任务 · 9/19 快照"
        },
        {
          "t": "na"
        },
        {
          "s": 62,
          "t": "native",
          "note": "+ SWE-2 · 9/19 快照"
        },
        {
          "t": "na"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "gpt6-astra",
      "cells": [
        {
          "t": "compat"
        },
        {
          "s": 62,
          "t": "native",
          "note": "$7.47 / 任务 · 9/19 快照"
        },
        {
          "s": 59,
          "t": "native",
          "note": "+ SWE-2 · 9/19 快照"
        },
        {
          "t": "na"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "claude-opus5",
      "cells": [
        {
          "s": 60,
          "t": "native",
          "note": "$10.8 / 任务 · 9/19 快照"
        },
        {
          "t": "na"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "gpt56-sol",
      "cells": [
        {
          "t": "compat"
        },
        {
          "s": 55,
          "t": "native",
          "note": "9/19 快照"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "muse13",
      "cells": [
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "s": 54,
          "t": "native",
          "note": "$3.98 / 任务 · 9/19 快照"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "glm53",
      "cells": [
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "s": 54,
          "t": "native",
          "note": "$4.24 / 任务 · 9/19 快照"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "kimi-k3",
      "cells": [
        {
          "t": "compat"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "native"
        },
        {
          "t": "na"
        },
        {
          "s": 52,
          "t": "native",
          "note": "$5.05 / 任务 · 9/19 快照"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "grok46",
      "cells": [
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "s": 47,
          "t": "native",
          "note": "$3.57 / 任务 · 9/19 快照"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "qwen38max",
      "cells": [
        {
          "s": 43,
          "t": "compat",
          "note": "$3.48 / 任务 · 9/19 快照"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "native"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "ds-v4pro",
      "cells": [
        {
          "t": "compat"
        },
        {
          "s": 43,
          "t": "native",
          "note": "$0.24 / 任务，全场最低 · 9/19 快照"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "native"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    },
    {
      "id": "gemini38",
      "cells": [
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "compat"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "s": 42,
          "t": "native",
          "note": "$2.47 / 任务 · 9/19 快照"
        }
      ]
    },
    {
      "id": "ds-v4flash0731",
      "cells": [
        {
          "t": "na"
        },
        {
          "s": 39,
          "t": "native",
          "note": "9/19 快照"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "native"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        },
        {
          "t": "na"
        }
      ]
    }
  ],
  "version": "1.5",
  "asOf": "2026-10-02"
};

const SUBSCRIPTIONS = [
  {
    "brand": "openai",
    "product": "ChatGPT",
    "tiers": [
      [
        "免费",
        "$0"
      ],
      [
        "Go",
        "$8 / 月（美国官方公布价）"
      ],
      [
        "Plus",
        "$20 / 月"
      ],
      [
        "Pro 100 / 200 / 500",
        "$100 / $200 / $500 / 月"
      ]
    ],
    "note": "美元／月；地区定价可能不同，API 独立计费。Pro 500 含 Ultrafast；部分 Pro 200 老用户原额度保留至 10/29，价格仍为 $200。",
    "checkedAt": "2026-10-24",
    "url": "https://chatgpt.com/pricing/",
    "sourceDate": null,
    "status": "verified_with_historical_Go_price",
    "sources": [
      "https://chatgpt.com/pricing/",
      "https://openai.com/index/introducing-chatgpt-go/",
      "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus",
      "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers",
      "https://help.openai.com/en/articles/11989085-what-is-chatgpt-go"
    ]
  },
  {
    "brand": "anthropic",
    "product": "Claude",
    "tiers": [
      [
        "免费",
        "$0"
      ],
      [
        "Pro",
        "$20 / 月；$200 / 年"
      ],
      [
        "Max 5×",
        "$100 / 月"
      ],
      [
        "Max 20×",
        "$200 / 月"
      ]
    ],
    "note": "网页美元标价，未含适用税；Max 仅月付。Max 可申领每月 $100／$200 API 额度，需符合资格并关联 Console 组织；不会提高 Claude Code 的订阅用量上限。",
    "checkedAt": "2026-10-24",
    "url": "https://claude.com/pricing",
    "sourceDate": null,
    "status": "verified",
    "sources": [
      "https://claude.com/pricing",
      "https://support.claude.com/en/articles/11049741-what-is-the-max-plan?subjects=product",
      "https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans"
    ]
  },
  {
    "brand": "google",
    "product": "Gemini / Google AI",
    "tiers": [
      [
        "免费",
        "免费层／限额适用"
      ],
      [
        "AI Plus",
        "价格随地区／容量变化"
      ],
      [
        "AI Pro",
        "$19.99 / 月（官网美元页）"
      ],
      [
        "AI Ultra",
        "官方公告 $100 / $200 / 月；以购买页为准"
      ]
    ],
    "note": "AI Pro／Ultra 已包含 Gemini 4 Argon 的不同用量档。Plus 存在容量／地区方案差异；不要继续显示单一 $249.99 Ultra 价格。",
    "checkedAt": "2026-10-24",
    "url": "https://one.google.com/about/plans?hl=en",
    "sourceDate": null,
    "status": "verified_with_official_price_variants",
    "sources": [
      "https://one.google.com/about/plans?hl=en",
      "https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/",
      "https://one.google.com/intl/en_us/about/google-ai-plans/"
    ]
  },
  {
    "brand": "xai",
    "product": "Grok / The X Subscription",
    "tiers": [
      [
        "免费",
        "$0"
      ],
      [
        "Plus",
        "$8 / 月；$80 / 年"
      ],
      [
        "Premium",
        "$30 / 月；$300 / 年"
      ],
      [
        "Super",
        "$100 / 月；$1,000 / 年"
      ],
      [
        "Ultra",
        "$200 / 月；$2,000 / 年"
      ]
    ],
    "note": "新自助订阅整合 Grok／Cursor／X，税费另计。Premium 及以上含 Grok Bot；Cursor 第三方模型另付费。旧 SuperGrok／Cursor／X Premium 可保留，迁移可选。",
    "checkedAt": "2026-10-24",
    "url": "https://x.ai/pricing",
    "sourceDate": null,
    "status": "verified_new_customer_plans_legacy_amounts_unverified",
    "sources": [
      "https://x.ai/pricing",
      "https://docs.x.ai/x-subscription/pricing"
    ]
  },
  {
    "brand": "moonshot",
    "product": "Kimi（中国大陆新套餐）",
    "tiers": [
      [
        "Go",
        "¥49 / 月"
      ],
      [
        "Plus",
        "¥99 / 月"
      ],
      [
        "Pro",
        "¥199 / 月"
      ],
      [
        "Max",
        "¥699 / 月"
      ],
      [
        "Ultra",
        "¥1,399 / 月"
      ]
    ],
    "note": "人民币连续包月价；年付总额分别 ¥468／948／1,908／6,708／13,428。新 Go 不含 Kimi Code；Plus 起可用，无周限额但保留滚动 5 小时限额及月度共享额度。旧音乐档套餐规则保留。",
    "checkedAt": "2026-10-24",
    "url": "https://www.kimi.com/help/membership/membership-pricing",
    "sourceDate": null,
    "status": "verified_domestic_new_plans_international_unverified",
    "sources": [
      "https://www.kimi.com/help/membership/membership-pricing",
      "https://www.kimi.com/code/docs/en/kimi-code/membership.html"
    ]
  },
  {
    "brand": "minimax",
    "product": "MiniMax M Plan",
    "tiers": [
      [
        "Go",
        "待核实"
      ],
      [
        "Explore",
        "待核实"
      ],
      [
        "Build",
        "待核实"
      ]
    ],
    "note": "当前官方文档为 M Plan 三档，额度为 Go 的 1×／3×／7.5×。均含 M3.1 Flash、图像和音频；Explore／Build 含 H3 视频。金额未从官方购买页读出，旧 Coding 六档和 Agent Basic／Pro 价格不可继续标为本期已核实。",
    "checkedAt": "2026-10-24",
    "url": "https://www.minimax.io/m-plan",
    "sourceDate": null,
    "status": "partial_dynamic_prices_missing",
    "sources": [
      "https://www.minimax.io/m-plan",
      "https://platform.minimax.io/subscribe/coding-plan",
      "https://platform.minimax.io/docs/m-plan/intro",
      "https://platform.minimax.io/docs/m-plan/faq"
    ]
  },
  {
    "brand": "mistral",
    "product": "Mistral Vibe（原 Le Chat）",
    "tiers": [
      [
        "免费",
        "有限额度"
      ],
      [
        "Pro",
        "$14.99 / 月（未税）"
      ],
      [
        "Team",
        "$24.99 / 用户 / 月（未税）"
      ],
      [
        "教育优惠",
        "金额待核实"
      ],
      [
        "Enterprise",
        "联系销售"
      ]
    ],
    "note": "官网现称 Vibe，涵盖工作与编码。学生优惠需认证高等教育学生、此前未使用 Vibe／Le Chat，最长 12 个月；本次未读取到独立学生金额。",
    "checkedAt": "2026-10-24",
    "url": "https://mistral.ai/pricing/",
    "sourceDate": null,
    "status": "verified_main_plans_student_amount_missing",
    "sources": [
      "https://mistral.ai/pricing/"
    ]
  },
  {
    "brand": null,
    "multi": true,
    "product": "中国厂商 App 免费层与会员",
    "sub": "DeepSeek / Kimi / 豆包 / 千问 / 智谱",
    "tiers": [
      [
        "DeepSeek App",
        "官方确认免费对话"
      ],
      [
        "Kimi",
        "另见人民币会员档；免费权益待核实"
      ],
      [
        "豆包",
        "普通账户 + 付费会员；金额待核实"
      ],
      [
        "千问",
        "当前免费权益待核实"
      ],
      [
        "智谱清言",
        "可见会员升级；金额待核实"
      ]
    ],
    "note": "App、API 和自部署的费用及许可分别核实。豆包已有标准／加强／高级会员，不能笼统写成全部免费；开源权重也不等于部署成本为零。",
    "checkedAt": "2026-10-24",
    "url": "https://www.deepseek.com/en/download/",
    "sourceDate": null,
    "status": "mixed_provider_specific",
    "sources": [
      "https://www.deepseek.com/en/download/",
      "https://www.kimi.com/help/membership/membership-pricing",
      "https://www.doubao.com/legal/ey01",
      "https://www.qianwen.com/",
      "https://chatglm.cn/"
    ]
  }
];

const VENDORS = [
  {
    "key": "anthropic",
    "models": [
      "claude-opus55",
      "claude-sonnet55",
      "claude-fable51",
      "claude-opus5",
      "claude-sonnet5",
      "claude-haiku45",
      "claude-mythos51",
      "claude-fable5",
      "claude-opus48",
      "claude-haiku55",
      "claude-sonnet55-xhigh"
    ],
    "family": "Claude Fable 5.1 / Claude Opus 5.5 / Claude Sonnet 5.5 / Claude Haiku 5.5",
    "fresh": true,
    "facts": [
      [
        "已收录",
        "11 个条目"
      ],
      [
        "本期主榜覆盖",
        "5 个配置"
      ],
      [
        "AAII",
        "Claude Opus 5.5 · 58.0"
      ]
    ],
    "lede": "本期独立评测：Claude Opus 5.5，AAII 58.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "Haiku 5.5 补齐低成本档；Sonnet 5.5 缓存降价，Max／Team 新增可申领 API 额度。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://platform.claude.com/docs/en/models/overview",
      "https://www.anthropic.com/claude-haiku-5-5",
      "https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans",
      "https://platform.claude.com/docs/en/models/mythos-5-1/overview"
    ]
  },
  {
    "key": "google",
    "models": [
      "gemini4-argon",
      "gemini38",
      "gemini31pro",
      "gemini35lite",
      "gemini37"
    ],
    "family": "Gemini 4 Argon / Gemini 3.8 Flash / Gemini 3.1 Pro Preview / Gemini 3.5 Flash-Lite",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "5 个条目"
      ],
      [
        "本期主榜覆盖",
        "4 个配置"
      ],
      [
        "AAII",
        "Gemini 4 Argon · 53.0"
      ]
    ],
    "lede": "本期独立评测：Gemini 4 Argon，AAII 53.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "Gemini 4 Argon 已 GA，优惠价有截止日；统一上下文和长输出模式需分开解释。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
      "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash",
      "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview",
      "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite",
      "https://ai.google.dev/gemini-api/docs/changelog",
      "https://ai.google.dev/gemini-api/docs/pricing"
    ]
  },
  {
    "key": "openai",
    "models": [
      "gpt61-sol",
      "gpt6-sol",
      "gpt6-luna",
      "gpt6-astra",
      "gpt56-sol",
      "gpt56-terra",
      "gpt56-luna",
      "gpt53-codex",
      "gpt55",
      "gpt61-sol-high"
    ],
    "family": "GPT-6 Astra / GPT-6.1 Sol / GPT-6 Luna",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "10 个条目"
      ],
      [
        "本期主榜覆盖",
        "6 个配置"
      ],
      [
        "AAII",
        "GPT-6 Astra · 53.0"
      ]
    ],
    "lede": "本期独立评测：GPT-6 Astra，AAII 53.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "GPT-6 家族采用分档推理与长上下文计价；10 月新增缓存时长与 Decisions API 功能。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://developers.openai.com/api/docs/models/gpt-6-astra",
      "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
      "https://developers.openai.com/api/docs/models/gpt-6-luna",
      "https://developers.openai.com/api/docs/changelog",
      "https://developers.openai.com/api/docs/models/gpt-5.3-codex"
    ]
  },
  {
    "key": "xai",
    "models": [
      "grok47",
      "grok46",
      "grok45"
    ],
    "family": "Grok 4.7",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "3 个条目"
      ],
      [
        "本期主榜覆盖",
        "1 个配置"
      ],
      [
        "AAII",
        "Grok 4.7 · 46.0"
      ]
    ],
    "lede": "本期独立评测：Grok 4.7，AAII 46.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "Grok 4.7 提供 500K 上下文与多档推理；消费订阅现有整合 Grok、Cursor、X 的新体系。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://docs.x.ai/developers/models/grok-4.7",
      "https://x.ai/pricing"
    ]
  },
  {
    "key": "xiaomi",
    "models": [
      "mimo26pro",
      "mimo26flash",
      "mimo25pro",
      "mimo26pro-ultraspeed"
    ],
    "family": "MiMo-V2.6-Pro / MiMo-V2.6-Flash / MiMo-V2.6-Pro-UltraSpeed",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "4 个条目"
      ],
      [
        "本期主榜覆盖",
        "2 个配置"
      ],
      [
        "AAII",
        "MiMo-V2.6-Pro · 46.0"
      ]
    ],
    "lede": "本期独立评测：MiMo-V2.6-Pro，AAII 46.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "V2.5 原 API ID 已于 10/21 失效；V2.6、UltraSpeed 与 Batch 分开记录。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://mimo.mi.com/docs/zh-CN/updates/deprecate",
      "https://mimo.mi.com/docs/en-US/quick-start/model",
      "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go"
    ]
  },
  {
    "key": "meta",
    "models": [
      "muse13",
      "muse-glimmer",
      "muse12",
      "muse-wonder-full",
      "muse-wonder",
      "muse-spark-open"
    ],
    "family": "Muse Wonder / Muse Wonder Full / Muse Spark 1.3 / Muse Spark Open / Muse Glimmer",
    "fresh": true,
    "facts": [
      [
        "已收录",
        "6 个条目"
      ],
      [
        "本期主榜覆盖",
        "4 个配置"
      ],
      [
        "AAII",
        "Muse Wonder Full · 56.0"
      ]
    ],
    "lede": "本期独立评测：Muse Wonder Full，AAII 56.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "10 月新增 Wonder／Full 和 Spark Open；托管 Standard、Contributor、开放权重的计费与许可条件不同。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://dev.meta.ai/docs/models",
      "https://research.meta.ai/blog/muse-wonder",
      "https://research.meta.ai/blog/muse-spark-open",
      "https://dev.meta.ai/docs/pricing-rate-limits",
      "https://dev.meta.ai/models/muse-wonder"
    ]
  },
  {
    "key": "alibaba",
    "models": [
      "qwen38max",
      "qwen38flashnext",
      "qwen38-27b",
      "qwen38-flash-api"
    ],
    "family": "Qwen3.8-Max /0902 / Qwen3.8-Flash / Qwen3.8-27B",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "4 个条目"
      ],
      [
        "本期主榜覆盖",
        "3 个配置"
      ],
      [
        "AAII",
        "Qwen3.8-Max（0902） · 45.0"
      ]
    ],
    "lede": "本期独立评测：Qwen3.8-Max（0902），AAII 45.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "托管 API 的区域和缓存方式各有价格；Max 总上下文 1M 与可用输入长度不同，Flash API 与 Flash-Next 权重不是同一行。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max",
      "https://www.qwencloud.com/models/qwen3.8-flash",
      "https://www.alibabacloud.com/help/en/model-studio/qwen3-8-27b"
    ]
  },
  {
    "key": "zai",
    "models": [
      "glm53",
      "glm53flash",
      "glm52",
      "glm53flashx"
    ],
    "family": "GLM-5.3 / GLM-5.3-Flash / GLM-5.3-FlashX",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "4 个条目"
      ],
      [
        "本期主榜覆盖",
        "2 个配置"
      ],
      [
        "AAII",
        "GLM-5.3 · 45.0"
      ]
    ],
    "lede": "本期独立评测：GLM-5.3，AAII 45.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "Flash、FlashX 与 GLM-5.3 的价格和档位分别记录；753B 张量大小不能直接解决基座架构参数定义。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://docs.z.ai/guides/overview/pricing",
      "https://docs.z.ai/guides/llm/glm-5.3",
      "https://docs.z.ai/guides/vlm/glm-5.3-flash"
    ]
  },
  {
    "key": "moonshot",
    "models": [
      "kimi-k3",
      "kimi-k27code",
      "kimi-k31pro",
      "kimi-k31pro-highspeed"
    ],
    "family": "Kimi K3.1 Pro / Kimi K3.1 Pro Highspeed / Kimi K3 / Kimi K2.7 Code",
    "fresh": true,
    "facts": [
      [
        "已收录",
        "4 个条目"
      ],
      [
        "本期主榜覆盖",
        "2 个配置"
      ],
      [
        "AAII",
        "Kimi K3.1 Pro · 55.0"
      ]
    ],
    "lede": "本期独立评测：Kimi K3.1 Pro，AAII 55.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "K3.1 Pro API 已可用，权重尚待公布；Highspeed 为独立计价档，不能把厂商速度声称当作独立测量。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://www.kimi.ai/blog/kimi-k3-1-pro",
      "https://platform.kimi.ai/docs/models",
      "https://platform.kimi.ai/docs/pricing/chat"
    ]
  },
  {
    "key": "stepfun",
    "models": [
      "step5"
    ],
    "family": "Step5 Preview",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "1 个条目"
      ],
      [
        "本期主榜覆盖",
        "1 个配置"
      ],
      [
        "AAII",
        "Step 5 Preview · 44.0"
      ]
    ],
    "lede": "本期独立评测：Step 5 Preview，AAII 44.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "Step 5 Preview 的托管 API 输出上限与自部署权重卡说明分开；渠道缓存读取价也可能不同。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://huggingface.co/stepfun-ai/Step-5-Preview",
      "https://platform.stepfun.ai/docs/en/guides/models/step-5-preview",
      "https://platform.stepfun.ai/docs/en/guides/pricing/details"
    ]
  },
  {
    "key": "deepseek",
    "models": [
      "ds-v41flash",
      "ds-v4pro",
      "ds-v4flash0731",
      "ds-v41flash-1017"
    ],
    "family": "DeepSeek-V4.1-Flash-1017 / DeepSeek-V4-Pro-0813",
    "fresh": true,
    "facts": [
      [
        "已收录",
        "4 个条目"
      ],
      [
        "本期主榜覆盖",
        "2 个配置"
      ],
      [
        "AAII",
        "DeepSeek V4.1 Flash · 1017 · 45.0"
      ]
    ],
    "lede": "本期独立评测：DeepSeek V4.1 Flash · 1017，AAII 45.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "Flash 1017 与 9/10 旧 checkpoint 分开；当前别名路由、工作日高峰/低谷与工具费分别记录。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://api-docs.deepseek.com/quick_start/pricing/",
      "https://api-docs.deepseek.com/news/news261017/"
    ]
  },
  {
    "key": "motif",
    "models": [
      "motif3"
    ],
    "family": "Motif3",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "1 个条目"
      ],
      [
        "本期主榜覆盖",
        "1 个配置"
      ],
      [
        "AAII",
        "Motif 3 · 34.0"
      ]
    ],
    "lede": "本期独立评测：Motif 3，AAII 34.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "官方权重已发布；未获得统一官方 API token 价格，页面的 AA 渠道参考价不冒充厂商报价。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://huggingface.co/Motif-Technologies/Motif-3"
    ]
  },
  {
    "key": "minimax",
    "models": [
      "minimax-m3",
      "minimax-m31flash"
    ],
    "family": "MiniMax-M3.1-Flash / MiniMax-M3",
    "fresh": true,
    "facts": [
      [
        "已收录",
        "2 个条目"
      ],
      [
        "本期主榜覆盖",
        "2 个配置"
      ],
      [
        "AAII",
        "MiniMax-M3.1-Flash · 43.0"
      ]
    ],
    "lede": "本期独立评测：MiniMax-M3.1-Flash，AAII 43.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "M3.1 Flash API 已上线、权重待发布；M3 的长输入与 Priority 规则不直接套用到新模型。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://www.minimax.io/blog/minimax-m31f",
      "https://platform.minimax.io/docs/pricing/overview",
      "https://platform.minimax.io/docs/guides/text-generation"
    ]
  },
  {
    "key": "tencent",
    "models": [
      "hy3",
      "hy4preview"
    ],
    "family": "Hy4 Preview / Hy3",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "2 个条目"
      ],
      [
        "本期主榜覆盖",
        "1 个配置"
      ],
      [
        "AAII",
        "腾讯混元 Hy3 · 25.0"
      ]
    ],
    "lede": "本期独立评测：腾讯混元 Hy3，AAII 25.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "国际 TokenHub 的美元价与境内人民币价分别核对；Hy4 Preview 的收录不表示它在本月新发布。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://cloud.tencent.com/document/product/1823/130051",
      "https://intl.cloud.tencent.com/document/product/1300/78937"
    ]
  },
  {
    "key": "nvidia",
    "models": [
      "nemotron3ultra",
      "nemotron35",
      "nemotron35-supervl",
      "nemotron35-bolt",
      "nemotron35-bolt4gb"
    ],
    "family": "Nemotron3.5 Super VL120B-A12B / Nemotron3.5 Bolt74B-A9B / Nemotron3.5 BoltE4B / Nemotron3Ultra / Nemotron3.5Lightning",
    "fresh": true,
    "facts": [
      [
        "已收录",
        "5 个条目"
      ],
      [
        "本期主榜覆盖",
        "4 个配置"
      ],
      [
        "AAII",
        "Nemotron 3.5 Super VL · 26.0"
      ]
    ],
    "lede": "本期独立评测：Nemotron 3.5 Super VL，AAII 26.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "开放权重不代表托管推理免费；Bolt、Super VL 及旧 Lightning 使用各自模型卡和许可，不填造统一官方 token 价格。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16",
      "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB",
      "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4",
      "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16"
    ]
  },
  {
    "key": "mistral",
    "models": [
      "mistral-l3",
      "mistral-l4"
    ],
    "family": "Mistral Large4 Preview / Mistral Large3 / Voxtral3 / Timestral",
    "fresh": true,
    "facts": [
      [
        "已收录",
        "2 个条目"
      ],
      [
        "本期主榜覆盖",
        "1 个配置"
      ],
      [
        "AAII",
        "Mistral Large 4 Preview · 38.0"
      ]
    ],
    "lede": "本期独立评测：Mistral Large 4 Preview，AAII 38.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "Large 4 Preview 与仍在列的 Large 3 分开；API、Batch 与 Vibe 订阅分别核验。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://mistral.ai/news/mistral-large-4/",
      "https://docs.mistral.ai/models/mistral-large-3-25-12",
      "https://mistral.ai/news/"
    ]
  },
  {
    "key": "inclusionai",
    "models": [
      "ling31-flash1019",
      "ling31flash"
    ],
    "family": "Ling3.1 Flash / Ling3.0 Flash",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "2 个条目"
      ],
      [
        "本期主榜覆盖",
        "2 个配置"
      ],
      [
        "AAII",
        "Ling 3.1 Flash · 1019 · 44.0"
      ]
    ],
    "lede": "本期独立评测：Ling 3.1 Flash · 1019，AAII 44.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "Ling-3.1-flash 家族权重与 AA 1019 checkpoint 分开；未确认完全对应前，不转移参数、许可或公开权重状态。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://huggingface.co/inclusionAI",
      "https://huggingface.co/inclusionAI/Ling-3.1-flash",
      "https://huggingface.co/inclusionAI/Ling-3.0-flash"
    ]
  },
  {
    "key": "reflection",
    "models": [
      "reflection-beam"
    ],
    "family": "Beam 1.0",
    "fresh": true,
    "facts": [
      [
        "已收录",
        "1 个条目"
      ],
      [
        "本期主榜覆盖",
        "1 个配置"
      ],
      [
        "AAII",
        "Beam 1.0 · 30.0"
      ]
    ],
    "lede": "本期独立评测：Beam 1.0，AAII 30.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "Beam 1.0 作为新候选收录，独立评测来自 AA；权重、API 规格和费用以官方模型卡为准。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://reflection.ai/"
    ]
  },
  {
    "key": "meituan",
    "models": [
      "longcat20"
    ],
    "family": "LongCat2.0",
    "fresh": false,
    "facts": [
      [
        "已收录",
        "1 个条目"
      ],
      [
        "本期主榜覆盖",
        "1 个配置"
      ],
      [
        "AAII",
        "LongCat-2.0 · 19.0"
      ]
    ],
    "lede": "本期独立评测：LongCat-2.0，AAII 19.0。",
    "tech": "价格、上下文和开放状态以各模型的具体来源为准；同公司不同版本分开记录。",
    "scene": "作为待比较候选，依据在模型详情与用途入口中列出。",
    "keypoints": "补录官方 LongCat-2.0 资料，未声称它是本月新发布；公开权重、自部署成本与 API 标价分开。",
    "foot": "本页实际收录模型，含历史版本。",
    "urls": [
      "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "https://huggingface.co/meituan-longcat"
    ]
  }
];

const TIMELINE = [
  {
    "d": "06-09",
    "t": "Claude Fable 5 发布",
    "x": "此后长期霸榜；至今仍是 Arena 真人盲测第 1 名（1506）。",
    "last": false,
    "historical": true
  },
  {
    "d": "06-16",
    "t": "智谱 GLM-5.2 开源进入前沿俱乐部",
    "x": "第一家非中美巨头的开源前沿模型。",
    "last": false,
    "historical": true
  },
  {
    "d": "07-06",
    "t": "腾讯混元 Hy3 正式版",
    "x": "295B / 21B 激活 MoE，256K 上下文，开源权重。",
    "last": false,
    "historical": true
  },
  {
    "d": "07-08",
    "t": "Grok 4.5 发布",
    "x": "约 80 t/s；嵌入 Cursor 全系。",
    "last": false,
    "historical": true
  },
  {
    "d": "07-09",
    "t": "GPT-5.6 家族 GA：Sol / Terra / Luna",
    "x": "能力分层策略成型，一个家族覆盖从深推理到高吞吐。",
    "last": false,
    "historical": true
  },
  {
    "d": "07-16",
    "t": "Kimi K3 发布",
    "x": "约 2.8T MoE；至今仍保持 AA-LCR 长上下文推理第一（89%）。",
    "last": false,
    "historical": true
  },
  {
    "d": "07-21",
    "t": "Gemini 3.6 Flash / 3.5 Flash-Lite 发布",
    "x": "Flash-Lite 的 358 t/s 至今仍是本页最快。",
    "last": false,
    "historical": true
  },
  {
    "d": "07-24",
    "t": "Claude Opus 5 发布",
    "x": "$5/$25；GDPval 真实工作任务 62% 至今仍是最高分。",
    "last": false,
    "historical": true
  },
  {
    "d": "07-31",
    "t": "DeepSeek V4 Flash 0731 发布",
    "x": "SWE-bench 88.8%；已于 9/10 退役。",
    "last": false,
    "historical": true
  },
  {
    "d": "08-05",
    "t": "Muse Spark 1.2 发布",
    "x": "Arena 1500（#4），至今仍高于继任者 1.3。",
    "last": false,
    "historical": true
  },
  {
    "d": "08-11",
    "t": "NVIDIA Nemotron 3.5 Lightning 发布",
    "x": "30B / 3B 激活，$0.06/$0.20，本页最低标价。",
    "last": false,
    "historical": true
  },
  {
    "d": "08-12",
    "t": "Grok 4.6 发布",
    "x": "TB 2.1 88% 与头部并列 —— 但一个月后的 TB 4.0 只剩 21%。",
    "last": false,
    "historical": true
  },
  {
    "d": "08-13",
    "t": "DeepSeek V4 Pro 0813 GA",
    "x": "SWE-bench 96.4%，归档时的开源第一。",
    "last": false,
    "historical": true
  },
  {
    "d": "08-14",
    "t": "智谱 GLM-5.3 发布 + Qwen3.8 27B 开源",
    "x": "GLM-5.3 至今仍是开源阵营的能力天花板。",
    "last": false,
    "historical": true
  },
  {
    "d": "08-16",
    "t": "Terminal-Bench 3.0 发布",
    "x": "把 TB 2.0 的 80%+ 打回 40% 以下；一个月后又被 4.0 取代。",
    "hot": true,
    "last": false,
    "historical": true
  },
  {
    "d": "08-17",
    "t": "DeepSeek 峰谷计价生效",
    "x": "低价策略转向精细化运营的分水岭。",
    "last": false,
    "historical": true
  },
  {
    "d": "08-21",
    "t": "OpenAI 开源 Codex Harness；GPT-5.6 Sol 降价至 $4/$20",
    "x": "该促销价至今仍在生效。",
    "last": false,
    "historical": true
  },
  {
    "d": "08-26",
    "t": "智谱 GLM-5.3-Flash 发布",
    "x": "320B / 18B 激活，GLM-5 系列首个原生多模态；单任务成本 $0.25。",
    "hot": true,
    "last": false,
    "historical": true
  },
  {
    "d": "08-28",
    "t": "阿里 Qwen3.8-Flash-Next 发布",
    "x": "与 GLM-5.3-Flash 在同一时间窗独立收敛到相似架构。",
    "last": false,
    "historical": true
  },
  {
    "d": "09-01",
    "t": "Anthropic：Claude Fable 5.1 + Mythos 5.1 + Enterprise Frontier Safeguards",
    "x": "标价不变，缓存读取价砍到 1/4（$1 → $0.25）。",
    "hot": true,
    "last": false,
    "historical": true
  },
  {
    "d": "09-01",
    "t": "vals.ai 归档 SWE-bench Verified",
    "x": "成绩饱和，不再跑新模型。此后发布的模型永远不会有该分数。",
    "hot": true,
    "last": false,
    "historical": true
  },
  {
    "d": "09-02",
    "t": "Meta Muse Spark 1.3 · Google Gemini 3.8 Flash · 阿里 Qwen3.8-Max 0902",
    "x": "一天之内三家同价换代；Gemini 同期另发 3.8 Flash Cyber。",
    "hot": true,
    "last": false,
    "historical": true
  },
  {
    "d": "09-03",
    "t": "OpenAI 发布 GPT-6 Astra",
    "x": "$10/$50、1M 上下文；TB 4.0 59% 领先第二名 7 个百分点。",
    "hot": true,
    "last": false,
    "historical": true
  },
  {
    "d": "09-10",
    "t": "DeepSeek V4.1 Flash 发布，V4 Flash 与 Vision 版退役",
    "x": "开源权重 + 原生视觉；峰谷时段调整，大部分时间按低谷价计费。",
    "hot": true,
    "last": false,
    "historical": true
  },
  {
    "d": "09-12",
    "t": "Altman：OpenAI 今年不 IPO",
    "x": "称当下上市「不明智」；同期 Anthropic 目标 10 月上市、估值 2 万亿美元。",
    "hot": true,
    "last": false,
    "historical": true
  },
  {
    "d": "09-19",
    "t": "本期数据抓取",
    "x": "AA 智能指数已是 v4.3、Terminal-Bench 已是 4.0、编码 Agent 指数已是 v1.5 —— 三把尺同时换代。",
    "hot": true,
    "last": false,
    "historical": true
  },
  {
    "d": "09-21",
    "t": "Grok 4.7 与 MiMo-V2.6 系列进入候选",
    "x": "Grok Build + Grok 4.7 的 DeepSWE v1.1 为 73%；MiMo-V2.6-Pro AAII 46。",
    "last": false,
    "historical": true
  },
  {
    "d": "09-22",
    "t": "Claude Opus 5.5、GPT-6 Sol / Luna 发布",
    "x": "Opus 5.5 后续在 AAII v4.3.2 达 58；OpenAI 扩展 GPT-6 价格档。",
    "last": false,
    "historical": true
  },
  {
    "d": "09-28",
    "t": "Claude Sonnet 5.5 发布",
    "x": "Claude Code + Sonnet 5.5 max 在 AA CAI v1.5 达 68。",
    "last": false,
    "historical": true
  },
  {
    "d": "09-29",
    "t": "GPT-6.1 Sol API 发布",
    "x": "官方标准价 $2/$10；AA max 档 AAII 52。",
    "last": false,
    "historical": true
  },
  {
    "d": "09-30",
    "t": "Google 发布 Gemini 4 Argon",
    "x": "AAII 53、Arena 初步 Elo 1525±9；面向开发者的普遍开放仍待公告。",
    "last": false,
    "historical": true
  },
  {
    "d": "10-02",
    "t": "本期人工核验",
    "x": "更新 AA 当前榜单、Arena 9/30 快照及厂商 API 定价；旧单项保留原抓取日。",
    "hot": true,
    "last": false,
    "historical": true
  },
  {
    "d": "10-06",
    "t": "Mistral Large4 public preview",
    "x": "API current, weights promised by endOctober.",
    "url": "https://mistral.ai/news/mistral-large-4/"
  },
  {
    "d": "10-07",
    "t": "Claude Haiku 5.5 上线",
    "x": "claude-haiku-5-5 已上线；1M 上下文、128K 同步输出；输入总量 ≤100K 与 >100K 使用不同价格。",
    "url": "https://www.anthropic.com/claude-haiku-5-5"
  },
  {
    "d": "10-07",
    "t": "Sonnet 5.5 缓存读取降价",
    "x": "缓存读取价由原 $0.20/M 降至 $0.10/M；输入 $2/M、输出 $10/M。",
    "url": "https://www.anthropic.com/claude-haiku-5-5"
  },
  {
    "d": "10-07",
    "t": "Max／Team 新增可申领 API 额度",
    "x": "Max／Team 宣布新增月度 API 额度；资格、关联组织和到期条件见当前帮助页。",
    "url": "https://www.anthropic.com/claude-haiku-5-5"
  },
  {
    "d": "10-08",
    "t": "Gemini 3.7 Flash 自动路由至 3.8",
    "x": "gemini-3.7-flash 已弃用，API 请求自动路由到 gemini-3.8-flash；旧成绩仍归原模型。",
    "url": "https://ai.google.dev/gemini-api/docs/changelog"
  },
  {
    "d": "10-12",
    "t": "Meta 发布 Muse Wonder／Wonder Full",
    "x": "Wonder 可经 Meta Model API 和 Muse Code 使用；Full 只在 Muse Code 订阅提供。不得将 API max 档误认为 Full。",
    "url": "https://research.meta.ai/blog/muse-wonder"
  },
  {
    "d": "10-13",
    "t": "Gemini 4 Argon 正式开放",
    "x": "gemini-4-argon 已 GA；付费 API 标准价 $2/M 输入、$10/M 输出、$0.10/M 隐式缓存，优惠至 11/30。",
    "url": "https://ai.google.dev/gemini-api/docs/changelog"
  },
  {
    "d": "10-14",
    "t": "Grok Voice 3.0 上线",
    "x": "grok-voice-3.0 进入 Speech to Speech；grok-voice-latest 自动指向新版。官方称与 2.0 同价，未在文本模型 USD/M 表中套用语音计价。",
    "url": "https://docs.x.ai/developers/release-notes"
  },
  {
    "d": "10-14",
    "t": "MiMo V2.5 request redirection began",
    "x": "18:00UTC+8: V2.5-Pro toV2.6-Pro, V2.5 toV2.6-Flash.",
    "url": "https://mimo.mi.com/docs/zh-CN/updates/deprecate"
  },
  {
    "d": "10-15",
    "t": "Meta 发布 Muse Spark Open",
    "x": "816B 总参数／42B 激活、1M 上下文；权重采用 Muse Model License，有署名、使用政策及特定 MaaS 商业条件。",
    "url": "https://research.meta.ai/blog/muse-spark-open"
  },
  {
    "d": "10-15",
    "t": "Nemotron3.5 SuperVL and Bolt74B weights",
    "x": "120B/12B and74B/9B respectively, OpenMDW1.1.",
    "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16"
  },
  {
    "d": "10-15",
    "t": "Timestral introduced",
    "x": "Time-series forecasting model; separate modality, no text-token tariff inferred.",
    "url": "https://mistral.ai/news/timestral/"
  },
  {
    "d": "10-15",
    "t": "Step5 Preview architecture/training report",
    "x": "Official architecture blog published; weights now present. Exact first weights-publication timestamp not independently reconstructed.",
    "url": "https://platform.stepfun.ai/blog/inside-step-5-preview"
  },
  {
    "d": "10-15",
    "t": "Qwen Code weekly release update",
    "x": "Official archive describesv0.25.1/v0.25.2 and agent collaboration; software event, not new foundation-model weights.",
    "url": "https://qwenlm.github.io/qwen-code-docs/en/blog/updates/"
  },
  {
    "d": "10-17",
    "t": "DeepSeek V4.1 Flash1017 launched",
    "x": "Website, app, API and weights published; current alias now1017.",
    "url": "https://api-docs.deepseek.com/news/news261017/"
  },
  {
    "d": "10-17",
    "t": "DeepSeek Search and Fetch public APIs",
    "x": "Both list0.75USD/1000calls; specified server-side tools temporarily free.",
    "url": "https://api-docs.deepseek.com/news/news261017/"
  },
  {
    "d": "10-19",
    "t": "Muse Glimmer 30B 研究论文发布",
    "x": "论文介绍本地 Agent 模型；这不是新的模型首发，官方模型卡和发布索引分别记录 8 月与 8/10。",
    "url": "https://ai.meta.com/research/publications/muse-glimmer-30b-an-on-device-agentic-model/"
  },
  {
    "d": "10-19",
    "t": "MiniMax M3.1 Flash launched",
    "x": "API available; weights later.",
    "url": "https://www.minimax.io/blog/minimax-m31f"
  },
  {
    "d": "10-20",
    "t": "OpenAI API 新增 12 小时缓存",
    "x": "可选 12 小时 prompt cache；写入价为输入价 2.5 倍，需与默认缓存写入和缓存读取价分别记录。",
    "url": "https://developers.openai.com/api/docs/changelog"
  },
  {
    "d": "10-20",
    "t": "Voxtral3 speech family introduced",
    "x": "Speech and voice-agent SDK; billing uses minutes/characters, not ordinary LLM tokens.",
    "url": "https://mistral.ai/news/voxtral-3/"
  },
  {
    "d": "10-21",
    "t": "MiMo V2.5 text-model IDs retired",
    "x": "10:00UTC+8 old IDs invalid, errors rather than continuing redirect.",
    "url": "https://mimo.mi.com/docs/zh-CN/updates/deprecate"
  },
  {
    "d": "10-21",
    "t": "Mistral/NVIDIA engineering collaboration",
    "x": "Official news archive lists AI-native engineering collaboration; not a new general model release.",
    "url": "https://mistral.ai/news/"
  },
  {
    "d": "10-22",
    "t": "Decisions API 正式开放",
    "x": "Decisions API 使用 gpt-6-luna 正式开放；每请求最多 400 个问题，支持共享输入缓存、单题图片和 input_json。这是 API 功能更新，不是新模型版本。",
    "url": "https://developers.openai.com/api/docs/changelog"
  },
  {
    "d": "10-23",
    "t": "Nemotron3.5 BoltE4B released",
    "x": "8B total,4B effective;64K window; further post-trained from Gemma4E4B.",
    "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB"
  },
  {
    "d": "10-23",
    "t": "AA 收录 Kimi K3.1 Pro",
    "x": "AA 记录日期为 10/23；官方档案日期 10/24，页面保留冲突。",
    "url": "https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks"
  },
  {
    "d": "10-24",
    "t": "Kimi K3.1Pro announced in official archive",
    "x": "AA lead saysOctober23; official research index saysOctober24, retain both definitions.",
    "url": "https://www.kimi.ai/blog/"
  },
  {
    "d": "10-24",
    "t": "本期全模块资料核验",
    "x": "重新核对公开模型榜、Agent 指数、Arena、API 规格与订阅；未重新确认的字段保留原日期。",
    "hot": true,
    "last": true
  }
];

const NOTES = [
  {
    "n": "v2.0",
    "t": "当前编码 Agent 指数与旧 DeepSWE 分开",
    "s": "AA 方法页 · 10/24 读取",
    "url": "https://artificialanalysis.ai/methodology/coding-agents-benchmarking",
    "models": [],
    "d": "CAI v2.0 由 FrontierCode 1.1、Terminal-Bench 4.0、SWE-Atlas-QnA-AA 等权合成。矩阵展示具体 Agent 配置，路由组合不冒充单模型。v1.5 和 DeepSWE 保留在历史评测中。"
  },
  {
    "n": "Elo",
    "t": "GDPval-AA v2.1 与旧版百分比是不同指标",
    "s": "AA GDPval · 10/24 读取",
    "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
    "models": [
      "kimi-k31pro",
      "muse-wonder-full"
    ],
    "d": "v2.1 的真实工作任务使用匿名成对比较得到 Elo，记录 95% 置信区间。旧版 v2 百分比另列，不从归一化合成值反算成 Elo。"
  },
  {
    "n": "审查中",
    "t": "SciCode 的数据集质量审查",
    "s": "AA SciCode · 10/24 读取",
    "url": "https://artificialanalysis.ai/evaluations/scicode",
    "models": [],
    "d": "源站公开标为 Under review，原因是独立数据集审计发现潜在错误。分数可能在修正后改变；当前保留来源结果，但不授予最优值。"
  },
  {
    "n": "10/22",
    "t": "Arena 的数据日与读取日分开",
    "s": "Arena Text Overall · 10/24 读取",
    "url": "https://arena.ai/leaderboard/chat/text",
    "models": [],
    "d": "公开榜日期 10/22；本次读取 10/24。418 行并非 418 家公司或独立模型，包含推理配置。不同档位和置信区间重叠时，不给出确定的谁更强结论。"
  },
  {
    "n": "计费",
    "t": "标准 API、缓存、渠道与订阅独立核对",
    "s": "各厂商官方文档 · 10/24 读取",
    "models": [],
    "d": "价格主表统一 USD / 百万 token，渠道和适用范围在计价方式中注明。缓存读取、写入、存储及长上下文各有条件。订阅金额按官网公布的币种、月付/年付和地区记录，动态购买价读不到就标待核实。"
  },
  {
    "n": "v4.3.2",
    "t": "当前智能指数口径",
    "s": "Artificial Analysis · 2026-10-02",
    "models": [
      "claude-opus55",
      "claude-sonnet55",
      "gpt61-sol"
    ],
    "d": "AAII v4.3.2 由 10 项评测合成，其中 GDPval-AA 已为 v2.1。旧页面 GDPval-AA v2 的百分比分数不能直接混进 v2.1 的 Elo 口径；该旧单项仍标注 9/19。"
  },
  {
    "n": "113题",
    "t": "DeepSWE v1.1 测什么",
    "s": "Artificial Analysis CAI v1.5 方法页 · 2026-10-02",
    "models": [
      "claude-sonnet55",
      "grok47"
    ],
    "d": "DeepSWE v1.1 共 113 道真实仓库改动任务，要求 Agent 阅读、修改并通过隔离环境验证。它评的是「Agent 框架 × 模型 × 推理档」，不能当成裸模型分数；要连同 TB 4.0 和 SWE-Atlas-QnA 看。"
  },
  {
    "n": "v4.3",
    "t": "9 月研究档案 · 智能指数换尺：头部从 63 分档变成 53 分档",
    "s": "Artificial Analysis · 2026-09-19 · 历史快照",
    "models": [
      "claude-fable51",
      "gpt6-astra"
    ],
    "d": "AAII v4.3 由 10 项评测等权合成：AA-Briefcase、GDPval-AA v2、AutomationBench-AA、Terminal-Bench 4.0、SciCode、Humanity’s Last Exam、GDP.pdf、CritPt、AA-Omniscience、AA-LCR v1.1。上一版页面用的是 v4.1.1（9 项）。两套分数不是同一把尺，不能相减也不能画趋势。"
  },
  {
    "n": "59%",
    "t": "9 月研究档案 · Terminal-Bench 4.0：GPT-6 Astra 领先 7 个百分点",
    "s": "Terminal-Bench / AA 独立复跑 · 2026-09-19 · 历史快照",
    "models": [
      "gpt6-astra",
      "claude-fable51",
      "claude-opus5"
    ],
    "d": "TB 4.0 共 66 题，覆盖软件、机器学习、科学、运维、安全、硬件、媒体七个域，重新标定了算力与时限，并移除了 8 道已饱和或有质量问题的题。pass@1 取三次平均。Astra 59%、Fable 5.1 52%、Opus 5 49%。"
  },
  {
    "n": "归档",
    "t": "9 月研究档案 · SWE-bench Verified 停止更新",
    "s": "vals.ai · 2026-09-01 · 历史快照",
    "models": [
      "claude-opus5",
      "ds-v4pro"
    ],
    "d": "86 个被评测的模型里有 7 个达到 95% 以上，榜首 Claude Opus 5 的 97.00% 距满分只剩 3 分 —— vals.ai 判定该基准已无法区分前沿模型，正式归档。开源权重模型已经站上顶端：DeepSeek V4 Pro 0813 以 96.40% 位列第二，距闭源第一仅 0.6 分。"
  },
  {
    "n": "88 → 21",
    "t": "9 月研究档案 · Grok 4.6 在新旧终端基准上的落差",
    "s": "Artificial Analysis · 2026-09-19 · 历史快照",
    "models": [
      "grok46"
    ],
    "d": "TB 2.1 上 Grok 4.6 拿 88%，与 GPT-6 Astra 持平；换到 TB 4.0 只剩 21%，而 Astra 是 59%。同类落差还有 Kimi K3（85% → 13%）、Claude Sonnet 5（81% → 14%）。饱和的旧基准会把这种差距完全掩盖掉。"
  },
  {
    "n": "50×",
    "t": "9 月研究档案 · 同一份编码任务，最贵与最便宜的组合差 50 倍",
    "s": "AA Coding Agent Index v1.5 · 2026-09-19 · 历史快照",
    "models": [
      "claude-fable51",
      "ds-v4pro"
    ],
    "d": "Claude Code + Fable 5.1：指数 62，单任务 $12.4，平均耗时 34.8 分钟。Codex + DeepSeek V4 Pro：指数 43，单任务 $0.24，平均耗时 40.3 分钟。中间档：Muse Code + Muse Spark 1.3（54 / $3.98 / 18.4 分钟）、Opencode + GLM-5.3（54 / $4.24 / 48.1 分钟）、Antigravity SDK + Gemini 3.8 Flash（42 / $2.47 / 11.7 分钟，最快）。"
  },
  {
    "n": "-75%",
    "t": "9 月研究档案 · Claude Fable 5.1 缓存读取价砍到四分之一",
    "s": "Anthropic · 2026-09-01 · 历史快照",
    "models": [
      "claude-fable51"
    ],
    "d": "标价仍是 $10/$50，但缓存读取从 $1 降到 $0.25。官方估计典型负载可省约 25%，复杂编码与高强度 Agent 场景可省约 45% —— 因为这类场景里缓存读取往往占账单大头。同日还发布了受限访问的 Mythos 5.1 与 Enterprise Frontier Safeguards。"
  },
  {
    "n": "272K",
    "t": "9 月研究档案 · GPT-6 Astra 的长输入会整单重新计价",
    "s": "OpenAI · 2026-09-03 · 历史快照",
    "models": [
      "gpt6-astra"
    ],
    "d": "任何超过 272K 输入 token 的请求会按更高档重新计价整个请求，而不只是超出部分。另外 Batch 与 Flex 模式半价、Fast 模式双倍。做长文档处理时这条比标价本身更影响账单。"
  },
  {
    "n": "82% vs 4%",
    "t": "9 月研究档案 · 非幻觉率的差距比智能指数大得多",
    "s": "Artificial Analysis · 2026-09-19 · 历史快照",
    "models": [
      "minimax-m3",
      "ds-v41flash"
    ],
    "d": "AA-Omniscience 非幻觉率（1 − 幻觉率）：MiniMax-M3 82%、MiMo-V2.5-Pro 75%、Claude 4.5 Haiku 73%、Motif 3 72%、GLM-5.3-Flash 72%、Qwen3.8-Max 71%；另一端 DeepSeek V4.1 Flash 4%、DeepSeek V4 Pro 5%、GPT-5.6 Luna 7%、GPT-5.6 Sol 8%。这衡量的是「不知道时肯不肯说不知道」，不是知识多少。"
  },
  {
    "n": "89%",
    "t": "9 月研究档案 · 长上下文推理：Kimi K3 第一，窗口大小不等于能力",
    "s": "Artificial Analysis AA-LCR v1.1 · 2026-09-19 · 历史快照",
    "models": [
      "kimi-k3",
      "step5",
      "mistral-l3"
    ],
    "d": "Kimi K3 89%、Step 5 Preview 88%、Claude Fable 5.1 85%、GPT-5.6 Sol 84%。反例：Mistral Large 3 有 256K 窗口但 AA-LCR 只有 36%；Muse Glimmer 只有 131K 窗口却拿到 83%。选长文档模型只看窗口大小会选错。"
  },
  {
    "n": "$0.25",
    "t": "9 月研究档案 · GLM-5.3-Flash：与 GPT-5.6 Terra 同智能，成本只有 1/5.6",
    "s": "Artificial Analysis · 2026-09-19 · 历史快照",
    "models": [
      "glm53flash",
      "gpt56-terra"
    ],
    "d": "两者 AAII 都是 42。GLM-5.3-Flash 单任务成本 $0.25、标价 $0.15/$0.50；GPT-5.6 Terra 单任务 $1.40、标价 $2/$12。GLM-5.3-Flash 的 GDPval（58%）甚至高于自家旗舰 GLM-5.3（57%）。"
  },
  {
    "n": "9/1–9/3",
    "t": "9 月研究档案 · 三天内四家发新旗舰，且大多维持原价",
    "s": "各厂商官方 · 2026-09 · 历史快照",
    "models": [
      "claude-fable51",
      "muse13",
      "gemini38",
      "gpt6-astra"
    ],
    "d": "9/1 Claude Fable 5.1（同价，缓存降价）；9/2 Muse Spark 1.3（同价）、Gemini 3.8 Flash（同价）、Qwen3.8-Max 0902；9/3 GPT-6 Astra（$10/$50，对齐 Fable 5.1）。同价换代成了默认打法。"
  },
  {
    "n": "13% vs 8%",
    "t": "9 月研究档案 · OpenAI 两年半来首次在企业支出上反超 Anthropic",
    "s": "Ramp 企业报销数据 / 媒体报道 · 2026-09 · 历史快照",
    "models": [
      "gpt6-astra",
      "claude-fable51"
    ],
    "d": "GPT-6 Astra 约占 Ramp 追踪到的企业 AI 支出 13%，Claude Fable 约 8%。OpenAI 另称上周用户在其模型上的花费也首次超过 Anthropic。这是市场份额信号，不是能力信号 —— 两家的智能指数仍是并列 53。"
  },
  {
    "n": "2 万亿",
    "t": "9 月研究档案 · Anthropic 瞄准 10 月上市，OpenAI 今年不 IPO",
    "s": "路透 / 彭博 / 媒体报道 · 2026-09 · 历史快照",
    "models": [],
    "d": "Anthropic 6 月已秘密递交 S-1，目标 10 月纳斯达克上市、估值 2 万亿美元，高盛 / 摩根大通 / 摩根士丹利承销，拟募资超 600 亿美元。9/12 Altman 明确表示 OpenAI 今年不会上市，称当下「不明智」。"
  },
  {
    "n": "V4.1",
    "t": "9 月研究档案 · DeepSeek 换代并调整峰谷时段",
    "s": "DeepSeek 官方 API 文档 · 2026-09-10 · 历史快照",
    "models": [
      "ds-v41flash"
    ],
    "d": "V4.1 Flash 开源权重、原生视觉、1M 上下文、384K 最大输出。峰谷规则现为：高峰仅工作日 UTC 01:00–04:00 与 06:00–10:00（不含中国法定节假日），其余时段一律低谷价（半价）。V4 Flash 与 V4 Flash Vision Exp 已退役，旧模型名暂时路由到 V4.1 Flash。"
  },
  {
    "n": "Arena 背离",
    "t": "9 月研究档案 · 多个上一代在真人盲测上仍高于继任者",
    "s": "arena.ai · 2026-09-19 · 历史快照",
    "models": [
      "claude-fable5",
      "muse12"
    ],
    "d": "claude-fable-5-high 1506±5 排第 1，高于 claude-fable-5.1-max 的 1498±8（#5）；muse-spark-1.2 xHigh 1500±11（#4）高于 muse-spark-1.3-max 的 1493±9（#8）。注意这些差值都落在置信区间内，头部十余名互相统计并列 —— 把 Arena 名次当能力排名用是常见误读。"
  },
  {
    "n": "320B",
    "t": "9 月研究档案 · 国产 Flash 档位：两家独立收敛到相似架构",
    "s": "MarkTechPost / IT 之家 · 2026-08 · 历史快照",
    "models": [
      "glm53flash",
      "qwen38flashnext"
    ],
    "d": "GLM-5.3-Flash（320B 总参 / 18B 激活，8/26）与 Qwen3.8-Flash-Next（8/28）在同一时间窗发布，架构路线高度相似。GLM-5.3-Flash 首次进入 Arena 代码榜前十，Qwen3.8-Max 0902 登顶前端开发子榜。"
  },
  {
    "n": "358 t/s",
    "t": "9 月研究档案 · 吞吐天花板与「快不等于省时间」",
    "s": "Artificial Analysis · 2026-09-19 · 历史快照",
    "models": [
      "gemini35lite",
      "gemini38",
      "ds-v41flash"
    ],
    "d": "Gemini 3.5 Flash-Lite 358 t/s、Gemini 3.8 Flash 298 t/s、Nemotron 3.5 Lightning 293 t/s、Muse Spark 1.3 214 t/s、DeepSeek V4.1 Flash 208 t/s。但在编码 Agent 场景里决定总耗时的是轮数：Antigravity SDK + Gemini 3.8 Flash 平均 11.7 分钟，Kimi Code CLI + Kimi K3 要 1 小时。"
  },
  {
    "n": "Cyber",
    "t": "9 月研究档案 · 安全特化线继续分叉",
    "s": "Google / Anthropic · 2026-09 · 历史快照",
    "models": [
      "claude-mythos51"
    ],
    "d": "Google 随 3.8 Flash 同期发布 Gemini 3.8 Flash Cyber；Anthropic 的 Mythos 5.1 只向通过审核的网络安全与生命科学机构开放。这类模型都不进入常规选型，但会影响「同一家厂商的最强能力到底是什么」的判断。"
  },
  {
    "n": "档案",
    "t": "上一期厂商长文档案",
    "s": "旧版交付包 · 2026-10-02 · 本期未作为当前结论",
    "models": [],
    "d": "Anthropic：9 月下旬发布 Opus 5.5 和 Sonnet 5.5。Opus 标准 API 价 $4/$20；Sonnet $2/$10（美元 / 百万 token）。新旧推理档的任务成本差异大。 厂商发布信息见 Anthropic 官网；能力与成本分数见 Artificial Analysis 10/2 快照。旧 IPO 传闻未在本期核验，故不作为当前结论。\n\nOpenAI：GPT-6.1 Sol 9/29 发布。≤272K 输入时标准价 $2/$10、缓存读取 $0.10；更长请求整单进入长上下文计价。 API 定价及上下文见 OpenAI 官方模型页；AA 指数和成本来自独立榜单。旧市场份额与 IPO 叙述本期未核验。\n\nGoogle：Google 9/30 公布 Gemini 4 Argon，预告推出后 $2/$10 / 百万 token，缓存读取按输入价 95% 折扣。 Argon 的价格是预告价，不能作为已可购买服务计价。Arena 当前为初步数据。\n\nMeta：9/19 旧资料：9/2 发布 Muse Spark 1.3，距 1.2 只有四周，价格不变（$1.25/$4.25，缓存 $0.15）。原生多模态，支持文本 / 图像 / 视频输入，1M 上下文。配套 Muse Code 框架 CAI 54、单任务 $3.98、平均耗时 18.4 分钟。 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。Muse Glimmer 30B 以 Apache 2.0 开源，24GB 显卡可跑，AA-LCR 83% 在小模型里很突出。有意思的是 Arena 上前代 1.2（1500，#4）仍高于 1.3（1493，#8）。短板：TB 4.0 仅 33%。\n\nZ.ai 智谱：9/19 旧资料：GLM-5.3 的 CAI 54 与闭源的 Muse Spark 1.3 持平，TB 4.0 42% 是开源第一，价格只有旗舰的七分之一。GLM-5.3-Flash（8/26 发布，320B 总参 / 18B 激活）是 GLM-5 系列首个原生多模态模型，AAII 42 与 GPT-5.6 Terra 齐平，单任务成本却只要 $0.25。 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。两款模型均开源权重。GLM-5.3-Flash 的 GDPval 58% 甚至高于自家旗舰的 57%；非幻觉率 70–72% 也明显高于美国头部。上一版页面里「GLM-5.3 上下文 = 753B」的错误已修正：753B 是参数量，上下文是 1M。\n\n阿里巴巴：9/19 旧资料：9/2 发布 Qwen3.8-Max 0902 版，登顶 Arena 前端开发子榜；同期另发 Qwen3.8-Omni-Flash（文本 / 图像 / 音频 / 视频同时输入，1M 上下文）。Qwen3.8-Flash-Next 与 GLM-5.3-Flash 在同一时间窗独立收敛到相似的架构路线。 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。非幻觉率全线领先（Max 71%、Flash-Next 55%、27B 70%）。短板：Max 的单任务成本 $5.41 偏高 —— 标价 $2/$6 不贵，但 token 消耗大且吞吐只有 37 t/s；CAI 43 说明它在主流 Agent 框架上的适配还没调优。\n\nDeepSeek 深度求索：9/19 旧资料：9/10 发布 V4.1 Flash：开源权重、原生视觉理解、1M 上下文、384K 最大输出、208 t/s。V4 Flash 与 V4 Flash Vision Exp 同时退役，旧模型名暂时路由到新模型。峰谷计价调整为高峰仅工作日 UTC 01–04 与 06–10 时，其余时段一律低谷半价。 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。AA 实测 Codex + DeepSeek V4 Pro 的单任务成本仅 $0.24，而 Claude Code + Fable 5.1 是 $12.4（指数 43 对 62）—— 这是本期最大的成本杠杆。短板：非幻觉率 4–5% 是本期最低，事实性任务必须自己加校验层；TB 4.0 只有 14–27%。\n\nxAI / SpaceXAI：Grok 4.7 官方标准价 $2/$6，缓存读取 $0.50 / 百万 token（≤200K）；超过 200K 另行计价。 DeepSWE 只覆盖仓库改动，Grok Build 的 TB 4.0 分项为 33%，不要单凭 DeepSWE 判定综合编码能力。\n\n月之暗面 Moonshot AI：9/19 旧资料：Kimi K3 的 AA-LCR 89% 是本期最高，上下文 1.05M 也是最大的一档，配套 Kimi Code CLI 框架 CAI 52。约 2.8T MoE，仍是开源规模纪录保持者之一。 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。许可不是传统自由开源：Kimi K3 License 规定商业服务收入达标需协商分成。短板：TB 4.0 仅 13%（TB 2.1 还有 85%，落差极大）；吞吐 38 t/s 偏慢，Agent 平均耗时 1 小时是本期最长。\n\n阶跃星辰 StepFun：9/19 旧资料：AAII 44 与 Grok 4.6、Kimi K3 同档，单任务成本 $0.71（Kimi K3 是 $2.00），AA-LCR 88% 接近 Kimi K3 的 89%，吞吐 100 t/s。 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。仍是 preview 阶段：没有 Arena 数据、没有 GPQA、没有 SWE-bench，生态与工具链成熟度未知。建议先小规模验证再纳入生产。\n\nMiniMax：9/19 旧资料：428B 总参 / 23B 激活 MoE，开源权重，1M 上下文，$0.30/$1.20。视频与图像生成（海螺）仍在第一梯队。 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。上一版页面里「上下文 = 428B、输入价 = 开源」两处错误已修正（428B 是参数量，价格是 $0.30/$1.20）。短板：TB 4.0 仅 2%，完全不适合 Agent 场景；本地部署需 256GB 级工作站。\n\n小米：官方模型页列 1M 上下文、128K 最大输出，输入/输出/缓存读取分别 $0.435/$0.87/$0.0036 / 百万 token。 旧 V2.5 系列仍保留为历史候选；官方公告其 10/21 将下线，迁移需另行安排。\n\n腾讯：9/19 旧资料：295B 总参 / 21B 激活 MoE、256K 上下文、开源权重、$0.14/$0.58。 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。TB 4.0 仅 1%；非幻觉率 26% 偏低。真正的价值在生态绑定而不是模型能力本身。\n\nNVIDIA：9/19 旧资料：Nemotron 3.5 Lightning：30B 总参 / 3B 激活、1M 上下文、$0.06/$0.20，是本页最低标价。Nemotron 3 Ultra 的非幻觉率 70%、吞吐 164 t/s。均开源权重。 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。Lightning 的 AA-LCR 只有 60%、TB 2.1 只有 24%，不要用于任何需要连续推理的场景。\n\nMistral AI：9/19 旧资料：细粒度稀疏 MoE，256K 上下文，$0.50/$1.50。 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。本期能力数据全面落后：AA-LCR 36%、TB 2.1 12%、GDPval 4%、SWE-bench 41.4%。如果不是硬性的合规或许可要求，按能力选型排不上号。\n\nMotif Technologies：9/19 旧资料： 以下为 2026-09-19 旧快照，未按 10/2 逐条复核。AA 的智能指数只跑了部分评测（带 * 号），没有公开 API 定价与速度数据，不足以支撑选型判断。"
  }
];

const VOICES = [
  {
    "q": "CAI v2.0 由 FrontierCode 1.1、Terminal-Bench 4.0、SWE-Atlas-QnA-AA 等权合成。矩阵展示具体 Agent 配置，路由组合不冒充单模型。v1.5 和 DeepSWE 保留在历史评测中。",
    "a": "AA 方法页",
    "r": "来源解读（转述）",
    "d": "2026-10-24",
    "key": true,
    "verbatim": false,
    "url": "https://artificialanalysis.ai/methodology/coding-agents-benchmarking"
  },
  {
    "q": "v2.1 的真实工作任务使用匿名成对比较得到 Elo，记录 95% 置信区间。旧版 v2 百分比另列，不从归一化合成值反算成 Elo。",
    "a": "AA GDPval",
    "r": "来源解读（转述）",
    "d": "2026-10-24",
    "key": true,
    "verbatim": false,
    "url": "https://artificialanalysis.ai/evaluations/gdpval-aa"
  },
  {
    "q": "源站公开标为 Under review，原因是独立数据集审计发现潜在错误。分数可能在修正后改变；当前保留来源结果，但不授予最优值。",
    "a": "AA SciCode",
    "r": "来源解读（转述）",
    "d": "2026-10-24",
    "key": true,
    "verbatim": false,
    "url": "https://artificialanalysis.ai/evaluations/scicode"
  },
  {
    "q": "公开榜日期 10/22；本次读取 10/24。418 行并非 418 家公司或独立模型，包含推理配置。不同档位和置信区间重叠时，不给出确定的谁更强结论。",
    "a": "Arena Text Overall",
    "r": "来源解读（转述）",
    "d": "2026-10-24",
    "key": true,
    "verbatim": false,
    "url": "https://arena.ai/leaderboard/chat/text"
  },
  {
    "q": "价格主表统一 USD / 百万 token，渠道和适用范围在计价方式中注明。缓存读取、写入、存储及长上下文各有条件。订阅金额按官网公布的币种、月付/年付和地区记录，动态购买价读不到就标待核实。",
    "a": "各厂商官方文档",
    "r": "来源解读（转述）",
    "d": "2026-10-24",
    "key": true,
    "verbatim": false,
    "url": null
  },
  {
    "q": "该基准的成绩已经饱和，我们不再对新发布的模型运行它。既往结果保留存档。",
    "a": "vals.ai",
    "r": "旧版摘录，未逐字复核 · SWE-bench Verified 归档公告",
    "d": "2026-09-01",
    "key": false,
    "legacy": true
  },
  {
    "q": "86 个被评测的模型里有 7 个达到 95% 以上，榜首 Claude Opus 5 的 97.00% 距满分只剩 3 个百分点 —— 仅凭这一个基准，已经很难再区分前沿模型了。",
    "a": "vals.ai",
    "r": "旧版摘录，未逐字复核 · SWE-bench Verified 关键结论",
    "d": "2026-09-01",
    "key": false,
    "legacy": true
  },
  {
    "q": "开源权重模型已经站上最顶端：DeepSeek V4 Pro 0813 以 96.40% 位列总榜第二，距闭源第一只差 0.60 分。",
    "a": "vals.ai",
    "r": "旧版摘录，未逐字复核 · SWE-bench Verified 关键结论",
    "d": "2026-09-01",
    "key": false,
    "legacy": true
  },
  {
    "q": "v4.0 重新标定了算力与时限配额，改进了指令、环境与验证器的公平性，并移除了 8 道已饱和、易触发拒答、已被公开解出或存在未解决质量问题的题目。",
    "a": "Terminal-Bench",
    "r": "旧版摘录，未逐字复核 · 4.0 版本说明",
    "d": "2026-09",
    "key": false,
    "legacy": true
  },
  {
    "q": "编码 Agent 指数评的是「框架 × 模型」的组合，而不是模型本身 —— 同一个模型换一个 harness，分数会变。",
    "a": "Artificial Analysis",
    "r": "旧版摘录，未逐字复核 · Coding Agent Index v1.5 方法论",
    "d": "2026-09",
    "key": false,
    "legacy": true
  },
  {
    "q": "提示缓存的命中率会随服务商的路由策略大幅波动，这会实质性地改变有效成本。",
    "a": "Artificial Analysis",
    "r": "旧版摘录，未逐字复核 · Coding Agent Index 成本口径说明",
    "d": "2026-09",
    "key": false,
    "legacy": true
  },
  {
    "q": "很多用户是通过订阅计划而不是按 token 付费来使用这些编码 Agent 的。",
    "a": "Artificial Analysis",
    "r": "旧版摘录，未逐字复核 · Coding Agent Index 成本口径说明",
    "d": "2026-09",
    "key": false,
    "legacy": true
  },
  {
    "q": "现在上市是不明智的。",
    "a": "Sam Altman",
    "r": "旧版摘录，未逐字复核 · OpenAI CEO · 回应 IPO 传闻",
    "d": "2026-09-12",
    "key": false,
    "legacy": true
  },
  {
    "q": "缓存读取价下调 75% 之后，典型负载大约能省 25%；在缓存读取占账单大头的复杂编码与高强度 Agent 场景里，可以省到约 45%。",
    "a": "Anthropic",
    "r": "旧版摘录，未逐字复核 · Claude Fable 5.1 发布说明",
    "d": "2026-09-01",
    "key": false,
    "legacy": true
  },
  {
    "q": "Claude Fable 5.1 与 Mythos 5.1 是目前用于编码与知识工作的最先进模型。",
    "a": "Anthropic",
    "r": "旧版摘录，未逐字复核 · 发布公告（厂商自述）",
    "d": "2026-09-01",
    "key": false,
    "legacy": true
  },
  {
    "q": "任何超过 272K 输入 token 的请求，都会按更高的档位对整个请求重新计价。",
    "a": "OpenAI",
    "r": "旧版摘录，未逐字复核 · GPT-6 Astra 定价说明",
    "d": "2026-09-03",
    "key": false,
    "legacy": true
  },
  {
    "q": "GPT-6 Astra 的定价是 GPT-5.6 Sol 促销价的 2.5 倍，并且在两个头条数字上都与 Anthropic 的 Fable 5.1 完全一致。",
    "a": "财经媒体分析",
    "r": "旧版摘录，未逐字复核 · GPT-6 Astra 定价解读",
    "d": "2026-09-03",
    "key": false,
    "legacy": true
  },
  {
    "q": "非高峰时段的价格是高峰时段的一半。高峰时段为周一至周五 UTC 01:00–04:00 与 06:00–10:00，不含中国法定节假日。",
    "a": "DeepSeek",
    "r": "旧版摘录，未逐字复核 · API 定价文档",
    "d": "2026-09",
    "key": false,
    "legacy": true
  },
  {
    "q": "上一代的 V4 Flash 与 V4 Flash Vision Exp 已经退役；为兼容考虑，旧的模型名暂时路由到 V4.1 Flash。",
    "a": "DeepSeek",
    "r": "旧版摘录，未逐字复核 · V4.1 Flash 发布说明",
    "d": "2026-09-10",
    "key": false,
    "legacy": true
  },
  {
    "q": "Muse Spark 1.3 是一次显著提升编码与 Agent 任务表现的更新，发布时间距 1.2 只有大约四周。",
    "a": "Meta AI Research",
    "r": "旧版摘录，未逐字复核 · Muse Spark 1.3 发布说明",
    "d": "2026-09-02",
    "key": false,
    "legacy": true
  },
  {
    "q": "Gemini 3.8 Flash 与 3.7 Flash 价格完全相同，而在我们公布的每一项基准上都更好。",
    "a": "Google",
    "r": "旧版摘录，未逐字复核 · Gemini 3.8 Flash 发布说明（厂商自述）",
    "d": "2026-09-02",
    "key": false,
    "legacy": true
  },
  {
    "q": "GPT-6 Astra 约占我们追踪到的企业 AI 支出的 13%，Anthropic 的 Claude Fable 约为 8%。",
    "a": "Ramp",
    "r": "旧版摘录，未逐字复核 · 企业报销数据 · 经媒体报道",
    "d": "2026-09",
    "key": false,
    "legacy": true
  },
  {
    "q": "GLM-5.3-Flash 是 GLM-5 系列里第一个原生多模态模型，3200 亿总参数、180 亿激活参数。",
    "a": "Z.ai 智谱",
    "r": "旧版摘录，未逐字复核 · GLM-5.3-Flash 发布说明",
    "d": "2026-08-26",
    "key": false,
    "legacy": true
  },
  {
    "q": "两家中国实验室在同一个时间窗里，各自独立地收敛到了几乎相同的模型架构。",
    "a": "MarkTechPost",
    "r": "旧版摘录，未逐字复核 · GLM-5.3-Flash 与 Qwen3.8-Flash-Next 对比",
    "d": "2026-08-28",
    "key": false,
    "legacy": true
  },
  {
    "q": "Anthropic 已于 6 月秘密递交 S-1，目标 10 月在纳斯达克上市，估值 2 万亿美元，拟募资超过 600 亿美元。",
    "a": "彭博 / 财富",
    "r": "旧版摘录，未逐字复核 · 经媒体转述",
    "d": "2026-09",
    "key": false,
    "legacy": true
  },
  {
    "q": "所有评测均由 Artificial Analysis 独立完成。",
    "a": "Artificial Analysis",
    "r": "旧版摘录，未逐字复核 · 智能指数方法论",
    "d": "2026-09",
    "key": false,
    "legacy": true
  },
  {
    "q": "我们跑完全部 66 道 Terminal-Bench 4.0 题目，报告每题重复三次后取平均的 pass@1。",
    "a": "Artificial Analysis",
    "r": "旧版摘录，未逐字复核 · Terminal-Bench 4.0 评测方法",
    "d": "2026-09",
    "key": false,
    "legacy": true
  }
];

const CONFLICTS = [
  {
    "model": "kimi-k31pro",
    "field": "发布日期与开放权重",
    "a": "AA 发布日期 10/23；官方研究档案 10/24",
    "b": "权重计划公布，当前尚未发布",
    "status": "待核实",
    "why": "本期不擅自选择一个发布日期；权重标待开放，不能当成已开源。"
  },
  {
    "model": "glm53",
    "field": "总参数定义",
    "a": "旧版记录 753B，HF 也显示约 753B 张量规模",
    "b": "架构基座与张量总量存在不同定义",
    "status": "待核实",
    "why": "未把 HF 模型大小显示强行当成已解决的架构参数量。旧值保留原日期。"
  },
  {
    "model": "ds-v41flash",
    "field": "API 别名与 checkpoint",
    "a": "旧模型行是 9/10 checkpoint",
    "b": "当前 deepseek-flash 转向 1017",
    "status": "已分开",
    "why": "旧行保留；1017 新增独立行。Codex 组合未写 checkpoint 的结果只在矩阵按原标签展示。"
  },
  {
    "model": "grok47",
    "field": "长输入价格阈值",
    "a": "官方价格表 ≥200K",
    "b": "模型说明文字 >200K",
    "status": "待核实",
    "why": "阈值边界尚未作付费运行验证；明确记录差异。"
  },
  {
    "model": "—",
    "field": "SciCode 审查状态",
    "a": "源站标记 Under review",
    "b": "数值仍公开展示",
    "status": "不评最优",
    "why": "保留数值和来源，不把审查中数据包装为确定的最优结论。"
  },
  {
    "model": "—",
    "field": "MiniMax / Google 等动态订阅金额",
    "a": "官方公开档位和部分价格已更新",
    "b": "部分地区/购买页未读出固定金额",
    "status": "待核实",
    "why": "不沿用旧金额伪装本期已核价；缺失处直接标待核实。"
  },
  {
    "model": "—",
    "field": "CAI 当前与历史指数",
    "a": "当前 v2.0，替换 DeepSWE 并更新判分",
    "b": "历史 v1.5 / DeepSWE 数据仍保留",
    "status": "已分开",
    "why": "指标键、表格与来源分离，不生成跨版本涨跌。"
  },
  {
    "model": "kimi-k31pro",
    "field": "AA 任务成本快照",
    "a": "10/24 主榜约 $2.11 / 任务",
    "b": "10/23 发布文章约 $1.98 / 任务",
    "status": "快照差异",
    "why": "主表引用本次实际读取的主榜，并记录文章更早的观察值；不是官方 token 标价变动。"
  },
  {
    "model": "ling31-flash1019",
    "field": "权重家族与 1019 checkpoint",
    "a": "官方 Ling-3.1-flash 家族有公开权重",
    "b": "AA 1019 checkpoint 未确认是同一份可下载权重",
    "status": "待核实",
    "why": "两行分别保留，不把家族 MIT 许可、参数量及开放状态套给 1019。"
  },
  {
    "model": "gpt6-sol",
    "field": "官方窗口与旧测量口径",
    "a": "10/24 官方最大窗口 1.05M",
    "b": "旧版保存 AA 可用窗口 872K（本期未重测）",
    "status": "已分口径",
    "why": "主字段记录官方上限，旧测量留档，不声称两者可以直接换算。"
  },
  {
    "model": "step5",
    "field": "托管输出与自部署上限",
    "a": "官方托管 API 文档 64K",
    "b": "权重模型卡提到 1M 输出",
    "status": "已分口径",
    "why": "主字段使用对应 API 渠道，不能把自部署上限当作 API 保证。"
  },
  {
    "model": "—",
    "field": "历史记录 · 智能指数版本",
    "a": "本版：AAII v4.3，10 项评测，头部 53",
    "b": "上一版页面：AAII v4.1.1，9 项评测，头部 63.1",
    "status": "已定口径",
    "why": "旧版处理记录，非本期已核验结论。v4.3 重新标定过，两套分数不是同一把尺。本页只用 v4.3，且不做任何跨版本的涨跌或趋势。"
  },
  {
    "model": "—",
    "field": "历史记录 · Terminal-Bench 版本",
    "a": "本版：TB 4.0（66 题）与 TB 2.1 并列展示，分开算",
    "b": "上一版页面：TB 3.0 与 TB 2.1 混在同一个条形图里",
    "status": "已修复",
    "why": "旧版处理记录，非本期已核验结论。TB 3.0 已被 4.0 取代。TB 2.1 头部 88–91%（饱和），TB 4.0 头部 59%，两者永不互比。"
  },
  {
    "model": "—",
    "field": "历史记录 · 编码 Agent 指数版本",
    "a": "本版：CAI v1.5（DeepSWE v1.1 + TB 4.0 + SWE-Atlas-QnA）",
    "b": "上一版页面：CAI v1.4",
    "status": "已定口径",
    "why": "旧版处理记录，非本期已核验结论。组成的三项基准已全部更换，与 v1.4 及更早的分数不可比。"
  },
  {
    "model": "—",
    "field": "历史记录 · SWE-bench 数据完整性",
    "a": "vals.ai 已于 2026-09-01 归档该基准",
    "b": "9 月后发布的模型没有也不会有分数",
    "status": "已定口径",
    "why": "旧版处理记录，非本期已核验结论。GPT-6 Astra / Claude Fable 5.1 / Muse Spark 1.3 / DeepSeek V4.1 Flash / Step 5 的 SWE 列为空白，是基准停更，不是数据缺失。"
  },
  {
    "model": "glm53",
    "field": "历史记录 · 参数规模",
    "a": "753B（发布口径）",
    "b": "744B / 40B 激活（基座口径）",
    "status": "待核实",
    "why": "旧版处理记录，非本期已核验结论。两个数字来自不同表述，本页总参数按 753B 记录并注明分歧。上下文窗口已由 AA 确认为 1M。"
  },
  {
    "model": "ds-v41flash",
    "field": "历史记录 · 价格口径",
    "a": "AA 记录 $0.30 / $1.20（高峰价）",
    "b": "DeepSeek 官方文档 $0.15 / $0.60（低谷价）",
    "status": "已定口径",
    "why": "旧版处理记录，非本期已核验结论。两者都对，差别在时段。本页主表用高峰价（与 AA 其它模型口径一致），低谷价写在计价方式与备注里。"
  },
  {
    "model": "ds-v4pro",
    "field": "历史记录 · 缓存命中价",
    "a": "本版 $0.044（高峰）/ $0.022（低谷）",
    "b": "上一版页面 $0.0036",
    "status": "已修复",
    "why": "旧版处理记录，非本期已核验结论。上一版的数值与官方文档对不上，本次按 DeepSeek 官方定价页更正。"
  },
  {
    "model": "qwen38max",
    "field": "历史记录 · SWE-bench 版本对应",
    "a": "85.6% 为 0902 之前的 Qwen3.8 Max",
    "b": "0902 版未进入 SWE-bench（基准已归档）",
    "status": "待核实",
    "why": "旧版处理记录，非本期已核验结论。该分数不完全对应当前在售的 0902 版本，已在行内注明。"
  },
  {
    "model": "claude-fable5",
    "field": "历史记录 · Arena 与继任者倒挂",
    "a": "claude-fable-5-high 1506±5，Arena #1",
    "b": "claude-fable-5.1-max 1498±8，#5",
    "status": "低风险",
    "why": "旧版处理记录，非本期已核验结论。差值落在置信区间内，且两者是不同档位（high vs max）。不构成「新版更差」的结论。"
  },
  {
    "model": "muse12",
    "field": "历史记录 · Arena 与继任者倒挂",
    "a": "muse-spark-1.2 (xHigh) 1500±11，#4",
    "b": "muse-spark-1.3-max 1493±9，#8",
    "status": "低风险",
    "why": "旧版处理记录，非本期已核验结论。同上，差值在置信区间内，档位也不同。"
  },
  {
    "model": "gpt6-astra",
    "field": "历史记录 · Arena 置信区间",
    "a": "1480±12，#24，票数仅 2,693",
    "b": "—",
    "status": "待观察",
    "why": "旧版处理记录，非本期已核验结论。票数太少，区间宽达 ±12，名次参考价值有限，等票数积累后会变。"
  },
  {
    "model": "glm52",
    "field": "历史记录 · 上下文窗口",
    "a": "本期资料未给出",
    "b": "上一版页面此处误填「开源」",
    "status": "数据缺失",
    "why": "旧版处理记录，非本期已核验结论。GLM-5.2 已被 5.3 取代且退出 AA 现役榜单，显示为「暂无数据」，不参与排序。"
  },
  {
    "model": "—",
    "field": "历史记录 · 订阅价格",
    "a": "Gemini AI Ultra $249.99 / 月",
    "b": "上一版页面记录为 $99.99 / $199.99",
    "status": "待核实",
    "why": "旧版处理记录，非本期已核验结论。本条来自媒体汇总，未逐家核对官网。Grok 新增的 SuperGrok Plus $100 档同样待官方确认。"
  },
  {
    "model": "—",
    "field": "历史记录 · 「每日自动更新」",
    "a": "页面标注数据抓取日与生成日",
    "b": "实际靠人工 / AI 重新采集",
    "status": "已修复",
    "why": "旧版处理记录，非本期已核验结论。没有自动抓取管线。按钮名为「复制更新指令」，即其实际动作。"
  },
  {
    "model": "gpt6-sol",
    "field": "历史记录 · 上下文窗口",
    "a": "AA 当前榜单 872K",
    "b": "OpenAI 官方模型页 1.05M",
    "status": "待核实",
    "why": "旧版处理记录，非本期已核验结论。展示 AA 榜单口径，行内保留官方值；不把两者当同一数字。"
  },
  {
    "model": "gemini4-argon",
    "field": "历史记录 · API 价格与开放状态",
    "a": "Google 预告 $2/$10",
    "b": "开发者 API 尚未普遍开放",
    "status": "待开放",
    "why": "旧版处理记录，非本期已核验结论。价格为推出时预告价，不能当作当前可购买 API 价。"
  }
];

const COVERAGE = {
  "models": {
    "checkedAt": "2026-10-24",
    "updated": 45,
    "total": 72,
    "note": "AAII、速度、成本及分项按确切配置匹配；历史条目保留。"
  },
  "pricing": {
    "checkedAt": "2026-10-24",
    "updated": 64,
    "note": "官方标准价与 AA 渠道参考价分别标注。"
  },
  "agents": {
    "checkedAt": "2026-10-24",
    "updated": 24,
    "note": "当前 v2.0；v1.5 单独存档。"
  },
  "subscriptions": {
    "checkedAt": "2026-10-24",
    "updated": 8,
    "note": "按地区、币种、月付和年付区分；未确认的计划标待核实。"
  },
  "vendors": {
    "checkedAt": "2026-10-24",
    "updated": 19,
    "note": "用本期实际数据重建摘要，旧长文档案保留。"
  },
  "research": {
    "checkedAt": "2026-10-24",
    "updated": 5,
    "note": "当前方法说明、事件与来源解读和旧摘录分开。"
  }
};

if(/\/(?:src\/index|dist\/artifact)\.html$/i.test(location.pathname)){Object.values(BRANDS).forEach(b=>{if(b.logo)b.logo="../"+b.logo;});}
