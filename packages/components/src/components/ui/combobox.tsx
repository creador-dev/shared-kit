import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react"

import { cn } from "#lib/utils"
import { Button } from "#components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "#components/ui/input-group"

const Combobox = ComboboxPrimitive.Root

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn("wpxdev:[&_svg:not([class*=size-])]:size-4", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon
        data-slot="combobox-trigger-icon"
        className="wpxdev:pointer-events-none wpxdev:size-4 wpxdev:text-muted-foreground"
      />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <XIcon className="wpxdev:pointer-events-none" />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean
  showClear?: boolean
}) {
  return (
    <InputGroup className={cn("wpxdev:w-auto", className)}>
      <ComboboxPrimitive.Input
        render={<InputGroupInput disabled={disabled} />}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            asChild
            data-slot="input-group-button"
            className="wpxdev:group-has-data-[slot=combobox-clear]/input-group:hidden wpxdev:data-pressed:bg-transparent"
            disabled={disabled}
          >
            <ComboboxTrigger />
          </InputGroupButton>
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  )
}

function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="wpxdev:isolate wpxdev:z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn(
            "wpxdev:group/combobox-content wpxdev:relative wpxdev:max-h-96 wpxdev:w-(--anchor-width) wpxdev:max-w-(--available-width) wpxdev:min-w-[calc(var(--anchor-width)+--spacing(7))] wpxdev:origin-(--transform-origin) wpxdev:overflow-hidden wpxdev:rounded-md wpxdev:bg-popover wpxdev:text-popover-foreground wpxdev:shadow-md wpxdev:ring-1 wpxdev:ring-foreground/10 wpxdev:duration-100 wpxdev:data-[chips=true]:min-w-(--anchor-width) wpxdev:data-[side=bottom]:slide-in-from-top-2 wpxdev:data-[side=left]:slide-in-from-right-2 wpxdev:data-[side=right]:slide-in-from-left-2 wpxdev:data-[side=top]:slide-in-from-bottom-2 wpxdev:*:data-[slot=input-group]:m-1 wpxdev:*:data-[slot=input-group]:mb-0 wpxdev:*:data-[slot=input-group]:h-8 wpxdev:*:data-[slot=input-group]:border-input/30 wpxdev:*:data-[slot=input-group]:bg-input/30 wpxdev:*:data-[slot=input-group]:shadow-none wpxdev:data-open:animate-in wpxdev:data-open:fade-in-0 wpxdev:data-open:zoom-in-95 wpxdev:data-closed:animate-out wpxdev:data-closed:fade-out-0 wpxdev:data-closed:zoom-out-95",
            className
          )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "wpxdev:max-h-[min(calc(--spacing(96)---spacing(9)),calc(var(--available-height)---spacing(9)))] wpxdev:scroll-py-1 wpxdev:overflow-y-auto wpxdev:p-1 wpxdev:data-empty:p-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:w-full wpxdev:cursor-default wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-sm wpxdev:py-1.5 wpxdev:pr-8 wpxdev:pl-2 wpxdev:text-sm wpxdev:outline-hidden wpxdev:select-none wpxdev:data-highlighted:bg-accent wpxdev:data-highlighted:text-accent-foreground wpxdev:data-[disabled]:pointer-events-none wpxdev:data-[disabled]:opacity-50 wpxdev:[&_svg]:pointer-events-none wpxdev:[&_svg]:shrink-0 wpxdev:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        data-slot="combobox-item-indicator"
        render={
          <span className="wpxdev:pointer-events-none wpxdev:absolute wpxdev:right-2 wpxdev:flex wpxdev:size-4 wpxdev:items-center wpxdev:justify-center" />
        }
      >
        <CheckIcon className="wpxdev:pointer-events-none wpxdev:size-4 wpxdev:pointer-coarse:size-5" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...props}
    />
  )
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn(
        "wpxdev:px-2 wpxdev:py-1.5 wpxdev:text-xs wpxdev:text-muted-foreground wpxdev:pointer-coarse:px-3 wpxdev:pointer-coarse:py-2 wpxdev:pointer-coarse:text-sm",
        className
      )}
      {...props}
    />
  )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "wpxdev:hidden wpxdev:w-full wpxdev:justify-center wpxdev:py-2 wpxdev:text-center wpxdev:text-sm wpxdev:text-muted-foreground wpxdev:group-data-empty/combobox-content:flex",
        className
      )}
      {...props}
    />
  )
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("wpxdev:-mx-1 wpxdev:my-1 wpxdev:h-px wpxdev:bg-border", className)}
      {...props}
    />
  )
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
  ComboboxPrimitive.Chips.Props) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        "wpxdev:flex wpxdev:min-h-9 wpxdev:flex-wrap wpxdev:items-center wpxdev:gap-1.5 wpxdev:rounded-md wpxdev:border wpxdev:border-input wpxdev:bg-transparent wpxdev:bg-clip-padding wpxdev:px-2.5 wpxdev:py-1.5 wpxdev:text-sm wpxdev:shadow-xs wpxdev:transition-[color,box-shadow] wpxdev:focus-within:border-ring wpxdev:focus-within:ring-[3px] wpxdev:focus-within:ring-ring/50 wpxdev:has-aria-invalid:border-destructive wpxdev:has-aria-invalid:ring-[3px] wpxdev:has-aria-invalid:ring-destructive/20 wpxdev:has-data-[slot=combobox-chip]:px-1.5 wpxdev:dark:bg-input/30 wpxdev:dark:has-aria-invalid:border-destructive/50 wpxdev:dark:has-aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean
}) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "wpxdev:flex wpxdev:h-[calc(--spacing(5.5))] wpxdev:w-fit wpxdev:items-center wpxdev:justify-center wpxdev:gap-1 wpxdev:rounded-sm wpxdev:bg-muted wpxdev:px-1.5 wpxdev:text-xs wpxdev:font-medium wpxdev:whitespace-nowrap wpxdev:text-foreground wpxdev:has-disabled:pointer-events-none wpxdev:has-disabled:cursor-not-allowed wpxdev:has-disabled:opacity-50 wpxdev:has-data-[slot=combobox-chip-remove]:pr-0",
        className
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-xs" />}
          className="wpxdev:-ml-1 wpxdev:opacity-50 wpxdev:hover:opacity-100"
          data-slot="combobox-chip-remove"
        >
          <XIcon className="wpxdev:pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

function ComboboxChipsInput({
  className,
  children,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn("wpxdev:min-w-16 wpxdev:flex-1 wpxdev:outline-none", className)}
      {...props}
    />
  )
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null)
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
}
