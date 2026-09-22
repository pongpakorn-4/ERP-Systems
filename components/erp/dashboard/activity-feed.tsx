import {
  CheckCircle2,
  FileText,
  PackageCheck,
  TriangleAlert,
  UserPlus,
  type LucideIcon,
} from "lucide-react"

type Activity = {
  icon: LucideIcon
  tone: string
  title: string
  time: string
}

const activities: Activity[] = [
  { icon: CheckCircle2, tone: "var(--chart-2)", title: "Invoice INV-8841 marked as paid", time: "2 min ago" },
  { icon: PackageCheck, tone: "var(--chart-1)", title: "PO-2290 received into WH-Central", time: "26 min ago" },
  { icon: UserPlus, tone: "var(--chart-4)", title: "New customer 'Aurora Tech' added", time: "1 hr ago" },
  { icon: TriangleAlert, tone: "var(--chart-3)", title: "SKU RAM-16G below reorder point", time: "2 hr ago" },
  { icon: FileText, tone: "var(--chart-1)", title: "Quotation QT-5521 sent to client", time: "4 hr ago" },
]

export function ActivityFeed() {
  return (
    <div
      className="animate-fade-up rounded-xl border border-border bg-card p-5"
      style={{ animationDelay: "630ms" }}
    >
      <div className="mb-4">
        <h3 className="text-sm font-semibold">Activity</h3>
        <p className="text-xs text-muted-foreground">Across all modules</p>
      </div>
      <ol className="relative space-y-1">
        {activities.map((a, i) => {
          const Icon = a.icon
          const last = i === activities.length - 1
          return (
            <li key={i} className="relative flex gap-3 pb-4 last:pb-0">
              {!last && (
                <span className="absolute left-[15px] top-9 h-[calc(100%-1.5rem)] w-px bg-border" />
              )}
              <span
                className="grid size-8 shrink-0 place-items-center rounded-full"
                style={{
                  backgroundColor: `color-mix(in srgb, ${a.tone} 15%, transparent)`,
                  color: a.tone,
                }}
              >
                <Icon className="size-4" />
              </span>
              <div className="pt-1">
                <p className="text-sm leading-snug">{a.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{a.time}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
