import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "#lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("wpxdev:disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("wpxdev:flex wpxdev:items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:h-9 wpxdev:w-9 wpxdev:items-center wpxdev:justify-center wpxdev:border-y wpxdev:border-r wpxdev:border-input wpxdev:text-sm wpxdev:shadow-xs wpxdev:transition-all wpxdev:outline-none wpxdev:first:rounded-l-md wpxdev:first:border-l wpxdev:last:rounded-r-md wpxdev:aria-invalid:border-destructive wpxdev:data-[active=true]:z-10 wpxdev:data-[active=true]:border-ring wpxdev:data-[active=true]:ring-[3px] wpxdev:data-[active=true]:ring-ring/50 wpxdev:data-[active=true]:aria-invalid:border-destructive wpxdev:data-[active=true]:aria-invalid:ring-destructive/20 wpxdev:dark:bg-input/30 wpxdev:dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="wpxdev:pointer-events-none wpxdev:absolute wpxdev:inset-0 wpxdev:flex wpxdev:items-center wpxdev:justify-center">
          <div className="wpxdev:h-4 wpxdev:w-px wpxdev:animate-caret-blink wpxdev:bg-foreground wpxdev:duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
