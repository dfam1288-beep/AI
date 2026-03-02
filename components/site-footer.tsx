import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/[0.06] bg-muted text-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg tracking-wide text-foreground mb-4">BEAUTY & SPORT</p>
            <p className="text-sm text-sand/70 leading-relaxed max-w-xs">
              Спортивный визажист. Брови, ресницы, макияж для соревнований и съёмок.
              Индивидуальный подход к каждой клиентке.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Навигация
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <Link href="/" className="text-sm text-sand/70 hover:text-foreground transition-colors duration-300 link-underline-grow w-fit">
                Главная
              </Link>
              <Link href="/brows" className="text-sm text-sand/70 hover:text-foreground transition-colors duration-300 link-underline-grow w-fit">
                Брови
              </Link>
              <Link href="/lashes" className="text-sm text-sand/70 hover:text-foreground transition-colors duration-300 link-underline-grow w-fit">
                Ресницы
              </Link>
              <Link href="/sport-makeup" className="text-sm text-sand/70 hover:text-foreground transition-colors duration-300 link-underline-grow w-fit">
                Спортивный макияж
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Контакты
            </p>
            <div className="flex flex-col gap-3 text-sm text-sand/70">
              <p>Якутск, Республика Саха</p>
              <p>Пн — Сб: 10:00 — 20:00</p>
              <p>Вс: выходной</p>
              <div className="flex gap-4 mt-2">
                <span className="hover:text-foreground transition-colors duration-300 cursor-pointer link-underline-grow">
                  Telegram
                </span>
                <span className="hover:text-foreground transition-colors duration-300 cursor-pointer link-underline-grow">
                  WhatsApp
                </span>
                <span className="hover:text-foreground transition-colors duration-300 cursor-pointer link-underline-grow">
                  Instagram
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/[0.06]">
          <p className="text-xs text-muted-foreground tracking-wide">
            &copy; {new Date().getFullYear()} BEAUTY & SPORT. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
