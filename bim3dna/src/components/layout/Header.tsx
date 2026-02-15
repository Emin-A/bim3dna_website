import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoMark from '../../assets/BIM3DNA Logo Final Wit.png'
import LanguageToggle from '../common/LanguageToggle'
import { useLanguage } from '../../context/LanguageContext'

type NavKey = keyof typeof copy.en.nav

const navItems: { key: NavKey; type: 'route' | 'section'; target: string }[] = [
  { key: 'projects', type: 'route', target: '/projects' },
  { key: 'services', type: 'route', target: '/services' },
  { key: 'about', type: 'route', target: '/about' },
]

const copy = {
  en: {
    nav: {
      projects: 'Projects',
      services: 'Services',
      about: 'About Us',
    },
  },
  nl: {
    nav: {
      projects: 'Projecten',
      services: 'Diensten',
      about: 'Over ons',
    },
  },
}

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const navigate = useNavigate()
  const { language } = useLanguage()
  const labels = copy[language]

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const handleNavClick = (item: (typeof navItems)[number]) => {
    navigate(item.target)
    setIsMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-banner-gradient backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-white"
        >
          <img
            src={logoMark}
            alt="BIM3DNA mark"
            className="h-16 w-auto"
          />
          <span className="sr-only">BIM3DNA</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white md:flex">
          {navItems.map((item) => {
            const label = labels.nav[item.key]
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleNavClick(item)}
                className="relative text-sm uppercase tracking-[0.25em] text-white/80 transition hover:text-brand-accent"
              >
                {label}
              </button>
            )
          })}
          <LanguageToggle />
        </nav>

        <button
          className="relative h-11 w-11 rounded-full border border-white/20 text-white md:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 bg-white transition ${isMobileOpen ? '-translate-y-0 rotate-45' : '-translate-y-2'}`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 bg-white transition ${isMobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 bg-white transition ${isMobileOpen ? '-translate-y-0 -rotate-45' : 'translate-y-2'}`}
          />
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" />
          <div className="fixed inset-x-0 top-20 z-50 space-y-4 border-t border-white/10 bg-banner-gradient px-6 py-6">
            <div className="space-y-4">
              {navItems.map((item) => {
                const label = labels.nav[item.key]
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className="block w-full rounded-full border border-white/10 px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.3em] text-white/90 transition hover:border-brand-accent/60 hover:text-brand-accent"
                  >
                    {label}
                  </button>
                )
              })}
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
      <span className="block h-1 w-full bg-gradient-to-r from-brand-accent via-brand-accent/80 to-brand-accent/60 shadow-[0_0_12px_rgba(21,212,196,0.35)]" />
    </header>
  )
}

export default Header
