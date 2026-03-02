import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { RevealImage } from "@/components/reveal-image"
import { PlaceholderImage } from "@/components/placeholder-image"

const highlights = [
  "Опыт работы более 2 лет",
  "Специализация на спортсменках",
  "Индивидуальный подбор составов",
  "Работа со сложными бровями и короткими ресницами",
  "Перекрытие перманентного макияжа",
]

export function AboutSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-background">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 section-hairline" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Image column - clip-path reveal */}
          <div className="lg:col-span-5">
            <RevealImage>
              <PlaceholderImage
                label="Мастер за работой"
                aspect="portrait"
                className="w-full"
                src="/images/about-portrait.jpg"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </RevealImage>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 lg:pt-16">
            <AnimateOnScroll>
              <p className="kicker text-muted-foreground mb-8">
                Обо мне
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="headline-section font-serif text-foreground mb-10">
                Создаю красоту,
                <br />
                которая работает
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-sm lg:text-base text-sand/80 leading-relaxed max-w-xl mb-12 font-sans">
                Я работаю с теми, кому важно выглядеть безупречно на соревнованиях,
                съемках и в повседневной жизни. Подбираю составы и технику
                индивидуально — с учетом структуры волосков, типа кожи и ваших
                пожеланий. Приходите и не думайте ни о чем — у меня можно
                расслабиться.
              </p>
            </AnimateOnScroll>

            {/* Hairline before list */}
            <div className="section-hairline mb-8" />

            <div className="flex flex-col gap-5">
              {highlights.map((item, index) => (
                <AnimateOnScroll key={index} delay={250 + index * 60}>
                  <div className="flex items-center gap-5">
                    <span className="w-8 h-px bg-primary flex-shrink-0" />
                    <span className="text-xs lg:text-sm text-foreground/70 tracking-wide font-sans">
                      {item}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
