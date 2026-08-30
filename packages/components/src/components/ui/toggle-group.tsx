import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui"

import { cn } from "#lib/utils"
import { toggleVariants } from "#components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
})

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      style={{ "--wpxdev-toggle-group-gap": spacing } as React.CSSProperties}
      className={cn(
        "wpxdev:group/toggle-group wpxdev:flex wpxdev:w-fit wpxdev:items-center wpxdev:gap-[--spacing(var(--wpxdev-toggle-group-gap))] wpxdev:rounded-md wpxdev:data-[spacing=default]:data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "wpxdev:w-auto wpxdev:min-w-0 wpxdev:shrink-0 wpxdev:px-3 wpxdev:focus:z-10 wpxdev:focus-visible:z-10",
        "wpxdev:data-[spacing=0]:rounded-none wpxdev:data-[spacing=0]:shadow-none wpxdev:data-[spacing=0]:first:rounded-l-md wpxdev:data-[spacing=0]:last:rounded-r-md wpxdev:data-[spacing=0]:data-[variant=outline]:border-l-0 wpxdev:data-[spacing=0]:data-[variant=outline]:first:border-l",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
