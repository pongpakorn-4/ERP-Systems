import {
  BarChart3,
  Contact,
  Factory,
  Package,
  ShoppingCart,
  Truck,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react"

type Module = {
  label: string
  desc: string
  icon: LucideIcon
  tone: string
}

const modules: Module[] = [
  { label: "Sales", desc: "Orders & invoices", icon: ShoppingCart, tone: "var(--chart-1)" },
  { label: "Inventory", desc: "Stock & warehouses", icon: Package, tone: "var(--chart-3)" },
  { label: "Purchasing", desc: "POs & vendors", icon: Truck, tone: "var(--chart-2)" },
  { label: "Manufacturing", desc: "BOM & work orders", icon: Factory, tone: "var(--chart-4)" },
  { label: "Finance", desc: "Ledger & payments", icon: Wallet, tone: "var(--chart-2)" },
  { label: "CRM", desc: "Leads & pipeline", icon: Contact, tone: "var(--chart-1)" },
  { label: "HR", desc: "People & payroll", icon: Users, tone: "var(--chart-4)" },
  { label: "Reports", desc: "Analytics & BI", icon: BarChart3, tone: "var(--chart-3)" },
]

export function ModuleGrid() {
  return (
    <div className="animate-fade-up rounded-xl border border-border bg-card p-5" style={{ animationDelay: "490ms" }}>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold">Modules</h3>
          <p className="text-xs text-muted-foreground">Jump into any system</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {modules.map((m) => {
          const Icon = m.icon
          return (
            <button
              key={m.label}
              type="button"
              className="group flex flex-col items-start gap-3 rounded-xl border border-border bg-background/40 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:shadow-md hover:shadow-black/5"
            >
              <span
                className="grid size-10 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `color-mix(in srgb, ${m.tone} 15%, transparent)`,
                  color: m.tone,
                }}
              >
                <Icon className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{m.label}</span>
                <span className="block text-xs text-muted-foreground">
                  {m.desc}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
