"use client"

import * as React from "react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const revenueData = [
  { m: "Jan", revenue: 320, orders: 210 },
  { m: "Feb", revenue: 410, orders: 260 },
  { m: "Mar", revenue: 380, orders: 240 },
  { m: "Apr", revenue: 520, orders: 300 },
  { m: "May", revenue: 480, orders: 290 },
  { m: "Jun", revenue: 610, orders: 360 },
  { m: "Jul", revenue: 720, orders: 420 },
  { m: "Aug", revenue: 690, orders: 400 },
  { m: "Sep", revenue: 820, orders: 470 },
]

const channelData = [
  { name: "Retail", value: 42, color: "var(--chart-1)" },
  { name: "Wholesale", value: 28, color: "var(--chart-2)" },
  { name: "Online", value: 21, color: "var(--chart-3)" },
  { name: "Export", value: 9, color: "var(--chart-4)" },
]

function ChartCard({
  title,
  subtitle,
  children,
  className = "",
  delay = 0,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className={`animate-fade-up rounded-xl border border-border bg-card p-5 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

function TooltipBox({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: any[]
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-lg">
      {label && <p className="mb-1 font-semibold">{label}</p>}
      {payload.map((p) => (
        <p key={p.dataKey} className="flex items-center gap-2">
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: p.color || p.fill }}
          />
          <span className="capitalize text-muted-foreground">{p.name}:</span>
          <span className="font-semibold text-foreground">{p.value}</span>
        </p>
      ))}
    </div>
  )
}

export function RevenueChart() {
  return (
    <ChartCard
      title="Revenue overview"
      subtitle="Monthly revenue & order volume"
      className="xl:col-span-2"
      delay={280}
    >
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{ top: 10, right: 8, left: -18, bottom: 0 }}
          >
            <defs>
              <linearGradient id="gRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gOrd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="m"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <Tooltip content={<TooltipBox />} cursor={{ stroke: "var(--border)" }} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--chart-1)"
              strokeWidth={2.5}
              fill="url(#gRev)"
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke="var(--chart-2)"
              strokeWidth={2.5}
              fill="url(#gOrd)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

export function ChannelChart() {
  const total = channelData.reduce((s, c) => s + c.value, 0)
  return (
    <ChartCard title="Sales by channel" subtitle="Share of revenue" delay={350}>
      <div className="flex items-center gap-4">
        <div className="relative h-[150px] w-[150px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={channelData}
                dataKey="value"
                innerRadius={48}
                outerRadius={70}
                paddingAngle={3}
                stroke="none"
              >
                {channelData.map((c) => (
                  <Cell key={c.name} fill={c.color} />
                ))}
              </Pie>
              <Tooltip content={<TooltipBox />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="text-center">
              <p className="text-xl font-bold leading-none">{total}%</p>
              <p className="text-[11px] text-muted-foreground">tracked</p>
            </div>
          </div>
        </div>
        <ul className="flex-1 space-y-2.5">
          {channelData.map((c) => (
            <li key={c.name} className="flex items-center gap-2 text-sm">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: c.color }}
              />
              <span className="text-muted-foreground">{c.name}</span>
              <span className="ml-auto font-semibold">{c.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </ChartCard>
  )
}

export function OrdersBarChart() {
  return (
    <ChartCard
      title="Fulfilment status"
      subtitle="Orders processed per weekday"
      delay={420}
    >
      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[
              { d: "Mon", v: 42 },
              { d: "Tue", v: 58 },
              { d: "Wed", v: 51 },
              { d: "Thu", v: 66 },
              { d: "Fri", v: 74 },
              { d: "Sat", v: 39 },
              { d: "Sun", v: 22 },
            ]}
            margin={{ top: 6, right: 8, left: -22, bottom: 0 }}
          >
            <XAxis
              dataKey="d"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <Tooltip
              content={<TooltipBox />}
              cursor={{ fill: "color-mix(in srgb, var(--muted-foreground) 12%, transparent)" }}
            />
            <Bar dataKey="v" name="orders" radius={[6, 6, 0, 0]} fill="var(--chart-1)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}
