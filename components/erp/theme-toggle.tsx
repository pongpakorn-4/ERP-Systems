"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
      title={isDark ? "Day mode" : "Night mode"}
      className={cn(
        "group relative grid size-9 place-items-center rounded-lg text-topbar-foreground/80",
        "transition-colors hover:bg-white/10 hover:text-topbar-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        className,
      )}
    >
      {mounted ? (
        <span className="relative block size-5">
          <Sun
            className={cn(
              "absolute inset-0 size-5 transition-all duration-500",
              isDark
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100",
            )}
          />
          <Moon
            className={cn(
              "absolute inset-0 size-5 transition-all duration-500",
              isDark
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0",
            )}
          />
        </span>
      ) : (
        <span className="size-5" />
      )}
    </button>
  )
}
