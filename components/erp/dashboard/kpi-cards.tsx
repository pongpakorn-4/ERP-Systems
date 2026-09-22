import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Kpi = {
  label: string
  value: string
  delta: number
  hint: string
  icon: LucideIcon
  tone: string
}

const kpis: Kpi[] = [
  {
    label: "Total Revenue",
    value: "฿ 4.82M",
    delta: 12.5,
    hint: "vs last month",
    icon: DollarSign,
    tone: "var(--chart-2)",
  },
  {
    label: "Sales Orders",
    value: "1,284",
    delta: 8.2,
    hint: "342 pending",
    icon: ShoppingCart,
    tone: "var(--chart-1)",
  },
  {
    label: "Inventory Value",
    value: "฿ 1.36M",
    delta: -3.1,
    hint: "18 low-stock SKUs",
    icon: Package,
    tone: "var(--chart-3)",
  },
  {
    label: "Active Customers",
    value: "3,910",
    delta: 5.7,
    hint: "126 new this week",
    icon: Users,
    tone: "var(--chart-4)",
  },
]

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi, i) => {
        const Icon = kpi.icon
        const positive = kpi.delta >= 0
        return (
          <div
            key={kpi.label}
            style={{ animationDelay: `${i * 70}ms` }}
            className="group animate-fade-up rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5"
          >
            <div className="flex items-start justify-between">
              <span
                className="grid size-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `color-mix(in srgb, ${kpi.tone} 15%, transparent)`,
                  color: kpi.tone,
                }}
              >
                <Icon className="size-5" />
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold",
                  positive
                    ? "bg-chart-2/15 text-chart-2"
                    : "bg-chart-5/15 text-chart-5",
                )}
              >
                {positive ? (
                  <ArrowUpRight className="size-3.5" />
                ) : (
                  <ArrowDownRight className="size-3.5" />
                )}
                {Math.abs(kpi.delta)}%
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold tracking-tight">{kpi.value}</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {kpi.label}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground/70">{kpi.hint}</p>
          </div>
        )
      })}
    </div>
  )
}
