import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis of the button. */
  variant?: "primary" | "secondary" | "ghost";
  /** Displays a busy state and prevents additional interaction. */
  loading?: boolean;
  /** Accessible label shown while loading. */
  loadingLabel?: string;
  children: ReactNode;
}

/** An accessible button with shared visual variants and loading behavior. */
export function Button({
  variant = "primary",
  loading = false,
  loadingLabel = "Loading",
  className,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = ["shared-button", `shared-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading ? <span className="shared-button__spinner" aria-hidden="true" /> : null}
      <span>{loading ? loadingLabel : children}</span>
    </button>
  );
}
