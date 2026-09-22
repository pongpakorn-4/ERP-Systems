"use client"

import * as React from "react"
import { Topbar } from "@/components/erp/topbar"
import { SidebarNav } from "@/components/erp/sidebar"
import { cn } from "@/lib/utils"

export function ErpShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [active, setActive] = React.useState("/")

  // Close mobile drawer on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const toggleSidebar = () => {
    // On mobile, open the drawer; on desktop, collapse the rail.
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setMobileOpen((v) => !v)
    } else {
      setCollapsed((v) => !v)
    }
  }

  const handleSelect = (href: string) => {
    setActive(href)
    setMobileOpen(false)
  }

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-topbar">
      <Topbar title="Dashboard" onToggleSidebar={toggleSidebar} />

      <div className="flex min-h-0 flex-1">
        {/* Desktop sidebar */}
        <aside
          className={cn(
            "relative z-20 hidden shrink-0 flex-col bg-sidebar text-sidebar-foreground transition-[width] duration-300 ease-in-out lg:flex",
            collapsed ? "w-[76px]" : "w-64",
          )}
        >
          <SidebarNav
            collapsed={collapsed}
            active={active}
            onSelect={handleSelect}
          />
          <SidebarFooter collapsed={collapsed} />
        </aside>

        {/* Mobile drawer */}
        <div
          className={cn(
            "fixed inset-0 z-40 lg:hidden",
            mobileOpen ? "pointer-events-auto" : "pointer-events-none",
          )}
        >
          <div
            onClick={() => setMobileOpen(false)}
            className={cn(
              "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
              mobileOpen ? "opacity-100" : "opacity-0",
            )}
          />
          <aside
            className={cn(
              "absolute left-0 top-0 flex h-full w-72 flex-col bg-sidebar text-sidebar-foreground shadow-2xl transition-transform duration-300 ease-in-out",
              mobileOpen ? "translate-x-0" : "-translate-x-full",
            )}
          >
            <SidebarNav collapsed={false} active={active} onSelect={handleSelect} />
            <SidebarFooter collapsed={false} />
          </aside>
        </div>

        {/* Main content on the light "page" surface */}
        <main className="min-w-0 flex-1 bg-sidebar p-2 sm:p-3">
          <div className="scroll-area h-full overflow-y-auto rounded-2xl bg-background p-4 shadow-inner sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

function SidebarFooter({ collapsed }: { collapsed: boolean }) {
  return (
    <div className="border-t border-sidebar-border p-3">
      <div
        className={cn(
          "flex items-center gap-3 rounded-lg px-2 py-2",
          collapsed && "justify-center px-0",
        )}
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sidebar-active/20 text-xs font-bold text-sidebar-active">
          PK
        </span>
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
          )}
        >
          <p className="whitespace-nowrap text-sm font-semibold text-white">
            Pongpakorn
          </p>
          <p className="whitespace-nowrap text-[11px] text-sidebar-muted">
            Administrator
          </p>
        </div>
      </div>
    </div>
  )
}
