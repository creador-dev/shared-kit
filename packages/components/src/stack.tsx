import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import "./stack.css";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: "row" | "column";
  gap?: CSSProperties["gap"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
}

/** A small flexbox layout primitive. */
export function Stack({
  direction = "column",
  gap = "var(--space-4, 1rem)",
  align,
  justify,
  wrap = false,
  className,
  style,
  children,
  ...props
}: StackProps) {
  return (
    <div
      {...props}
      className={["shared-stack", className].filter(Boolean).join(" ")}
      style={{
        flexDirection: direction,
        gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
