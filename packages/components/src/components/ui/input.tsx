import * as React from "react"

import { cn } from "#lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "wpxdev:h-9 wpxdev:w-full wpxdev:min-w-0 wpxdev:rounded-md wpxdev:border wpxdev:border-input wpxdev:bg-transparent wpxdev:px-3 wpxdev:py-1 wpxdev:text-base wpxdev:shadow-xs wpxdev:transition-[color,box-shadow] wpxdev:outline-none wpxdev:selection:bg-primary wpxdev:selection:text-primary-foreground wpxdev:file:inline-flex wpxdev:file:h-7 wpxdev:file:border-0 wpxdev:file:bg-transparent wpxdev:file:text-sm wpxdev:file:font-medium wpxdev:file:text-foreground wpxdev:placeholder:text-muted-foreground wpxdev:disabled:pointer-events-none wpxdev:disabled:cursor-not-allowed wpxdev:disabled:opacity-50 wpxdev:md:text-sm wpxdev:dark:bg-input/30",
        "wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50",
        "wpxdev:aria-invalid:border-destructive wpxdev:aria-invalid:ring-destructive/20 wpxdev:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
