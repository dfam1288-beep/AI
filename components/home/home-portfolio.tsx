import { portfolioItems } from "@/lib/data"
import { PortfolioGrid } from "@/components/portfolio-grid"

export function HomePortfolio() {
  // Show 18 items on home
  const homeItems = portfolioItems.slice(0, 18)

  return (
    <PortfolioGrid
      items={homeItems}
      showFilter
      title="Реальные клиенты. Реальные результаты."
    />
  )
}
