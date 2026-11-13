# Test Run Report: Maison Auré — 2026-11-13 14:38 UTC

## Summary
- Scope: whole application, static single-page fragrance showcase.
- New tests: 10 passed, 0 failed, 0 skipped.
- Fix cycles used: 0.
- Layers run: UI (9), E2E (1), headless Chromium.
- Verdict: All good within approved scope. Requirements baseline: approved authored content and navigation, not a separate business specification.

## Results
| Test | Layer | Status | Reason | Bucket | Gap flag |
|---|---|---|---|---|---|
| Landing content (showcase.spec.ts:7) | UI | Passed | Hero, three cards, exact names/families/notes | — | none |
| Collection nav (showcase.spec.ts:25) | UI | Passed | Hash and target viewport | — | none |
| Discover CTA (showcase.spec.ts:25) | UI | Passed | Hash and target viewport | — | none |
| Find fragrance CTA (showcase.spec.ts:25) | UI | Passed | Hash and target viewport | — | none |
| Maison nav (showcase.spec.ts:33) | UI | Passed | Hash and story viewport | — | none |
| Home return (showcase.spec.ts:41) | UI | Passed | Top URL and hero viewport | — | none |
| Footer return (showcase.spec.ts:41) | UI | Passed | Top URL and hero viewport | — | none |
| Collection deep link (showcase.spec.ts:54) | UI | Passed | Direct fragment target viewport | — | none |
| Maison deep link (showcase.spec.ts:54) | UI | Passed | Direct fragment target viewport | — | none |
| Browsing journey (browse.spec.ts:8) | E2E | Passed | Collection → maison → collection → top | — | none |

## Entire suite
- Scope run: all tests under tests/, tests/playwright.config.ts, one part. No pre-existing tests: entire suite is the new tests.
- Totals: 10 passed, 0 failed, 0 skipped.
- Initial validation: 12.8s. Final suite: 12.4s, one worker, zero retries, http://localhost:3000.
- Verdict: All good. No breaking tests.

## Defect Reports
None.

## Automation Drift fixes
None.

## Gaps
- Requirement gap: empty collection and remote-service failure behavior undefined; collection is static.
- Code gaps: none blocking approved scenarios.
- Negative submission/auth/API cases inapplicable: no forms, authentication or application endpoints.

## Files written
- tests/showcase/ui/showcase.spec.ts
- tests/showcase/e2e/browse.spec.ts
- tests/playwright.config.ts (minimal config, conditional final-run video)
- .revolte/artifacts/report.md
- Ten videos below.
- Test account: unnecessary. Isolated contexts; no data mutations.
- npm ci installed locked app dependencies. Sandbox Playwright linked under tests/node_modules; playwright/test imports used because @playwright/test was absent globally. No package manifest or lockfile changes.

## Evidence
- [browse-browse-collection-and-maison-then-return-to-top.webm](videos/browse-browse-collection-and-maison-then-return-to-top.webm)
- [showcase-collection-link-Discover-the-collection.webm](videos/showcase-collection-link-Discover-the-collection.webm)
- [showcase-collection-link-Find-your-fragrance.webm](videos/showcase-collection-link-Find-your-fragrance.webm)
- [showcase-collection-link-The-collection.webm](videos/showcase-collection-link-The-collection.webm)
- [showcase-direct-fragment-entry-collection.webm](videos/showcase-direct-fragment-entry-collection.webm)
- [showcase-direct-fragment-entry-maison.webm](videos/showcase-direct-fragment-entry-maison.webm)
- [showcase-landing-page-shows-the-hero-and-complete-fragrance-collection.webm](videos/showcase-landing-page-shows-the-hero-and-complete-fragrance-collection.webm)
- [showcase-maison-navigation-reaches-the-brand-story.webm](videos/showcase-maison-navigation-reaches-the-brand-story.webm)
- [showcase-return-to-top-Back-to-top-.webm](videos/showcase-return-to-top-Back-to-top-.webm)
- [showcase-return-to-top-Maison-Aur-home.webm](videos/showcase-return-to-top-Maison-Aur-home.webm)

## Not verified / remaining risks
- No mobile, other browser engines, visual baselines, accessibility audit, performance/load or production testing.
- External Unsplash image availability not asserted; functional passes do not prove provider health.
- No independent console/network audit; no failures required reproduction.
- No purchasing or backend flows exist to cover.

## Other observations (not tested)
- npm ci reported eight moderate dependency vulnerabilities and an ESLint deprecation warning; no audit or remediation performed.
- The Next.js dev command automatically changed next-env.d.ts imports from .next/types to .next/dev/types. Visible in git status; no manual application-source edit performed.
