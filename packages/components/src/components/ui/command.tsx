import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "#lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "#components/ui/dialog"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "wpxdev:flex wpxdev:h-full wpxdev:w-full wpxdev:flex-col wpxdev:overflow-hidden wpxdev:rounded-md wpxdev:bg-popover wpxdev:text-popover-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="wpxdev:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("wpxdev:overflow-hidden wpxdev:p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="wpxdev:**:data-[slot=command-input-wrapper]:h-12 wpxdev:[&_[cmdk-group-heading]]:px-2 wpxdev:[&_[cmdk-group-heading]]:font-medium wpxdev:[&_[cmdk-group-heading]]:text-muted-foreground wpxdev:[&_[cmdk-group]]:px-2 wpxdev:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 wpxdev:[&_[cmdk-input-wrapper]_svg]:h-5 wpxdev:[&_[cmdk-input-wrapper]_svg]:w-5 wpxdev:[&_[cmdk-input]]:h-12 wpxdev:[&_[cmdk-item]]:px-2 wpxdev:[&_[cmdk-item]]:py-3 wpxdev:[&_[cmdk-item]_svg]:h-5 wpxdev:[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="wpxdev:flex wpxdev:h-9 wpxdev:items-center wpxdev:gap-2 wpxdev:border-b wpxdev:px-3"
    >
      <SearchIcon className="wpxdev:size-4 wpxdev:shrink-0 wpxdev:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "wpxdev:flex wpxdev:h-10 wpxdev:w-full wpxdev:rounded-md wpxdev:bg-transparent wpxdev:py-3 wpxdev:text-sm wpxdev:outline-hidden wpxdev:placeholder:text-muted-foreground wpxdev:disabled:cursor-not-allowed wpxdev:disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "wpxdev:max-h-[300px] wpxdev:scroll-py-1 wpxdev:overflow-x-hidden wpxdev:overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="wpxdev:py-6 wpxdev:text-center wpxdev:text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "wpxdev:overflow-hidden wpxdev:p-1 wpxdev:text-foreground wpxdev:[&_[cmdk-group-heading]]:px-2 wpxdev:[&_[cmdk-group-heading]]:py-1.5 wpxdev:[&_[cmdk-group-heading]]:text-xs wpxdev:[&_[cmdk-group-heading]]:font-medium wpxdev:[&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("wpxdev:-mx-1 wpxdev:h-px wpxdev:bg-border", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-sm wpxdev:px-2 wpxdev:py-1.5 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:data-[disabled=true]:pointer-events-none wpxdev:data-[disabled=true]:opacity-50 wpxdev:data-[selected=true]:bg-accent wpxdev:data-[selected=true]:text-accent-foreground wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4 wpxdev:[&_svg:not([class*=text-])]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "wpxdev:ml-auto wpxdev:text-xs wpxdev:tracking-widest wpxdev:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
