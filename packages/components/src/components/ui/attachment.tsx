import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "#lib/utils"
import { Button } from "#components/ui/button"

const attachmentVariants = cva(
  "wpxdev:group/attachment wpxdev:relative wpxdev:flex wpxdev:w-fit wpxdev:max-w-full wpxdev:min-w-0 wpxdev:shrink-0 wpxdev:flex-wrap wpxdev:rounded-xl wpxdev:border wpxdev:bg-card wpxdev:text-card-foreground wpxdev:transition-colors wpxdev:focus-within:ring-1 wpxdev:focus-within:ring-ring/50 wpxdev:has-[>a,>button]:hover:bg-muted/50 wpxdev:data-[state=error]:border-destructive/30 wpxdev:data-[state=idle]:border-dashed",
  {
    variants: {
      size: {
        default:
          "wpxdev:gap-2 wpxdev:text-sm wpxdev:has-data-[slot=attachment-content]:px-2.5 wpxdev:has-data-[slot=attachment-content]:py-2 wpxdev:has-data-[slot=attachment-media]:p-2",
        sm: "wpxdev:gap-2.5 wpxdev:text-xs wpxdev:has-data-[slot=attachment-content]:px-2 wpxdev:has-data-[slot=attachment-content]:py-1.5 wpxdev:has-data-[slot=attachment-media]:p-1.5",
        xs: "wpxdev:gap-1.5 wpxdev:rounded-lg wpxdev:text-xs wpxdev:has-data-[slot=attachment-content]:px-1.5 wpxdev:has-data-[slot=attachment-content]:py-1 wpxdev:has-data-[slot=attachment-media]:p-1",
      },
      orientation: {
        horizontal: "wpxdev:min-w-40 wpxdev:items-center",
        vertical: "wpxdev:w-24 wpxdev:flex-col wpxdev:has-data-[slot=attachment-content]:w-30",
      },
    },
  }
)

function Attachment({
  className,
  state = "done",
  size = "default",
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof attachmentVariants> & {
    state?: "idle" | "uploading" | "processing" | "error" | "done"
  }) {
  return (
    <div
      data-slot="attachment"
      data-state={state}
      data-size={size}
      data-orientation={orientation}
      className={cn(attachmentVariants({ size, orientation }), className)}
      {...props}
    />
  )
}

const attachmentMediaVariants = cva(
  "wpxdev:relative wpxdev:flex wpxdev:aspect-square wpxdev:w-10 wpxdev:shrink-0 wpxdev:items-center wpxdev:justify-center wpxdev:overflow-hidden wpxdev:rounded-lg wpxdev:bg-muted wpxdev:text-foreground wpxdev:group-data-[orientation=vertical]/attachment:w-full wpxdev:group-data-[size=sm]/attachment:w-8 wpxdev:group-data-[size=xs]/attachment:w-7 wpxdev:group-data-[size=xs]/attachment:rounded-md wpxdev:group-data-[state=error]/attachment:bg-destructive/10 wpxdev:group-data-[state=error]/attachment:text-destructive wpxdev:group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6! wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg:not([class*=size-])]:size-4 wpxdev:group-data-[orientation=vertical]/attachment:[&_svg:not([class*=size-])]:size-6 wpxdev:group-data-[size=xs]/attachment:[&_svg:not([class*=size-])]:size-3.5",
  {
    variants: {
      variant: {
        icon: "wpxdev:",
        image:
          "wpxdev:opacity-60 wpxdev:group-data-[state=done]/attachment:opacity-100 wpxdev:group-data-[state=idle]/attachment:opacity-100 wpxdev:*:[img]:aspect-square wpxdev:*:[img]:w-full wpxdev:*:[img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "icon",
    },
  }
)

function AttachmentMedia({
  className,
  variant = "icon",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof attachmentMediaVariants>) {
  return (
    <div
      data-slot="attachment-media"
      data-variant={variant}
      className={cn(attachmentMediaVariants({ variant }), className)}
      {...props}
    />
  )
}

function AttachmentContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-content"
      className={cn(
        "wpxdev:max-w-full wpxdev:min-w-0 wpxdev:flex-1 wpxdev:leading-tight wpxdev:group-data-[orientation=vertical]/attachment:px-1",
        className
      )}
      {...props}
    />
  )
}

function AttachmentTitle({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-title"
      className={cn(
        "wpxdev:block wpxdev:max-w-full wpxdev:min-w-0 wpxdev:truncate wpxdev:font-medium wpxdev:group-data-[state=processing]/attachment:shimmer wpxdev:group-data-[state=uploading]/attachment:shimmer",
        className
      )}
      {...props}
    />
  )
}

function AttachmentDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-description"
      className={cn(
        "wpxdev:mt-0.5 wpxdev:block wpxdev:min-w-0 wpxdev:truncate wpxdev:text-xs wpxdev:text-muted-foreground wpxdev:group-data-[state=error]/attachment:text-destructive/80",
        "wpxdev:max-w-full",
        className
      )}
      {...props}
    />
  )
}

function AttachmentActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-actions"
      className={cn(
        "wpxdev:relative wpxdev:z-20 wpxdev:flex wpxdev:shrink-0 wpxdev:items-center wpxdev:group-data-[orientation=vertical]/attachment:absolute wpxdev:group-data-[orientation=vertical]/attachment:top-3 wpxdev:group-data-[orientation=vertical]/attachment:right-3 wpxdev:group-data-[orientation=vertical]/attachment:gap-1",
        className
      )}
      {...props}
    />
  )
}

function AttachmentAction({
  className,
  variant,
  size = "icon-xs",
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="attachment-action"
      variant={variant ?? "ghost"}
      size={size}
      className={cn(className)}
      {...props}
    />
  )
}

function AttachmentTrigger({
  className,
  asChild = false,
  type,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="attachment-trigger"
      type={asChild ? undefined : (type ?? "button")}
      className={cn("wpxdev:absolute wpxdev:inset-0 wpxdev:z-10 wpxdev:outline-none", className)}
      {...props}
    />
  )
}

function AttachmentGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-group"
      className={cn(
        "wpxdev:flex wpxdev:min-w-0 wpxdev:scroll-fade-x wpxdev:snap-x wpxdev:snap-mandatory wpxdev:scroll-px-1 wpxdev:scrollbar-none wpxdev:gap-3 wpxdev:overflow-x-auto wpxdev:overscroll-x-contain wpxdev:py-1 wpxdev:*:data-[slot=attachment]:flex-none wpxdev:*:data-[slot=attachment]:snap-start",
        className
      )}
      {...props}
    />
  )
}

export {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
}
