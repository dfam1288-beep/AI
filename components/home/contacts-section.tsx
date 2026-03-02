import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function ContactsSection() {
  return (
    <section id="contacts" className="relative py-24 lg:py-40 bg-muted">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 section-hairline" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimateOnScroll>
            <p className="kicker text-muted-foreground mb-8">
              Связаться
            </p>
            <h2 className="headline-section font-serif text-foreground mb-6">
              Контакты
            </h2>
            <p className="text-sm lg:text-base text-sand/80 leading-relaxed max-w-md font-sans">
              Свяжитесь со мной любым удобным способом или оставьте заявку через
              форму записи выше.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="flex flex-col gap-8">
              <div>
                <p className="kicker text-muted-foreground mb-3">
                  Адрес
                </p>
                <p className="text-sm text-foreground font-sans">
                  г. Якутск, Республика Саха (Якутия)
                </p>
              </div>
              <div className="section-hairline" />
              <div>
                <p className="kicker text-muted-foreground mb-3">
                  График работы
                </p>
                <p className="text-sm text-foreground font-sans">Пн — Сб: 10:00 — 20:00</p>
                <p className="text-sm text-foreground font-sans">Вс: выходной</p>
              </div>
              <div className="section-hairline" />
              <div>
                <p className="kicker text-muted-foreground mb-3">
                  Социальные сети
                </p>
                <div className="flex gap-6">
                  <span className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer link-underline-grow font-sans">
                    Telegram
                  </span>
                  <span className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer link-underline-grow font-sans">
                    WhatsApp
                  </span>
                  <span className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer link-underline-grow font-sans">
                    Instagram
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
