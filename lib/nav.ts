import type { LucideIcon } from "lucide-react"
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Factory,
  Wallet,
  Users,
  Contact,
  Truck,
  BarChart3,
  Settings,
} from "lucide-react"

export type NavChild = {
  label: string
  href: string
  badge?: string
}

export type NavItem = {
  label: string
  href: string
  icon: LucideIcon
  badge?: string
  children?: NavChild[]
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const navSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/", icon: LayoutDashboard },
      {
        label: "Sales",
        href: "/sales",
        icon: ShoppingCart,
        badge: "12",
        children: [
          { label: "Orders", href: "/sales/orders", badge: "8" },
          { label: "Quotations", href: "/sales/quotations" },
          { label: "Invoices", href: "/sales/invoices" },
        ],
      },
      {
        label: "Purchasing",
        href: "/purchasing",
        icon: Truck,
        children: [
          { label: "Purchase Orders", href: "/purchasing/orders" },
          { label: "Vendors", href: "/purchasing/vendors" },
        ],
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        label: "Inventory",
        href: "/inventory",
        icon: Package,
        badge: "3",
        children: [
          { label: "Stock", href: "/inventory/stock" },
          { label: "Warehouses", href: "/inventory/warehouses" },
          { label: "Transfers", href: "/inventory/transfers" },
        ],
      },
      { label: "Manufacturing", href: "/manufacturing", icon: Factory },
      { label: "CRM", href: "/crm", icon: Contact },
    ],
  },
  {
    title: "Back office",
    items: [
      {
        label: "Finance",
        href: "/finance",
        icon: Wallet,
        children: [
          { label: "Ledger", href: "/finance/ledger" },
          { label: "Payments", href: "/finance/payments" },
          { label: "Taxes", href: "/finance/taxes" },
        ],
      },
      { label: "Human Resources", href: "/hr", icon: Users },
      { label: "Reports", href: "/reports", icon: BarChart3 },
      { label: "Settings", href: "/settings", icon: Settings },
    ],
  },
]
