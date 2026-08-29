# @creador-dev/shared-kit

The convenient entry point for the complete Creador frontend toolkit.

```tsx
import { Button, clamp, useMediaQuery } from "@creador-dev/shared-kit";

export function Example() {
  const compact = useMediaQuery("(max-width: 48rem)");

  return (
    <div data-compact={compact || undefined}>
      <Button>Continue</Button>
      <span>{clamp(12, 0, 10)}</span>
    </div>
  );
}
```

Import the compiled, prefixed component styles once at the application entry point:

```css
@import "@creador-dev/shared-kit/styles.css";
```

Install focused packages such as `@creador-dev/utils` directly when an application does not need the full toolkit.

Tree-shakable direct entry points are also available:

```tsx
import { Button } from "@creador-dev/shared-kit/components/button";
import { useMediaQuery } from "@creador-dev/shared-kit/hooks/use-media-query";
import { clamp } from "@creador-dev/shared-kit/utils/clamp";
```
