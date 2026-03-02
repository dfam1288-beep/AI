import { AnimateOnScroll } from "@/components/animate-on-scroll"

const painPoints = [
  {
    problem: "Макияж течёт во время выступления",
    solution: "Использую профессиональную стойкую косметику и технику фиксации, рассчитанную на физические нагрузки.",
  },
  {
    problem: "Не знаю, какой образ выбрать",
    solution: "Провожу консультацию и пробный макияж. Вместе подберём стиль, который подчеркнёт ваш номер.",
  },
  {
    problem: "Нужен макияж для ребёнка",
    solution: "Работаю с юными спортсменками. Использую гипоаллергенную косметику и учитываю возрастные особенности.",
  },
  {
    problem: "Выступление в другом городе",
    solution: "Выезжаю на соревнования и мероприятия. Условия обсуждаем индивидуально.",
  },
  {
    problem: "Нужна укладка пучка",
    solution: "Классический или конкурсный пучок — аккуратно, надёжно, с декором при необходимости.",
  },
]

export function SportPainPoints() {
  return (
    <section className="relative py-24 lg:py-40 bg-muted">
      <div className="absolute top-0 inset-x-0 section-hairline" />
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <AnimateOnScroll>
          <h2 className="headline-section font-serif text-foreground mb-16 lg:mb-20">
            Кому подойдёт
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col gap-0">
          {painPoints.map((point, index) => (
            <AnimateOnScroll key={index} delay={index * 80}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 py-8 border-b border-foreground/[0.06]">
                <p className="text-foreground font-serif text-lg lg:text-xl">
                  {point.problem}
                </p>
                <p className="text-sand/80 leading-relaxed text-sm font-sans">
                  {point.solution}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
