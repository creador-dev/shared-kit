"use client"

import * as React from "react"
import { CircleIcon } from "lucide-react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("wpxdev:grid wpxdev:gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "wpxdev:aspect-square wpxdev:size-4 wpxdev:shrink-0 wpxdev:rounded-full wpxdev:border wpxdev:border-input wpxdev:text-primary wpxdev:shadow-xs wpxdev:transition-[color,box-shadow] wpxdev:outline-none wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:disabled:cursor-not-allowed wpxdev:disabled:opacity-50 wpxdev:aria-invalid:border-destructive wpxdev:aria-invalid:ring-destructive/20 wpxdev:dark:bg-input/30 wpxdev:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="wpxdev:relative wpxdev:flex wpxdev:items-center wpxdev:justify-center"
      >
        <CircleIcon className="wpxdev:absolute wpxdev:top-1/2 wpxdev:left-1/2 wpxdev:size-2 wpxdev:-translate-x-1/2 wpxdev:-translate-y-1/2 wpxdev:fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
