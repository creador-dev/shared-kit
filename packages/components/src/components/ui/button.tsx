import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "#lib/utils"

const buttonVariants = cva(
  "wpxdev:inline-flex wpxdev:shrink-0 wpxdev:items-center wpxdev:justify-center wpxdev:gap-2 wpxdev:rounded-md wpxdev:text-sm wpxdev:font-medium wpxdev:whitespace-nowrap wpxdev:transition-all wpxdev:outline-none wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:disabled:pointer-events-none wpxdev:disabled:opacity-50 wpxdev:aria-invalid:border-destructive wpxdev:aria-invalid:ring-destructive/20 wpxdev:dark:aria-invalid:ring-destructive/40 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "wpxdev:bg-primary wpxdev:text-primary-foreground wpxdev:hover:bg-primary/90",
        destructive:
          "wpxdev:bg-destructive wpxdev:text-white wpxdev:hover:bg-destructive/90 wpxdev:focus-visible:ring-destructive/20 wpxdev:dark:bg-destructive/60 wpxdev:dark:focus-visible:ring-destructive/40",
        outline:
          "wpxdev:border wpxdev:bg-background wpxdev:shadow-xs wpxdev:hover:bg-accent wpxdev:hover:text-accent-foreground wpxdev:dark:border-input wpxdev:dark:bg-input/30 wpxdev:dark:hover:bg-input/50",
        secondary:
          "wpxdev:bg-secondary wpxdev:text-secondary-foreground wpxdev:hover:bg-secondary/80",
        ghost:
          "wpxdev:hover:bg-accent wpxdev:hover:text-accent-foreground wpxdev:dark:hover:bg-accent/50",
        link: "wpxdev:text-primary wpxdev:underline-offset-4 wpxdev:hover:underline",
      },
      size: {
        default: "wpxdev:h-9 wpxdev:px-4 wpxdev:py-2 wpxdev:has-[>svg]:px-3",
        xs: "wpxdev:h-6 wpxdev:gap-1 wpxdev:rounded-md wpxdev:px-2 wpxdev:text-xs wpxdev:has-[>svg]:px-1.5 wpxdev:[&_svg:not([class*=size-])]:size-3",
        sm: "wpxdev:h-8 wpxdev:gap-1.5 wpxdev:rounded-md wpxdev:px-3 wpxdev:has-[>svg]:px-2.5",
        lg: "wpxdev:h-10 wpxdev:rounded-md wpxdev:px-6 wpxdev:has-[>svg]:px-4",
        icon: "wpxdev:size-9",
        "icon-xs": "wpxdev:size-6 wpxdev:rounded-md wpxdev:[&_svg:not([class*=size-])]:size-3",
        "icon-sm": "wpxdev:size-8",
        "icon-lg": "wpxdev:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
