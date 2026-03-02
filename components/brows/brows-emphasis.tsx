import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function BrowsEmphasis() {
  return (
    <section className="relative py-24 lg:py-32 bg-secondary text-secondary-foreground grain-overlay overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10">
        <AnimateOnScroll>
          <p className="kicker text-secondary-foreground/50 mb-8">
            Специализация
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h2 className="font-serif text-secondary-foreground leading-[0.95] max-w-4xl" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}>
            Профессионально работаю с густыми бровями — аккуратно, безопасно,
            предсказуемо
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="mt-8 text-sm text-sand/70 leading-relaxed max-w-xl font-sans">
            Густые брови — особенность, актуальная для холодного климата и региона.
            Знаю, как работать с плотным ростом волосков, чтобы результат был
            аккуратным и естественным, без «пустот» и резких линий.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
