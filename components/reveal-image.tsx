"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealImageProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

/**
 * Wraps an image block with a clip-path "reveal-up" animation on scroll.
 * The CSS keyframe is defined in globals.css (.reveal-image / .reveal-image.is-visible).
 */
export function RevealImage({ children, className, delay = 0 }: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("reveal-image", visible && "is-visible", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
