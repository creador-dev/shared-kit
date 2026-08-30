"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      {...(defaultValue === undefined ? {} : { defaultValue })}
      {...(value === undefined ? {} : { value })}
      min={min}
      max={max}
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:w-full wpxdev:touch-none wpxdev:items-center wpxdev:select-none wpxdev:data-[disabled]:opacity-50 wpxdev:data-[orientation=vertical]:h-full wpxdev:data-[orientation=vertical]:min-h-44 wpxdev:data-[orientation=vertical]:w-auto wpxdev:data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "wpxdev:relative wpxdev:grow wpxdev:overflow-hidden wpxdev:rounded-full wpxdev:bg-muted wpxdev:data-[orientation=horizontal]:h-1.5 wpxdev:data-[orientation=horizontal]:w-full wpxdev:data-[orientation=vertical]:h-full wpxdev:data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "wpxdev:absolute wpxdev:bg-primary wpxdev:data-[orientation=horizontal]:h-full wpxdev:data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="wpxdev:block wpxdev:size-4 wpxdev:shrink-0 wpxdev:rounded-full wpxdev:border wpxdev:border-primary wpxdev:bg-white wpxdev:shadow-sm wpxdev:ring-ring/50 wpxdev:transition-[color,box-shadow] wpxdev:hover:ring-4 wpxdev:focus-visible:ring-4 wpxdev:focus-visible:outline-hidden wpxdev:disabled:pointer-events-none wpxdev:disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
