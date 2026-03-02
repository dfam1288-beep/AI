import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Спортивный визажист | Брови, Ресницы, Макияж — Якутск",
  description:
    "Профессиональный спортивный визажист в Якутске. Брови, ресницы, макияж для соревнований и съёмок. Индивидуальный подход, премиальные материалы.",
  openGraph: {
    title: "Спортивный визажист | Брови, Ресницы, Макияж",
    description:
      "Подчёркиваю индивидуальность, создаю уверенность и готовлю к выступлениям и съёмкам.",
    type: "website",
    locale: "ru_RU",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
