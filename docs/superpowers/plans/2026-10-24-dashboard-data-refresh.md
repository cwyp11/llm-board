# Dashboard Data Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Refresh every dashboard module from public authoritative sources checked on 2026-10-24 and publish the verified static release.

**Architecture:** Keep the existing HTML/CSS/vanilla JavaScript and local SVG assets. Capture a previous snapshot and source evidence as local JSON, generate one coherent data source, and preserve old research and metric versions as explicitly historical records. No runtime fetch or new framework.

**Tech Stack:** Python standard library for source collection and integration; native JavaScript; existing Playwright verification; GitHub Pages.

**Spec:** User request in this thread; README.md and DESIGN-SYSTEM.md.

## Global Constraints

- Use the outer delivery directory.
- Preserve company colors, metric-name help, table presets, selection and favorites.
- Separate source publication dates, public snapshot dates and check/build dates.
- Never invent missing values, overwrite conflicts silently, or compare incompatible benchmark versions.
- Publish only after the generated root release passes relevant checks.

## Review Focus

- CAI v2.0 and v1.5 scores must have distinct keys, sources, labels and matrix versions.
- API prices must identify currency, channel, cache conditions and long-context tiers.
- Exact model version and reasoning effort must match benchmark records.
- Retained old data must keep original dates and historical status.
- Unavailable measurements must not become zero or gain a best-value mark.

### Task 1: Evidence and coherent source snapshot

**Files:** research/2026-10-24-*.json; tools/collect-aa-snapshot.py; tools/refresh-data.py; src/js/data.js; assets/logos/SOURCES.md.

- [x] Inspect current modules and save previous values.
- [x] Capture AA public model records; independently verify vendor, subscription, Arena and Agent records.
- [x] Add new model versions with verified local logo mappings; preserve previous records.
- [x] Generate consistent current module data with field-level sources and dates.
- [x] Verify numerical units, versions, mappings, missing values and evidence coverage.

### Task 2: Presentation, verification and deployment

**Files:** src/js/app.js; src/js/charts.js; src/index.html; README.md; tools/verify-refresh.js; generated index.html and dist/artifact.html.

- [x] Expose current versus historical benchmark versions and per-value sources.
- [x] Remove obsolete hardcoded dates and historical claims from current summaries.
- [x] Run data audits, build, core regressions and responsive visual checks.
- [x] Commit the reviewed files and publish to existing main-branch GitHub Pages.
- [x] Verify the deployed commit and exercise public-page interactions before reporting completion.

## Verification outcome

Source release commit: `04ade0cce8080f89e6d32264a2c489df905513e2`. GitHub Pages reported `built` for that commit. The public release returned HTTP 200 and matched the committed `index.html` SHA-256 (`f613ef4389d09c1bde4c0e4a409ef6a37865d7a1ba9da188d1be5044f3897459`). Public responsive/help/preference checks passed at 1440/1280/390; the browser reported zero page/console errors, zero failed requests and no broken image assets. Local CRLF is normalized by Git; byte integrity is compared against the committed LF file. A final external review worker could not run because of its usage limit; targeted manual review and executable data, comparison and browser checks were completed instead.
