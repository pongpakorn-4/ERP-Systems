"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { navSections, type NavItem } from "@/lib/nav"
import { cn } from "@/lib/utils"

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-sidebar-active px-1.5 text-[11px] font-semibold leading-none text-sidebar-active-foreground">
      {children}
    </span>
  )
}

function SidebarLink({
  item,
  collapsed,
  active,
  onSelect,
}: {
  item: NavItem
  collapsed: boolean
  active: string
  onSelect: (href: string) => void
}) {
  const hasChildren = !!item.children?.length
  const isActive = active === item.href
  const childActive = item.children?.some((c) => c.href === active)
  const [open, setOpen] = React.useState<boolean>(!!childActive)

  React.useEffect(() => {
    if (childActive) setOpen(true)
  }, [childActive])

  const Icon = item.icon

  const handleClick = () => {
    if (hasChildren && !collapsed) {
      setOpen((v) => !v)
      return
    }
    onSelect(item.href)
  }

  const highlighted = isActive || (childActive && collapsed)

  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        title={collapsed ? item.label : undefined}
        aria-expanded={hasChildren ? open : undefined}
        className={cn(
          "group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium outline-none transition-all duration-200",
          "focus-visible:ring-2 focus-visible:ring-sidebar-active/60",
          highlighted
            ? "bg-sidebar-active text-sidebar-active-foreground shadow-sm shadow-black/25"
            : "text-sidebar-foreground hover:bg-sidebar-hover hover:text-white",
          collapsed && "justify-center px-0",
        )}
      >
        {/* active accent bar (collapsed rail) */}
        <span
          className={cn(
            "absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-sidebar-active transition-opacity duration-200",
            highlighted && collapsed ? "opacity-100" : "opacity-0",
          )}
        />
        <Icon
          className={cn(
            "size-5 shrink-0 transition-transform duration-200",
            !highlighted && "group-hover:scale-110",
          )}
        />
        <span
          className={cn(
            "overflow-hidden whitespace-nowrap transition-all duration-300",
            collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
          )}
        >
          {item.label}
        </span>

        {!collapsed && item.badge && !hasChildren && (
          <span className="ml-auto">
            <Badge>{item.badge}</Badge>
          </span>
        )}
        {!collapsed && hasChildren && (
          <span className="ml-auto flex items-center gap-1.5">
            {item.badge && <Badge>{item.badge}</Badge>}
            <ChevronDown
              className={cn(
                "size-4 shrink-0 opacity-60 transition-transform duration-300",
                open && "rotate-180",
              )}
            />
          </span>
        )}
      </button>

      {/* Submenu */}
      {hasChildren && !collapsed && (
        <div
          className={cn(
            "grid transition-all duration-300 ease-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <ul className="overflow-hidden">
            <li className="mt-1 space-y-0.5 pb-1 pl-5">
              <div className="border-l border-sidebar-border pl-3">
                {item.children!.map((child) => {
                  const active2 = active === child.href
                  return (
                    <button
                      key={child.href}
                      type="button"
                      onClick={() => onSelect(child.href)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-[13px] transition-colors",
                        active2
                          ? "bg-sidebar-hover font-medium text-white"
                          : "text-sidebar-muted hover:bg-sidebar-hover/60 hover:text-white",
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 shrink-0 rounded-full transition-colors",
                          active2 ? "bg-sidebar-active" : "bg-sidebar-muted/60",
                        )}
                      />
                      <span className="truncate">{child.label}</span>
                      {child.badge && (
                        <span className="ml-auto">
                          <Badge>{child.badge}</Badge>
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </li>
          </ul>
        </div>
      )}
    </li>
  )
}

export function SidebarNav({
  collapsed,
  active,
  onSelect,
}: {
  collapsed: boolean
  active: string
  onSelect: (href: string) => void
}) {
  return (
    <nav className="scroll-area flex-1 overflow-y-auto px-3 py-4">
      {navSections.map((section) => (
        <div key={section.title} className="mb-6 last:mb-0">
          <p
            className={cn(
              "mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-sidebar-muted transition-all duration-300",
              collapsed ? "h-0 overflow-hidden opacity-0" : "opacity-100",
            )}
          >
            {section.title}
          </p>
          {collapsed && (
            <div className="mx-auto mb-2 h-px w-8 bg-sidebar-border" />
          )}
          <ul className="space-y-1">
            {section.items.map((item) => (
              <SidebarLink
                key={item.href}
                item={item}
                collapsed={collapsed}
                active={active}
                onSelect={onSelect}
              />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
