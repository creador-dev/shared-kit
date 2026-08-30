"use client"

import * as React from "react"
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("wpxdev:relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="wpxdev:size-full wpxdev:rounded-[inherit] wpxdev:transition-[color,box-shadow] wpxdev:outline-none wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "wpxdev:flex wpxdev:touch-none wpxdev:p-px wpxdev:transition-colors wpxdev:select-none",
        orientation === "vertical" &&
          "wpxdev:h-full wpxdev:w-2.5 wpxdev:border-l wpxdev:border-l-transparent",
        orientation === "horizontal" &&
          "wpxdev:h-2.5 wpxdev:flex-col wpxdev:border-t wpxdev:border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="wpxdev:relative wpxdev:flex-1 wpxdev:rounded-full wpxdev:bg-border"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
