# Brief

## Goal

Create a static Korean guide for developers securing npm package consumption and publication.

## Audience

Developers and maintainers who use npm packages in local development, CI, and package publishing.

## Acceptance Criteria

- Static only: no `package.json`, framework, or external runtime dependency.
- Create `index.html`, `styles.css`, `script.js`, `README.md`, `.nojekyll`, `LICENSE`, a local hero
  image asset, and changelog artifacts.
- Korean page content aimed at developers securing npm packages.
- First viewport contains practical configuration and clear action paths.
- Include quick config, threat model, team checklist, CI rules, maintainer security, and FAQ.
- Include copy buttons for code blocks.
- Persist checklist state when JavaScript is available and degrade gracefully without JavaScript.
- Include upstream attribution to `https://github.com/lirantal/npm-security-best-practices`,
  Apache-2.0, and Liran Tal near README/footer.
- Make the page visibly unofficial and avoid npm logo-like branding.
- Avoid purple or blue gradient styling, decorative orbs, cards inside cards, and SVG-only hero.
- Add supergoal vault files and dated changelog with decision reasoning.

## Non-goals

- Do not implement a framework app.
- Do not install dependencies or add build tooling.
- Do not add a custom domain or server-side hosting.
- Do not fully translate the upstream repository line by line.

## Validation

The requested greenfield run is approved by the user prompt. The source project is public and
Apache-2.0 licensed, and the implementation is a scoped static derivative guide with attribution.

Decision: GO
