import * as React from "react"

import { cn } from "#lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="wpxdev:relative wpxdev:w-full wpxdev:overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("wpxdev:w-full wpxdev:caption-bottom wpxdev:text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("wpxdev:[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("wpxdev:[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "wpxdev:border-t wpxdev:bg-muted/50 wpxdev:font-medium wpxdev:[&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "wpxdev:border-b wpxdev:transition-colors wpxdev:hover:bg-muted/50 wpxdev:has-aria-expanded:bg-muted/50 wpxdev:data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "wpxdev:h-10 wpxdev:px-2 wpxdev:text-left wpxdev:align-middle wpxdev:font-medium wpxdev:whitespace-nowrap wpxdev:text-foreground wpxdev:[&:has([role=checkbox])]:pr-0 wpxdev:[&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "wpxdev:p-2 wpxdev:align-middle wpxdev:whitespace-nowrap wpxdev:[&:has([role=checkbox])]:pr-0 wpxdev:[&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("wpxdev:mt-4 wpxdev:text-sm wpxdev:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
