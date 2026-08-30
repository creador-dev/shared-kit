import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "#lib/utils"
import { Separator } from "#components/ui/separator"

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn("wpxdev:group/item-group wpxdev:flex wpxdev:flex-col", className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("wpxdev:my-0", className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  "wpxdev:group/item wpxdev:flex wpxdev:flex-wrap wpxdev:items-center wpxdev:rounded-md wpxdev:border wpxdev:border-transparent wpxdev:text-sm wpxdev:transition-colors wpxdev:duration-100 wpxdev:outline-none wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:[a]:transition-colors wpxdev:[a]:hover:bg-accent/50",
  {
    variants: {
      variant: {
        default: "wpxdev:bg-transparent",
        outline: "wpxdev:border-border",
        muted: "wpxdev:bg-muted/50",
      },
      size: {
        default: "wpxdev:gap-4 wpxdev:p-4",
        sm: "wpxdev:gap-2.5 wpxdev:px-4 wpxdev:py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div"
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  "wpxdev:flex wpxdev:shrink-0 wpxdev:items-center wpxdev:justify-center wpxdev:gap-2 wpxdev:group-has-[[data-slot=item-description]]/item:translate-y-0.5 wpxdev:group-has-[[data-slot=item-description]]/item:self-start wpxdev:[&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "wpxdev:bg-transparent",
        icon: "wpxdev:size-8 wpxdev:rounded-sm wpxdev:border wpxdev:bg-muted wpxdev:[&_svg:not([class*=size-])]:size-4",
        image:
          "wpxdev:size-10 wpxdev:overflow-hidden wpxdev:rounded-sm wpxdev:[&_img]:size-full wpxdev:[&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "wpxdev:flex wpxdev:flex-1 wpxdev:flex-col wpxdev:gap-1 wpxdev:[&+[data-slot=item-content]]:flex-none",
        className
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "wpxdev:flex wpxdev:w-fit wpxdev:items-center wpxdev:gap-2 wpxdev:text-sm wpxdev:leading-snug wpxdev:font-medium",
        className
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "wpxdev:line-clamp-2 wpxdev:text-sm wpxdev:leading-normal wpxdev:font-normal wpxdev:text-balance wpxdev:text-muted-foreground",
        "wpxdev:[&>a]:underline wpxdev:[&>a]:underline-offset-4 wpxdev:[&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("wpxdev:flex wpxdev:items-center wpxdev:gap-2", className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "wpxdev:flex wpxdev:basis-full wpxdev:items-center wpxdev:justify-between wpxdev:gap-2",
        className
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "wpxdev:flex wpxdev:basis-full wpxdev:items-center wpxdev:justify-between wpxdev:gap-2",
        className
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
