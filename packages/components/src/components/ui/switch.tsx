"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "wpxdev:peer wpxdev:group/switch wpxdev:inline-flex wpxdev:shrink-0 wpxdev:items-center wpxdev:rounded-full wpxdev:border wpxdev:border-transparent wpxdev:shadow-xs wpxdev:transition-all wpxdev:outline-none wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:disabled:cursor-not-allowed wpxdev:disabled:opacity-50 wpxdev:data-[size=default]:h-[1.15rem] wpxdev:data-[size=default]:w-8 wpxdev:data-[size=sm]:h-3.5 wpxdev:data-[size=sm]:w-6 wpxdev:data-[state=checked]:bg-primary wpxdev:data-[state=unchecked]:bg-input wpxdev:dark:data-[state=unchecked]:bg-input/80",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "wpxdev:pointer-events-none wpxdev:block wpxdev:rounded-full wpxdev:bg-background wpxdev:ring-0 wpxdev:transition-transform wpxdev:group-data-[size=default]/switch:size-4 wpxdev:group-data-[size=sm]/switch:size-3 wpxdev:data-[state=checked]:translate-x-[calc(100%-2px)] wpxdev:data-[state=unchecked]:translate-x-0 wpxdev:dark:data-[state=checked]:bg-primary-foreground wpxdev:dark:data-[state=unchecked]:bg-foreground"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
