# November Dashboard Refresh Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans for integration and superpowers:dispatching-parallel-agents for independent evidence collections. The user has authorized implementation and public deployment.

**Goal:** Refresh every dashboard module from current public evidence checked on 2026-11-16, then publish and verify the existing GitHub Pages site.

**Architecture:** Retain static HTML/CSS/vanilla JavaScript, local logos and offline behavior. Archive the entire prior snapshot, collect exact current benchmark configurations, merge explicit official facts and preserve unverified values with original dates. Build only through `build.py`.

**Tech Stack:** Python standard library, native JavaScript, existing Playwright tools, GitHub Pages main/root.

**Spec:** User request in this chat; README.md evidence rules and existing UI interaction contract.

## Global Constraints

- Work in the outer package; do not modify the nested old copy.
- No backend, new framework or runtime data fetch.
- Preserve default company colors, direct metric-name help and compare maximum of four.
- Do not restamp unverified values or infer trends across benchmark versions.

## Review Focus

- AAII now uses v5.0.1; keep old v4 results in separate historical fields instead of mixed rankings.
- New benchmark tasks, harness versions, checkpoints and efforts require distinct mappings.
- Task time is not output throughput; missing measurements stay null.
- API price conditions and subscription billing periods remain explicit.
- Public build status and actual committed/public byte integrity must both be checked.

### Task 1: Current evidence and dated archive

- [x] Inspect existing data, generators, tests and deployment state.
- [x] Capture the full previous data snapshot and live AA public records.
- [x] Independently research official western/domestic facts, subscriptions, Arena and Agent configurations.
- [x] Review source dates, parameter units, exact model/config mappings and unresolved conflicts.

### Task 2: Integrate and verify

- [x] Generate coherent current data from reviewed evidence, preserving history.
- [x] Update metric definitions, table presets, hints and labels for confirmed version changes.
- [x] Update local brand assets only when necessary, with provenance.
- [x] Run data invariants, production comparison guards, build, offline/browser regressions and responsive visual checks.

### Task 3: Public release

- [x] Commit and push scoped verified files to existing main.
- [x] Confirm Pages built the pushed commit; verify public response, integrity, console, logos and responsive interactions.
- [x] Record actual release evidence and return the public URL.

## Execution rulings

- AAII5 and CAI2.1 changed independently; preserve old keys and exact harness/config identities.
- Use the existing checked-out main for this authorized static refresh; no competing edits were present and the remote still matched the prior release. No broad refactor or new framework.
- Retain model-card max context separately from API pricing conditions; do not silently resolve conflicting release dates.
- A fresh-context independent review found no Critical/Important findings; executable gates and public verification remain required.


## Public verification

Source release commit `29aaf0f1b8cba2107986ae5b4e2903ec182a7349` was reported `built` by GitHub Pages. The public page returned HTTP200 and matched committed HTML SHA-256 `e3064931dd83333fbf55c517caec3c5a347a2aba5f1f98e8183165b05e20b2ad`. It exposed the 2026-11-16 snapshot/build, 86 model records, 20 companies, 29 Agent configurations and 8 subscription groups. Public runtime reported zero page errors, console errors, failed requests and broken images. Public refinement checks passed 1440/1280/390, direct metric help, company hover/tap, sorting, preset/custom preference migration and subscription-column boundaries. Public overview/compare/mobile screenshots were visually inspected. No live authenticated model API or paid checkout tests are claimed.
