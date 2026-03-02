"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

/* tiny 1x1 transparent-ish blurred placeholder */
const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMTMxMzE2Ii8+PC9zdmc+"

interface PlaceholderImageProps {
  label?: string
  className?: string
  aspect?: "portrait" | "landscape" | "square"
  src?: string
  priority?: boolean
  sizes?: string
}

export function PlaceholderImage({
  label,
  className,
  aspect = "portrait",
  src,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: PlaceholderImageProps) {
  const [imgError, setImgError] = useState(false)

  const aspectClass =
    aspect === "portrait"
      ? "aspect-[3/4]"
      : aspect === "landscape"
        ? "aspect-[4/3]"
        : "aspect-square"

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        aspectClass,
        className
      )}
      style={{ backgroundColor: "hsl(240 5% 9%)" }}
    >
      {src && !imgError ? (
        <Image
          src={src}
          alt={label || ""}
          fill
          sizes={sizes}
          quality={75}
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          className="object-cover"
          style={{ filter: "saturate(0.85) contrast(1.05)" }}
          onError={() => {
            console.error("[v0] Image load failed:", src)
            setImgError(true)
          }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(240 5% 8%) 0%, hsl(240 4% 14%) 50%, hsl(352 30% 10%) 100%)",
          }}
        />
      )}

      {/* Subtle dark scrim for caption readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/[0.06] to-transparent" />

      {label && (
        <div className="absolute inset-0 flex items-end p-4 md:p-5">
          <span className="relative z-10 text-[11px] font-sans text-white/70 tracking-wide drop-shadow-sm">
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
