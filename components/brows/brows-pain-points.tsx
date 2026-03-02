import { AnimateOnScroll } from "@/components/animate-on-scroll"

const painPoints = [
  {
    problem: "Брови быстро теряют форму",
    solution: "Подбираю технику коррекции, которая учитывает скорость роста и направление волосков.",
  },
  {
    problem: "Не нравится результат окрашивания",
    solution: "Тестирую оттенок до процедуры и подбираю цвет под ваш цветотип.",
  },
  {
    problem: "Неудачный перманент",
    solution: "Перекрываю старый перманент поэтапно — безопасно и с прогнозируемым результатом.",
  },
  {
    problem: "Слишком густые / непослушные брови",
    solution: "Специализируюсь на работе с густыми бровями. Ламинирование + коррекция = идеальная форма.",
  },
  {
    problem: "Боюсь испортить брови",
    solution: "Провожу подробную консультацию перед каждой процедурой. Вы знаете, чего ожидать.",
  },
]

export function BrowsPainPoints() {
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
