import * as React from "react"
import { XIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "#lib/utils"
import { Button } from "#components/ui/button"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "wpxdev:fixed wpxdev:inset-0 wpxdev:z-50 wpxdev:bg-black/50 wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "wpxdev:fixed wpxdev:top-[50%] wpxdev:left-[50%] wpxdev:z-50 wpxdev:grid wpxdev:w-full wpxdev:max-w-[calc(100%-2rem)] wpxdev:translate-x-[-50%] wpxdev:translate-y-[-50%] wpxdev:gap-4 wpxdev:rounded-lg wpxdev:border wpxdev:bg-background wpxdev:p-6 wpxdev:shadow-lg wpxdev:duration-200 wpxdev:outline-none wpxdev:data-[state=closed]:animate-out wpxdev:data-[state=closed]:fade-out-0 wpxdev:data-[state=closed]:zoom-out-95 wpxdev:data-[state=open]:animate-in wpxdev:data-[state=open]:fade-in-0 wpxdev:data-[state=open]:zoom-in-95 wpxdev:sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="wpxdev:absolute wpxdev:top-4 wpxdev:right-4 wpxdev:rounded-xs wpxdev:opacity-70 wpxdev:ring-offset-background wpxdev:transition-opacity wpxdev:hover:opacity-100 wpxdev:focus:ring-2 wpxdev:focus:ring-ring wpxdev:focus:ring-offset-2 wpxdev:focus:outline-hidden wpxdev:disabled:pointer-events-none wpxdev:data-[state=open]:bg-accent wpxdev:data-[state=open]:text-muted-foreground wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4"
          >
            <XIcon />
            <span className="wpxdev:sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("wpxdev:flex wpxdev:flex-col wpxdev:gap-2 wpxdev:text-center wpxdev:sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "wpxdev:flex wpxdev:flex-col-reverse wpxdev:gap-2 wpxdev:sm:flex-row wpxdev:sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("wpxdev:text-lg wpxdev:leading-none wpxdev:font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("wpxdev:text-sm wpxdev:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
