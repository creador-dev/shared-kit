# shared-kit

A small, reusable monorepo for shared frontend building blocks. Add packages here once, then consume them from future applications through workspace dependencies or a package registry.

## Packages

- `@base/hooks` — framework hooks for React applications
- `@base/styles` — CSS variables, reset, and shared utility classes
- `@base/utils` — dependency-free TypeScript utilities

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
    "@base/utils": "workspace:*"
  }
}
```

For applications outside this monorepo, publish packages to GitHub Packages or npm and install them by version.

## Adding a package

1. Copy the structure of an existing directory under `packages/`.
2. Give it a scoped name and explicit `exports` in `package.json`.
3. Add source code, tests, and a package README.
4. Run `pnpm changeset` to describe a publishable change.
