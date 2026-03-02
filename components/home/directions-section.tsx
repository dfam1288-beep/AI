import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { RevealImage } from "@/components/reveal-image"
import { PlaceholderImage } from "@/components/placeholder-image"

const directions = [
  {
    title: "Брови",
    href: "/brows",
    description:
      "Коррекция, окрашивание, ламинирование. Работаю с любой сложностью — густые брови, перманент, осветление.",
    duration: "от 20 мин",
    image: "/images/direction-brows.jpg",
  },
  {
    title: "Ресницы",
    href: "/lashes",
    description:
      "Окрашивание и ламинирование с индивидуальным подбором состава. Безопасно, красиво, надолго.",
    duration: "от 30 мин",
    image: "/images/direction-lashes.jpg",
  },
  {
    title: "Спортивный макияж",
    href: "/sport-makeup",
    description:
      "Стойкий макияж для соревнований и съемок. Укладка пучка. Выглядите на первом месте.",
    duration: "от 60 мин",
    image: "/images/direction-sport.jpg",
  },
]

export function DirectionsSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-muted">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 section-hairline" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-24">
          <div className="lg:col-span-4">
            <AnimateOnScroll>
              <p className="kicker text-muted-foreground mb-8">
                Направления
              </p>
              <h2 className="headline-section font-serif text-foreground">
                Чем я<br />занимаюсь
              </h2>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-foreground/[0.06]">
          {directions.map((direction, index) => (
            <AnimateOnScroll key={direction.href} delay={index * 120}>
              <Link href={direction.href} className="group block bg-muted p-6 lg:p-10">
                <RevealImage delay={index * 80}>
                  <div className="relative overflow-hidden mb-8">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                      <PlaceholderImage
                        label={direction.title}
                        aspect="landscape"
                        src={direction.image}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                </RevealImage>
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {direction.title}
                </h3>
                <p className="text-sm text-sand/60 leading-relaxed mb-6 font-sans">
                  {direction.description}
                </p>
                <div className="section-hairline mb-5" />
                <div className="flex items-center justify-between">
                  <span className="kicker text-muted-foreground">
                    {direction.duration}
                  </span>
                  <span className="text-xs text-primary tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-300 font-sans">
                    {"Смотреть ->"}
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
