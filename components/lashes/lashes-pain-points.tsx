import { AnimateOnScroll } from "@/components/animate-on-scroll"

const painPoints = [
  {
    problem: "Ресницы повреждены после наращивания",
    solution: "Восстанавливаю ресницы с помощью ламинирования с ботоксом и уходовыми составами.",
  },
  {
    problem: "Короткие или прямые ресницы",
    solution: "Ламинирование создаёт красивый изгиб даже на коротких ресницах — взгляд становится открытым.",
  },
  {
    problem: "Не хочу краситься каждый день",
    solution: "Окрашивание + ламинирование = ухоженный вид без туши на 6-8 недель.",
  },
  {
    problem: "Боюсь аллергии или раздражения",
    solution: "Использую гипоаллергенные составы и всегда провожу предварительную консультацию.",
  },
]

export function LashesPainPoints() {
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
