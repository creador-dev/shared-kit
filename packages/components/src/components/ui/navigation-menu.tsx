import * as React from "react"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "wpxdev:group/navigation-menu wpxdev:relative wpxdev:flex wpxdev:max-w-max wpxdev:flex-1 wpxdev:items-center wpxdev:justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "wpxdev:group wpxdev:flex wpxdev:flex-1 wpxdev:list-none wpxdev:items-center wpxdev:justify-center wpxdev:gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("wpxdev:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "wpxdev:group wpxdev:inline-flex wpxdev:h-9 wpxdev:w-max wpxdev:items-center wpxdev:justify-center wpxdev:rounded-md wpxdev:bg-background wpxdev:px-4 wpxdev:py-2 wpxdev:text-sm wpxdev:font-medium wpxdev:transition-[color,box-shadow] wpxdev:outline-none wpxdev:hover:bg-accent wpxdev:hover:text-accent-foreground wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:focus-visible:outline-1 wpxdev:disabled:pointer-events-none wpxdev:disabled:opacity-50 wpxdev:data-[state=open]:bg-accent/50 wpxdev:data-[state=open]:text-accent-foreground wpxdev:data-[state=open]:hover:bg-accent wpxdev:data-[state=open]:focus:bg-accent"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "wpxdev:group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="wpxdev:relative wpxdev:top-[1px] wpxdev:ml-1 wpxdev:size-3 wpxdev:transition wpxdev:duration-300 wpxdev:group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "wpxdev:top-0 wpxdev:left-0 wpxdev:w-full wpxdev:p-2 wpxdev:pr-2.5 wpxdev:data-[motion=from-end]:slide-in-from-right-52 wpxdev:data-[motion=from-start]:slide-in-from-left-52 wpxdev:data-[motion=to-end]:slide-out-to-right-52 wpxdev:data-[motion=to-start]:slide-out-to-left-52 wpxdev:data-[motion^=from-]:animate-in wpxdev:data-[motion^=from-]:fade-in wpxdev:data-[motion^=to-]:animate-out wpxdev:data-[motion^=to-]:fade-out wpxdev:md:absolute wpxdev:md:w-auto",
        "wpxdev:group-data-[viewport=false]/navigation-menu:top-full wpxdev:group-data-[viewport=false]/navigation-menu:mt-1.5 wpxdev:group-data-[viewport=false]/navigation-menu:overflow-hidden wpxdev:group-data-[viewport=false]/navigation-menu:rounded-md wpxdev:group-data-[viewport=false]/navigation-menu:border wpxdev:group-data-[viewport=false]/navigation-menu:bg-popover wpxdev:group-data-[viewport=false]/navigation-menu:text-popover-foreground wpxdev:group-data-[viewport=false]/navigation-menu:shadow wpxdev:group-data-[viewport=false]/navigation-menu:duration-200 wpxdev:**:data-[slot=navigation-menu-link]:focus:ring-0 wpxdev:**:data-[slot=navigation-menu-link]:focus:outline-none wpxdev:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out wpxdev:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 wpxdev:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 wpxdev:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in wpxdev:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 wpxdev:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "wpxdev:absolute wpxdev:top-full wpxdev:left-0 wpxdev:isolate wpxdev:z-50 wpxdev:flex wpxdev:justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "wpxdev:origin-top-center wpxdev:relative wpxdev:mt-1.5 wpxdev:h-[var(--radix-navigation-menu-viewport-height)] wpxdev:w-full wpxdev:overflow-hidden wpxdev:rounded-md wpxdev:border wpxdev:bg-popover wpxdev:text-popover-foreground wpxdev:shadow wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:zoom-out-95 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:zoom-in-90 wpxdev:md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "wpxdev:flex wpxdev:flex-col wpxdev:gap-1 wpxdev:rounded-sm wpxdev:p-2 wpxdev:text-sm wpxdev:transition-all wpxdev:outline-none wpxdev:hover:bg-accent wpxdev:hover:text-accent-foreground wpxdev:focus:bg-accent wpxdev:focus:text-accent-foreground wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:focus-visible:outline-1 wpxdev:data-[active=true]:bg-accent/50 wpxdev:data-[active=true]:text-accent-foreground wpxdev:data-[active=true]:hover:bg-accent wpxdev:data-[active=true]:focus:bg-accent wpxdev:[&_svg:not([class*=size-])]:size-4 wpxdev:[&_svg:not([class*=text-])]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "wpxdev:top-full wpxdev:z-[1] wpxdev:flex wpxdev:h-1.5 wpxdev:items-end wpxdev:justify-center wpxdev:overflow-hidden wpxdev:data-[state=hidden]:animate-out wpxdev:data-[state=hidden]:fade-out wpxdev:data-[state=visible]:animate-in wpxdev:data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="wpxdev:relative wpxdev:top-[60%] wpxdev:h-2 wpxdev:w-2 wpxdev:rotate-45 wpxdev:rounded-tl-sm wpxdev:bg-border wpxdev:shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
