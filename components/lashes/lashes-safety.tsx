import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function LashesSafety() {
  return (
    <section className="relative py-24 lg:py-32 bg-secondary text-secondary-foreground grain-overlay overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10">
        <AnimateOnScroll>
          <p className="kicker text-secondary-foreground/50 mb-8">
            Безопасность
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h2 className="font-serif text-secondary-foreground leading-[0.95] max-w-4xl" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}>
            Состав подбираю индивидуально — чтобы не пересушить и не
            {" \u00AB"}сжечь{"\u00BB"} ресницы
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="mt-8 text-sm text-sand/70 leading-relaxed max-w-xl font-sans">
            Время выдержки, сила состава, количество слоёв — всё подбираю под
            структуру именно ваших ресниц. Это особенно важно для тонких, коротких
            или повреждённых после наращивания ресниц.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
