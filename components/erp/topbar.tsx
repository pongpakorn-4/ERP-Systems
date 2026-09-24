"use client"

import { Bell, LogOut, Menu, Search } from "lucide-react"
import { Logo } from "@/components/erp/logo"
import { ThemeToggle } from "@/components/erp/theme-toggle"

export function Topbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void
}) {
  return (
    <header className="relative z-30 flex h-16 shrink-0 items-center gap-2 bg-topbar px-3 text-topbar-foreground sm:px-4">
      {/* Left: logo + menu toggle */}
      <div className="flex items-center gap-1 sm:gap-2">
        <Logo />
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle navigation"
          className="ml-1 grid size-9 place-items-center rounded-lg text-topbar-foreground/70 transition-colors hover:bg-white/10 hover:text-topbar-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Center: search */}
      <div className="mx-auto hidden w-full max-w-md items-center md:flex">
        <label className="group flex w-full items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-2 ring-1 ring-white/10 transition-all focus-within:bg-white/15 focus-within:ring-white/25">
          <Search className="size-4 shrink-0 text-topbar-foreground/60" />
          <input
            type="text"
            placeholder="Search orders, products, customers…"
            className="w-full bg-transparent text-sm text-topbar-foreground placeholder:text-topbar-foreground/45 focus:outline-none"
          />
          <kbd className="hidden shrink-0 rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-topbar-foreground/60 lg:inline-block">
            ⌘K
          </kbd>
        </label>
      </div>

      {/* Right cluster */}
      <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
        <button
          type="button"
          aria-label="Search"
          className="grid size-9 place-items-center rounded-lg text-topbar-foreground/75 transition-colors hover:bg-white/10 hover:text-topbar-foreground md:hidden"
        >
          <Search className="size-5" />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative grid size-9 place-items-center rounded-lg text-topbar-foreground/75 transition-colors hover:bg-white/10 hover:text-topbar-foreground"
        >
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-chart-5 ring-2 ring-topbar" />
        </button>

        <ThemeToggle />

        <div className="mx-1 hidden h-6 w-px bg-white/15 sm:block" />

        {/* User */}
        <div className="flex items-center gap-2.5 pl-0.5">
          <div className="hidden text-right leading-tight sm:block">
            <p className="text-sm font-semibold">Pongpakorn</p>
            <p className="text-[11px] text-topbar-foreground/55">EmpID: 2124</p>
          </div>
          <button
            type="button"
            aria-label="Account"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-[color-mix(in_srgb,var(--primary)_55%,#8b5cf6)] text-sm font-bold text-primary-foreground ring-1 ring-white/20 transition-all hover:ring-white/40"
          >
            PK
          </button>
          <button
            type="button"
            aria-label="Log out"
            title="Log out"
            className="grid size-9 place-items-center rounded-lg text-topbar-foreground/70 transition-colors hover:bg-chart-5/20 hover:text-chart-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <LogOut className="size-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
