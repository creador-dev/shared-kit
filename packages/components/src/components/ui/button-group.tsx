import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "#lib/utils"
import { Separator } from "#components/ui/separator"

const buttonGroupVariants = cva(
  "wpxdev:flex wpxdev:w-fit wpxdev:items-stretch wpxdev:has-[>[data-slot=button-group]]:gap-2 wpxdev:[&>*]:focus-visible:relative wpxdev:[&>*]:focus-visible:z-10 wpxdev:has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md wpxdev:[&>[data-slot=select-trigger]:not([class*=w-])]:w-fit wpxdev:[&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal:
          "wpxdev:[&>*:not(:first-child)]:rounded-l-none wpxdev:[&>*:not(:first-child)]:border-l-0 wpxdev:[&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "wpxdev:flex-col wpxdev:[&>*:not(:first-child)]:rounded-t-none wpxdev:[&>*:not(:first-child)]:border-t-0 wpxdev:[&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      className={cn(
        "wpxdev:flex wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-md wpxdev:border wpxdev:bg-muted wpxdev:px-4 wpxdev:text-sm wpxdev:font-medium wpxdev:shadow-xs wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "wpxdev:relative wpxdev:m-0! wpxdev:self-stretch wpxdev:bg-input wpxdev:data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
