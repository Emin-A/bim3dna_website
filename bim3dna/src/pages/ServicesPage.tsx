import { useLanguage } from '../context/LanguageContext'

const copy = {
  en: {
    eyebrow: 'Services',
    title: 'Design & Model',
    body: 'As installation engineering BIM modelers, we deliver specialized design and modeling services for technical installations including heating, ventilation, air conditioning, plumbing, and electrical systems. We create accurate 3D BIM models that combine electrical and mechanical systems into one coordinated design environment. Using current BIM workflows and software, we visualize installation complexity clearly and help clients execute projects more efficiently and cost-effectively through reliable designs, simulations, and performance-focused coordination. We also provide AI automation services in the Revit BIM environment, including Python and Revit API tooling, to automate repetitive tasks, strengthen model quality control, standardize project data, and improve delivery speed. Whether the project is large or small, clients can rely on our professional and technical approach from concept to handover.',
  },
  nl: {
    eyebrow: 'Diensten',
    title: 'Ontwerp & Modelleren',
    body: 'Als BIM-modelleurs in de installatietechniek leveren wij gespecialiseerde diensten voor het ontwerpen en modelleren van technische installaties zoals verwarming, ventilatie, airconditioning, sanitair en elektrotechnische systemen. Wij maken nauwkeurige 3D BIM-modellen waarin elektrotechnische en werktuigbouwkundige systemen integraal worden afgestemd. Met actuele BIM-werkwijzen en software maken wij complexe installaties inzichtelijk en helpen wij opdrachtgevers om bouwprocessen efficienter en kosteneffectiever uit te voeren via betrouwbare ontwerpen, simulaties en prestatiegerichte coordinatie. Daarnaast leveren wij AI-automatiseringsdiensten binnen de Revit BIM-omgeving, inclusief Python- en Revit API-tooling, om repetitieve taken te automatiseren, modelkwaliteit te borgen, projectdata te standaardiseren en de doorlooptijd te versnellen. Voor zowel grote als kleine projecten staat een professionele en technisch sterke aanpak centraal, van concept tot oplevering.',
  },
}

function ServicesPage() {
  const { language } = useLanguage()
  const labels = copy[language]

  return (
    <main className='bg-black text-white'>
      <section className='relative isolate overflow-hidden border-b border-white/10 py-20'>
        <div className='absolute inset-0 -z-10 bg-gradient-to-br from-[#031518] via-[#052124] to-[#031113]' />
        <div className='mx-auto max-w-5xl space-y-5 px-6'>
          <p className='text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent'>
            {labels.eyebrow}
          </p>
          <h1 className='text-4xl font-semibold md:text-5xl'>{labels.title}</h1>
          <p className='text-base leading-relaxed text-white/80'>{labels.body}</p>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
