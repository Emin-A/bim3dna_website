import { useEffect, useMemo, useState } from 'react'
import type { SyntheticEvent } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projectPortfolios, serviceCategories } from '../data/catalog'
import { useLanguage } from '../context/LanguageContext'
import footerLogo from '../assets/BIM3DNA Thumbnail.png'

type ScopeState = Record<string, string>
const IMAGE_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23040e10'/%3E%3Ctext x='50%25' y='50%25' fill='%236f8b90' font-family='Arial' font-size='28' text-anchor='middle' dominant-baseline='middle'%3EImage unavailable%3C/text%3E%3C/svg%3E";

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
  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const image = event.currentTarget
    if (image.dataset.fallbackApplied === 'true') return
    image.dataset.fallbackApplied = 'true'
    image.src = IMAGE_FALLBACK
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
          {projects.map((project, projectIndex) => {
            const selectedScopeId = activeScopes[project.id] ?? project.scopes[0]?.id
            const selectedScope = project.scopes.find((scopeItem) => scopeItem.id === selectedScopeId) ?? project.scopes[0]

            return (
              <article
                key={project.id}
                className='grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-brand-accent/60 hover:shadow-soft'
              >
                <div className='grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-stretch'>
                  <div className='space-y-4'>
                    <div className='space-y-1 text-xs uppercase tracking-[0.3em] text-white/60'>
                      <span>{project.year}</span>
                      <span>{project.location}</span>
                    </div>
                    <h2 className='text-2xl font-semibold'>{project.title[language]}</h2>
                    <p className='text-sm text-white/70 whitespace-pre-line'>
                      {project.description[language]}
                    </p>
                  </div>
                  <div className='flex items-center justify-start text-left text-sm text-white/70 md:pt-4'>
                    {project.extraInfo?.[language]}
                  </div>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <button
                    type='button'
                    onClick={() => {
                      const ids = project.scopes.map((scope) => scope.id)
                      const currentIndex = Math.max(0, ids.indexOf(selectedScopeId))
                      const prevIndex = (currentIndex - 1 + ids.length) % ids.length
                      handleScopeChange(project.id, ids[prevIndex])
                    }}
                    className='flex h-8 w-10 items-center justify-center rounded-full border border-brand-accent/40 text-brand-accent/80 transition hover:border-brand-accent hover:text-brand-accent'
                    aria-label={language === 'en' ? 'Previous view' : 'Vorige weergave'}
                  >
                    {'<'}
                  </button>
                  <button
                    type='button'
                    onClick={() => {
                      const ids = project.scopes.map((scope) => scope.id)
                      const currentIndex = Math.max(0, ids.indexOf(selectedScopeId))
                      const nextIndex = (currentIndex + 1) % ids.length
                      handleScopeChange(project.id, ids[nextIndex])
                    }}
                    className='flex h-8 w-10 items-center justify-center rounded-full border border-brand-accent/40 text-brand-accent/80 transition hover:border-brand-accent hover:text-brand-accent'
                    aria-label={language === 'en' ? 'Next view' : 'Volgende weergave'}
                  >
                    {'>'}
                  </button>
                </div>
                <div className='relative overflow-hidden rounded-2xl border border-white/10'>
                  <img
                    src={selectedScope?.image ?? project.scopes[0]?.image}
                    alt={`${project.title[language]} - ${selectedScope?.label[language] ?? ''}`}
                    className='h-full w-full object-cover'
                    loading={projectIndex === 0 ? 'eager' : 'lazy'}
                    decoding='async'
                    fetchPriority={projectIndex === 0 ? 'high' : 'low'}
                    onError={handleImageError}
                  />
                  <img
                    src={footerLogo}
                    alt='BIM3DNA'
                    className='absolute left-4 top-4 h-8 w-8 rounded-md ring-1 ring-white/30'
                    loading='lazy'
                  />
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
