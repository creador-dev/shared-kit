# shared-kit

A small, reusable monorepo for shared frontend building blocks. Add packages here once, then consume them from future applications through workspace dependencies or a package registry.

## Packages

- `@wpxdev/shared-kit` — convenient entry point for the complete toolkit
- `@wpxdev/hooks` — framework hooks for React applications
- `@wpxdev/components` — accessible React UI primitives
- `@wpxdev/styles` — CSS variables, reset, and shared utility classes
- `@wpxdev/utils` — dependency-free TypeScript utilities

## AI skills

Reusable agent instructions live in [`ai-skills/`](./ai-skills/README.md). The animation collection supports Claude Code, Codex, Cursor, Gemini, Antigravity, and Windsurf.

## Development

```bash
pnpm install
pnpm build
pnpm typecheck
pnpm test
```

During local app development, add a package with the workspace protocol:

```json
{
  "dependencies": {
    "@wpxdev/utils": "workspace:*"
  }
}
```

For applications outside this monorepo, publish packages to GitHub Packages or npm and install them by version.

Use the umbrella package when an application needs the complete toolkit:

```ts
import { Button, clamp, useMediaQuery } from "@wpxdev/shared-kit";
```

Global tokens and reset styles remain opt-in:

```css
@import "@wpxdev/shared-kit/styles.css";
```

## Releases

Every pull request that changes a publishable package should include a changeset:

```bash
pnpm changeset
```

Use `pnpm changeset --empty` for changes that intentionally do not require a release. When changesets reach `main`, GitHub Actions creates or updates a `Version Packages` pull request. Merging that pull request publishes the new package versions to npm and creates GitHub releases.

Publishing uses npm trusted publishing with GitHub Actions OIDC. Each npm package authorizes the `wpxdevlabs/shared-kit` repository and the `release.yml` workflow, so no long-lived npm token is stored in GitHub.

## Adding a package

1. Copy the structure of an existing directory under `packages/`.
2. Give it a scoped name and explicit `exports` in `package.json`.
3. Add source code, tests, and a package README.
4. Run `pnpm changeset` to describe a publishable change.
