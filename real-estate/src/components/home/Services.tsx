import { useNavigate } from 'react-router-dom'
import { serviceCategories } from '../../data/catalog'

function Services() {
  const navigate = useNavigate()

  const handleClick = (slug: string) => {
    navigate(`/projects/${slug}`)
  }

  return (
    <section id="services" className="bg-[#eef9f8] py-24 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-500">
              Core services
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              BIM leadership across integrated specialist teams.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-gray-600">
            We pair dedicated BIM3DNA teams with your project leads - from architectural authors and
            automation engineers to scan-to-BIM specialists - to keep every discipline coordinated.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => handleClick(service.slug)}
              className="group overflow-hidden rounded-3xl border border-black/[0.05] bg-white p-8 text-left transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-[#eaeaea]">
                <img
                  src={service.background}
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
                <p className="text-sm text-gray-600">{service.summary}</p>
              </div>
              <span className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                View projects
                <span className="h-px flex-1 bg-gray-300 transition group-hover:bg-brand-accent" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
