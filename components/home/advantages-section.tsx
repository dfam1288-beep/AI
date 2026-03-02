import { AnimateOnScroll } from "@/components/animate-on-scroll"

const advantages = [
  {
    number: "01",
    title: "Индивидуальный подбор составов",
    description:
      "Каждая клиентка уникальна. Подбираю состав и технику под вашу структуру волосков и тип кожи.",
  },
  {
    number: "02",
    title: "Работа с густыми бровями",
    description:
      "Важно для холодного климата и актуально для Якутска. Аккуратно, безопасно, предсказуемо.",
  },
  {
    number: "03",
    title: "Безопасные материалы",
    description:
      "Использую только проверенные профессиональные бренды с сертификацией и контролем качества.",
  },
  {
    number: "04",
    title: "Расслабление и отдых",
    description:
      "Процедура — это время для себя. Создаю комфортную атмосферу, где можно расслабиться и отдохнуть от рутины.",
  },
  {
    number: "05",
    title: "Консультация перед процедурой",
    description:
      "Всегда провожу бесплатную консультацию. Обсудим ваши пожелания и подберём идеальный вариант.",
  },
]

export function AdvantagesSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-background">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 section-hairline" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <AnimateOnScroll>
          <p className="kicker text-muted-foreground mb-8">
            Преимущества
          </p>
          <h2 className="headline-section font-serif text-foreground mb-16 lg:mb-24">
            Почему
            <br />
            выбирают меня
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-14 lg:gap-y-20">
          {advantages.map((advantage, index) => (
            <AnimateOnScroll key={index} delay={index * 80}>
              <div className="group">
                <span className="text-xs font-sans text-primary tracking-[0.2em] mb-5 block">
                  {advantage.number}
                </span>
                <div className="section-hairline mb-5" />
                <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 leading-tight">
                  {advantage.title}
                </h3>
                <p className="text-sm text-sand/70 leading-relaxed font-sans">
                  {advantage.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
