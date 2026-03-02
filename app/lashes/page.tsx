import type { Metadata } from "next"
import { ServiceHero } from "@/components/service-hero"
import { ServiceList } from "@/components/service-list"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { LashesPromise } from "@/components/lashes/lashes-promise"
import { LashesPainPoints } from "@/components/lashes/lashes-pain-points"
import { LashesSafety } from "@/components/lashes/lashes-safety"
import { portfolioItems, lashesServices, lashesFAQ } from "@/lib/data"

export const metadata: Metadata = {
  title: "Ресницы — Окрашивание, Ламинирование | Якутск",
  description:
    "Профессиональное окрашивание и ламинирование ресниц в Якутске. Индивидуальный подбор состава, безопасные материалы. Эффект до 8 недель.",
  openGraph: {
    title: "Ресницы — Окрашивание, Ламинирование",
    description:
      "Индивидуальный подбор состава для безопасного и красивого результата. Эффект до 8 недель.",
    type: "website",
    locale: "ru_RU",
  },
}

export default function LashesPage() {
  const lashesPortfolio = portfolioItems.filter((item) => item.category === "lashes")

  return (
    <>
      <ServiceHero
        title="Ресницы"
        subtitle="Услуги"
        description="Окрашивание и ламинирование с индивидуальным подбором состава. Безопасно, красиво, надолго."
      />
      <LashesPromise />
      <ServiceList services={lashesServices} title="Услуги" />
      <LashesSafety />
      <LashesPainPoints />
      <PortfolioGrid items={lashesPortfolio} title="Работы — Ресницы" />
      <FAQSection items={lashesFAQ} />
      <CTASection
        title="Запишитесь на ресницы"
        subtitle="Обсудим ваш тип ресниц и подберём идеальную процедуру"
      />
    </>
  )
}
