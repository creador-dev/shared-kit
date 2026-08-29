# shared-kit

A small, reusable monorepo for shared frontend building blocks. Add packages here once, then consume them from future applications through workspace dependencies or a package registry.

## Packages

- `@creador-dev/hooks` — framework hooks for React applications
- `@creador-dev/components` — accessible React UI primitives
- `@creador-dev/styles` — CSS variables, reset, and shared utility classes
- `@creador-dev/utils` — dependency-free TypeScript utilities

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
    "@creador-dev/utils": "workspace:*"
  }
}
```

For applications outside this monorepo, publish packages to GitHub Packages or npm and install them by version.

## Releases

Every pull request that changes a publishable package should include a changeset:

```bash
pnpm changeset
```

Use `pnpm changeset --empty` for changes that intentionally do not require a release. When changesets reach `main`, GitHub Actions creates or updates a `Version Packages` pull request. Merging that pull request publishes the new package versions to npm and creates GitHub releases.

Repository setup requires an npm automation or granular access token saved as the GitHub Actions secret `NPM_TOKEN`. The token must have permission to publish the `@creador-dev` scope.

## Adding a package

1. Copy the structure of an existing directory under `packages/`.
2. Give it a scoped name and explicit `exports` in `package.json`.
3. Add source code, tests, and a package README.
4. Run `pnpm changeset` to describe a publishable change.
