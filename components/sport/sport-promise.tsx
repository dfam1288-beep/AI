import { AnimateOnScroll } from "@/components/animate-on-scroll"
import Link from "next/link"

export function SportPromise() {
  return (
    <section className="relative py-24 lg:py-40 bg-background">
      <div className="absolute top-0 inset-x-0 section-hairline" />
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <AnimateOnScroll>
            <h2 className="headline-section font-serif text-foreground">
              Макияж, который
              <br />
              работает на вас
            </h2>
          </AnimateOnScroll>
          <div className="lg:pt-4">
            <AnimateOnScroll delay={100}>
              <p className="text-sm text-sand/80 leading-relaxed mb-6 font-sans">
                Спортивный макияж — это не просто красивый образ. Это инструмент,
                который помогает передать эмоции, подчеркнуть движение и запомниться
                судьям. Я знаю, как это работает, потому что работаю со спортсменками.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-sm text-sand/80 leading-relaxed mb-8 font-sans">
                Использую стойкую профессиональную косметику, которая держится всё
                выступление — даже при физических нагрузках, софитах и софтбоксах.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <Link
                href="/#booking"
                className="inline-block text-sm text-primary tracking-wide border-b border-primary/30 pb-1 hover:border-primary transition-colors"
              >
                {"Записаться на пробный макияж ->"}
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
