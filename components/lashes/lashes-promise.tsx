import { AnimateOnScroll } from "@/components/animate-on-scroll"
import Link from "next/link"

export function LashesPromise() {
  return (
    <section className="relative py-24 lg:py-40 bg-background">
      <div className="absolute top-0 inset-x-0 section-hairline" />
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <AnimateOnScroll>
            <h2 className="headline-section font-serif text-foreground">
              Открытый взгляд
              <br />
              без наращивания
            </h2>
          </AnimateOnScroll>
          <div className="lg:pt-4">
            <AnimateOnScroll delay={100}>
              <p className="text-sm text-sand/80 leading-relaxed mb-6 font-sans">
                Ламинирование и окрашивание — это способ подчеркнуть натуральную
                красоту ресниц без ежедневного макияжа. Эффект сохраняется до 8
                недель и выглядит максимально естественно.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-sm text-sand/80 leading-relaxed mb-8 font-sans">
                Я подбираю состав и время выдержки индивидуально для каждой
                клиентки, чтобы результат был красивым и безопасным.
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
