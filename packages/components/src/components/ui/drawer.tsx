"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "#lib/utils"

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "wpxdev:fixed wpxdev:inset-0 wpxdev:z-50 wpxdev:bg-black/50 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "wpxdev:group/drawer-content wpxdev:fixed wpxdev:z-50 wpxdev:flex wpxdev:h-auto wpxdev:flex-col wpxdev:bg-background",
          "wpxdev:data-[vaul-drawer-direction=top]:inset-x-0 wpxdev:data-[vaul-drawer-direction=top]:top-0 wpxdev:data-[vaul-drawer-direction=top]:mb-24 wpxdev:data-[vaul-drawer-direction=top]:max-h-[80vh] wpxdev:data-[vaul-drawer-direction=top]:rounded-b-lg wpxdev:data-[vaul-drawer-direction=top]:border-b",
          "wpxdev:data-[vaul-drawer-direction=bottom]:inset-x-0 wpxdev:data-[vaul-drawer-direction=bottom]:bottom-0 wpxdev:data-[vaul-drawer-direction=bottom]:mt-24 wpxdev:data-[vaul-drawer-direction=bottom]:max-h-[80vh] wpxdev:data-[vaul-drawer-direction=bottom]:rounded-t-lg wpxdev:data-[vaul-drawer-direction=bottom]:border-t",
          "wpxdev:data-[vaul-drawer-direction=right]:inset-y-0 wpxdev:data-[vaul-drawer-direction=right]:right-0 wpxdev:data-[vaul-drawer-direction=right]:w-3/4 wpxdev:data-[vaul-drawer-direction=right]:border-l wpxdev:data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "wpxdev:data-[vaul-drawer-direction=left]:inset-y-0 wpxdev:data-[vaul-drawer-direction=left]:left-0 wpxdev:data-[vaul-drawer-direction=left]:w-3/4 wpxdev:data-[vaul-drawer-direction=left]:border-r wpxdev:data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="wpxdev:mx-auto wpxdev:mt-4 wpxdev:hidden wpxdev:h-2 wpxdev:w-[100px] wpxdev:shrink-0 wpxdev:rounded-full wpxdev:bg-muted wpxdev:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "wpxdev:flex wpxdev:flex-col wpxdev:gap-0.5 wpxdev:p-4 wpxdev:group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center wpxdev:group-data-[vaul-drawer-direction=top]/drawer-content:text-center wpxdev:md:gap-1.5 wpxdev:md:text-left",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("wpxdev:mt-auto wpxdev:flex wpxdev:flex-col wpxdev:gap-2 wpxdev:p-4", className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("wpxdev:font-semibold wpxdev:text-foreground", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("wpxdev:text-sm wpxdev:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
