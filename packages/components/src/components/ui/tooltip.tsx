"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "wpxdev:z-50 wpxdev:w-fit wpxdev:origin-(--radix-tooltip-content-transform-origin) wpxdev:animate-in wpxdev:rounded-md wpxdev:bg-foreground wpxdev:px-3 wpxdev:py-1.5 wpxdev:text-xs wpxdev:text-balance wpxdev:text-background wpxdev:fade-in-0 wpxdev:zoom-in-95 wpxdev:data-[side=bottom]:slide-in-from-top-2 wpxdev:data-[side=left]:slide-in-from-right-2 wpxdev:data-[side=right]:slide-in-from-left-2 wpxdev:data-[side=top]:slide-in-from-bottom-2 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="wpxdev:z-50 wpxdev:size-2.5 wpxdev:translate-y-[calc(-50%_-_2px)] wpxdev:rotate-45 wpxdev:rounded-[2px] wpxdev:bg-foreground wpxdev:fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
