import { Link } from 'react-router-dom'
import automationImage from '../assets/project_img_6.jpg'
import clashImage from '../assets/project_img_3.jpg'
import lifecycleImage from '../assets/project_img_1.jpg'
import modelingImage from '../assets/project_img_2.jpg'
import scanImage from '../assets/project_img_5.jpg'
import templateImage from '../assets/project_img_4.jpg'

const projectCategories = [
  {
    title: 'Architecture & Coordination',
    summary: 'Parametric design models, discipline integration, and construction-ready documentation.',
    tags: ['Architecture', 'Coordination'],
    image: modelingImage,
  },
  {
    title: 'Script & Automation Lab',
    summary: 'Task automation, Revit plug-ins, and data validation suites for enterprise BIM teams.',
    tags: ['Scripts', 'Automation'],
    image: automationImage,
  },
  {
    title: 'Clash Detection Briefings',
    summary: 'Issue detection, resolution tracking, and model QA for complex multi-disciplinary builds.',
    tags: ['Clash Detection', 'QA'],
    image: clashImage,
  },
  {
    title: 'Scan to BIM Programs',
    summary: 'Point cloud indexing, accuracy checks, and digital twin conversion for refurbishment projects.',
    tags: ['Scan to BIM', 'Digital Twins'],
    image: scanImage,
  },
  {
    title: 'Template & Content Library',
    summary: 'Revit standards, asset libraries, and data-rich families tailored to your brand guidelines.',
    tags: ['Template Database', 'Content'],
    image: templateImage,
  },
  {
    title: '4D / 5D / 6D Delivery',
    summary: 'Schedule, cost, and facility intelligence layered onto coordinated 3D models.',
    tags: ['4D/5D/6D', 'Lifecycle'],
    image: lifecycleImage,
  },
]

function Projects() {
  return (
    <main className="bg-black text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-black to-[#101010]" />
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Digital delivery across the BIM spectrum.
          </h1>
          <p className="max-w-3xl text-sm text-white/70">
            Explore selected engagements covering automation, scan to BIM, clash detection, and
            lifecycle integrations. Each initiative is tailored to unique delivery models and
            stakeholder demands.
          </p>
          <Link
            to="/"
            className="flex w-max items-center gap-3 rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-emerald-300 hover:text-emerald-200"
          >
            Back to home
          </Link>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {projectCategories.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-soft"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105 hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 px-3 py-1 bg-black/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 p-8">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <p className="text-sm text-white/70">{project.summary}</p>
                  <button
                    type="button"
                    className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300 transition hover:text-emerald-200"
                  >
                    Request case study -&gt;
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects
