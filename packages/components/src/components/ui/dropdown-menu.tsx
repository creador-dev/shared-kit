import * as React from "react"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "wpxdev:z-50 wpxdev:max-h-(--radix-dropdown-menu-content-available-height) wpxdev:min-w-[8rem] wpxdev:origin-(--radix-dropdown-menu-content-transform-origin) wpxdev:overflow-x-hidden wpxdev:overflow-y-auto wpxdev:rounded-md wpxdev:border wpxdev:bg-popover wpxdev:p-1 wpxdev:text-popover-foreground wpxdev:shadow-md wpxdev:data-[side=bottom]:slide-in-from-top-2 wpxdev:data-[side=left]:slide-in-from-right-2 wpxdev:data-[side=right]:slide-in-from-left-2 wpxdev:data-[side=top]:slide-in-from-bottom-2 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=closed]:zoom-out-95 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0 wpxdev:data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-sm wpxdev:px-2 wpxdev:py-1.5 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[disabled]:pointer-events-none wpxdev:data-[disabled]:opacity-50 wpxdev:data-[inset]:pl-8 wpxdev:data-[variant=destructive]:text-destructive wpxdev:data-[variant=destructive]:focus:bg-destructive/10 wpxdev:data-[variant=destructive]:focus:text-destructive wpxdev:dark:data-[variant=destructive]:focus:bg-destructive/20 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4 wpxdev:[&_svg:not([class*=text-])]:text-muted-foreground wpxdev:data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-sm wpxdev:py-1.5 wpxdev:pr-2 wpxdev:pl-8 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[disabled]:pointer-events-none wpxdev:data-[disabled]:opacity-50 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...(checked === undefined ? {} : { checked })}
      {...props}
    >
      <span className="wpxdev:pointer-events-none wpxdev:absolute wpxdev:left-2 wpxdev:flex wpxdev:size-3.5 wpxdev:items-center wpxdev:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="wpxdev:size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-sm wpxdev:py-1.5 wpxdev:pr-2 wpxdev:pl-8 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[disabled]:pointer-events-none wpxdev:data-[disabled]:opacity-50 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="wpxdev:pointer-events-none wpxdev:absolute wpxdev:left-2 wpxdev:flex wpxdev:size-3.5 wpxdev:items-center wpxdev:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="wpxdev:size-2 wpxdev:fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "wpxdev:px-2 wpxdev:py-1.5 wpxdev:text-sm wpxdev:font-medium wpxdev:data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("wpxdev:-mx-1 wpxdev:my-1 wpxdev:h-px wpxdev:bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "wpxdev:ml-auto wpxdev:text-xs wpxdev:tracking-widest wpxdev:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-sm wpxdev:px-2 wpxdev:py-1.5 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[inset]:pl-8 wpxdev:data-[state=open]:bg-accent wpxdev:data-[state=open]:text-accent-foreground wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4 wpxdev:[&_svg:not([class*=text-])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="wpxdev:ml-auto wpxdev:size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "wpxdev:z-50 wpxdev:min-w-[8rem] wpxdev:origin-(--radix-dropdown-menu-content-transform-origin) wpxdev:overflow-hidden wpxdev:rounded-md wpxdev:border wpxdev:bg-popover wpxdev:p-1 wpxdev:text-popover-foreground wpxdev:shadow-lg wpxdev:data-[side=bottom]:slide-in-from-top-2 wpxdev:data-[side=left]:slide-in-from-right-2 wpxdev:data-[side=right]:slide-in-from-left-2 wpxdev:data-[side=top]:slide-in-from-bottom-2 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=closed]:zoom-out-95 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0 wpxdev:data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
