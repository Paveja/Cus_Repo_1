# Test Run Report: Stationery webpage — 2026-11-13 15:06 UTC

## Summary
- Scope: remaining verification of the approved static stationery page and its entire existing browser suite.
- New tests: 0 added; no test files edited in this continuation.
- Existing tests: 1 passed, 0 failed, 0 skipped.
- Fix cycles used: 0.
- Layers run: browser E2E with desktop/mobile assertions, plus a direct preview HTTP smoke check.
- Verdict: all asserted checks passed; no application defect observed in this scope.

## Results
| Test | Layer | Status | Reason | Bucket | Gap flag |
|---|---|---|---|---|---|
| stationery page works on desktop and mobile, with no browser errors (e2e/stationery.spec.ts:3) | E2E | Passed | Homepage 200/title, navigation, collection count, image loading, contact link, skip-link keyboard access, overflow, font, console and network assertions passed. | Not applicable | None for asserted behavior |
| Configured preview HTTP smoke check | HTTP | Passed | Port 4173 returned homepage 200, four section targets and editorial image 200 with image content type. | Not applicable | None for asserted behavior |

## Entire suite
- Scope run: every spec in playwright.config.ts testDir (e2e/), in one part: one spec and one test.
- Totals: 1 passed, 0 failed, 0 skipped, 0 reported flaky.
- Chromium, Playwright 1.65.0, one worker, no retries. Test duration 4.6 seconds; suite duration 5.4 seconds.
- Viewports: 1280 × 900 and 390 × 844, with dark-mode/reduced-motion overflow assertions. This was not a visual or contrast audit.
- Browser URL: http://127.0.0.1:3000, using the existing npm run start webServer configuration.
- Verdict: all good within existing coverage. No breaking tests. The spec is pre-existing to this continuation and unchanged.

## Defect Reports
None.

## Automation Drift fixes
None. No assertions, locators or waits were changed.

## Gaps
- Requirement gap: branding, collection and contact details are placeholders. Contact is labelled as a placeholder; email delivery was not tested.
- Coverage gaps: no visual screenshot review, full accessibility audit, error-injection scenarios, unknown-route test or non-Chromium coverage.
- Code gaps: none newly established; application source was not changed.

## Files written
- playwright.config.ts: only use.video changed, on when QA_VIDEO=1 and off otherwise. No other config setting changed.
- .revolte/artifacts/report.md: this report, explicitly approved by the user.
- .revolte/artifacts/videos/stationery-stationery-page-works-on-desktop-and-mobile-with-no-browser-errors.webm: one video for the browser test.
- Test account: none needed; public page, no persisted data created.

## Evidence
- [Browser test video](videos/stationery-stationery-page-works-on-desktop-and-mobile-with-no-browser-errors.webm).
- HTTP output: Preview HTTP check passed: homepage 200, four section targets present, editorial image 200.
- Playwright output: 1 passed (5.4s), exit=0. JSON results had no errors and one video attachment. The copied video was verified nonempty; final-run scratch output was then deleted.
- The configured npm run dev -- --port 4173 command was started and stopped for this check. Persistent managed-preview lifecycle and public preview access were not verified; no preview is claimed to remain running.

## Not verified / remaining risks
- Earlier whole-application formatting, TypeScript, lint, build and production-audit results were not rerun. No application, route, manifest, lockfile or build changes were made here.
- The targeted Prettier check for playwright.config.ts passed. A targeted ESLint check was blocked: the project could not resolve the eslint package from eslint.config.mjs (ERR_MODULE_NOT_FOUND). npx selected ESLint 10.14.0, not the declared ESLint 9 dependency. This is a lint-tool environment problem, not a browser-test failure; no lint pass is claimed for this continuation.
- Eight development-only moderate dependency advisories reported earlier were not reassessed or fixed.
- This continuation ran each test once without retries or fix cycles; it is not proof of long-term flake freedom.
- Automated viewport checks do not establish complete visual fidelity, WCAG compliance or complete keyboard coverage.
