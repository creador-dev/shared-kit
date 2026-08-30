import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "#lib/utils"

const markerVariants = cva(
  "wpxdev:group/marker wpxdev:relative wpxdev:flex wpxdev:min-h-4 wpxdev:w-full wpxdev:items-center wpxdev:gap-2 wpxdev:text-left wpxdev:text-sm wpxdev:text-muted-foreground wpxdev:[&_svg:not([class*=size-])]:size-4 wpxdev:[a]:underline wpxdev:[a]:underline-offset-3 wpxdev:[a]:hover:text-foreground",
  {
    variants: {
      variant: {
        default: "wpxdev:",
        separator:
          "wpxdev:before:mr-1 wpxdev:before:h-px wpxdev:before:min-w-0 wpxdev:before:flex-1 wpxdev:before:bg-border wpxdev:after:ml-1 wpxdev:after:h-px wpxdev:after:min-w-0 wpxdev:after:flex-1 wpxdev:after:bg-border",
        border: "wpxdev:border-b wpxdev:border-border wpxdev:pb-2",
      },
    },
  }
)

function Marker({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof markerVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="marker"
      data-variant={variant}
      className={cn(markerVariants({ variant, className }))}
      {...props}
    />
  )
}

function MarkerIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={cn(
        "wpxdev:size-4 wpxdev:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function MarkerContent({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-content"
      className={cn(
        "wpxdev:min-w-0 wpxdev:wrap-break-word wpxdev:group-data-[variant=separator]/marker:flex-none wpxdev:group-data-[variant=separator]/marker:text-center wpxdev:*:[a]:underline wpxdev:*:[a]:underline-offset-3 wpxdev:*:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Marker, MarkerIcon, MarkerContent, markerVariants }
