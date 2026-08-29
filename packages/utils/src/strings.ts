export type ClassValue = string | false | null | undefined;

/** Joins conditional class names without adding a runtime dependency. */
export function cn(...values: ClassValue[]): string {
  return values.filter((value): value is string => typeof value === "string" && value.length > 0).join(" ");
}

