import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "wpxdev:relative wpxdev:h-2 wpxdev:w-full wpxdev:overflow-hidden wpxdev:rounded-full wpxdev:bg-primary/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="wpxdev:h-full wpxdev:w-full wpxdev:flex-1 wpxdev:bg-primary wpxdev:transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
