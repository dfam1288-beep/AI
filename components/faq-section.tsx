"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import type { FAQItem } from "@/lib/data"

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
}

export function FAQSection({ items, title = "Частые вопросы" }: FAQSectionProps) {
  return (
    <section className="relative py-24 lg:py-40 bg-background">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 section-hairline" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <AnimateOnScroll>
            <p className="kicker text-muted-foreground mb-8">FAQ</p>
            <h2 className="headline-section font-serif text-foreground sticky top-32">
              {title}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-foreground/[0.06]"
                >
                  <AccordionTrigger className="text-left text-base font-normal tracking-wide py-6 hover:no-underline text-foreground hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sand/80 leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
