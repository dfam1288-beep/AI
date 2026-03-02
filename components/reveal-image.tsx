"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealImageProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

/**
 * Wraps content with a clip-path "reveal-up" animation on scroll.
 *
 * Safety guarantees:
 * - Content is visible by default (no clip-path in CSS on .reveal-image alone).
 * - JS adds .is-clipped after mount, then .is-visible on intersect.
 * - If IntersectionObserver is unavailable or callback doesn't fire within
 *   600 ms of mount, content is force-revealed.
 * - prefers-reduced-motion: shows content immediately, no animation.
 */
export function RevealImage({ children, className, delay = 0 }: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Start as "revealed" so SSR/no-JS always shows content.
  // After mount we set clipped=true, then revealed=true on intersect.
  const [clipped, setClipped] = useState(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    // Respect prefers-reduced-motion: skip animation entirely
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const el = ref.current
    if (!el) return

    // Apply clipped state now that JS is running
    setClipped(true)

    // Failsafe timer: force reveal if observer never fires
    const failsafe = setTimeout(() => {
      setRevealed(true)
      if (process.env.NODE_ENV === "development") {
        console.log("[v0] RevealImage failsafe triggered for", el)
      }
    }, 600)

    // If IntersectionObserver is not available, reveal immediately
    if (typeof IntersectionObserver === "undefined") {
      clearTimeout(failsafe)
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(failsafe)
          setRevealed(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    )
    observer.observe(el)

    return () => {
      clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-image",
        clipped && !revealed && "is-clipped",
        revealed && "is-visible",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
