import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  href?: string
}

export function CTASection({
  title = "Записаться на консультацию",
  subtitle = "Обсудим ваши пожелания и подберём идеальную процедуру",
  buttonText = "Записаться",
  href = "/#booking",
}: CTASectionProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground grain-overlay overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 text-center relative z-10">
        <AnimateOnScroll>
          <h2 className="headline-section font-serif text-primary-foreground mb-6">{title}</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-sm text-primary-foreground/60 max-w-lg mx-auto mb-10 leading-relaxed font-sans">
            {subtitle}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <Link
            href={href}
            className="inline-block px-10 py-4 border border-primary-foreground/20 text-primary-foreground text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary-foreground hover:text-primary font-sans"
            style={{ transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)" }}
          >
            {buttonText}
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
