# Verification

## Claim Results

- claim static-site-files: GREEN
  - `rtk ruby -e 'required=%w[index.html styles.css script.js README.md .nojekyll LICENSE assets/package-security-workbench.png]; missing=required.reject { |p| File.exist?(p) }; abort("missing: #{missing.join(", ")}") unless missing.empty?; abort("package.json present") if File.exist?("package.json"); puts "static files ok"'`
  - result: `static files ok`
- claim guide-content: GREEN
  - `rtk ruby -e 'html=File.read("index.html"); ids=%w[quick-config threat-model team-checklist ci-rules maintainer-security faq]; missing=ids.reject { |id| html.include?("id=\"#{id}\"") }; abort("missing sections: #{missing.join(", ")}") unless missing.empty?; abort("missing source attribution") unless html.include?("lirantal/npm-security-best-practices") && html.include?("Apache-2.0") && html.include?("Liran Tal"); abort("missing unofficial label") unless html.include?("비공식 한국어 가이드") && html.include?("npm, Inc."); puts "content sections ok"'`
  - result: `content sections ok`
- claim progressive-enhancement: GREEN
  - `rtk node --check script.js`
  - result: exit 0, no output
- claim ci-security-snippet: GREEN
  - `rtk ruby -e 'html=File.read("index.html"); abort("mutable checkout tag") if html.include?("actions/checkout@v6") || html.include?("actions/setup-node@v6"); runtime_only = "npm audit --audit-level=high --omit" + "=dev"; abort("runtime-only audit in publish example") if html.include?(runtime_only); abort("missing audit gate") unless html.include?("npm audit --audit-level=high"); abort("missing sha pin guidance") unless html.include?("full-length SHA") && html.include?("pin-full-sha-for-v6"); puts "ci security snippet ok"'`
  - result: `ci security snippet ok`
- claim changelog-vault: GREEN
  - `rtk ruby -e 'base="docs/changelog/2026-05-31-npm-security-best-practices-ko"; required=%W[docs/changelog/changelog-2026-05-31.md #{base}/README.md #{base}/brief.md #{base}/plan.md #{base}/claims.md #{base}/verification.md #{base}/state.json]; missing=required.reject { |p| File.exist?(p) }; abort("missing: #{missing.join(", ")}") unless missing.empty?; puts "vault files ok"'`
  - result: `vault files ok`
- claim patch-clean: GREEN
  - `rtk git diff --check`
  - result: exit 0, no output
- package-manifest check: GREEN
  - `rtk rg --files -g 'package.json' -g 'package-lock.json' -g 'pnpm-lock.yaml' -g 'yarn.lock' -g 'bun.lockb'`
  - result: exit 1, no matches

## QA

- Local static server: `rtk python3 -m http.server 8000`
- HTTP smoke: `rtk curl -I http://localhost:8000/` returned `HTTP/1.0 200 OK`.
- Browser desktop 1440x1000:
  - page title: `비공식 npm 패키지 보안 가이드`
  - no console errors or warnings
  - no horizontal overflow: `scrollWidth === clientWidth`
  - `.npmrc` config visible above the fold
  - next section visible at `quickConfigTop: 920`
  - neutral hero image loaded from `assets/package-security-workbench.png` with natural size `1672x941`
- Browser mobile 375x812:
  - no horizontal overflow: `scrollWidth === clientWidth`
  - nav and command-panel title fit within the viewport
  - `.npmrc` config visible above the fold
  - next section visible at `quickConfigTop: 808`
  - explicit unofficial text and npm trademark notice visible
- Interaction:
  - copy button clicked without console errors
  - checklist persistence exercised; state stored in `localStorage`
- Review committee:
  - architect: APPROVE
  - adversarial verifier: GREEN overall
  - security review: three findings fixed before delivery
  - code review: four findings fixed before delivery

## Coverage

- Static GitHub Pages shape with no framework/build tooling: claim static-site-files and no package/lock manifest check — GREEN
- Korean guide sections for quick config, threat model, team checklist, CI rules, maintainer security, and FAQ: claim guide-content — GREEN
- Upstream attribution to `lirantal/npm-security-best-practices`, Apache-2.0, and Liran Tal: claim guide-content plus README/footer review — GREEN
- Unofficial/non-endorsed branding: first-viewport badge, neutral `pkg` mark, neutral favicon, neutral generated hero image, footer disclaimer, trademark notice — GREEN
- Copy buttons and checklist persistence: claim progressive-enhancement plus browser interaction QA — GREEN
- CI snippet security: SHA-pin guidance, no mutable action tag examples, full-tree vulnerability audit, separate integrity/signature audit — GREEN
- Responsive first viewport and no mobile horizontal overflow: browser QA at 1440x1000 and 375x812 — GREEN
- Changelog and supergoal vault artifacts: claim changelog-vault — GREEN
- Git patch cleanliness: claim patch-clean — GREEN

Not covered: full automated accessibility audit; full line-by-line upstream translation fidelity; every possible browser version; custom domain setup.
Regression tests: none; this is a new static site without a pre-existing regression harness.

verdict: GREEN
