import type { Metadata } from "next"
import { ServiceHero } from "@/components/service-hero"
import { ServiceList } from "@/components/service-list"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SportPromise } from "@/components/sport/sport-promise"
import { SportPainPoints } from "@/components/sport/sport-pain-points"
import { SportSlogan } from "@/components/sport/sport-slogan"
import {
  portfolioItems,
  sportMakeupServices,
  sportMakeupFAQ,
} from "@/lib/data"

export const metadata: Metadata = {
  title: "Спортивный макияж — Для соревнований и съёмок | Якутск",
  description:
    "Профессиональный спортивный макияж в Якутске. Стойкий макияж для соревнований, съемок и сцены. Укладка пучка. С моим макияжем выигрывают.",
  openGraph: {
    title: "Спортивный макияж — Для соревнований и съёмок",
    description:
      "Стойкий макияж, который держится всё выступление. Подчёркиваю образ и передаю эмоции на расстоянии.",
    type: "website",
    locale: "ru_RU",
  },
}

export default function SportMakeupPage() {
  const sportPortfolio = portfolioItems.filter(
    (item) => item.category === "sport-makeup"
  )

  return (
    <>
      <ServiceHero
        title="Спортивный макияж"
        subtitle="Услуги"
        description="Стойкий, яркий макияж для соревнований и съёмок. Укладка пучка. Выглядите уверенно, выступайте безупречно."
      />
      <SportPromise />
      <SportSlogan />
      <ServiceList services={sportMakeupServices} title="Услуги" />
      <SportPainPoints />
      <PortfolioGrid items={sportPortfolio} title="Работы — Спортивный макияж" />
      <FAQSection items={sportMakeupFAQ} />
      <CTASection
        title="С моим макияжем выигрывают"
        subtitle="Запишитесь на пробный макияж или консультацию"
        buttonText="Записаться"
      />
    </>
  )
}
