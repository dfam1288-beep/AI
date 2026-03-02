import { AnimateOnScroll } from "@/components/animate-on-scroll"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description?: string
}

export function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden bg-background">
      {/* Faint editorial grid */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(122,16,32,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 lg:px-12 pb-16 lg:pb-24 pt-32">
        <AnimateOnScroll>
          <p className="kicker text-muted-foreground mb-8">
            {subtitle}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h1
            className="headline-editorial font-serif text-foreground uppercase"
            style={{ textShadow: "0 2px 40px rgba(0,0,0,0.3)" }}
          >
            {title}
          </h1>
        </AnimateOnScroll>
        {description && (
          <AnimateOnScroll delay={200}>
            <p className="mt-10 text-base lg:text-lg text-sand/80 max-w-xl leading-relaxed font-sans">
              {description}
            </p>
          </AnimateOnScroll>
        )}
      </div>
      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 section-hairline" />
    </section>
  )
}
