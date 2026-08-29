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

Component styles load automatically with their components. Import `@creador-dev/styles` once in the application to use the shared theme variables and global foundations.

The static `@creador-dev/components/styles.css` export remains available for environments that disable runtime style injection.
