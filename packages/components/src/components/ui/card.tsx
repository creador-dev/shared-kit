import * as React from "react"

import { cn } from "#lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "wpxdev:flex wpxdev:flex-col wpxdev:gap-6 wpxdev:rounded-xl wpxdev:border wpxdev:bg-card wpxdev:py-6 wpxdev:text-card-foreground wpxdev:shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "wpxdev:@container/card-header wpxdev:grid wpxdev:auto-rows-min wpxdev:grid-rows-[auto_auto] wpxdev:items-start wpxdev:gap-2 wpxdev:px-6 wpxdev:has-data-[slot=card-action]:grid-cols-[1fr_auto] wpxdev:[.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("wpxdev:leading-none wpxdev:font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("wpxdev:text-sm wpxdev:text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "wpxdev:col-start-2 wpxdev:row-span-2 wpxdev:row-start-1 wpxdev:self-start wpxdev:justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("wpxdev:px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("wpxdev:flex wpxdev:items-center wpxdev:px-6 wpxdev:[.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
