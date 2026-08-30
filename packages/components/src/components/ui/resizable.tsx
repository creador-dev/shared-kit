import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "#lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: ResizablePrimitive.GroupProps) {
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      className={cn(
        "wpxdev:flex wpxdev:h-full wpxdev:w-full wpxdev:aria-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({ ...props }: ResizablePrimitive.PanelProps) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizablePrimitive.SeparatorProps & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:w-px wpxdev:items-center wpxdev:justify-center wpxdev:bg-border wpxdev:after:absolute wpxdev:after:inset-y-0 wpxdev:after:left-1/2 wpxdev:after:w-1 wpxdev:after:-translate-x-1/2 wpxdev:focus-visible:ring-1 wpxdev:focus-visible:ring-ring wpxdev:focus-visible:ring-offset-1 wpxdev:focus-visible:outline-hidden wpxdev:aria-[orientation=horizontal]:h-px wpxdev:aria-[orientation=horizontal]:w-full wpxdev:aria-[orientation=horizontal]:after:left-0 wpxdev:aria-[orientation=horizontal]:after:h-1 wpxdev:aria-[orientation=horizontal]:after:w-full wpxdev:aria-[orientation=horizontal]:after:translate-x-0 wpxdev:aria-[orientation=horizontal]:after:-translate-y-1/2 wpxdev:[&[aria-orientation=horizontal]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="wpxdev:z-10 wpxdev:flex wpxdev:h-4 wpxdev:w-3 wpxdev:items-center wpxdev:justify-center wpxdev:rounded-xs wpxdev:border wpxdev:bg-border">
          <GripVerticalIcon className="wpxdev:size-2.5" />
        </div>
      )}
    </ResizablePrimitive.Separator>
  )
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
