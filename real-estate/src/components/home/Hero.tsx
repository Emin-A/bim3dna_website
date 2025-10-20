import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { serviceCategories } from '../../data/catalog'
import heroWordmark from '../../assets/logo-full-hero.png'

const heroSlides = serviceCategories.map((service) => ({
  line: service.headline,
  background: service.background,
  slug: service.slug,
}))

const heroButtons = [
  { label: 'Projects', type: 'route', target: '/projects' },
  { label: 'About Us', type: 'section', target: 'about' },
]

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const activeSlide = useMemo(() => heroSlides[activeIndex], [activeIndex])

  const handleButton = (button: (typeof heroButtons)[number]) => {
    if (button.type === 'route') {
      navigate(button.target)
      return
    }

    if (location.pathname === '/') {
      document.getElementById(button.target)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: button.target } })
    }
  }

  return (
    <section id="home" className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.line}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(6, 24, 26, 0.88), rgba(3, 16, 18, 0.88)), url(${slide.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-12 px-6 py-24">
        <div className="space-y-6">
          <img
            src={heroWordmark}
            alt="BIM3DNA logo"
            className="h-20 w-auto drop-shadow-xl md:h-24"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
            BIM3DNA
          </span>
          <h1 className="text-4xl font-semibold uppercase tracking-[0.15em] text-white md:text-5xl">
            Built-in intelligence for every model.
          </h1>
          <p className="max-w-2xl text-lg text-white/80 transition-opacity duration-700 ease-out">
            {activeSlide.line}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          {heroButtons.map((button) => (
            <button
              key={button.label}
              type="button"
              onClick={() => handleButton(button)}
              className="group flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition hover:border-brand-accent hover:text-brand-accent"
            >
              {button.label}
              <span className="ml-3 block h-px w-8 bg-white/30 transition group-hover:bg-brand-accent" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
