import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function SportSlogan() {
  return (
    <section className="relative py-24 lg:py-36 bg-secondary text-secondary-foreground grain-overlay overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10 text-center">
        <AnimateOnScroll>
          <p className="font-serif uppercase text-secondary-foreground leading-[0.9] tracking-tight" style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}>
            С моим макияжем
            <br />
            <span className="text-primary">выигрывают</span>
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="mt-8 text-secondary-foreground/50 text-sm tracking-[0.3em] uppercase">
            Мой макияж всегда на первом месте
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
