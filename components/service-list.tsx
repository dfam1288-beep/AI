"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import type { SubService } from "@/lib/data"

interface ServiceListProps {
  services: SubService[]
  title?: string
}

export function ServiceList({
  services,
  title = "Услуги",
}: ServiceListProps) {
  return (
    <section className="relative py-24 lg:py-40 bg-background">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 section-hairline" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <AnimateOnScroll>
          <p className="kicker text-muted-foreground mb-8">Услуги и цены</p>
          <h2 className="headline-section font-serif text-foreground mb-12 lg:mb-20">
            {title}
          </h2>
        </AnimateOnScroll>

        <Accordion type="single" collapsible className="w-full max-w-4xl">
          {services.map((service, index) => (
            <AnimateOnScroll key={index} delay={index * 80}>
              <AccordionItem
                value={`service-${index}`}
                className="border-b border-foreground/[0.06]"
              >
                <AccordionTrigger className="py-8 hover:no-underline group">
                  <div className="flex flex-col items-start text-left gap-2 w-full pr-8">
                    <span className="text-xl lg:text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </span>
                    <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                      <span>{service.duration}</span>
                      <span className="text-primary">{service.price}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <p className="text-sand/80 leading-relaxed">
                      {service.description}
                    </p>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                        Что входит
                      </p>
                      <ul className="flex flex-col gap-2">
                        {service.includes.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-foreground/80 flex items-center gap-3"
                          >
                            <span className="w-1 h-1 bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </AnimateOnScroll>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
