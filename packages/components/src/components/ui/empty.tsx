import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "#lib/utils"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "wpxdev:flex wpxdev:min-w-0 wpxdev:flex-1 wpxdev:flex-col wpxdev:items-center wpxdev:justify-center wpxdev:gap-6 wpxdev:rounded-lg wpxdev:border-dashed wpxdev:p-6 wpxdev:text-center wpxdev:text-balance wpxdev:md:p-12",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "wpxdev:flex wpxdev:max-w-sm wpxdev:flex-col wpxdev:items-center wpxdev:gap-2 wpxdev:text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "wpxdev:mb-2 wpxdev:flex wpxdev:shrink-0 wpxdev:items-center wpxdev:justify-center wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "wpxdev:bg-transparent",
        icon: "wpxdev:flex wpxdev:size-10 wpxdev:shrink-0 wpxdev:items-center wpxdev:justify-center wpxdev:rounded-lg wpxdev:bg-muted wpxdev:text-foreground wpxdev:[&_svg:not([class*=size-])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("wpxdev:text-lg wpxdev:font-medium wpxdev:tracking-tight", className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "wpxdev:text-sm/relaxed wpxdev:text-muted-foreground wpxdev:[&>a]:underline wpxdev:[&>a]:underline-offset-4 wpxdev:[&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "wpxdev:flex wpxdev:w-full wpxdev:max-w-sm wpxdev:min-w-0 wpxdev:flex-col wpxdev:items-center wpxdev:gap-4 wpxdev:text-sm wpxdev:text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
