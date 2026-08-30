import * as React from "react"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
import { Menubar as MenubarPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "wpxdev:flex wpxdev:h-9 wpxdev:items-center wpxdev:gap-1 wpxdev:rounded-md wpxdev:border wpxdev:bg-background wpxdev:p-1 wpxdev:shadow-xs",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "wpxdev:flex wpxdev:items-center wpxdev:rounded-sm wpxdev:px-2 wpxdev:py-1 wpxdev:text-sm wpxdev:font-medium wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[state=open]:bg-accent wpxdev:data-[state=open]:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "wpxdev:z-50 wpxdev:min-w-[12rem] wpxdev:origin-(--radix-menubar-content-transform-origin) wpxdev:overflow-hidden wpxdev:rounded-md wpxdev:border wpxdev:bg-popover wpxdev:p-1 wpxdev:text-popover-foreground wpxdev:shadow-md wpxdev:data-[side=bottom]:slide-in-from-top-2 wpxdev:data-[side=left]:slide-in-from-right-2 wpxdev:data-[side=right]:slide-in-from-left-2 wpxdev:data-[side=top]:slide-in-from-bottom-2 wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=closed]:zoom-out-95 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0 wpxdev:data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
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

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-xs wpxdev:py-1.5 wpxdev:pr-2 wpxdev:pl-8 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[disabled]:pointer-events-none wpxdev:data-[disabled]:opacity-50 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...(checked === undefined ? {} : { checked })}
      {...props}
    >
      <span className="wpxdev:pointer-events-none wpxdev:absolute wpxdev:left-2 wpxdev:flex wpxdev:size-3.5 wpxdev:items-center wpxdev:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="wpxdev:size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-xs wpxdev:py-1.5 wpxdev:pr-2 wpxdev:pl-8 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[disabled]:pointer-events-none wpxdev:data-[disabled]:opacity-50 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="wpxdev:pointer-events-none wpxdev:absolute wpxdev:left-2 wpxdev:flex wpxdev:size-3.5 wpxdev:items-center wpxdev:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="wpxdev:size-2 wpxdev:fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "wpxdev:px-2 wpxdev:py-1.5 wpxdev:text-sm wpxdev:font-medium wpxdev:data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("wpxdev:-mx-1 wpxdev:my-1 wpxdev:h-px wpxdev:bg-border", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "wpxdev:ml-auto wpxdev:text-xs wpxdev:tracking-widest wpxdev:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:rounded-sm wpxdev:px-2 wpxdev:py-1.5 wpxdev:text-sm wpxdev:outline-none wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[inset]:pl-8 wpxdev:data-[state=open]:bg-accent wpxdev:data-[state=open]:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="wpxdev:ml-auto wpxdev:h-4 wpxdev:w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "wpxdev:z-50 wpxdev:min-w-[8rem] wpxdev:origin-(--radix-menubar-content-transform-origin) wpxdev:overflow-hidden wpxdev:rounded-md wpxdev:border wpxdev:bg-popover wpxdev:p-1 wpxdev:text-popover-foreground wpxdev:shadow-lg wpxdev:data-[side=bottom]:slide-in-from-top-2 wpxdev:data-[side=left]:slide-in-from-right-2 wpxdev:data-[side=right]:slide-in-from-left-2 wpxdev:data-[side=top]:slide-in-from-bottom-2 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=closed]:zoom-out-95 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0 wpxdev:data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
