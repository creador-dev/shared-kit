"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "wpxdev:z-50 wpxdev:w-72 wpxdev:origin-(--radix-popover-content-transform-origin) wpxdev:rounded-md wpxdev:border wpxdev:bg-popover wpxdev:p-4 wpxdev:text-popover-foreground wpxdev:shadow-md wpxdev:outline-hidden wpxdev:data-[side=bottom]:slide-in-from-top-2 wpxdev:data-[side=left]:slide-in-from-right-2 wpxdev:data-[side=right]:slide-in-from-left-2 wpxdev:data-[side=top]:slide-in-from-bottom-2 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=closed]:zoom-out-95 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0 wpxdev:data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={cn("wpxdev:flex wpxdev:flex-col wpxdev:gap-1 wpxdev:text-sm", className)}
      {...props}
    />
  )
}

function PopoverTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <div
      data-slot="popover-title"
      className={cn("wpxdev:font-medium", className)}
      {...props}
    />
  )
}

function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="popover-description"
      className={cn("wpxdev:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
}
