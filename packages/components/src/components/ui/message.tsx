import * as React from "react"

import { cn } from "#lib/utils"

function MessageGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-group"
      className={cn("wpxdev:flex wpxdev:min-w-0 wpxdev:flex-col wpxdev:gap-2", className)}
      {...props}
    />
  )
}

function Message({
  className,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & { align?: "start" | "end" }) {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        "wpxdev:group/message wpxdev:relative wpxdev:flex wpxdev:w-full wpxdev:min-w-0 wpxdev:gap-2 wpxdev:text-sm wpxdev:data-[align=end]:flex-row-reverse",
        className
      )}
      {...props}
    />
  )
}

function MessageAvatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-avatar"
      className={cn(
        "wpxdev:flex wpxdev:w-fit wpxdev:min-w-8 wpxdev:shrink-0 wpxdev:items-center wpxdev:justify-center wpxdev:self-end wpxdev:overflow-hidden wpxdev:rounded-full wpxdev:bg-muted wpxdev:group-has-data-[slot=message-footer]/message:-translate-y-8",
        className
      )}
      {...props}
    />
  )
}

function MessageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-content"
      className={cn(
        "wpxdev:flex wpxdev:w-full wpxdev:min-w-0 wpxdev:flex-col wpxdev:gap-2.5 wpxdev:wrap-break-word wpxdev:group-data-[align=end]/message:*:data-slot:self-end",
        className
      )}
      {...props}
    />
  )
}

function MessageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-header"
      className={cn(
        "wpxdev:flex wpxdev:max-w-full wpxdev:min-w-0 wpxdev:items-center wpxdev:px-3 wpxdev:text-xs wpxdev:font-medium wpxdev:text-muted-foreground wpxdev:group-has-data-[variant=ghost]/message:px-0",
        className
      )}
      {...props}
    />
  )
}

function MessageFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-footer"
      className={cn(
        "wpxdev:flex wpxdev:max-w-full wpxdev:min-w-0 wpxdev:items-center wpxdev:px-3 wpxdev:text-xs wpxdev:font-medium wpxdev:text-muted-foreground wpxdev:group-has-data-[variant=ghost]/message:px-0 wpxdev:group-data-[align=end]/message:justify-end",
        className
      )}
      {...props}
    />
  )
}

export {
  MessageGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
}
