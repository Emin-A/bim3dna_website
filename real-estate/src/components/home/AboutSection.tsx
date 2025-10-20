import { useEffect, useMemo, useState } from 'react'
import Alen from '../../assets/Alen.png'
import Douwe from '../../assets/Douwe.png'
import Emin from '../../assets/me.jpg'
import Logo2 from '../../assets/Logo2.png'
import Logo3 from '../../assets/Logo3.png'
import Logo7 from '../../assets/Logo7.png'

type TeamTestimonial = {
  name: string
  role: string
  quote: string
  image: string
}

type ClientTestimonial = {
  quote: string
  name: string
  title: string
  company: string
}

const teamTestimonials: TeamTestimonial[] = [
  {
    name: 'Douwe O.',
    role: 'MEP Specialist & Instructor',
    quote:
      '"I translate complex MEP systems into intuitive Revit models, making installations readable for every project stakeholder."',
    image: Douwe,
  },
  {
    name: 'Alen H.',
    role: 'Founder & Lead BIM Consultant',
    quote:
      '"BIM3DNA blends design, automation, and AI so teams can move faster with clarity from concept to handover."',
    image: Alen,
  },
  {
    name: 'Emin A.',
    role: 'BIM Automation Specialist',
    quote:
      '"Custom tooling and scripts should simplify coordination. Our approach removes friction so teams can focus on delivery."',
    image: Emin,
  },
]

const clientTestimonials: ClientTestimonial[] = [
  {
    quote:
      '"BIM3DNA made a measurable difference in our workflow, saving time and reducing design errors. The team\'s technical depth and proactivity are unrivaled."',
    name: 'John M.',
    title: 'Project Manager',
    company: 'ArchiCore Group',
  },
  {
    quote:
      '"Their automation tools kept our Revit library consistent across regions. The support and documentation gave our teams complete confidence."',
    name: 'Sara K.',
    title: 'Lead BIM Coordinator',
    company: 'MEP+Design',
  },
  {
    quote:
      '"Scan to BIM deliverables were exact, thorough, and ready for coordination. We moved into design six weeks faster than projected."',
    name: 'Peter V.',
    title: 'Director',
    company: 'VDW Engineering',
  },
  {
    quote:
      '"The template overhaul standardised every office. Our designers now start with curated content and never worry about parameter drift."',
    name: 'Laila N.',
    title: 'BIM Manager',
    company: 'TechSquare',
  },
  {
    quote:
      '"Clash coordination reports were concise and actionable. Install crews always knew the next priority and change orders dropped dramatically."',
    name: 'Tomas E.',
    title: 'Construction Director',
    company: 'ConstructIQ',
  },
  {
    quote:
      '"Their lifecycle dashboards give us long-term visibility into maintenance budgeting. Data stays connected after handover."',
    name: 'Karim W.',
    title: 'Facility Lead',
    company: 'MetroWorks',
  },
]

const logos = [Logo7, Logo2, Logo3]

const useLoopingSlice = <T,>(items: T[], length: number, startIndex: number): T[] => {
  if (items.length <= length) {
    return items
  }
  const result: T[] = []
  for (let i = 0; i < length; i += 1) {
    result.push(items[(startIndex + i) % items.length])
  }
  return result
}

function AboutSection() {
  const [teamIndex, setTeamIndex] = useState(0)
  const [clientIndex, setClientIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setClientIndex((prev) => (prev + 1) % clientTestimonials.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const activeClientSet = useMemo(
    () => useLoopingSlice(clientTestimonials, 4, clientIndex),
    [clientIndex],
  )

  const handleTeamNavigate = (direction: 'prev' | 'next') => {
    setTeamIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % teamTestimonials.length
      }
      return (prev - 1 + teamTestimonials.length) % teamTestimonials.length
    })
  }

  return (
    <section id="about" className="bg-[#020b0c] py-24 text-white">
      <div className="mx-auto max-w-6xl space-y-20 px-6">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
            About BIM3DNA
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Specialists in BIM strategies, automation, and lifecycle intelligence.
          </h2>
          <p className="max-w-3xl text-sm text-white/70">
            Our collective pairs technical depth with design sensibility. We lead complex BIM
            initiatives across architecture, engineering, and construction - delivering clarity,
            automation, and reliable digital twins.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-8 shadow-soft">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent" />
          <div className="flex items-center justify-between pb-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
              Team perspectives
            </h3>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleTeamNavigate('prev')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-accent/60 hover:text-brand-accent"
              >
                {'<'}
              </button>
              <button
                type="button"
                onClick={() => handleTeamNavigate('next')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-accent/60 hover:text-brand-accent"
              >
                {'>'}
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${teamIndex * 100}%)` }}
            >
              {teamTestimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-full rounded-2xl border border-white/10 bg-white/[0.04] p-8"
                >
                  <p className="text-lg text-white/90">{testimonial.quote}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-accent/70"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] py-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/40 to-transparent" />
          <div className="mask-fade-x mask-fade-y flex animate-marquee items-center gap-16 px-12">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={`${logo}-${index}`}
                src={logo}
                alt="Client logo"
                className="h-12 w-auto opacity-80 transition hover:opacity-100"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-10">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Client reflections
            </h3>
            <div className="flex gap-2">
              {clientTestimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setClientIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    clientIndex === index ? 'bg-brand-accent' : 'bg-white/15 hover:bg-white/30'
                  }`}
                  aria-label={`Show testimonial group ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {activeClientSet.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-3xl border border-white/10 bg-black/40 p-6 text-left text-sm leading-relaxed text-white/80 transition hover:border-brand-accent/50 hover:bg-black/60"
              >
                <blockquote className="text-sm text-white/90">{testimonial.quote}</blockquote>
                <figcaption className="mt-4 space-y-1 text-xs uppercase tracking-[0.2em] text-white/50">
                  <p className="text-sm font-semibold normal-case text-white">{testimonial.name}</p>
                  <p>{testimonial.title}</p>
                  <p>{testimonial.company}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
