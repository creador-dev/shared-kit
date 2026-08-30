import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "wpxdev:group/avatar wpxdev:relative wpxdev:flex wpxdev:size-8 wpxdev:shrink-0 wpxdev:overflow-hidden wpxdev:rounded-full wpxdev:select-none wpxdev:data-[size=lg]:size-10 wpxdev:data-[size=sm]:size-6",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("wpxdev:aspect-square wpxdev:size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "wpxdev:flex wpxdev:size-full wpxdev:items-center wpxdev:justify-center wpxdev:rounded-full wpxdev:bg-muted wpxdev:text-sm wpxdev:text-muted-foreground wpxdev:group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "wpxdev:absolute wpxdev:right-0 wpxdev:bottom-0 wpxdev:z-10 wpxdev:inline-flex wpxdev:items-center wpxdev:justify-center wpxdev:rounded-full wpxdev:bg-primary wpxdev:text-primary-foreground wpxdev:ring-2 wpxdev:ring-background wpxdev:select-none",
        "wpxdev:group-data-[size=sm]/avatar:size-2 wpxdev:group-data-[size=sm]/avatar:[&>svg]:hidden",
        "wpxdev:group-data-[size=default]/avatar:size-2.5 wpxdev:group-data-[size=default]/avatar:[&>svg]:size-2",
        "wpxdev:group-data-[size=lg]/avatar:size-3 wpxdev:group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "wpxdev:group/avatar-group wpxdev:flex wpxdev:-space-x-2 wpxdev:*:data-[slot=avatar]:ring-2 wpxdev:*:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:size-8 wpxdev:shrink-0 wpxdev:items-center wpxdev:justify-center wpxdev:rounded-full wpxdev:bg-muted wpxdev:text-sm wpxdev:text-muted-foreground wpxdev:ring-2 wpxdev:ring-background wpxdev:group-has-data-[size=lg]/avatar-group:size-10 wpxdev:group-has-data-[size=sm]/avatar-group:size-6 wpxdev:[&>svg]:size-4 wpxdev:group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 wpxdev:group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
}
