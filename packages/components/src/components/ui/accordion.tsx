import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "#lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("wpxdev:border-b wpxdev:last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="wpxdev:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "wpxdev:flex wpxdev:flex-1 wpxdev:items-start wpxdev:justify-between wpxdev:gap-4 wpxdev:rounded-md wpxdev:py-4 wpxdev:text-left wpxdev:text-sm wpxdev:font-medium wpxdev:transition-all wpxdev:outline-none wpxdev:hover:underline wpxdev:focus-visible:border-ring wpxdev:focus-visible:ring-[3px] wpxdev:focus-visible:ring-ring/50 wpxdev:disabled:pointer-events-none wpxdev:disabled:opacity-50 wpxdev:[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="wpxdev:pointer-events-none wpxdev:size-4 wpxdev:shrink-0 wpxdev:translate-y-0.5 wpxdev:text-muted-foreground wpxdev:transition-transform wpxdev:duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="wpxdev:overflow-hidden wpxdev:text-sm wpxdev:data-[state=closed]:animate-accordion-up wpxdev:data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("wpxdev:pt-0 wpxdev:pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
