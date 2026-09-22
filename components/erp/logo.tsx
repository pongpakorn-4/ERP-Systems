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
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
        <Boxes className="size-5" />
      </span>
      <span
        className={cn(
          "flex items-baseline gap-1 overflow-hidden whitespace-nowrap font-semibold tracking-tight transition-all duration-300",
          collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
        )}
      >
        <span className="text-base font-extrabold">STORE</span>
        <span className="text-base font-extrabold text-primary">PC</span>
      </span>
    </div>
  )
}
