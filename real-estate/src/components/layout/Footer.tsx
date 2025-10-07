import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import favicon32 from '../../assets/logo_favicon_06/favicon-32x32.png'

type FooterItem = {
  label: string
  href: string
  type?: 'external' | 'internal' | 'section'
}

const footerColumns: { title: string; items: FooterItem[] }[] = [
  {
    title: 'Contact',
    items: [
      { label: 'hello@bim3dna.com', href: 'mailto:hello@bim3dna.com', type: 'external' },
      { label: '+31 (0)6 1234 5678', href: 'tel:+31612345678', type: 'external' },
      {
        label: 'Keizersgracht 123, 1015 CJ Amsterdam',
        href: 'https://maps.google.com?q=Keizersgracht+123+Amsterdam',
        type: 'external',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About BIM3DNA', href: 'about', type: 'section' },
      { label: 'Services', href: 'services', type: 'section' },
      { label: 'Projects', href: '/projects', type: 'internal' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bim3dna', type: 'external' },
      { label: 'Instagram', href: 'https://www.instagram.com', type: 'external' },
      { label: 'YouTube', href: 'https://www.youtube.com', type: 'external' },
    ],
  },
]

const socials: FooterItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bim3dna', type: 'external' },
  { label: 'Instagram', href: 'https://www.instagram.com', type: 'external' },
  { label: 'YouTube', href: 'https://www.youtube.com', type: 'external' },
]

const socialIcons: Record<string, ReactNode> = {
  LinkedIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 7.5v12h-4v-12h4zm-2-5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM9.5 7.5h3.8l.2 1.9h.1c1-.7 2.1-2.1 4.4-2.1 2.9 0 5 1.9 5 6.1V19.5h-4v-5.4c0-1.7-.6-2.9-2-2.9-1.1 0-1.7.8-2 1.6-.1.3-.1.7-.1 1.1V19.5h-4V7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 17.5 4.5 4.5 0 0112 7.5zm0 2a2.5 2.5 0 102.5 2.5A2.5 2.5 0 0012 9.5zM18.5 6A1.5 1.5 0 1117 7.5 1.5 1.5 0 0118.5 6z"
        fill="currentColor"
      />
    </svg>
  ),
  YouTube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4a2.5 2.5 0 00-1.8 1.8A26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"
        fill="currentColor"
      />
    </svg>
  ),
}

function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleItemClick = (item: FooterItem) => {
    if (
      item.type === 'external' ||
      item.href.startsWith('http') ||
      item.href.startsWith('mailto:') ||
      item.href.startsWith('tel:')
    ) {
      if (item.href.startsWith('mailto:') || item.href.startsWith('tel:')) {
        window.location.href = item.href
      } else {
        window.open(item.href, '_blank', 'noreferrer')
      }
      return
    }

    if (item.type === 'internal') {
      navigate(item.href)
      return
    }

    if (item.type === 'section') {
      if (location.pathname === '/') {
        document.getElementById(item.href)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/', { state: { scrollTo: item.href } })
      }
    }
  }
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={favicon32}
            alt="BIM3DNA logo"
            className="h-10 w-10 rounded"
          />
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white">
            BIM3DNA
          </span>
        </div>

        <div className="grid flex-1 gap-10 text-sm text-white/80 md:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => handleItemClick(item)}
                      className="text-left transition hover:text-emerald-300"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-end">
          {socials.map((social) => (
            <button
              key={social.label}
              type="button"
              onClick={() => handleItemClick(social)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              {socialIcons[social.label]}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        Copyright {new Date().getFullYear()} BIM3DNA. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer



