import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker"

import { cn } from "#lib/utils"
import { Button, buttonVariants } from "#components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "wpxdev:group/calendar wpxdev:bg-background wpxdev:p-3 wpxdev:[--wpxdev-cell-size:--spacing(8)] wpxdev:[[data-slot=card-content]_&]:bg-transparent wpxdev:[[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("wpxdev:w-fit", defaultClassNames.root),
        months: cn(
          "wpxdev:relative wpxdev:flex wpxdev:flex-col wpxdev:gap-4 wpxdev:md:flex-row",
          defaultClassNames.months
        ),
        month: cn("wpxdev:flex wpxdev:w-full wpxdev:flex-col wpxdev:gap-4", defaultClassNames.month),
        nav: cn(
          "wpxdev:absolute wpxdev:inset-x-0 wpxdev:top-0 wpxdev:flex wpxdev:w-full wpxdev:items-center wpxdev:justify-between wpxdev:gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "wpxdev:size-(--wpxdev-cell-size) wpxdev:p-0 wpxdev:select-none wpxdev:aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "wpxdev:size-(--wpxdev-cell-size) wpxdev:p-0 wpxdev:select-none wpxdev:aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "wpxdev:flex wpxdev:h-(--wpxdev-cell-size) wpxdev:w-full wpxdev:items-center wpxdev:justify-center wpxdev:px-(--wpxdev-cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "wpxdev:flex wpxdev:h-(--wpxdev-cell-size) wpxdev:w-full wpxdev:items-center wpxdev:justify-center wpxdev:gap-1.5 wpxdev:text-sm wpxdev:font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "wpxdev:relative wpxdev:rounded-md wpxdev:border wpxdev:border-input wpxdev:shadow-xs wpxdev:has-focus:border-ring wpxdev:has-focus:ring-[3px] wpxdev:has-focus:ring-ring/50",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "wpxdev:absolute wpxdev:inset-0 wpxdev:bg-popover wpxdev:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "wpxdev:font-medium wpxdev:select-none",
          captionLayout === "label"
            ? "wpxdev:text-sm"
            : "wpxdev:flex wpxdev:h-8 wpxdev:items-center wpxdev:gap-1 wpxdev:rounded-md wpxdev:pr-1 wpxdev:pl-2 wpxdev:text-sm wpxdev:[&>svg]:size-3.5 wpxdev:[&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("wpxdev:w-full wpxdev:border-collapse", defaultClassNames.month_grid),
        weekdays: cn("wpxdev:flex", defaultClassNames.weekdays),
        weekday: cn(
          "wpxdev:flex-1 wpxdev:rounded-md wpxdev:text-[0.8rem] wpxdev:font-normal wpxdev:text-muted-foreground wpxdev:select-none",
          defaultClassNames.weekday
        ),
        week: cn("wpxdev:mt-2 wpxdev:flex wpxdev:w-full", defaultClassNames.week),
        week_number_header: cn(
          "wpxdev:w-(--wpxdev-cell-size) wpxdev:select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "wpxdev:text-[0.8rem] wpxdev:text-muted-foreground wpxdev:select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "wpxdev:group/day wpxdev:relative wpxdev:aspect-square wpxdev:h-full wpxdev:w-full wpxdev:p-0 wpxdev:text-center wpxdev:select-none wpxdev:[&:last-child[data-selected=true]_button]:rounded-r-md",
          props.showWeekNumber
            ? "wpxdev:[&:nth-child(2)[data-selected=true]_button]:rounded-l-md"
            : "wpxdev:[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "wpxdev:rounded-l-md wpxdev:bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("wpxdev:rounded-none", defaultClassNames.range_middle),
        range_end: cn("wpxdev:rounded-r-md wpxdev:bg-accent", defaultClassNames.range_end),
        today: cn(
          "wpxdev:rounded-md wpxdev:bg-accent wpxdev:text-accent-foreground wpxdev:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "wpxdev:text-muted-foreground wpxdev:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "wpxdev:text-muted-foreground wpxdev:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("wpxdev:invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("wpxdev:size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("wpxdev:size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("wpxdev:size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="wpxdev:flex wpxdev:size-(--wpxdev-cell-size) wpxdev:items-center wpxdev:justify-center wpxdev:text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "wpxdev:flex wpxdev:aspect-square wpxdev:size-auto wpxdev:w-full wpxdev:min-w-(--wpxdev-cell-size) wpxdev:flex-col wpxdev:gap-1 wpxdev:leading-none wpxdev:font-normal wpxdev:group-data-[focused=true]/day:relative wpxdev:group-data-[focused=true]/day:z-10 wpxdev:group-data-[focused=true]/day:border-ring wpxdev:group-data-[focused=true]/day:ring-[3px] wpxdev:group-data-[focused=true]/day:ring-ring/50 wpxdev:data-[range-end=true]:rounded-md wpxdev:data-[range-end=true]:rounded-r-md wpxdev:data-[range-end=true]:bg-primary wpxdev:data-[range-end=true]:text-primary-foreground wpxdev:data-[range-middle=true]:rounded-none wpxdev:data-[range-middle=true]:bg-accent wpxdev:data-[range-middle=true]:text-accent-foreground wpxdev:data-[range-start=true]:rounded-md wpxdev:data-[range-start=true]:rounded-l-md wpxdev:data-[range-start=true]:bg-primary wpxdev:data-[range-start=true]:text-primary-foreground wpxdev:data-[selected-single=true]:bg-primary wpxdev:data-[selected-single=true]:text-primary-foreground wpxdev:dark:hover:text-accent-foreground wpxdev:[&>span]:text-xs wpxdev:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
