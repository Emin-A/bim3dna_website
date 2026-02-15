import { useLanguage } from '../../context/LanguageContext'

const copy = {
  en: {
    eyebrow: 'Collaborative approach',
    heading: 'Partnership that keeps installations coordinated and buildable.',
    steps: [
      {
        title: 'Define install outcomes',
        subtitle:
          'Capture mechanical, electrical, and piping scope, sequencing, and site constraints with every stakeholder.',
      },
      {
        title: 'Model & automate delivery',
        subtitle:
          'Structure BIM environments, standards, and automations that accelerate coordination and prefab production.',
      },
      {
        title: 'Validate with site teams',
        subtitle:
          'Host coordination reviews, resolve clashes, and align install kits with contractor planning.',
      },
      {
        title: 'Commission & support',
        subtitle:
          'Issue install-ready packages, assist during commissioning, and keep asset data flowing into operations.',
      },
    ],
  },
  nl: {
    eyebrow: 'Aanpak van samenwerking',
    heading: 'Samenwerking die installaties gecoördineerd en uitvoerbaar houdt.',
    steps: [
      {
        title: 'Installatiedoelen definiëren',
        subtitle:
          'Leg W-, E- en piping-scope, fasering en bouwplaatsbeperkingen vast met alle belanghebbenden.',
      },
      {
        title: 'Modelleren & automatiseren',
        subtitle:
          'Richt BIM-omgevingen, standaarden en automatisering in die coördinatie en prefabricatie versnellen.',
      },
      {
        title: 'Valideren met uitvoeringsteams',
        subtitle:
          'Organiseer coördinatiesessies, los clashes op en stem installatiesets af op de planning van de aannemer.',
      },
      {
        title: 'Oplevering & nazorg',
        subtitle:
          'Lever uitvoeringsgereed materiaal, ondersteun tijdens inbedrijfstelling en borg assetdata voor beheer.',
      },
    ],
  },
}

function Process() {
  const { language } = useLanguage()
  const labels = copy[language]

  return (
    <section className='bg-white py-20 text-black'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='space-y-4'>
          <p className='text-xs font-semibold uppercase tracking-[0.4em] text-gray-500'>
            {labels.eyebrow}
          </p>
          <h2 className='text-3xl font-semibold md:text-4xl'>{labels.heading}</h2>
        </div>

        <div className='mt-12 space-y-8'>
          {labels.steps.map((step, index) => (
            <div
              key={step.title}
              className='grid gap-6 border-b border-black/[0.06] pb-8 md:grid-cols-[1fr_auto] md:items-center'
            >
              <div>
                <h3 className='text-lg font-semibold'>{step.title}</h3>
                <p className='mt-2 text-sm text-gray-600'>{step.subtitle}</p>
              </div>
              <span className='text-sm font-semibold uppercase tracking-[0.4em] text-gray-400'>
                {language === 'en' ? `Step ${index + 1}` : `Stap ${index + 1}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
