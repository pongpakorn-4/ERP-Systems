"use client"

import { Bell, LogOut, Menu, Search, UserRound } from "lucide-react"
import { Logo } from "@/components/erp/logo"
import { ThemeToggle } from "@/components/erp/theme-toggle"
import { cn } from "@/lib/utils"

export function Topbar({
  title,
  onToggleSidebar,
}: {
  title: string
  onToggleSidebar: () => void
}) {
  return (
    <header className="relative z-30 flex h-16 shrink-0 items-center gap-2 bg-topbar px-3 text-topbar-foreground sm:px-4">
      {/* Left: logo + menu toggle */}
      <div className="flex items-center gap-1 sm:gap-3">
        <Logo />
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle navigation"
          className="grid size-9 place-items-center rounded-lg text-topbar-foreground/80 transition-colors hover:bg-white/10 hover:text-topbar-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Center: page title */}
      <h1 className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 text-sm font-extrabold uppercase tracking-[0.2em] md:block">
        {title}
      </h1>

      {/* Right cluster */}
      <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
        <button
          type="button"
          aria-label="Search"
          className="hidden size-9 place-items-center rounded-lg text-topbar-foreground/80 transition-colors hover:bg-white/10 hover:text-topbar-foreground sm:grid"
        >
          <Search className="size-5" />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative grid size-9 place-items-center rounded-lg text-topbar-foreground/80 transition-colors hover:bg-white/10 hover:text-topbar-foreground"
        >
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-chart-5 ring-2 ring-topbar" />
        </button>

        <ThemeToggle />

        <div className="mx-1 hidden h-6 w-px bg-white/15 sm:block" />

        {/* User */}
        <div className="flex items-center gap-2.5 pl-1">
          <div className="hidden text-right leading-tight sm:block">
            <p className="text-sm font-semibold">Pongpakorn</p>
            <p className="text-[11px] text-topbar-foreground/60">
              EmpID: 2124
            </p>
          </div>
          <button
            type="button"
            aria-label="Account"
            className={cn(
              "grid size-9 place-items-center rounded-full bg-white/10 text-topbar-foreground",
              "ring-1 ring-white/15 transition-all hover:bg-white/20 hover:ring-white/30",
            )}
          >
            <UserRound className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Log out"
            title="Log out"
            className="grid size-9 place-items-center rounded-lg text-topbar-foreground/80 transition-colors hover:bg-chart-5/20 hover:text-chart-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <LogOut className="size-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
