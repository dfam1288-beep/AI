"use client"

import { useState } from "react"
import { PlaceholderImage } from "@/components/placeholder-image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { RevealImage } from "@/components/reveal-image"
import type { PortfolioItem, PortfolioCategory } from "@/lib/data"
import { cn } from "@/lib/utils"

interface PortfolioGridProps {
  items: PortfolioItem[]
  showFilter?: boolean
  title?: string
}

const filterLabels: Record<string, string> = {
  all: "Все",
  brows: "Брови",
  lashes: "Ресницы",
  "sport-makeup": "Спортивный макияж",
}

export function PortfolioGrid({
  items,
  showFilter = false,
  title,
}: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory | "all">("all")

  const filtered =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter)

  return (
    <section className="relative py-24 lg:py-40">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 section-hairline" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {title && (
          <AnimateOnScroll>
            <p className="kicker text-muted-foreground mb-8">
              Портфолио
            </p>
            <h2 className="headline-section font-serif text-foreground mb-6">
              {title}
            </h2>
          </AnimateOnScroll>
        )}

        {showFilter && (
          <AnimateOnScroll delay={100}>
            <div className="flex flex-wrap gap-3 mb-14 mt-8">
              {(["all", "brows", "lashes", "sport-makeup"] as const).map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 border font-sans",
                      activeFilter === filter
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-muted-foreground border-foreground/10 hover:border-foreground/30 hover:text-foreground"
                    )}
                  >
                    {filterLabels[filter]}
                  </button>
                )
              )}
            </div>
          </AnimateOnScroll>
        )}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-5 space-y-4 lg:space-y-5">
          {filtered.map((item, index) => (
            <AnimateOnScroll
              key={item.id}
              delay={Math.min(index * 50, 300)}
            >
              <div className="break-inside-avoid group cursor-pointer">
                <RevealImage delay={Math.min(index * 40, 240)}>
                  <div className="relative overflow-hidden">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                      <PlaceholderImage
                        label={item.caption}
                        aspect={item.aspect}
                        src={item.image}
                      />
                    </div>
                  </div>
                </RevealImage>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
