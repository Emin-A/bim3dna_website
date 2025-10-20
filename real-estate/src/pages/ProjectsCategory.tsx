import { Link, Navigate, useParams } from 'react-router-dom'
import { projectPortfolios, serviceCategories } from '../data/catalog'

function ProjectsCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const category = serviceCategories.find((item) => item.slug === categorySlug)

  if (!category) {
    return <Navigate to="/projects" replace />
  }

  const projects = [...(projectPortfolios[category.slug] ?? [])].sort(
    (a, b) => b.year - a.year,
  )

  return (
    <main className="bg-black text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 py-24">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(5,18,19,0.9), rgba(5,18,19,0.9)), url(${category.background})`,
          }}
        />
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
            {category.title}
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">{category.headline}</h1>
          <p className="max-w-3xl text-sm text-white/70">{category.summary}</p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            {category.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <Link
            to="/projects"
            className="mt-4 flex w-max items-center gap-3 rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-brand-accent hover:text-brand-accent"
          >
            Back to categories
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-brand-accent/60 hover:shadow-soft md:grid-cols-[1.2fr_1fr] md:items-center"
            >
              <div className="space-y-4">
                <div className="space-y-1 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span>{project.year}</span>
                  <span>{project.location}</span>
                </div>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-sm text-white/70">{project.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-brand-accent/80">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-brand-accent/40 px-3 py-1 text-brand-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProjectsCategory
