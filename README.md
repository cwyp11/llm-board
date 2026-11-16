# LLM Research Board

Public dashboard: [cwyp11.github.io/llm-board](https://cwyp11.github.io/llm-board/)

Graphite Board, static HTML/CSS/vanilla JavaScript. Evidence snapshot: **2026-11-16**. Release generated: **2026-11-16**. Arena Text source snapshot: **2026-11-11**. There is no automatic update pipeline.

## Current coverage

| Module | Coverage and interpretation |
| --- | --- |
| Model library | 86 version/effort records across 20 companies; 44 configurations mapped to the current AA model leaderboard |
| Metrics | 44 fields, including explicitly historical metrics; this is not a count of current benchmarks |
| Current scores | AAII v5.0.1, CAI v2.1, FrontierCode-AA 2.0, AA-Briefcase v1.1, AutomationBench-AA, GDP.pdf, HLE-Diamond, CritPt v2 Hard, TB-Science 0.1, non-hallucination rate, Arena Text. Model TB4.0 and Agent TB4.1 stay separate |
| Coding agents | 29 measured configurations across 11 harnesses, including 1 router; CAI v2.0 and v1.5 matrices retained separately |
| Pricing | Official standard API prices and independently reported channel prices distinguished; input, output and cache read in USD / million tokens |
| Subscriptions | 8 official product groups; region, currency, billing cycle and unverified dynamic purchase prices retained |
| Research | 20 vendor summaries, dated events, methodology notes, sources and conflicts; earlier long-form research remains accessible |

The four views are Overview, Models & Compare, Pricing & Usage, and News & Research. Hover or keyboard-focus a benchmark name for its purpose and limits; no extra question-mark icons. Hover/tap model names and local logos for company identity. Company colors are enabled by default. Search, filters, sorting, four table presets, custom columns, favorites and comparisons of 2–4 models remain available. Adding a fifth model preserves the existing selection.

## Run and build

Open `index.html` directly, with `assets/logos/` beside it. `src/index.html` and `dist/artifact.html` also resolve their local logos correctly. The page needs no server, account, package installation or runtime data fetch. Optional Google Fonts fall back to system fonts offline. Preferences are local to the browser.

Edit the outer delivery directory. The nested directory with the same name is an old copy and is excluded from Git.

```powershell
python tools/refresh-current.py
python build.py
```

`src/js/data.js` is generated from the dated research files. For a future refresh, collect and review new evidence, deliberately update snapshot/release dates and mappings, then regenerate. Re-running these scripts only rebuilds the recorded snapshot; it does not fetch new industry facts. The optional `tools/collect-aa-snapshot.py --date YYYY-MM-DD --basis "verified benchmark/version"` captures AA public model records and retains a SHA-256 for the raw page; the version is explicit because the source schema and evaluation set can change. `research/2026-11-16-selection.json` records exact configuration UUIDs. The western/domestic/benchmark/main JSON files are reviewed inputs to the current generator. Raw captures are ignored by Git; structured public evidence is versioned.

`build.py` inlines the split source into root `index.html` and `dist/artifact.html`. Keep local logo assets when copying either release. `assets/logos/SOURCES.md` records provenance. The single brand mapping in `data.js` is shared by tables, filters, charts, comparisons and vendor profiles.

## Evidence and comparisons

- Read/check dates, source update dates and build dates are distinct. Unknown source measurement dates remain unknown. Unreverified numbers retain their original dates and a historical label.
- Missing values are `null`, sort last, and never act as zero. Parameters are absolute counts; context and maximum output use tokens. Tensor size, backbone parameters and active compute are not automatically interchangeable.
- AAII v5 and old v4 (`aaii4`), their task costs (`cpt` / `cpt4`), CAI v2.1/v2.0/v1.5, FrontierCode-AA 2.0/1.1, GDPval-AA v2.1 Elo/older percentages, and Agent Terminal-Bench 4.1/model 4.0/legacy 2.1 use different keys. Historical scores are not relabeled as current or converted into trends.
- Scores belong to exact checkpoints, reasoning efforts and harnesses. Mismatched Arena configurations remain explicit and cannot receive a best-value label.
- Comparison highlights are calculated for the selected models. Incompatible bases, dates or evidence kinds, estimated values, unavailable APIs, reviewed datasets and overlapping or unavailable Elo confidence intervals prevent unsupported winner claims.
- SciCode is currently under source review. Its published values remain visible, without best-value highlights.
- Task duration, first-answer waiting and throughput have separate units. Aggregated task duration includes source estimates and is labeled accordingly; it is not full-process wall-clock time.
- Price fields distinguish API channel, currency, cache conditions and long-input tiers. Subscription allowances are separate. Independent per-task cost is not an official per-token price.
- A specific value links to its evidence where available. A homepage or old board archive is labeled accordingly and does not prove a current numerical claim.

The complete previous releases are retained in `research/previous-2026-10-24.json` and `research/previous-2026-10-02.json`; historical fields, Agent matrices, vendor prose and research remain accessible in secondary views. `research/2026-11-16-coverage.md` records this refresh and remaining limits. The October generator files remain as dated reproduction tools, not the current refresh command.

## Verification

Browser checks use the existing `playwright-core` development dependency in `tools/node_modules`; it is not a runtime dependency. Install from `tools/package.json` if necessary. The scripts currently default to the installed Windows Chrome path.

```powershell
node tools/verify-refresh.js
python build.py
node tools/regression-test.js index.html
node tools/verify-refinement.js
node tools/verify-latest.js
node tools/verify-public.js
```

The first check covers evidence units, dates, source mappings and production comparison guards. Browser checks cover offline releases, 1440/1280/390 viewports, table presets, hover/focus help, logos, filtering/sorting, comparison limits and page errors. `verify-refinement.js` also accepts a public URL to validate the deployed page. Screenshots are written locally to `screenshots/`.

## Publish

The existing repository is `cwyp11/llm-board`, with GitHub Pages serving the root of `main` and `.nojekyll` disabling Jekyll. Build and verify before a scoped commit/push. Confirm that the latest Pages build references the pushed commit, then exercise the public URL with a fresh browser context and cache-busting query. A local build or successful push alone is not deployment verification. Preserve the existing repository-specific Git identity and credential settings.

## Still unresolved

- Kimi K3.1 Pro weights are now downloadable under its specific license. Its release date still differs by source; official current API amounts were not readable, so AA channel prices are not presented as verified direct vendor tariffs. K3 parameters are not silently transferred to K3.1.
- AA and official release dates differ for Gemini Carbon, Beam, Hy4 and Mistral Large4. Dates remain blank with both claims recorded, instead of arbitrarily choosing one. Preview/GA and different effort records are separate.
- GLM-5.3 tensor count versus architecture definitions remains unresolved. DeepSeek 1017 backbone/Engram and prefill/decode counts are not collapsed into an invented total.
- Some API aliases, open-weight checkpoints, long-input boundary rules and localized subscription amounts still need confirmation; the page lists their scope and sources.
- The official Terminal-Bench score table was not machine-readable during collection. Current model scores use the explicitly labeled AA independent environment, not a claimed transcription of the official table.
- Old quotations were not rechecked word for word. They are labeled historical, while new source summaries are presented as paraphrases.

Brand files identify their respective owners and do not imply endorsement. Library licenses do not transfer trademark rights. No new backend, framework, account system or continuous update service was introduced.
