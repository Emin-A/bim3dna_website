import { useNavigate } from 'react-router-dom'
import automationImage from '../../assets/project_img_6.jpg'
import clashImage from '../../assets/project_img_3.jpg'
import modelingImage from '../../assets/project_img_2.jpg'
import scanImage from '../../assets/project_img_5.jpg'
import templateImage from '../../assets/project_img_4.jpg'
import lifecycleImage from '../../assets/project_img_1.jpg'

const services = [
  {
    title: '3D Modeling',
    description: 'Coordinated architectural, structural, and MEP models ready for delivery.',
    image: modelingImage,
  },
  {
    title: 'Script / Automation',
    description: 'Custom Revit tools, Dynamo scripts, and plug-ins that reduce manual work.',
    image: automationImage,
  },
  {
    title: 'Clash Detection',
    description: 'Rigorous coordination and issue tracking to keep teams aligned.',
    image: clashImage,
  },
  {
    title: 'Scan to BIM',
    description: 'Point cloud conversions into intelligent, accurate digital twins.',
    image: scanImage,
  },
  {
    title: 'Template Database',
    description: 'Standards, families, and documentation frameworks built for scale.',
    image: templateImage,
  },
  {
    title: '4D / 5D / 6D',
    description: 'Lifecycle insights connecting schedule, cost, and facility data.',
    image: lifecycleImage,
  },
]

function Services() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/projects')
  }

  return (
    <section id="services" className="bg-[#f5f5f5] py-24 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-500">
              Core services
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              BIM leadership across the project lifecycle.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-gray-600">
            We combine automation, modeling expertise, and strategic advisory to help AEC teams move
            faster from early coordination through handover.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <button
              key={service.title}
              type="button"
              onClick={handleClick}
              className="group overflow-hidden rounded-3xl border border-black/[0.05] bg-white p-8 text-left transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-[#eaeaea]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-500 group-hover:opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-transparent opacity-80 transition group-hover:opacity-20" />
                <span className="absolute left-4 top-4 text-xs font-medium uppercase tracking-[0.4em] text-gray-500">
                  BIM
                </span>
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <span className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                View projects
                <span className="h-px flex-1 bg-gray-300 transition group-hover:bg-black" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
