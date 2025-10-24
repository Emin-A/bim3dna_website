import { useNavigate } from 'react-router-dom'
import { serviceCategories } from '../../data/catalog'
import { useLanguage } from '../../context/LanguageContext'

const copy = {
  en: {
    coreBusinessLabel: 'Core businesses',
    coreBusinessHeading: 'Advisory bureau driving installation delivery.',
    coreBusinessBody:
      'BIM3DNA partners with mechanical, electrical, and piping contractors to steer coordination, prefabrication, and commissioning. Our business is guiding installations from the first brief to site handover.',
    coreServicesLabel: 'Core services',
    coreServicesHeading: 'Specialist skills that keep installation models reliable.',
    cardPrefix: 'BIM',
    viewProjects: 'View projects',
  },
  nl: {
    coreBusinessLabel: 'Kernactiviteiten',
    coreBusinessHeading: 'Adviesbureau voor installaties in uitvoering.',
    coreBusinessBody:
      'BIM3DNA werkt samen met werktuigbouwkundige, elektrotechnische en piping-aannemers om coordinatie, prefabricatie en inbedrijfstelling te sturen. Onze kernactiviteit is installaties begeleiden van eerste briefing tot oplevering.',
    coreServicesLabel: 'Kernservices',
    coreServicesHeading: 'Specialismen die installatiemodellen betrouwbaar houden.',
    cardPrefix: 'BIM',
    viewProjects: 'Bekijk projecten',
  },
}

function Services() {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const labels = copy[language]

  const handleClick = (slug: string) => {
    navigate(`/projects/${slug}`)
  }

  return (
    <section id='services' className='bg-[#eef9f8] py-24 text-black'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='grid gap-6 rounded-3xl border border-brand-accent/60 bg-transparent p-8 shadow-[0_24px_60px_-24px_rgba(21,212,196,0.35)] backdrop-blur-sm md:grid-cols-[1fr_1.2fr] md:items-center'>
          <div className='space-y-4'>
            <p className='text-xs font-semibold uppercase tracking-[0.4em] text-gray-500'>
              {labels.coreBusinessLabel}
            </p>
            <h2 className='text-3xl font-semibold md:text-4xl'>{labels.coreBusinessHeading}</h2>
          </div>
          <p className='text-sm text-gray-600'>{labels.coreBusinessBody}</p>
        </div>

        <div className='mt-16 rounded-3xl bg-white p-8 shadow-soft'>
          <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
            <div className='space-y-4'>
              <p className='text-xs font-semibold uppercase tracking-[0.4em] text-gray-500'>
                {labels.coreServicesLabel}
              </p>
              <h3 className='text-3xl font-semibold text-black md:text-4xl'>
                {labels.coreServicesHeading}
              </h3>
            </div>
            <p className='max-w-xl text-sm text-gray-600'>
              {language === 'en'
                ? 'These service pillars are the skills we mobilise to execute installation programmes - whether that means site-ready coordination sets, generative content, or lifecycle dashboards.'
                : 'Deze servicepijlers zijn de vaardigheden die we inzetten om installaties uit te voeren - van uitvoeringsgereed coordinatiemateriaal tot generatieve content en lifecycle-dashboards.'}
            </p>
          </div>
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {serviceCategories.map((service) => (
            <button
              key={service.slug}
              type='button'
              onClick={() => handleClick(service.slug)}
              className='group overflow-hidden rounded-3xl border border-black/[0.05] bg-white p-8 text-left transition hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/70'
            >
              <div className='relative h-36 w-full overflow-hidden rounded-2xl bg-[#eaeaea]'>
                <img
                  src={service.background}
                  alt={service.title[language]}
                  className='absolute inset-0 h-full w-full scale-105 object-cover opacity-100'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent' />
                <span className='absolute left-4 top-4 text-xs font-medium uppercase tracking-[0.4em] text-white/80'>
                  {labels.cardPrefix}
                </span>
              </div>
              <div className='mt-8 space-y-3'>
                <h4 className='text-lg font-semibold'>{service.title[language]}</h4>
                <p className='text-sm text-gray-600'>{service.summary[language]}</p>
              </div>
              <span className='mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500'>
                {labels.viewProjects}
                <span className='h-px flex-1 bg-gray-300 transition group-hover:bg-brand-accent' />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
