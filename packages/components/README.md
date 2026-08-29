# @creador-dev/components

Accessible React UI primitives that use the design tokens from `@creador-dev/styles` when available and include sensible fallbacks.

```tsx
import { Button, Stack } from "@creador-dev/components";
import "@creador-dev/components/styles.css";

export function Actions() {
  return (
    <Stack direction="row" gap="0.75rem">
      <Button>Save</Button>
      <Button variant="secondary">Cancel</Button>
    </Stack>
  );
}
```

Import `@creador-dev/styles` before the component stylesheet to share the repository's CSS variables.

