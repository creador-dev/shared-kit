import { cn } from "#lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("wpxdev:animate-pulse wpxdev:rounded-md wpxdev:bg-accent", className)}
      {...props}
    />
  )
}

export { Skeleton }
