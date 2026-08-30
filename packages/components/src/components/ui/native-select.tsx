import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "#lib/utils"

function NativeSelect({
  className,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"select">, "size"> & { size?: "sm" | "default" }) {
  return (
    <div
      className="wpxdev:group/native-select wpxdev:relative wpxdev:w-fit wpxdev:has-[select:disabled]:opacity-50"
      data-slot="native-select-wrapper"
    >
      <select
        data-slot="native-select"
        data-size={size}
        className={cn(
          "wpxdev:h-9 wpxdev:w-full wpxdev:min-w-0 wpxdev:appearance-none wpxdev:rounded-md wpxdev:border wpxdev:border-input wpxdev:bg-transparent wpxdev:px-3 wpxdev:py-2 wpxdev:pr-9 wpxdev:text-sm wpxdev:shadow-xs wpxdev:transition-[color,box-shadow] wpxdev:outline-none wpxdev:selection:bg-primary wpxdev:selection:text-primary-foreground wpxdev:placeholder:text-muted-foreground wpxdev:disabled:pointer-events-none wpxdev:disabled:cursor-not-allowed wpxdev:data-[size=sm]:h-8 wpxdev:data-[size=sm]:py-1 wpxdev:dark:bg-input/30 wpxdev:dark:hover:bg-input/50",
          "wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50",
          "wpxdev:aria-invalid:border-destructive wpxdev:aria-invalid:ring-destructive/20 wpxdev:dark:aria-invalid:ring-destructive/40",
          className
        )}
        {...props}
      />
      <ChevronDownIcon
        className="wpxdev:pointer-events-none wpxdev:absolute wpxdev:top-1/2 wpxdev:right-3.5 wpxdev:size-4 wpxdev:-translate-y-1/2 wpxdev:text-muted-foreground wpxdev:opacity-50 wpxdev:select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  )
}

function NativeSelectOption({
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option
      data-slot="native-select-option"
      className={cn("wpxdev:bg-[Canvas] wpxdev:text-[CanvasText]", className)}
      {...props}
    />
  )
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn("wpxdev:bg-[Canvas] wpxdev:text-[CanvasText]", className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
