import { cn } from "@/lib/utils"

type Status = "Paid" | "Pending" | "Processing" | "Cancelled"

const statusStyle: Record<Status, string> = {
  Paid: "bg-chart-2/15 text-chart-2",
  Pending: "bg-chart-3/15 text-chart-3",
  Processing: "bg-chart-1/15 text-chart-1",
  Cancelled: "bg-chart-5/15 text-chart-5",
}

const orders: {
  id: string
  customer: string
  amount: string
  status: Status
  date: string
}[] = [
  { id: "SO-10482", customer: "Siam Digital Co.", amount: "฿ 128,400", status: "Paid", date: "Sep 22" },
  { id: "SO-10481", customer: "NextGen Retail", amount: "฿ 64,900", status: "Processing", date: "Sep 22" },
  { id: "SO-10480", customer: "Bangkok IT Hub", amount: "฿ 212,750", status: "Pending", date: "Sep 21" },
  { id: "SO-10479", customer: "PixelWorks Ltd.", amount: "฿ 39,120", status: "Paid", date: "Sep 21" },
  { id: "SO-10478", customer: "Metro Systems", amount: "฿ 88,600", status: "Cancelled", date: "Sep 20" },
]

export function RecentOrders() {
  return (
    <div
      className="animate-fade-up rounded-xl border border-border bg-card p-5 xl:col-span-2"
      style={{ animationDelay: "560ms" }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold">Recent sales orders</h3>
          <p className="text-xs text-muted-foreground">Latest transactions</p>
        </div>
        <button
          type="button"
          className="rounded-lg px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-accent"
        >
          View all
        </button>
      </div>

      <div className="scroll-area -mx-2 overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
              <th className="px-2 py-2 font-medium">Order</th>
              <th className="px-2 py-2 font-medium">Customer</th>
              <th className="px-2 py-2 font-medium">Status</th>
              <th className="px-2 py-2 text-right font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr
                key={o.id}
                className="border-t border-border transition-colors hover:bg-muted/50"
              >
                <td className="px-2 py-3">
                  <span className="font-semibold">{o.id}</span>
                  <span className="block text-xs text-muted-foreground">
                    {o.date}
                  </span>
                </td>
                <td className="px-2 py-3 text-muted-foreground">{o.customer}</td>
                <td className="px-2 py-3">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
                      statusStyle[o.status],
                    )}
                  >
                    {o.status}
                  </span>
                </td>
                <td className="px-2 py-3 text-right font-semibold">
                  {o.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
