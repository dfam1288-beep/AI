import { reviews } from "@/lib/data"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function ReviewsSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-muted">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 section-hairline" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <AnimateOnScroll>
          <p className="kicker text-muted-foreground mb-8">
            Отзывы
          </p>
          <h2 className="headline-section font-serif text-foreground mb-16 lg:mb-24">
            Что говорят<br />клиентки
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review, index) => (
            <AnimateOnScroll key={review.id} delay={index * 100}>
              <blockquote className="flex flex-col h-full">
                <div className="mb-6">
                  <span className="font-serif text-5xl text-primary/30 leading-none select-none">
                    {"\u201C"}
                  </span>
                </div>
                <p className="text-sm text-sand/80 leading-relaxed flex-1 mb-8 font-sans">
                  {review.text}
                </p>
                <footer className="border-t border-foreground/[0.06] pt-4">
                  <cite className="not-italic">
                    <span className="text-sm font-serif text-foreground block">
                      {review.name}
                    </span>
                    <span className="text-xs text-muted-foreground tracking-wide font-sans">
                      {review.service}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
