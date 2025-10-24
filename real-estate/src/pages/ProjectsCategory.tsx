import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projectPortfolios, serviceCategories } from '../data/catalog'
import { useLanguage } from '../context/LanguageContext'

type ScopeState = Record<string, string>

const copy = {
  en: {
    scopeLabel: 'Switch view',
    otherServices: 'Explore other services',
  },
  nl: {
    scopeLabel: 'Wissel weergave',
    otherServices: 'Andere services verkennen',
  },
}

function ProjectsCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const category = serviceCategories.find((item) => item.slug === categorySlug)
  const { language } = useLanguage()
  const labels = copy[language]
  const [activeScopes, setActiveScopes] = useState<ScopeState>({})

  const projects = useMemo(() => {
    if (!category) return []
    return [...(projectPortfolios[category.slug] ?? [])].sort((a, b) => b.year - a.year)
  }, [category])

  const otherCategories = useMemo(() => {
    if (!category) return []
    return serviceCategories.filter((item) => item.slug !== category.slug)
  }, [category])

  useEffect(() => {
    const initialState: ScopeState = {}
    projects.forEach((project) => {
      initialState[project.id] = project.scopes[0]?.id ?? ''
    })
    setActiveScopes(initialState)
  }, [projects])

  if (!category) {
    return <Navigate to='/projects' replace />
  }

  const handleScopeChange = (projectId: string, scopeId: string) => {
    setActiveScopes((prev) => ({ ...prev, [projectId]: scopeId }))
  }

  return (
    <main className='bg-black text-white'>
      <section className='relative isolate overflow-hidden border-b border-white/10 py-24'>
        <div
          className='absolute inset-0 -z-10 bg-cover bg-center'
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(5,18,19,0.9), rgba(5,18,19,0.9)), url(${category.background})`,
          }}
        />
        <div className='mx-auto flex max-w-5xl flex-col gap-6 px-6'>
          <p className='text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent'>
            {category.title[language]}
          </p>
          <h1 className='text-4xl font-semibold md:text-5xl'>{category.headline[language]}</h1>
          <p className='max-w-3xl text-sm text-white/70'>{category.summary[language]}</p>
          <div className='flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60'>
            {category.tags.map((tag) => (
              <span key={tag.id} className='rounded-full border border-white/20 px-3 py-1'>
                {tag.label[language]}
              </span>
            ))}
          </div>
          {otherCategories.length > 0 && (
            <div className='mt-6 space-y-3'>
              <span className='text-xs font-semibold uppercase tracking-[0.3em] text-white/60'>
                {labels.otherServices}
              </span>
              <div className='flex flex-wrap gap-3'>
                {otherCategories.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/projects/${item.slug}`}
                    className='flex w-max items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-brand-accent hover:text-brand-accent'
                  >
                    {item.title[language]}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className='py-20'>
        <div className='mx-auto max-w-6xl space-y-10 px-6'>
          <div className='h-1 w-full rounded-full bg-gradient-to-r from-transparent via-brand-accent/70 to-transparent' />
          {projects.map((project) => {
            const selectedScopeId = activeScopes[project.id] ?? project.scopes[0]?.id
            const selectedScope = project.scopes.find((scopeItem) => scopeItem.id === selectedScopeId) ?? project.scopes[0]

            return (
              <article
                key={project.id}
                className='grid gap-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-brand-accent/60 hover:shadow-soft md:grid-cols-[1fr_1.35fr] md:items-center'
              >
                <div className='space-y-4'>
                  <div className='space-y-1 text-xs uppercase tracking-[0.3em] text-white/60'>
                    <span>{project.year}</span>
                    <span>{project.location}</span>
                  </div>
                  <h2 className='text-2xl font-semibold'>{project.title[language]}</h2>
                  <p className='text-sm text-white/70'>{project.description[language]}</p>
                  <div className='space-y-3'>
                    <span className='text-xs uppercase tracking-[0.3em] text-white/40'>
                      {labels.scopeLabel}
                    </span>
                    <div className='flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em]'>
                      {project.scopes.map((scopeItem) => {
                        const isActive = scopeItem.id === selectedScopeId
                        return (
                          <button
                            key={scopeItem.id}
                            type='button'
                            onClick={() => handleScopeChange(project.id, scopeItem.id)}
                            className={`rounded-full border px-3 py-1 transition ${
                              isActive
                                ? 'border-brand-accent bg-brand-accent/20 text-brand-accent'
                                : 'border-brand-accent/30 text-brand-accent/70 hover:border-brand-accent hover:text-brand-accent'
                            }`}
                          >
                            {scopeItem.label[language]}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='overflow-hidden rounded-2xl border border-white/10 md:h-[320px]'>
                    <img
                      src={selectedScope?.image ?? project.scopes[0]?.image}
                      alt={`${project.title[language]} - ${selectedScope?.label[language] ?? ''}`}
                      className='h-full w-full object-cover'
                      loading='lazy'
                    />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <div className='mx-auto mt-16 h-1 w-full max-w-6xl rounded-full bg-gradient-to-r from-transparent via-brand-accent/80 to-transparent shadow-[0_0_12px_rgba(21,212,196,0.35)]' />
    </main>
  )
}

export default ProjectsCategory
