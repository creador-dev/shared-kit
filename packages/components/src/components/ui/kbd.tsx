import { cn } from "#lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "wpxdev:pointer-events-none wpxdev:inline-flex wpxdev:h-5 wpxdev:w-fit wpxdev:min-w-5 wpxdev:items-center wpxdev:justify-center wpxdev:gap-1 wpxdev:rounded-sm wpxdev:bg-muted wpxdev:px-1 wpxdev:font-sans wpxdev:text-xs wpxdev:font-medium wpxdev:text-muted-foreground wpxdev:select-none",
        "wpxdev:[&_svg:not([class*=size-])]:size-3",
        "wpxdev:[[data-slot=tooltip-content]_&]:bg-background/20 wpxdev:[[data-slot=tooltip-content]_&]:text-background wpxdev:dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("wpxdev:inline-flex wpxdev:items-center wpxdev:gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
