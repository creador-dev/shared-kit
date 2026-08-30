import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()
  const sonnerTheme: NonNullable<ToasterProps["theme"]> =
    theme === "light" || theme === "dark" ? theme : "system"

  return (
    <Sonner
      theme={sonnerTheme}
      className="wpxdev:toaster wpxdev:group"
      icons={{
        success: <CircleCheckIcon className="wpxdev:size-4" />,
        info: <InfoIcon className="wpxdev:size-4" />,
        warning: <TriangleAlertIcon className="wpxdev:size-4" />,
        error: <OctagonXIcon className="wpxdev:size-4" />,
        loading: <Loader2Icon className="wpxdev:size-4 wpxdev:animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--wpxdev-color-popover)",
          "--normal-text": "var(--wpxdev-color-popover-foreground)",
          "--normal-border": "var(--wpxdev-color-border)",
          "--border-radius": "var(--wpxdev-radius-md)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
