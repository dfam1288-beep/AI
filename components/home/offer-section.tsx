import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function OfferSection() {
  return (
    <section className="relative py-24 lg:py-36 bg-primary text-primary-foreground grain-overlay overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateOnScroll>
              <p className="kicker text-primary-foreground/50 mb-8">
                Специальное предложение
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h2 className="font-serif text-primary-foreground leading-[0.92]" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
                Скидка на первую консультацию
                <span className="block text-primary-foreground/70 italic mt-3" style={{ fontSize: "0.7em" }}>
                  -20%
                </span>
              </h2>
            </AnimateOnScroll>
          </div>
          <div className="lg:text-right">
            <AnimateOnScroll delay={200}>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-8 max-w-md lg:ml-auto font-sans">
                Запишитесь на бесплатную онлайн-консультацию и получите скидку 20%
                на первую процедуру. Обсудим ваши пожелания и подберём идеальный
                вариант.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <Link
                href="/#booking"
                className="inline-block px-10 py-4 border border-primary-foreground/20 text-primary-foreground text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary-foreground hover:text-primary font-sans"
              >
                Записаться
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
