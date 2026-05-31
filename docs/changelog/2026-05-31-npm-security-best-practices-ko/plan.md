# Plan

## Plain-language brief

Build one static Korean webpage that gives developers immediate npm security defaults, explains the
main supply-chain risks, and provides a team checklist they can revisit. The page should work as a
GitHub Pages site without installing anything.

## Technical brief

Create `index.html` for semantic sections, `styles.css` for responsive layout and accessible visual
states, `script.js` for progressive copy buttons plus checklist persistence, and one local bitmap
hero asset. Add repository docs, license attribution, and a supergoal vault. Verify with
dependency-free checks, browser rendering checks, GitHub Pages publication checks, JavaScript syntax
checks, required-file assertions, and no-package-manifest assertions.

## Terms

- Static site: HTML, CSS, and JavaScript files served directly without a server build step.
- Progressive enhancement: extra browser behavior that improves the page but is not required for
  baseline use.
- Supply chain: the package authors, registries, lockfiles, install steps, CI, and publish flow that
  deliver code into a project.
- OIDC: OpenID Connect, a short-lived identity flow CI systems can use instead of long-lived tokens.
- Provenance: metadata that records where and how a package was built and published.

## Human Feedback

### Plain-language brief

The approved build will create a dependency-free Korean guide page for npm package security. It will
lead with copyable configuration, then cover threats, checklist, CI, maintainer security, and FAQ.

### Technical brief

Touch points are `index.html`, `styles.css`, `script.js`, root docs/license files, and
`docs/changelog`. Checks will not install packages. The main risks are overstating verification,
adding npm-tooling files, and publishing before GitHub Pages is configured; the build avoids them by
keeping a static surface, recording exact commands, and checking the public URL after Pages is
enabled.

### Terms

- Dependency-free: no package install is needed to open or verify the site.
- LocalStorage: browser storage used only for checklist state.
- GitHub Pages: GitHub's static hosting for repository files.
- Whitespace check: a Git command that detects trailing spaces and similar patch problems.

### Approval request

Approve Build, request changes, or stop.

Approval: APPROVED by user prompt, which stated this is the Build worker for the approved supergoal
GREENFIELD run.

## Architecture

- `index.html`: content, structure, copy targets, checklist controls, source attribution.
- `styles.css`: layout, palette, responsive behavior, no-JS visibility state.
- `script.js`: small DOM helpers for copying and checklist storage.
- `assets/package-security-workbench.png`: local generated bitmap supporting the first viewport.
- `docs/changelog`: dated reasoning and supergoal vault.

## Contracts

- The page must remain usable with JavaScript disabled.
- The repository must not contain `package.json`.
- Copy targets must refer to existing code blocks.
- Checklist persistence must not block normal checkbox behavior if storage is unavailable.
