import * as React from "react"
import { XIcon } from "lucide-react"
import { Dialog as SheetPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "wpxdev:fixed wpxdev:inset-0 wpxdev:z-50 wpxdev:bg-black/50 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "wpxdev:fixed wpxdev:z-50 wpxdev:flex wpxdev:flex-col wpxdev:gap-4 wpxdev:bg-background wpxdev:shadow-lg wpxdev:transition wpxdev:ease-in-out wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:duration-300 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:duration-500",
          side === "right" &&
            "wpxdev:inset-y-0 wpxdev:right-0 wpxdev:h-full wpxdev:w-3/4 wpxdev:border-l wpxdev:data-[state=closed]:slide-out-to-right wpxdev:data-[state=open]:slide-in-from-right wpxdev:sm:max-w-sm",
          side === "left" &&
            "wpxdev:inset-y-0 wpxdev:left-0 wpxdev:h-full wpxdev:w-3/4 wpxdev:border-r wpxdev:data-[state=closed]:slide-out-to-left wpxdev:data-[state=open]:slide-in-from-left wpxdev:sm:max-w-sm",
          side === "top" &&
            "wpxdev:inset-x-0 wpxdev:top-0 wpxdev:h-auto wpxdev:border-b wpxdev:data-[state=closed]:slide-out-to-top wpxdev:data-[state=open]:slide-in-from-top",
          side === "bottom" &&
            "wpxdev:inset-x-0 wpxdev:bottom-0 wpxdev:h-auto wpxdev:border-t wpxdev:data-[state=closed]:slide-out-to-bottom wpxdev:data-[state=open]:slide-in-from-bottom",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close className="wpxdev:absolute wpxdev:top-4 wpxdev:right-4 wpxdev:rounded-xs wpxdev:opacity-70 wpxdev:ring-offset-background wpxdev:transition-opacity wpxdev:hover:opacity-100 wpxdev:focus:ring-2 wpxdev:focus:ring-ring wpxdev:focus:ring-offset-2 wpxdev:focus:outline-hidden wpxdev:disabled:pointer-events-none wpxdev:data-[state=open]:bg-secondary">
            <XIcon className="wpxdev:size-4" />
            <span className="wpxdev:sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("wpxdev:flex wpxdev:flex-col wpxdev:gap-1.5 wpxdev:p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("wpxdev:mt-auto wpxdev:flex wpxdev:flex-col wpxdev:gap-2 wpxdev:p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("wpxdev:font-semibold wpxdev:text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("wpxdev:text-sm wpxdev:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
