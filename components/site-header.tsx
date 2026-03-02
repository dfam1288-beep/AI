"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Брови", href: "/brows" },
  { label: "Ресницы", href: "/lashes" },
  { label: "Спортивный макияж", href: "/sport-makeup" },
  { label: "Контакты", href: "/#contacts" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-foreground/[0.06]"
          : "bg-transparent"
      )}
      style={
        isScrolled
          ? { backgroundColor: "rgba(11, 11, 13, 0.92)", backdropFilter: "blur(12px)" }
          : undefined
      }
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4 lg:px-12 lg:py-5 max-w-[1600px]">
        <Link
          href="/"
          className="font-serif text-lg tracking-wide text-foreground hover:text-primary transition-colors duration-300"
        >
          BEAUTY & SPORT
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm tracking-wide transition-colors duration-300 link-underline-grow",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-primary" />
              )}
            </Link>
          ))}
          <Link
            href="/#booking"
            className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-wider uppercase btn-premium"
          >
            Записаться
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav - clean dark glass panel */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500",
          isMobileOpen ? "max-h-[400px] border-b border-foreground/[0.06]" : "max-h-0"
        )}
        style={{ backgroundColor: "rgba(10, 10, 12, 0.96)" }}
      >
        <nav className="flex flex-col px-6 py-6 gap-5" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base tracking-wide transition-colors duration-300",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#booking"
            className="mt-2 px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wider uppercase text-center btn-premium"
          >
            Записаться
          </Link>
        </nav>
      </div>
    </header>
  )
}
