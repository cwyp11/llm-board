# LLM Research Board

Public dashboard: [cwyp11.github.io/llm-board](https://cwyp11.github.io/llm-board/)

Graphite Board, static HTML/CSS/vanilla JavaScript. Evidence snapshot: **2026-10-24**. Release generated: **2026-10-25**. Arena Text source snapshot: **2026-10-22**. There is no automatic update pipeline.

## Current coverage

| Module | Coverage and interpretation |
| --- | --- |
| Model library | 72 version/effort records across 19 companies; 45 configurations mapped to the current AA model leaderboard |
| Metrics | 28 fields, including explicitly historical metrics; this is not a count of current benchmarks |
| Current scores | AAII v4.3.2, CAI v2.0, FrontierCode 1.1, Terminal-Bench 4.0, GDPval-AA v2.1 Elo, HLE, SciCode, AA-LCR, non-hallucination rate, Arena Text |
| Coding agents | 24 measured configurations across 11 harnesses, including 3 router combinations; CAI v1.5 matrix retained separately |
| Pricing | Official standard API prices and independently reported channel prices distinguished; input, output and cache read in USD / million tokens |
| Subscriptions | 8 official product groups; region, currency, billing cycle and unverified dynamic purchase prices retained |
| Research | 19 vendor summaries, dated events, methodology notes, sources and conflicts; earlier long-form research remains accessible |

The four views are Overview, Models & Compare, Pricing & Usage, and News & Research. Hover or keyboard-focus a benchmark name for its purpose and limits; no extra question-mark icons. Hover/tap model names and local logos for company identity. Company colors are enabled by default. Search, filters, sorting, four table presets, custom columns, favorites and comparisons of 2–4 models remain available. Adding a fifth model preserves the existing selection.

## Run and build

Open `index.html` directly, with `assets/logos/` beside it. `src/index.html` and `dist/artifact.html` also resolve their local logos correctly. The page needs no server, account, package installation or runtime data fetch. Optional Google Fonts fall back to system fonts offline. Preferences are local to the browser.

Edit the outer delivery directory. The nested directory with the same name is an old copy and is excluded from Git.

```powershell
python tools/review-evidence.py
python tools/refresh-data.py
python build.py
```

`src/js/data.js` is generated from the dated research files. For a future refresh, collect and review new evidence, deliberately update snapshot/release dates and mappings, then regenerate. Re-running these scripts only rebuilds the recorded snapshot; it does not fetch new industry facts. The optional `tools/collect-aa-snapshot.py` captures AA public model records and retains a SHA-256 for the raw page. Raw captures are ignored by Git; structured public evidence is versioned.

`build.py` inlines the split source into root `index.html` and `dist/artifact.html`. Keep local logo assets when copying either release. `assets/logos/SOURCES.md` records provenance. The single brand mapping in `data.js` is shared by tables, filters, charts, comparisons and vendor profiles.

## Evidence and comparisons

- Read/check dates, source update dates and build dates are distinct. Unknown source measurement dates remain unknown. Unreverified numbers retain their original dates and a historical label.
- Missing values are `null`, sort last, and never act as zero. Parameters are absolute counts; context and maximum output use tokens. Tensor size, backbone parameters and active compute are not automatically interchangeable.
- CAI v2.0 and v1.5, GDPval-AA v2.1 Elo and older percentages, and Terminal-Bench 4.0 and 2.1 use different keys. Historical scores are not relabeled as current or converted into trends.
- Scores belong to exact checkpoints, reasoning efforts and harnesses. Mismatched Arena configurations remain explicit and cannot receive a best-value label.
- Comparison highlights are calculated for the selected models. Incompatible bases, dates or evidence kinds, estimated values, unavailable APIs, reviewed datasets and overlapping Elo confidence intervals prevent unsupported winner claims.
- SciCode is currently under source review. Its published values remain visible, without best-value highlights.
- Price fields distinguish API channel, currency, cache conditions and long-input tiers. Subscription allowances are separate. Independent per-task cost is not an official per-token price.
- A specific value links to its evidence where available. A homepage or old board archive is labeled accordingly and does not prove a current numerical claim.

The full previous board is retained in `research/previous-2026-10-02.json`; historical content remains in secondary views. `research/2026-10-24-coverage.md` records this refresh and remaining limits.

## Verification

Browser checks use the existing `playwright-core` development dependency in `tools/node_modules`; it is not a runtime dependency. Install from `tools/package.json` if necessary. The scripts currently default to the installed Windows Chrome path.

```powershell
node tools/verify-refresh.js
python build.py
node tools/regression-test.js index.html
node tools/verify-refinement.js
node tools/verify-latest.js
```

The first check covers evidence units, dates, source mappings and production comparison guards. Browser checks cover offline releases, 1440/1280/390 viewports, table presets, hover/focus help, logos, filtering/sorting, comparison limits and page errors. `verify-refinement.js` also accepts a public URL to validate the deployed page. Screenshots are written locally to `screenshots/`.

## Publish

The existing repository is `cwyp11/llm-board`, with GitHub Pages serving the root of `main` and `.nojekyll` disabling Jekyll. Build and verify before a scoped commit/push. Confirm that the latest Pages build references the pushed commit, then exercise the public URL with a fresh browser context and cache-busting query. A local build or successful push alone is not deployment verification. Preserve the existing repository-specific Git identity and credential settings.

## Still unresolved

- Kimi K3.1 Pro has different AA and official release dates; weights are promised, not already public. K3 parameter counts are not transferred to K3.1.
- GLM-5.3 tensor count versus architecture parameter definitions remains unresolved. DeepSeek 1017 backbone/Engram and prefill/decode counts are not collapsed into an invented total.
- Some API aliases, open-weight checkpoints, long-input boundary rules and localized subscription amounts still need confirmation; the page lists their scope and sources.
- The official Terminal-Bench score table was not machine-readable during collection. Current model scores use the explicitly labeled AA independent environment, not a claimed transcription of the official table.
- Old quotations were not rechecked word for word. They are labeled historical, while new source summaries are presented as paraphrases.

Brand files identify their respective owners and do not imply endorsement. Library licenses do not transfer trademark rights. No new backend, framework, account system or continuous update service was introduced.
