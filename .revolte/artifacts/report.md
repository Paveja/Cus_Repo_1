# Test Run Report: click-confetti — 2026-11-13 10:00 UTC

## Summary
- Scope: whole application
- New tests: 0 passed, 3 failed, 0 skipped
- Fix cycles used: 0 (max 3 per test)
- Layers run: ui
- Verdict: All discovered tests executed, but all three celebration interactions failed because the rendered status never changed after activation.

## Results
| Test | Layer | Status | Reason | Bucket | Gap flag |
|---|---|---|---|---|---|
| shows the celebration content and supports keyboard activation (`tests/celebration/ui/celebration.spec.ts:7`, assertion `:25`) | ui | failed | Status remained empty after pressing Enter on the visible, focused button | Application Defect | none |
| celebrates when the page background is clicked (`tests/celebration/ui/celebration.spec.ts:31`, assertion `:36`) | ui | failed | Status remained empty after clicking the page background | Application Defect | none |
| keeps the status announcement without particles for reduced motion (`tests/celebration/ui/celebration.spec.ts:41`, assertion `:49`) | ui | failed | Status remained empty after clicking the visible celebration button with reduced motion enabled | Application Defect | none |

## Entire suite
- Scope run: `tests/playwright.config.ts`, everything under `tests/`, 1 part, Chromium headless, 1 worker, no retries
- Totals: 0 passed, 3 failed, 0 skipped
- Verdict: 3 tests breaking

| Test | Layer | Bucket | Cause (one line) | New or pre-existing |
|---|---|---|---|---|
| shows the celebration content and supports keyboard activation | ui | Application Defect | Expected live status text was not rendered after keyboard activation; received empty text | New |
| celebrates when the page background is clicked | ui | Application Defect | Expected live status text was not rendered after background activation; received empty text | New |
| keeps the status announcement without particles for reduced motion | ui | Application Defect | Expected live status text was not rendered after reduced-motion activation; received empty text | New |

## Defect Reports
### DEF-1: Celebration activation does not update the live status
- Tests: `tests/celebration/ui/celebration.spec.ts:25`, `:36`, and `:49`
- Requirement: AC-2, AC-3, and AC-5 — activating the celebration control or page background displays “Here’s to you. Let’s celebrate!”.
- Steps to reproduce: Start with `npm run dev`; open `/`; press Enter on “Make it rain” or click the page background; inspect `role="status"`. For reduced motion, emulate `prefers-reduced-motion: reduce` first.
- Expected: The status contains `Here’s to you. Let’s celebrate!`.
- Actual: The status remained an empty `<p role="status" aria-live="polite">` for the full 5-second assertion timeout.
- Failing assertions: `tests/celebration/ui/celebration.spec.ts:25`, `:36`, and `:49`.
- Network: No relevant application API calls; this is a client-side interaction.
- Console: Not available because the Browser reproduction tool reported Chromium unavailable in this sandbox. Playwright error context confirmed the page rendered the expected heading, button, and empty status element.
- Code location: `src/components/celebration.tsx:19-29` sets `celebrating` and `src/components/celebration.tsx:75-81` renders the status.

## Automation Drift fixes
None. Locators resolved successfully and these were assertion mismatches, not locator or timing failures, so the tests were not weakened or retried.

## Gaps
- Requirement gaps: none for the tested interactions.
- Code gaps: the confetti particle container has no dedicated test id or semantic content; the test uses the source-derived `div[aria-hidden="true"] span` locator for its particle count.

## Files written
- `tests/playwright.config.ts`
- `tests/celebration/ui/celebration.spec.ts`
- `.revolte/artifacts/report.md`
- `.revolte/artifacts/videos/` with one failed-test video per browser test
- Test account: none required

## Evidence
- `videos/celebration-shows-the-celebration-content-and-supports-keyboard-activation-FAILED.webm`
- `videos/celebration-celebrates-when-the-page-background-is-clicked-FAILED.webm`
- `videos/celebration-keeps-the-status-announcement-without-particles-FAILED.webm`
- Playwright error context was read from the final scratch run before it was removed. Each failure showed the expected role-based status locator resolving to an empty element.

## Not verified / remaining risks
- Browser console and network reproduction could not be collected because the Browser tool reported Chromium unavailable, although the Playwright Chromium suite itself executed.
- Only the available Chromium project was run; no other browser projects exist in the repository configuration.
- Visual pixel consistency and automated WCAG analysis were not run; no axe dependency or visual baseline was present.
- `npm ci` reported 10 moderate dependency vulnerabilities and peer-dependency warnings; dependency security was not part of this Playwright run.
