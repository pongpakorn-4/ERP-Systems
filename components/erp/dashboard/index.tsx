import { KpiCards } from "@/components/erp/dashboard/kpi-cards"
import {
  ChannelChart,
  OrdersBarChart,
  RevenueChart,
} from "@/components/erp/dashboard/charts"
import { ModuleGrid } from "@/components/erp/dashboard/module-grid"
import { RecentOrders } from "@/components/erp/dashboard/recent-orders"
import { ActivityFeed } from "@/components/erp/dashboard/activity-feed"

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Greeting header */}
      <div className="animate-fade-up flex flex-col gap-1">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Welcome back, Pongpakorn
        </h2>
        <p className="text-sm text-muted-foreground">
          Here&apos;s what&apos;s happening across your operations today.
        </p>
      </div>

      <KpiCards />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <RevenueChart />
        <ChannelChart />
      </div>

      <ModuleGrid />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <RecentOrders />
        <ActivityFeed />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <OrdersBarChart />
      </div>
    </div>
  )
}
