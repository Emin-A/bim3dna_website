import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import backgroundOne from '../../assets/project_img_1.jpg'
import backgroundTwo from '../../assets/project_img_2.jpg'
import backgroundThree from '../../assets/project_img_3.jpg'
import backgroundFour from '../../assets/project_img_4.jpg'

const heroSlides = [
  {
    line: 'Elite BIM, Revit & AI-driven workflows.',
    background: backgroundOne,
  },
  {
    line: 'Automation that accelerates coordination and delivery.',
    background: backgroundTwo,
  },
  {
    line: 'Scalable BIM strategies tailored for complex builds.',
    background: backgroundThree,
  },
  {
    line: 'From Scan to BIM through 6D lifecycle guidance.',
    background: backgroundFour,
  },
]

const heroButtons = [
  { label: 'Services', type: 'section', target: 'services' },
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
    <section
      id="home"
      className="relative isolate overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.line}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-80' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url(${slide.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-12 px-6 py-24">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
            BIM3DNA
          </span>
          <h1 className="text-4xl font-semibold uppercase tracking-[0.2em] text-white md:text-5xl">
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
              className="group flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition hover:border-emerald-300 hover:text-emerald-200"
            >
              {button.label}
              <span className="ml-3 block h-px w-8 bg-white/30 transition group-hover:bg-emerald-300" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
