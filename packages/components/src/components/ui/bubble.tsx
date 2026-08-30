import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "#lib/utils"

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("wpxdev:flex wpxdev:min-w-0 wpxdev:flex-col wpxdev:gap-2", className)}
      {...props}
    />
  )
}

const bubbleVariants = cva(
  "wpxdev:group/bubble wpxdev:relative wpxdev:flex wpxdev:w-fit wpxdev:max-w-[80%] wpxdev:min-w-0 wpxdev:flex-col wpxdev:gap-1 wpxdev:group-data-[align=end]/message:self-end wpxdev:data-[align=end]:self-end wpxdev:data-[variant=ghost]:max-w-full",
  {
    variants: {
      variant: {
        default:
          "wpxdev:*:data-[slot=bubble-content]:bg-primary wpxdev:*:data-[slot=bubble-content]:text-primary-foreground wpxdev:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-primary/80",
        secondary:
          "wpxdev:*:data-[slot=bubble-content]:bg-secondary wpxdev:*:data-[slot=bubble-content]:text-secondary-foreground wpxdev:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--wpxdev-color-secondary),var(--wpxdev-color-foreground)_5%)]",
        muted:
          "wpxdev:*:data-[slot=bubble-content]:bg-muted wpxdev:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--wpxdev-color-muted),var(--wpxdev-color-foreground)_5%)]",
        tinted:
          "wpxdev:*:data-[slot=bubble-content]:bg-[oklch(from_var(--wpxdev-color-primary)_0.93_calc(c*0.4)_h)] wpxdev:*:data-[slot=bubble-content]:text-foreground wpxdev:dark:*:data-[slot=bubble-content]:bg-[oklch(from_var(--wpxdev-color-primary)_0.3_calc(c*0.4)_h)] wpxdev:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--wpxdev-color-primary)_0.88_calc(c*0.5)_h)] wpxdev:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--wpxdev-color-primary)_0.35_calc(c*0.5)_h)]",
        outline:
          "wpxdev:*:data-[slot=bubble-content]:border-border wpxdev:*:data-[slot=bubble-content]:bg-background wpxdev:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted wpxdev:[&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground wpxdev:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-input/30",
        ghost:
          "wpxdev:border-none wpxdev:*:data-[slot=bubble-content]:rounded-none wpxdev:*:data-[slot=bubble-content]:bg-transparent wpxdev:*:data-[slot=bubble-content]:p-0 wpxdev:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted wpxdev:[&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground wpxdev:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted/50",
        destructive:
          "wpxdev:*:data-[slot=bubble-content]:bg-destructive/10 wpxdev:*:data-[slot=bubble-content]:text-destructive wpxdev:dark:*:data-[slot=bubble-content]:bg-destructive/20 wpxdev:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/20 wpxdev:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    align?: "start" | "end"
  }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  )
}

function BubbleContent({
  asChild = false,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="bubble-content"
      className={cn(
        "wpxdev:w-fit wpxdev:max-w-full wpxdev:min-w-0 wpxdev:overflow-hidden wpxdev:rounded-xl wpxdev:border wpxdev:border-transparent wpxdev:px-3 wpxdev:py-2 wpxdev:text-sm wpxdev:leading-relaxed wpxdev:wrap-break-word wpxdev:group-data-[align=end]/bubble:self-end wpxdev:[button]:text-left wpxdev:[button,a]:transition-colors wpxdev:[button,a]:outline-none wpxdev:[button,a]:focus-visible:border-ring wpxdev:[button,a]:focus-visible:ring-3 wpxdev:[button,a]:focus-visible:ring-ring/50",
        className
      )}
      {...props}
    />
  )
}

const bubbleReactionsVariants = cva(
  "wpxdev:absolute wpxdev:z-10 wpxdev:flex wpxdev:w-fit wpxdev:shrink-0 wpxdev:items-center wpxdev:justify-center wpxdev:gap-1 wpxdev:rounded-full wpxdev:bg-muted wpxdev:px-1.5 wpxdev:py-0.5 wpxdev:text-sm wpxdev:ring-3 wpxdev:ring-card wpxdev:has-[button]:p-0",
  {
    variants: {
      side: {
        top: "wpxdev:top-0 wpxdev:-translate-y-3/4",
        bottom: "wpxdev:bottom-0 wpxdev:translate-y-3/4",
      },
      align: {
        start: "wpxdev:left-3",
        end: "wpxdev:right-3",
      },
    },
    defaultVariants: {
      side: "bottom",
      align: "end",
    },
  }
)

function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end"
  side?: "top" | "bottom"
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  )
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions }
