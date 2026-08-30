"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "wpxdev:peer wpxdev:size-4 wpxdev:shrink-0 wpxdev:rounded-[4px] wpxdev:border wpxdev:border-input wpxdev:shadow-xs wpxdev:transition-shadow wpxdev:outline-none wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:disabled:cursor-not-allowed wpxdev:disabled:opacity-50 wpxdev:aria-invalid:border-destructive wpxdev:aria-invalid:ring-destructive/20 wpxdev:data-[state=checked]:border-primary wpxdev:data-[state=checked]:bg-primary wpxdev:data-[state=checked]:text-primary-foreground wpxdev:dark:bg-input/30 wpxdev:dark:aria-invalid:ring-destructive/40 wpxdev:dark:data-[state=checked]:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="wpxdev:grid wpxdev:place-content-center wpxdev:text-current wpxdev:transition-none"
      >
        <CheckIcon className="wpxdev:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
