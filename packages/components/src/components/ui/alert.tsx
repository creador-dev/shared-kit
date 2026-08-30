import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "#lib/utils"

const alertVariants = cva(
  "wpxdev:relative wpxdev:grid wpxdev:w-full wpxdev:grid-cols-[0_1fr] wpxdev:items-start wpxdev:gap-y-0.5 wpxdev:rounded-lg wpxdev:border wpxdev:px-4 wpxdev:py-3 wpxdev:text-sm wpxdev:has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] wpxdev:has-[>svg]:gap-x-3 wpxdev:[&>svg]:size-4 wpxdev:[&>svg]:translate-y-0.5 wpxdev:[&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "wpxdev:bg-card wpxdev:text-card-foreground",
        destructive:
          "wpxdev:bg-card wpxdev:text-destructive wpxdev:*:data-[slot=alert-description]:text-destructive/90 wpxdev:[&>svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "wpxdev:col-start-2 wpxdev:line-clamp-1 wpxdev:min-h-4 wpxdev:font-medium wpxdev:tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "wpxdev:col-start-2 wpxdev:grid wpxdev:justify-items-start wpxdev:gap-1 wpxdev:text-sm wpxdev:text-muted-foreground wpxdev:[&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
