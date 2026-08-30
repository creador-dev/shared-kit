"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "#lib/utils"
import { Button } from "#components/ui/button"
import { Input } from "#components/ui/input"
import { Textarea } from "#components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "wpxdev:group/input-group wpxdev:relative wpxdev:flex wpxdev:w-full wpxdev:items-center wpxdev:rounded-md wpxdev:border wpxdev:border-input wpxdev:shadow-xs wpxdev:transition-[color,box-shadow] wpxdev:outline-none wpxdev:dark:bg-input/30",
        "wpxdev:h-9 wpxdev:min-w-0 wpxdev:has-[>textarea]:h-auto",

        // Variants based on alignment.
        "wpxdev:has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "wpxdev:has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "wpxdev:has-[>[data-align=block-start]]:h-auto wpxdev:has-[>[data-align=block-start]]:flex-col wpxdev:has-[>[data-align=block-start]]:[&>input]:pb-3",
        "wpxdev:has-[>[data-align=block-end]]:h-auto wpxdev:has-[>[data-align=block-end]]:flex-col wpxdev:has-[>[data-align=block-end]]:[&>input]:pt-3",

        // Focus state.
        "wpxdev:has-[[data-slot=input-group-control]:focus-visible]:border-ring wpxdev:has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] wpxdev:has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",

        // Error state.
        "wpxdev:has-[[data-slot][aria-invalid=true]]:border-destructive wpxdev:has-[[data-slot][aria-invalid=true]]:ring-destructive/20 wpxdev:dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",

        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "wpxdev:flex wpxdev:h-auto wpxdev:cursor-text wpxdev:items-center wpxdev:justify-center wpxdev:gap-2 wpxdev:py-1.5 wpxdev:text-sm wpxdev:font-medium wpxdev:text-muted-foreground wpxdev:select-none wpxdev:group-data-[disabled=true]/input-group:opacity-50 wpxdev:[&>kbd]:rounded-[calc(var(--wpxdev-radius-md)-5px)] wpxdev:[&>svg:not([class*=size-])]:size-4",
  {
    variants: {
      align: {
        "inline-start":
          "wpxdev:order-first wpxdev:pl-3 wpxdev:has-[>button]:ml-[-0.45rem] wpxdev:has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "wpxdev:order-last wpxdev:pr-3 wpxdev:has-[>button]:mr-[-0.45rem] wpxdev:has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "wpxdev:order-first wpxdev:w-full wpxdev:justify-start wpxdev:px-3 wpxdev:pt-3 wpxdev:group-has-[>input]/input-group:pt-2.5 wpxdev:[.border-b]:pb-3",
        "block-end":
          "wpxdev:order-last wpxdev:w-full wpxdev:justify-start wpxdev:px-3 wpxdev:pb-3 wpxdev:group-has-[>input]/input-group:pb-2.5 wpxdev:[.border-t]:pt-3",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "wpxdev:flex wpxdev:items-center wpxdev:gap-2 wpxdev:text-sm wpxdev:shadow-none",
  {
    variants: {
      size: {
        xs: "wpxdev:h-6 wpxdev:gap-1 wpxdev:rounded-[calc(var(--wpxdev-radius-md)-5px)] wpxdev:px-2 wpxdev:has-[>svg]:px-2 wpxdev:[&>svg:not([class*=size-])]:size-3.5",
        sm: "wpxdev:h-8 wpxdev:gap-1.5 wpxdev:rounded-md wpxdev:px-2.5 wpxdev:has-[>svg]:px-2.5",
        "icon-xs":
          "wpxdev:size-6 wpxdev:rounded-[calc(var(--wpxdev-radius-md)-5px)] wpxdev:p-0 wpxdev:has-[>svg]:p-0",
        "icon-sm": "wpxdev:size-8 wpxdev:p-0 wpxdev:has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "wpxdev:flex wpxdev:items-center wpxdev:gap-2 wpxdev:text-sm wpxdev:text-muted-foreground wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "wpxdev:flex-1 wpxdev:rounded-none wpxdev:border-0 wpxdev:bg-transparent wpxdev:shadow-none wpxdev:focus-visible:ring-0 wpxdev:dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "wpxdev:flex-1 wpxdev:resize-none wpxdev:rounded-none wpxdev:border-0 wpxdev:bg-transparent wpxdev:py-3 wpxdev:shadow-none wpxdev:focus-visible:ring-0 wpxdev:dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
