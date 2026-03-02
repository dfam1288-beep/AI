"use client"

import { useState } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const services = [
  "Коррекция бровей",
  "Окрашивание бровей",
  "Ламинирование бровей",
  "Перекрытие перманента",
  "Окрашивание ресниц",
  "Ламинирование ресниц",
  "Спортивный макияж",
  "Макияж для съёмок",
  "Укладка пучка",
  "Другое",
]

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="relative py-24 lg:py-40 bg-background">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 section-hairline" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimateOnScroll>
            <div>
              <p className="kicker text-muted-foreground mb-8">
                Запись
              </p>
              <h2 className="headline-section font-serif text-foreground mb-6">
                Записаться
              </h2>
              <p className="text-sm lg:text-base text-sand/80 leading-relaxed max-w-md mb-8 font-sans">
                Оставьте заявку, и я свяжусь с вами в течение дня для подтверждения
                записи и бесплатной консультации.
              </p>
              <div className="section-hairline mb-6" />
              <div className="flex flex-col gap-3 text-sm text-muted-foreground font-sans">
                <p>Онлайн-консультация перед записью</p>
                <p>Ответ в течение дня</p>
                <p>Подбор удобного времени</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            {submitted ? (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <p className="headline-sub font-serif text-foreground mb-4">
                    Спасибо!
                  </p>
                  <p className="text-muted-foreground font-sans">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block kicker text-muted-foreground mb-3"
                  >
                    Имя
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-foreground/[0.08] py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-sans text-sm"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block kicker text-muted-foreground mb-3"
                  >
                    Телефон
                  </label>
                  <input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full bg-transparent border-b border-foreground/[0.08] py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-sans text-sm"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label
                    htmlFor="booking-messenger"
                    className="block kicker text-muted-foreground mb-3"
                  >
                    WhatsApp / Telegram
                  </label>
                  <input
                    id="booking-messenger"
                    name="messenger"
                    type="text"
                    className="w-full bg-transparent border-b border-foreground/[0.08] py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-sans text-sm"
                    placeholder="@username или номер"
                  />
                </div>
                <div>
                  <label
                    htmlFor="booking-service"
                    className="block kicker text-muted-foreground mb-3"
                  >
                    Услуга
                  </label>
                  <select
                    id="booking-service"
                    name="service"
                    required
                    className="w-full bg-transparent border-b border-foreground/[0.08] py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer font-sans text-sm"
                  >
                    <option value="" disabled>
                      Выберите услугу
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="booking-comment"
                    className="block kicker text-muted-foreground mb-3"
                  >
                    Комментарий
                  </label>
                  <textarea
                    id="booking-comment"
                    name="comment"
                    rows={3}
                    className="w-full bg-transparent border-b border-foreground/[0.08] py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none font-sans text-sm"
                    placeholder="Дополнительные пожелания"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase self-start btn-premium font-sans"
                >
                  Записаться
                </button>
                <p className="text-[11px] text-muted-foreground mt-1 font-sans tracking-wide">
                  Мы свяжемся с вами в течение дня
                </p>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
