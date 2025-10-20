import { Link } from 'react-router-dom'
import { serviceCategories } from '../data/catalog'

function Projects() {
  return (
    <main className="bg-black text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#021010] via-[#021b1c] to-[#010505]" />
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">Digital delivery across the BIM spectrum.</h1>
          <p className="max-w-3xl text-sm text-white/70">
            Explore selected engagements covering automation, scan to BIM, clash detection, and lifecycle integrations.
            Each initiative is tailored to unique delivery models and stakeholder demands.
          </p>
          <Link
            to="/"
            className="flex w-max items-center gap-3 rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-brand-accent hover:text-brand-accent"
          >
            Back to home
          </Link>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/projects/${category.slug}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-soft"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={category.background}
                    alt={category.title}
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    {category.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/20 bg-black/40 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 p-8">
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                  <p className="text-sm text-white/70">{category.summary}</p>
                  <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent transition group-hover:gap-4">
                    View portfolio
                    <span className="block h-px w-8 bg-brand-accent/60 transition group-hover:w-12" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects
