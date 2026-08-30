"use client"

import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "wpxdev:flex wpxdev:items-center wpxdev:gap-2 wpxdev:text-sm wpxdev:leading-none wpxdev:font-medium wpxdev:select-none wpxdev:group-data-[disabled=true]:pointer-events-none wpxdev:group-data-[disabled=true]:opacity-50 wpxdev:peer-disabled:cursor-not-allowed wpxdev:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
