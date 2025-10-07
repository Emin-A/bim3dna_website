import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import favicon32 from '../../assets/logo_favicon_06/favicon-32x32.png'

const navItems = [
  { label: 'Projects', type: 'route', target: '/projects' },
  { label: 'Services', type: 'section', target: 'services' },
  { label: 'About Us', type: 'section', target: 'about' },
]

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const handleSectionNav = (target: string) => {
    if (location.pathname === '/') {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: target } })
    }
    setIsMobileOpen(false)
  }

  const handleNavClick = (item: (typeof navItems)[number]) => {
    if (item.type === 'route') {
      navigate(item.target)
      setIsMobileOpen(false)
      return
    }

    handleSectionNav(item.target)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={favicon32}
            alt="BIM3DNA logo"
            className="h-8 w-8 rounded"
          />
          <span className="hidden text-sm font-semibold uppercase tracking-[0.4em] text-white sm:block">
            BIM3DNA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              className="relative text-sm uppercase tracking-[0.25em] text-white/80 transition hover:text-emerald-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="relative h-10 w-10 rounded-full border border-white/20 text-white md:hidden"
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
          <div className="fixed inset-x-0 top-16 z-50 space-y-4 border-t border-white/10 bg-black px-6 py-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className="block w-full rounded-full border border-white/10 px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.3em] text-white/90 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
