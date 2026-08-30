import * as React from "react"
import {
  MessageScroller as MessageScrollerPrimitive,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from "@shadcn/react/message-scroller"
import { ArrowDownIcon } from "lucide-react"

import { cn } from "#lib/utils"
import { Button } from "#components/ui/button"

function MessageScrollerProvider(
  props: React.ComponentProps<typeof MessageScrollerPrimitive.Provider>
) {
  return <MessageScrollerPrimitive.Provider {...props} />
}

function MessageScroller({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Root>) {
  return (
    <MessageScrollerPrimitive.Root
      data-slot="message-scroller"
      className={cn(
        "wpxdev:group/message-scroller wpxdev:relative wpxdev:flex wpxdev:size-full wpxdev:min-h-0 wpxdev:flex-col wpxdev:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerViewport({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Viewport>) {
  return (
    <MessageScrollerPrimitive.Viewport
      data-slot="message-scroller-viewport"
      className={cn(
        "wpxdev:size-full wpxdev:min-h-0 wpxdev:min-w-0 wpxdev:scroll-fade-b wpxdev:scrollbar-thin wpxdev:scrollbar-gutter-stable wpxdev:overflow-y-auto wpxdev:overscroll-contain wpxdev:contain-content wpxdev:data-autoscrolling:scrollbar-none",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerContent({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Content>) {
  return (
    <MessageScrollerPrimitive.Content
      data-slot="message-scroller-content"
      className={cn("wpxdev:flex wpxdev:h-max wpxdev:min-h-full wpxdev:flex-col wpxdev:gap-8", className)}
      {...props}
    />
  )
}

function MessageScrollerItem({
  className,
  scrollAnchor = false,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Item>) {
  return (
    <MessageScrollerPrimitive.Item
      data-slot="message-scroller-item"
      scrollAnchor={scrollAnchor}
      className={cn(
        "wpxdev:min-w-0 wpxdev:shrink-0 wpxdev:[contain-intrinsic-size:auto_10rem] wpxdev:[content-visibility:auto]",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerButton({
  direction = "end",
  className,
  children,
  render,
  variant = "secondary",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Button> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <MessageScrollerPrimitive.Button
      data-slot="message-scroller-button"
      data-direction={direction}
      data-variant={variant}
      data-size={size}
      direction={direction}
      className={cn(
        "wpxdev:absolute wpxdev:inset-s-1/2 wpxdev:-translate-x-1/2 wpxdev:border-border wpxdev:bg-background wpxdev:text-foreground wpxdev:transition-[translate,scale,opacity] wpxdev:duration-200 wpxdev:hover:bg-muted wpxdev:hover:text-foreground wpxdev:data-[active=false]:pointer-events-none wpxdev:data-[active=false]:scale-95 wpxdev:data-[active=false]:opacity-0 wpxdev:data-[active=false]:duration-400 wpxdev:data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] wpxdev:data-[active=true]:translate-y-0 wpxdev:data-[active=true]:scale-100 wpxdev:data-[active=true]:opacity-100 wpxdev:data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] wpxdev:data-[direction=end]:bottom-4 wpxdev:data-[direction=end]:data-[active=false]:translate-y-full wpxdev:data-[direction=start]:top-4 wpxdev:data-[direction=start]:data-[active=false]:-translate-y-full wpxdev:rtl:translate-x-1/2 wpxdev:data-[direction=start]:[&_svg]:rotate-180",
        className
      )}
      render={render ?? <Button variant={variant} size={size} />}
      {...props}
    >
      {children ?? (
        <>
          <ArrowDownIcon />
          <span className="wpxdev:sr-only">
            {direction === "end" ? "Scroll to end" : "Scroll to start"}
          </span>
        </>
      )}
    </MessageScrollerPrimitive.Button>
  )
}

export {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
}
