"use client"

import * as React from "react"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
import { ContextMenu as ContextMenuPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:rounded-sm wpxdev:px-2 wpxdev:py-1.5 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[inset]:pl-8 wpxdev:data-[state=open]:bg-accent wpxdev:data-[state=open]:text-accent-foreground wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4 wpxdev:[&_svg:not([class*=text-])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="wpxdev:ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "wpxdev:z-50 wpxdev:min-w-[8rem] wpxdev:origin-(--radix-context-menu-content-transform-origin) wpxdev:overflow-hidden wpxdev:rounded-md wpxdev:border wpxdev:bg-popover wpxdev:p-1 wpxdev:text-popover-foreground wpxdev:shadow-lg wpxdev:data-[side=bottom]:slide-in-from-top-2 wpxdev:data-[side=left]:slide-in-from-right-2 wpxdev:data-[side=right]:slide-in-from-left-2 wpxdev:data-[side=top]:slide-in-from-bottom-2 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=closed]:zoom-out-95 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0 wpxdev:data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "wpxdev:z-50 wpxdev:max-h-(--radix-context-menu-content-available-height) wpxdev:min-w-[8rem] wpxdev:origin-(--radix-context-menu-content-transform-origin) wpxdev:overflow-x-hidden wpxdev:overflow-y-auto wpxdev:rounded-md wpxdev:border wpxdev:bg-popover wpxdev:p-1 wpxdev:text-popover-foreground wpxdev:shadow-md wpxdev:data-[side=bottom]:slide-in-from-top-2 wpxdev:data-[side=left]:slide-in-from-right-2 wpxdev:data-[side=right]:slide-in-from-left-2 wpxdev:data-[side=top]:slide-in-from-bottom-2 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=closed]:zoom-out-95 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0 wpxdev:data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
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

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-sm wpxdev:py-1.5 wpxdev:pr-2 wpxdev:pl-8 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[disabled]:pointer-events-none wpxdev:data-[disabled]:opacity-50 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...(checked === undefined ? {} : { checked })}
      {...props}
    >
      <span className="wpxdev:pointer-events-none wpxdev:absolute wpxdev:left-2 wpxdev:flex wpxdev:size-3.5 wpxdev:items-center wpxdev:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="wpxdev:size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-sm wpxdev:py-1.5 wpxdev:pr-2 wpxdev:pl-8 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:data-[disabled]:pointer-events-none wpxdev:data-[disabled]:opacity-50 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="wpxdev:pointer-events-none wpxdev:absolute wpxdev:left-2 wpxdev:flex wpxdev:size-3.5 wpxdev:items-center wpxdev:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="wpxdev:size-2 wpxdev:fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "wpxdev:px-2 wpxdev:py-1.5 wpxdev:text-sm wpxdev:font-medium wpxdev:text-foreground wpxdev:data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("wpxdev:-mx-1 wpxdev:my-1 wpxdev:h-px wpxdev:bg-border", className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "wpxdev:ml-auto wpxdev:text-xs wpxdev:tracking-widest wpxdev:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
