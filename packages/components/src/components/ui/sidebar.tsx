"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { PanelLeftIcon } from "lucide-react"
import { Slot } from "radix-ui"

import { useIsMobile } from "#hooks/use-mobile"
import { cn } from "#lib/utils"
import { Button } from "#components/ui/button"
import { Input } from "#components/ui/input"
import { Separator } from "#components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "#components/ui/sheet"
import { Skeleton } from "#components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "#components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--wpxdev-sidebar-width": SIDEBAR_WIDTH,
              "--wpxdev-sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "wpxdev:group/sidebar-wrapper wpxdev:flex wpxdev:min-h-svh wpxdev:w-full wpxdev:has-data-[variant=inset]:bg-sidebar",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "wpxdev:flex wpxdev:h-full wpxdev:w-(--wpxdev-sidebar-width) wpxdev:flex-col wpxdev:bg-sidebar wpxdev:text-sidebar-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="wpxdev:w-(--wpxdev-sidebar-width) wpxdev:bg-sidebar wpxdev:p-0 wpxdev:text-sidebar-foreground wpxdev:[&>button]:hidden"
          style={
            {
              "--wpxdev-sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="wpxdev:sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="wpxdev:flex wpxdev:h-full wpxdev:w-full wpxdev:flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="wpxdev:group wpxdev:peer wpxdev:hidden wpxdev:text-sidebar-foreground wpxdev:md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "wpxdev:relative wpxdev:w-(--wpxdev-sidebar-width) wpxdev:bg-transparent wpxdev:transition-[width] wpxdev:duration-200 wpxdev:ease-linear",
          "wpxdev:group-data-[collapsible=offcanvas]:w-0",
          "wpxdev:group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "wpxdev:group-data-[collapsible=icon]:w-[calc(var(--wpxdev-sidebar-width-icon)+(--spacing(4)))]"
            : "wpxdev:group-data-[collapsible=icon]:w-(--wpxdev-sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "wpxdev:fixed wpxdev:inset-y-0 wpxdev:z-10 wpxdev:hidden wpxdev:h-svh wpxdev:w-(--wpxdev-sidebar-width) wpxdev:transition-[left,right,width] wpxdev:duration-200 wpxdev:ease-linear wpxdev:md:flex",
          side === "left"
            ? "wpxdev:left-0 wpxdev:group-data-[collapsible=offcanvas]:left-[calc(var(--wpxdev-sidebar-width)*-1)]"
            : "wpxdev:right-0 wpxdev:group-data-[collapsible=offcanvas]:right-[calc(var(--wpxdev-sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "wpxdev:p-2 wpxdev:group-data-[collapsible=icon]:w-[calc(var(--wpxdev-sidebar-width-icon)+(--spacing(4))+2px)]"
            : "wpxdev:group-data-[collapsible=icon]:w-(--wpxdev-sidebar-width-icon) wpxdev:group-data-[side=left]:border-r wpxdev:group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="wpxdev:flex wpxdev:h-full wpxdev:w-full wpxdev:flex-col wpxdev:bg-sidebar wpxdev:group-data-[variant=floating]:rounded-lg wpxdev:group-data-[variant=floating]:border wpxdev:group-data-[variant=floating]:border-sidebar-border wpxdev:group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("wpxdev:size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="wpxdev:sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "wpxdev:absolute wpxdev:inset-y-0 wpxdev:z-20 wpxdev:hidden wpxdev:w-4 wpxdev:-translate-x-1/2 wpxdev:transition-all wpxdev:ease-linear wpxdev:group-data-[side=left]:-right-4 wpxdev:group-data-[side=right]:left-0 wpxdev:after:absolute wpxdev:after:inset-y-0 wpxdev:after:left-1/2 wpxdev:after:w-[2px] wpxdev:hover:after:bg-sidebar-border wpxdev:sm:flex",
        "wpxdev:in-data-[side=left]:cursor-w-resize wpxdev:in-data-[side=right]:cursor-e-resize",
        "wpxdev:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize wpxdev:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "wpxdev:group-data-[collapsible=offcanvas]:translate-x-0 wpxdev:group-data-[collapsible=offcanvas]:after:left-full wpxdev:hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "wpxdev:[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "wpxdev:[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "wpxdev:relative wpxdev:flex wpxdev:w-full wpxdev:flex-1 wpxdev:flex-col wpxdev:bg-background",
        "wpxdev:md:peer-data-[variant=inset]:m-2 wpxdev:md:peer-data-[variant=inset]:ml-0 wpxdev:md:peer-data-[variant=inset]:rounded-xl wpxdev:md:peer-data-[variant=inset]:shadow-sm wpxdev:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("wpxdev:h-8 wpxdev:w-full wpxdev:bg-background wpxdev:shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("wpxdev:flex wpxdev:flex-col wpxdev:gap-2 wpxdev:p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("wpxdev:flex wpxdev:flex-col wpxdev:gap-2 wpxdev:p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("wpxdev:mx-2 wpxdev:w-auto wpxdev:bg-sidebar-border", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "wpxdev:flex wpxdev:min-h-0 wpxdev:flex-1 wpxdev:flex-col wpxdev:gap-2 wpxdev:overflow-auto wpxdev:group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("wpxdev:relative wpxdev:flex wpxdev:w-full wpxdev:min-w-0 wpxdev:flex-col wpxdev:p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "wpxdev:flex wpxdev:h-8 wpxdev:shrink-0 wpxdev:items-center wpxdev:rounded-md wpxdev:px-2 wpxdev:text-xs wpxdev:font-medium wpxdev:text-sidebar-foreground/70 wpxdev:ring-sidebar-ring wpxdev:outline-hidden wpxdev:transition-[margin,opacity] wpxdev:duration-200 wpxdev:ease-linear wpxdev:focus-visible:ring-2 wpxdev:[&>svg]:size-4 wpxdev:[&>svg]:shrink-0",
        "wpxdev:group-data-[collapsible=icon]:-mt-8 wpxdev:group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "wpxdev:absolute wpxdev:top-3.5 wpxdev:right-3 wpxdev:flex wpxdev:aspect-square wpxdev:w-5 wpxdev:items-center wpxdev:justify-center wpxdev:rounded-md wpxdev:p-0 wpxdev:text-sidebar-foreground wpxdev:ring-sidebar-ring wpxdev:outline-hidden wpxdev:transition-transform wpxdev:hover:bg-sidebar-accent wpxdev:hover:text-sidebar-accent-foreground wpxdev:focus-visible:ring-2 wpxdev:[&>svg]:size-4 wpxdev:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "wpxdev:after:absolute wpxdev:after:-inset-2 wpxdev:md:after:hidden",
        "wpxdev:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("wpxdev:w-full wpxdev:text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("wpxdev:flex wpxdev:w-full wpxdev:min-w-0 wpxdev:flex-col wpxdev:gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("wpxdev:group/menu-item wpxdev:relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "wpxdev:peer/menu-button wpxdev:flex wpxdev:w-full wpxdev:items-center wpxdev:gap-2 wpxdev:overflow-hidden wpxdev:rounded-md wpxdev:p-2 wpxdev:text-left wpxdev:text-sm wpxdev:ring-sidebar-ring wpxdev:outline-hidden wpxdev:transition-[width,height,padding] wpxdev:group-has-data-[sidebar=menu-action]/menu-item:pr-8 wpxdev:group-data-[collapsible=icon]:size-8! wpxdev:group-data-[collapsible=icon]:p-2! wpxdev:hover:bg-sidebar-accent wpxdev:hover:text-sidebar-accent-foreground wpxdev:focus-visible:ring-2 wpxdev:active:bg-sidebar-accent wpxdev:active:text-sidebar-accent-foreground wpxdev:disabled:pointer-events-none wpxdev:disabled:opacity-50 wpxdev:aria-disabled:pointer-events-none wpxdev:aria-disabled:opacity-50 wpxdev:data-[active=true]:bg-sidebar-accent wpxdev:data-[active=true]:font-medium wpxdev:data-[active=true]:text-sidebar-accent-foreground wpxdev:data-[state=open]:hover:bg-sidebar-accent wpxdev:data-[state=open]:hover:text-sidebar-accent-foreground wpxdev:[&>span:last-child]:truncate wpxdev:[&>svg]:size-4 wpxdev:[&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "wpxdev:hover:bg-sidebar-accent wpxdev:hover:text-sidebar-accent-foreground",
        outline:
          "wpxdev:bg-background wpxdev:shadow-[0_0_0_1px_var(--wpxdev-color-sidebar-border)] wpxdev:hover:bg-sidebar-accent wpxdev:hover:text-sidebar-accent-foreground wpxdev:hover:shadow-[0_0_0_1px_var(--wpxdev-color-sidebar-accent)]",
      },
      size: {
        default: "wpxdev:h-8 wpxdev:text-sm",
        sm: "wpxdev:h-7 wpxdev:text-xs",
        lg: "wpxdev:h-12 wpxdev:text-sm wpxdev:group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot.Root : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "wpxdev:absolute wpxdev:top-1.5 wpxdev:right-1 wpxdev:flex wpxdev:aspect-square wpxdev:w-5 wpxdev:items-center wpxdev:justify-center wpxdev:rounded-md wpxdev:p-0 wpxdev:text-sidebar-foreground wpxdev:ring-sidebar-ring wpxdev:outline-hidden wpxdev:transition-transform wpxdev:peer-hover/menu-button:text-sidebar-accent-foreground wpxdev:hover:bg-sidebar-accent wpxdev:hover:text-sidebar-accent-foreground wpxdev:focus-visible:ring-2 wpxdev:[&>svg]:size-4 wpxdev:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "wpxdev:after:absolute wpxdev:after:-inset-2 wpxdev:md:after:hidden",
        "wpxdev:peer-data-[size=sm]/menu-button:top-1",
        "wpxdev:peer-data-[size=default]/menu-button:top-1.5",
        "wpxdev:peer-data-[size=lg]/menu-button:top-2.5",
        "wpxdev:group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "wpxdev:group-focus-within/menu-item:opacity-100 wpxdev:group-hover/menu-item:opacity-100 wpxdev:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground wpxdev:data-[state=open]:opacity-100 wpxdev:md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "wpxdev:pointer-events-none wpxdev:absolute wpxdev:right-1 wpxdev:flex wpxdev:h-5 wpxdev:min-w-5 wpxdev:items-center wpxdev:justify-center wpxdev:rounded-md wpxdev:px-1 wpxdev:text-xs wpxdev:font-medium wpxdev:text-sidebar-foreground wpxdev:tabular-nums wpxdev:select-none",
        "wpxdev:peer-hover/menu-button:text-sidebar-accent-foreground wpxdev:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "wpxdev:peer-data-[size=sm]/menu-button:top-1",
        "wpxdev:peer-data-[size=default]/menu-button:top-1.5",
        "wpxdev:peer-data-[size=lg]/menu-button:top-2.5",
        "wpxdev:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("wpxdev:flex wpxdev:h-8 wpxdev:items-center wpxdev:gap-2 wpxdev:rounded-md wpxdev:px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="wpxdev:size-4 wpxdev:rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="wpxdev:h-4 wpxdev:max-w-(--wpxdev-skeleton-width) wpxdev:flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--wpxdev-skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "wpxdev:mx-3.5 wpxdev:flex wpxdev:min-w-0 wpxdev:translate-x-px wpxdev:flex-col wpxdev:gap-1 wpxdev:border-l wpxdev:border-sidebar-border wpxdev:px-2.5 wpxdev:py-0.5",
        "wpxdev:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("wpxdev:group/menu-sub-item wpxdev:relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "wpxdev:flex wpxdev:h-7 wpxdev:min-w-0 wpxdev:-translate-x-px wpxdev:items-center wpxdev:gap-2 wpxdev:overflow-hidden wpxdev:rounded-md wpxdev:px-2 wpxdev:text-sidebar-foreground wpxdev:ring-sidebar-ring wpxdev:outline-hidden wpxdev:hover:bg-sidebar-accent wpxdev:hover:text-sidebar-accent-foreground wpxdev:focus-visible:ring-2 wpxdev:active:bg-sidebar-accent wpxdev:active:text-sidebar-accent-foreground wpxdev:disabled:pointer-events-none wpxdev:disabled:opacity-50 wpxdev:aria-disabled:pointer-events-none wpxdev:aria-disabled:opacity-50 wpxdev:[&>span:last-child]:truncate wpxdev:[&>svg]:size-4 wpxdev:[&>svg]:shrink-0 wpxdev:[&>svg]:text-sidebar-accent-foreground",
        "wpxdev:data-[active=true]:bg-sidebar-accent wpxdev:data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "wpxdev:text-xs",
        size === "md" && "wpxdev:text-sm",
        "wpxdev:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
