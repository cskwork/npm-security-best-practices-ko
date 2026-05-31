# Supergoal Vault: npm-security-best-practices-ko

Mode: GREENFIELD

Phase: Build worker

Objective: implement a static Korean GitHub Pages landing and guide page for npm package security,
based on `https://github.com/lirantal/npm-security-best-practices`.

## Priority Rules

1. Prefer static, inspectable files over build tooling.
2. Put actionable security controls before explanatory content.
3. Treat npm install, lockfile review, CI, and publish as separate risk surfaces.
4. Attribute upstream source and license wherever users are likely to inspect provenance.
5. Make JavaScript optional; it may improve the guide but must not be required to read or use it.
6. Keep code short, local, and dependency-free.
7. Record verification as commands that a later verifier can rerun.

## Build Notes

- The target repo started with only `.git`, so all requested files were created in this build.
- The first viewport includes copyable `.npmrc` configuration and links directly to the checklist.
- The hero area includes a local generated bitmap image of a package-security workbench.
- The first viewport and footer state that this is an unofficial Korean guide, not npm official
  documentation.
- The footer and README include the npm trademark notice.
- Copy buttons use the Clipboard API when available and a textarea fallback otherwise.
- Checklist persistence uses `localStorage`; unchecked no-JS behavior remains plain form controls.
- No `package.json` or framework files were added.
