import * as React from "react"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "wpxdev:flex wpxdev:w-fit wpxdev:items-center wpxdev:justify-between wpxdev:gap-2 wpxdev:rounded-md wpxdev:border wpxdev:border-input wpxdev:bg-transparent wpxdev:px-3 wpxdev:py-2 wpxdev:text-sm wpxdev:whitespace-nowrap wpxdev:shadow-xs wpxdev:transition-[color,box-shadow] wpxdev:outline-none wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:disabled:cursor-not-allowed wpxdev:disabled:opacity-50 wpxdev:aria-invalid:border-destructive wpxdev:aria-invalid:ring-destructive/20 wpxdev:data-[placeholder]:text-muted-foreground wpxdev:data-[size=default]:h-9 wpxdev:data-[size=sm]:h-8 wpxdev:*:data-[slot=select-value]:line-clamp-1 wpxdev:*:data-[slot=select-value]:flex wpxdev:*:data-[slot=select-value]:items-center wpxdev:*:data-[slot=select-value]:gap-2 wpxdev:dark:bg-input/30 wpxdev:dark:hover:bg-input/50 wpxdev:dark:aria-invalid:ring-destructive/40 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4 wpxdev:[&_svg:not([class*=text-])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="wpxdev:size-4 wpxdev:opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "wpxdev:relative wpxdev:z-50 wpxdev:max-h-(--radix-select-content-available-height) wpxdev:min-w-[8rem] wpxdev:origin-(--radix-select-content-transform-origin) wpxdev:overflow-x-hidden wpxdev:overflow-y-auto wpxdev:rounded-md wpxdev:border wpxdev:bg-popover wpxdev:text-popover-foreground wpxdev:shadow-md wpxdev:data-[side=bottom]:slide-in-from-top-2 wpxdev:data-[side=left]:slide-in-from-right-2 wpxdev:data-[side=right]:slide-in-from-left-2 wpxdev:data-[side=top]:slide-in-from-bottom-2 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=closed]:zoom-out-95 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0 wpxdev:data-[state=open]:zoom-in-95",
          position === "popper" &&
            "wpxdev:data-[side=bottom]:translate-y-1 wpxdev:data-[side=left]:-translate-x-1 wpxdev:data-[side=right]:translate-x-1 wpxdev:data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "wpxdev:p-1",
            position === "popper" &&
              "wpxdev:h-[var(--radix-select-trigger-height)] wpxdev:w-full wpxdev:min-w-[var(--radix-select-trigger-width)] wpxdev:scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("wpxdev:px-2 wpxdev:py-1.5 wpxdev:text-xs wpxdev:text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:w-full wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-sm wpxdev:py-1.5 wpxdev:pr-8 wpxdev:pl-2 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[disabled]:pointer-events-none wpxdev:data-[disabled]:opacity-50 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4 wpxdev:[&_svg:not([class*=text-])]:text-muted-foreground wpxdev:*:[span]:last:flex wpxdev:*:[span]:last:items-center wpxdev:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="wpxdev:absolute wpxdev:right-2 wpxdev:flex wpxdev:size-3.5 wpxdev:items-center wpxdev:justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="wpxdev:size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("wpxdev:pointer-events-none wpxdev:-mx-1 wpxdev:my-1 wpxdev:h-px wpxdev:bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:justify-center wpxdev:py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="wpxdev:size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:justify-center wpxdev:py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="wpxdev:size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
