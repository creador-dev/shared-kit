import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"

import { cn } from "#lib/utils"

const toggleVariants = cva(
  "wpxdev:inline-flex wpxdev:items-center wpxdev:justify-center wpxdev:gap-2 wpxdev:rounded-md wpxdev:text-sm wpxdev:font-medium wpxdev:whitespace-nowrap wpxdev:transition-[color,box-shadow] wpxdev:outline-none wpxdev:hover:bg-muted wpxdev:hover:text-muted-foreground wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:disabled:pointer-events-none wpxdev:disabled:opacity-50 wpxdev:aria-invalid:border-destructive wpxdev:aria-invalid:ring-destructive/20 wpxdev:data-[state=on]:bg-accent wpxdev:data-[state=on]:text-accent-foreground wpxdev:dark:aria-invalid:ring-destructive/40 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "wpxdev:bg-transparent",
        outline:
          "wpxdev:border wpxdev:border-input wpxdev:bg-transparent wpxdev:shadow-xs wpxdev:hover:bg-accent wpxdev:hover:text-accent-foreground",
      },
      size: {
        default: "wpxdev:h-9 wpxdev:min-w-9 wpxdev:px-2",
        sm: "wpxdev:h-8 wpxdev:min-w-8 wpxdev:px-1.5",
        lg: "wpxdev:h-10 wpxdev:min-w-10 wpxdev:px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
