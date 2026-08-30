import * as React from "react"

import { cn } from "#lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "wpxdev:flex wpxdev:field-sizing-content wpxdev:min-h-16 wpxdev:w-full wpxdev:rounded-md wpxdev:border wpxdev:border-input wpxdev:bg-transparent wpxdev:px-3 wpxdev:py-2 wpxdev:text-base wpxdev:shadow-xs wpxdev:transition-[color,box-shadow] wpxdev:outline-none wpxdev:placeholder:text-muted-foreground wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:disabled:cursor-not-allowed wpxdev:disabled:opacity-50 wpxdev:aria-invalid:border-destructive wpxdev:aria-invalid:ring-destructive/20 wpxdev:md:text-sm wpxdev:dark:bg-input/30 wpxdev:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
