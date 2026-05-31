# Claims

## CLAIM static-site-files
what: The requested static GitHub Pages files exist without adding package tooling.
files: index.html, styles.css, script.js, README.md, .nojekyll, LICENSE, assets/package-security-workbench.png
run-to-prove: `rtk ruby -e 'required=%w[index.html styles.css script.js README.md .nojekyll LICENSE assets/package-security-workbench.png]; missing=required.reject { |p| File.exist?(p) }; abort("missing: #{missing.join(", ")}") unless missing.empty?; abort("package.json present") if File.exist?("package.json"); puts "static files ok"'`
expected: prints `static files ok`

## CLAIM guide-content
what: The Korean page includes quick config, threat model, team checklist, CI rules, maintainer security, FAQ, and upstream attribution.
files: index.html, README.md
run-to-prove: `rtk ruby -e 'html=File.read("index.html"); ids=%w[quick-config threat-model team-checklist ci-rules maintainer-security faq]; missing=ids.reject { |id| html.include?("id=\"#{id}\"") }; abort("missing sections: #{missing.join(", ")}") unless missing.empty?; abort("missing source attribution") unless html.include?("lirantal/npm-security-best-practices") && html.include?("Apache-2.0") && html.include?("Liran Tal"); abort("missing unofficial label") unless html.include?("비공식 한국어 가이드") && html.include?("npm, Inc."); puts "content sections ok"'`
expected: prints `content sections ok`

## CLAIM progressive-enhancement
what: Copy buttons and checklist persistence are implemented in simple dependency-free JavaScript.
files: script.js, index.html
run-to-prove: `rtk node --check script.js`
expected: prints no syntax errors and exits 0

## CLAIM ci-security-snippet
what: The copyable publish workflow avoids mutable action tags, separates vulnerability audit from signature audit, and explains SHA pinning.
files: index.html
run-to-prove: `rtk ruby -e 'html=File.read("index.html"); abort("mutable checkout tag") if html.include?("actions/checkout@v6") || html.include?("actions/setup-node@v6"); runtime_only = "npm audit --audit-level=high --omit" + "=dev"; abort("runtime-only audit in publish example") if html.include?(runtime_only); abort("missing audit gate") unless html.include?("npm audit --audit-level=high"); abort("missing sha pin guidance") unless html.include?("full-length SHA") && html.include?("pin-full-sha-for-v6"); puts "ci security snippet ok"'`
expected: prints `ci security snippet ok`

## CLAIM changelog-vault
what: The dated changelog and six-file supergoal vault are present.
files: docs/changelog/changelog-2026-05-31.md, docs/changelog/2026-05-31-npm-security-best-practices-ko/*
run-to-prove: `rtk ruby -e 'base="docs/changelog/2026-05-31-npm-security-best-practices-ko"; required=%W[docs/changelog/changelog-2026-05-31.md #{base}/README.md #{base}/brief.md #{base}/plan.md #{base}/claims.md #{base}/verification.md #{base}/state.json]; missing=required.reject { |p| File.exist?(p) }; abort("missing: #{missing.join(", ")}") unless missing.empty?; puts "vault files ok"'`
expected: prints `vault files ok`

## CLAIM patch-clean
what: The generated patch has no Git whitespace errors.
files: all changed files
run-to-prove: `rtk git diff --check`
expected: exits 0 with no output
