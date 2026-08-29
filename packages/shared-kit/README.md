# @creador-dev/shared-kit

The convenient entry point for the complete Creador frontend toolkit.

```tsx
import { Button, Stack, clamp, useMediaQuery } from "@creador-dev/shared-kit";

export function Example() {
  const compact = useMediaQuery("(max-width: 48rem)");

  return (
    <Stack direction={compact ? "column" : "row"}>
      <Button>Continue</Button>
      <span>{clamp(12, 0, 10)}</span>
    </Stack>
  );
}
```

Component-specific styles load automatically. Global tokens, reset, and utilities are opt-in:

```css
@import "@creador-dev/shared-kit/styles.css";
```

Install focused packages such as `@creador-dev/utils` directly when an application does not need the full toolkit.

