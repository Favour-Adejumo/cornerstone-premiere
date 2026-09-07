import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Temporary placeholder used where a real photograph has not been supplied yet.
 * Replace with an <img> once the actual image is available.
 */
export function ImagePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — image coming soon`}
      className={cn(
        "flex flex-col items-center justify-center gap-3 border border-border bg-secondary/40 text-secondary-foreground",
        className,
      )}
    >
      <ImageIcon className="size-7 opacity-50" aria-hidden="true" strokeWidth={1.5} />
      <span className="px-6 text-center text-xs font-medium uppercase tracking-[0.22em] opacity-70">
        {label}
      </span>
    </div>
  );
}
