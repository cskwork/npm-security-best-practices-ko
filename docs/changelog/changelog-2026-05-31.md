# Changelog 2026-05-31

## npm-security-best-practices-ko greenfield build

Decision: build a static GitHub Pages guide, because the requested outcome is a durable Korean
reference page with no install step, no framework, and no external runtime dependency.

Reasoning:

- Use plain HTML/CSS/JavaScript so GitHub Pages can serve the page directly and the repository stays
  dependency-free.
- Make the first viewport a practical guide surface with `.npmrc` content, not a marketing splash,
  because the target user is a developer trying to harden npm behavior quickly.
- Keep copy buttons and checklist persistence as progressive enhancement, because the guide must
  still work when JavaScript is disabled.
- Use a neutral paper/ink palette with npm red and green status accents, avoiding purple or blue
  gradients and decorative-only visuals.
- Include one generated bitmap workbench image in the hero area so the static guide has a relevant
  visual asset without relying on external CDNs.
- Use neutral package-security marks and an explicit unofficial label to avoid implying npm
  trademark endorsement.
- Add full-tree vulnerability audit enforcement and SHA-pinning guidance to the publish workflow
  example.
- Add npm trademark notice because the guide refers to npm publicly.
- Attribute the source project in the README, footer, and license file because the page is based on
  Liran Tal's Apache-2.0 npm security best practices repository.

Source basis:

- https://github.com/lirantal/npm-security-best-practices
- npm official docs for `npm ci`, trusted publishing, OIDC, and provenance behavior.
