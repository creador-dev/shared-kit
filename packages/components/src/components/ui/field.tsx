import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "#lib/utils"
import { Label } from "#components/ui/label"
import { Separator } from "#components/ui/separator"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "wpxdev:flex wpxdev:flex-col wpxdev:gap-6",
        "wpxdev:has-[>[data-slot=checkbox-group]]:gap-3 wpxdev:has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "wpxdev:mb-3 wpxdev:font-medium",
        "wpxdev:data-[variant=legend]:text-base",
        "wpxdev:data-[variant=label]:text-sm",
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "wpxdev:group/field-group wpxdev:@container/field-group wpxdev:flex wpxdev:w-full wpxdev:flex-col wpxdev:gap-7 wpxdev:data-[slot=checkbox-group]:gap-3 wpxdev:[&>[data-slot=field-group]]:gap-4",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "wpxdev:group/field wpxdev:flex wpxdev:w-full wpxdev:gap-3 wpxdev:data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "wpxdev:group/field-content wpxdev:flex wpxdev:flex-1 wpxdev:flex-col wpxdev:gap-1.5 wpxdev:leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "wpxdev:group/field-label wpxdev:peer/field-label wpxdev:flex wpxdev:w-fit wpxdev:gap-2 wpxdev:leading-snug wpxdev:group-data-[disabled=true]/field:opacity-50",
        "wpxdev:has-[>[data-slot=field]]:w-full wpxdev:has-[>[data-slot=field]]:flex-col wpxdev:has-[>[data-slot=field]]:rounded-md wpxdev:has-[>[data-slot=field]]:border wpxdev:[&>*]:data-[slot=field]:p-4",
        "wpxdev:has-data-[state=checked]:border-primary wpxdev:has-data-[state=checked]:bg-primary/5 wpxdev:dark:has-data-[state=checked]:bg-primary/10",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "wpxdev:flex wpxdev:w-fit wpxdev:items-center wpxdev:gap-2 wpxdev:text-sm wpxdev:leading-snug wpxdev:font-medium wpxdev:group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "wpxdev:text-sm wpxdev:leading-normal wpxdev:font-normal wpxdev:text-muted-foreground wpxdev:group-has-[[data-orientation=horizontal]]/field:text-balance",
        "wpxdev:last:mt-0 wpxdev:nth-last-2:-mt-1 wpxdev:[[data-variant=legend]+&]:-mt-1.5",
        "wpxdev:[&>a]:underline wpxdev:[&>a]:underline-offset-4 wpxdev:[&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "wpxdev:relative wpxdev:-my-2 wpxdev:h-5 wpxdev:text-sm wpxdev:group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="wpxdev:absolute wpxdev:inset-0 wpxdev:top-1/2" />
      {children && (
        <span
          className="wpxdev:relative wpxdev:mx-auto wpxdev:block wpxdev:w-fit wpxdev:bg-background wpxdev:px-2 wpxdev:text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="wpxdev:ml-4 wpxdev:flex wpxdev:list-disc wpxdev:flex-col wpxdev:gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("wpxdev:text-sm wpxdev:font-normal wpxdev:text-destructive", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
