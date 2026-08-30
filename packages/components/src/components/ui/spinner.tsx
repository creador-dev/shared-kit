import { Loader2Icon } from "lucide-react"

import { cn } from "#lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("wpxdev:size-4 wpxdev:animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
