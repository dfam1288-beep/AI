import { AnimateOnScroll } from "@/components/animate-on-scroll"
import Link from "next/link"

export function BrowsPromise() {
  return (
    <section className="relative py-24 lg:py-40 bg-background">
      <div className="absolute top-0 inset-x-0 section-hairline" />
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <AnimateOnScroll>
            <h2 className="headline-section font-serif text-foreground">
              Ваши брови —
              <br />
              моя ответственность
            </h2>
          </AnimateOnScroll>
          <div className="lg:pt-4">
            <AnimateOnScroll delay={100}>
              <p className="text-sm text-sand/80 leading-relaxed mb-6 font-sans">
                Каждая форма бровей уникальна. Я не работаю по шаблону — анализирую
                анатомию лица, тип роста волосков, ваш стиль и пожелания. Результат
                всегда естественный и аккуратный.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-sm text-sand/80 leading-relaxed mb-8 font-sans">
                Использую только проверенные составы и технику, которая минимизирует
                риски. Провожу консультацию перед каждой процедурой — чтобы вы точно
                знали, чего ожидать.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <Link
                href="/#booking"
                className="inline-block text-sm text-primary tracking-wide border-b border-primary/30 pb-1 hover:border-primary transition-colors"
              >
                {"Записаться на консультацию ->"}
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
