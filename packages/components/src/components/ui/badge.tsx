import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "#lib/utils"

const badgeVariants = cva(
  "wpxdev:inline-flex wpxdev:w-fit wpxdev:shrink-0 wpxdev:items-center wpxdev:justify-center wpxdev:gap-1 wpxdev:overflow-hidden wpxdev:rounded-full wpxdev:border wpxdev:border-transparent wpxdev:px-2 wpxdev:py-0.5 wpxdev:text-xs wpxdev:font-medium wpxdev:whitespace-nowrap wpxdev:transition-[color,box-shadow] wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:aria-invalid:border-destructive wpxdev:aria-invalid:ring-destructive/20 wpxdev:dark:aria-invalid:ring-destructive/40 wpxdev:[&>svg]:pointer-events-none wpxdev:[&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "wpxdev:bg-primary wpxdev:text-primary-foreground wpxdev:[a&]:hover:bg-primary/90",
        secondary:
          "wpxdev:bg-secondary wpxdev:text-secondary-foreground wpxdev:[a&]:hover:bg-secondary/90",
        destructive:
          "wpxdev:bg-destructive wpxdev:text-white wpxdev:focus-visible:ring-destructive/20 wpxdev:dark:bg-destructive/60 wpxdev:dark:focus-visible:ring-destructive/40 wpxdev:[a&]:hover:bg-destructive/90",
        outline:
          "wpxdev:border-border wpxdev:text-foreground wpxdev:[a&]:hover:bg-accent wpxdev:[a&]:hover:text-accent-foreground",
        ghost: "wpxdev:[a&]:hover:bg-accent wpxdev:[a&]:hover:text-accent-foreground",
        link: "wpxdev:text-primary wpxdev:underline-offset-4 wpxdev:[a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
