import { brands } from "@/lib/data"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function BrandsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-background">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 section-hairline" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <AnimateOnScroll>
          <p className="kicker text-muted-foreground mb-14 text-center">
            Работаю с проверенными брендами
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-sm lg:text-base tracking-widest uppercase text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-default font-sans"
              >
                {brand}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
