"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const MARQUEE =
  "BEAUTY & SPORT \u00a0\u2014\u00a0 DIOR \u00a0\u2014\u00a0 MAC \u00a0\u2014\u00a0 MAKE UP FOR EVER \u00a0\u2014\u00a0 ANASTASIA \u00a0\u2014\u00a0 YAKUTSK \u00a0\u2014\u00a0 "

export function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)
  const [heroImgError, setHeroImgError] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setOffsetY(window.scrollY * 0.06)
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Faint editorial grid */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(122,16,32,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-end">
        <div className="mx-auto max-w-[1600px] w-full px-6 lg:px-12 pb-16 lg:pb-24 pt-40 lg:pt-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
            {/* Left: Typography */}
            <div className="lg:col-span-7 xl:col-span-7">
              <AnimateOnScroll>
                <p className="kicker text-muted-foreground mb-8 lg:mb-10">
                  Yakutsk / Beauty & Sport / Since 2023
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={80}>
                <h1
                  className="font-serif text-foreground"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 9.5rem)",
                    lineHeight: 0.87,
                    letterSpacing: "-0.03em",
                    fontWeight: 400,
                    textShadow: "0 2px 60px rgba(0,0,0,0.25)",
                  }}
                >
                  <span className="block">Спортивный</span>
                  <span className="block text-primary mt-1">визажист</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <p className="mt-10 lg:mt-12 text-base lg:text-lg text-sand/80 max-w-md leading-relaxed font-sans">
                  Подчеркиваю индивидуальность, создаю уверенность
                  и готовлю к выступлениям и съемкам
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-start gap-5">
                  <Link
                    href="/#booking"
                    className="px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase btn-premium font-sans"
                  >
                    Записаться на консультацию
                  </Link>
                  <p className="text-[11px] text-muted-foreground tracking-wide self-center font-sans">
                    Онлайн-консультация перед записью
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right: Editorial image */}
            <div className="lg:col-span-5 xl:col-span-5 hidden lg:block">
              <AnimateOnScroll delay={150}>
                <div
                  ref={imgRef}
                  className="relative overflow-hidden aspect-[3/4] w-full max-w-[420px] ml-auto"
                >
                  {!heroImgError ? (
                    <Image
                      src="/images/hero-portrait.jpg"
                      alt="Editorial beauty portrait"
                      fill
                      sizes="(max-width: 1024px) 0px, 420px"
                      quality={75}
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMTMxMzE2Ii8+PC9zdmc+"
                      className="object-cover"
                      style={{
                        transform: `translateY(${offsetY}px)`,
                        filter: "saturate(0.8) contrast(1.05)",
                        willChange: "transform",
                      }}
                      onError={() => {
                        console.error("[v0] Hero image load failed: /images/hero-portrait.jpg")
                        setHeroImgError(true)
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
                  <div className="absolute inset-0 bg-black/[0.06]" />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee band ── */}
      <div className="relative z-10 border-t border-foreground/[0.06] py-4 overflow-hidden">
        <div className="marquee-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 whitespace-nowrap font-sans"
            >
              {MARQUEE}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 section-hairline" />
    </section>
  )
}
