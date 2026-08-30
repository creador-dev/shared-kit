"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "wpxdev:group/tabs wpxdev:flex wpxdev:gap-2 wpxdev:data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "wpxdev:group/tabs-list wpxdev:inline-flex wpxdev:w-fit wpxdev:items-center wpxdev:justify-center wpxdev:rounded-lg wpxdev:p-[3px] wpxdev:text-muted-foreground wpxdev:group-data-[orientation=horizontal]/tabs:h-9 wpxdev:group-data-[orientation=vertical]/tabs:h-fit wpxdev:group-data-[orientation=vertical]/tabs:flex-col wpxdev:data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "wpxdev:bg-muted",
        line: "wpxdev:gap-1 wpxdev:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "wpxdev:relative wpxdev:inline-flex wpxdev:h-[calc(100%-1px)] wpxdev:flex-1 wpxdev:items-center wpxdev:justify-center wpxdev:gap-1.5 wpxdev:rounded-md wpxdev:border wpxdev:border-transparent wpxdev:px-2 wpxdev:py-1 wpxdev:text-sm wpxdev:font-medium wpxdev:whitespace-nowrap wpxdev:text-foreground/60 wpxdev:transition-all wpxdev:group-data-[orientation=vertical]/tabs:w-full wpxdev:group-data-[orientation=vertical]/tabs:justify-start wpxdev:hover:text-foreground wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:focus-visible:outline-1 wpxdev:focus-visible:outline-ring wpxdev:disabled:pointer-events-none wpxdev:disabled:opacity-50 wpxdev:group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm wpxdev:group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none wpxdev:dark:text-muted-foreground wpxdev:dark:hover:text-foreground wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
        "wpxdev:group-data-[variant=line]/tabs-list:bg-transparent wpxdev:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent wpxdev:dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent wpxdev:dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "wpxdev:data-[state=active]:bg-background wpxdev:data-[state=active]:text-foreground wpxdev:dark:data-[state=active]:border-input wpxdev:dark:data-[state=active]:bg-input/30 wpxdev:dark:data-[state=active]:text-foreground",
        "wpxdev:after:absolute wpxdev:after:bg-foreground wpxdev:after:opacity-0 wpxdev:after:transition-opacity wpxdev:group-data-[orientation=horizontal]/tabs:after:inset-x-0 wpxdev:group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] wpxdev:group-data-[orientation=horizontal]/tabs:after:h-0.5 wpxdev:group-data-[orientation=vertical]/tabs:after:inset-y-0 wpxdev:group-data-[orientation=vertical]/tabs:after:-right-1 wpxdev:group-data-[orientation=vertical]/tabs:after:w-0.5 wpxdev:group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("wpxdev:flex-1 wpxdev:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
