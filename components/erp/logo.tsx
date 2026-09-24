import { Boxes } from "lucide-react"
import { cn } from "@/lib/utils"

export function Logo({
  collapsed = false,
  className,
}: {
  collapsed?: boolean
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-[color-mix(in_srgb,var(--primary)_60%,#8b5cf6)] text-primary-foreground shadow-sm shadow-primary/30">
        <Boxes className="size-5" />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-white/15" />
      </span>
      <span
        className={cn(
          "flex flex-col overflow-hidden whitespace-nowrap leading-none transition-all duration-300",
          collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
        )}
      >
        <span className="flex items-baseline gap-1 text-base font-extrabold tracking-tight">
          <span>STORE</span>
          <span className="text-primary">PC</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-topbar-foreground/50">
          ERP Suite
        </span>
      </span>
    </div>
  )
}
