# @creador-dev/components

Accessible React UI primitives that use the design tokens from `@creador-dev/styles` when available and include sensible fallbacks.

```tsx
import { Button, Stack } from "@creador-dev/components";

export function Actions() {
  return (
    <Stack direction="row" gap="0.75rem">
      <Button>Save</Button>
      <Button variant="secondary">Cancel</Button>
    </Stack>
  );
}
```

Each component keeps its SCSS beside its React source and loads the compiled styles automatically. Import `@creador-dev/styles` once in the application to use the shared theme variables and global foundations.

The source `@creador-dev/components/styles.scss` export remains available for Sass-based applications that disable runtime style injection.
