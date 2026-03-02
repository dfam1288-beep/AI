import type { Metadata } from "next"
import { ServiceHero } from "@/components/service-hero"
import { ServiceList } from "@/components/service-list"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { BrowsPromise } from "@/components/brows/brows-promise"
import { BrowsPainPoints } from "@/components/brows/brows-pain-points"
import { BrowsEmphasis } from "@/components/brows/brows-emphasis"
import { portfolioItems, browsServices, browsFAQ } from "@/lib/data"

export const metadata: Metadata = {
  title: "Брови — Коррекция, Окрашивание, Ламинирование | Якутск",
  description:
    "Профессиональная коррекция, окрашивание и ламинирование бровей в Якутске. Работа с густыми бровями, перекрытие перманента. Индивидуальный подбор составов.",
  openGraph: {
    title: "Брови — Коррекция, Окрашивание, Ламинирование",
    description:
      "Профессиональная работа с бровями любой сложности. Индивидуальный подход к каждой клиентке.",
    type: "website",
    locale: "ru_RU",
  },
}

export default function BrowsPage() {
  const browsPortfolio = portfolioItems.filter((item) => item.category === "brows")

  return (
    <>
      <ServiceHero
        title="Брови"
        subtitle="Услуги"
        description="Коррекция, окрашивание, ламинирование. Работаю с любой сложностью — от густых природных бровей до перекрытия перманентного макияжа."
      />
      <BrowsPromise />
      <ServiceList services={browsServices} title="Услуги" />
      <BrowsEmphasis />
      <BrowsPainPoints />
      <PortfolioGrid items={browsPortfolio} title="Работы — Брови" />
      <FAQSection items={browsFAQ} />
      <CTASection
        title="Запишитесь на брови"
        subtitle="Обсудим форму, оттенок и подберём процедуру под ваши пожелания"
      />
    </>
  )
}
