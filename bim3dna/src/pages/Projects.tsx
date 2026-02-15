import { Link } from "react-router-dom";
import { serviceCategories } from "../data/catalog";
import { useLanguage } from "../context/LanguageContext";
import footerLogo from "../assets/BIM3DNA Thumbnail.png";

const copy = {
  en: {
    eyebrow: "Portfolio",
    heading: "Installation delivery across the BIM spectrum.",
    description:
      "Browse engagements where we coordinated mechanical, electrical, and piping scopes—backed by automation, scan-to-BIM, clash detection, and lifecycle insight.",
    backHome: "Back to home",
    backServices: "View core services",
    viewPortfolio: "View portfolio",
  },
  nl: {
    eyebrow: "Portfolio",
    heading: "Installatielevering over het hele BIM-spectrum.",
    description:
      "Bekijk trajecten waarin we werktuigbouwkundige, elektrotechnische en piping-scope coördineerden—ondersteund door automatisering, scan-to-BIM, clashdetectie en lifecycle-inzicht.",
    backHome: "Terug naar home",
    backServices: "Bekijk kernservices",
    viewPortfolio: "Bekijk portfolio",
  },
};

function Projects() {
  const { language } = useLanguage();
  const labels = copy[language];

  return (
    <main className="bg-black text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#021010] via-[#021b1c] to-[#010505]" />
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
            {labels.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            {labels.heading}
          </h1>
          <p className="max-w-3xl text-sm text-white/70">
            {labels.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="flex w-max items-center gap-3 rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-brand-accent hover:text-brand-accent"
            >
              {labels.backHome}
            </Link>
            <Link
              to="/?scroll=services"
              className="flex w-max items-center gap-3 rounded-full border border-brand-accent/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent transition hover:border-brand-accent hover:bg-brand-accent/10"
            >
              {labels.backServices}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-brand-accent/70 to-transparent" />
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
                    alt={category.title[language]}
                    className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <img
                    src={footerLogo}
                    alt="BIM3DNA"
                    className="absolute left-4 top-4 h-8 w-8 rounded-md ring-1 ring-white/30"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    {category.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="rounded-full border border-white/20 bg-black/40 px-3 py-1"
                      >
                        {tag.label[language]}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 p-8">
                  <h2 className="text-2xl font-semibold">
                    {category.title[language]}
                  </h2>
                  <p className="text-sm text-white/70">
                    {category.summary[language]}
                  </p>
                  <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent transition group-hover:gap-4">
                    {labels.viewPortfolio}
                    <span className="block h-px w-8 bg-brand-accent/60 transition group-hover:w-12" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto mt-16 h-1 w-full max-w-6xl rounded-full bg-gradient-to-r from-transparent via-brand-accent/80 to-transparent shadow-[0_0_12px_rgba(21,212,196,0.35)]" />
    </main>
  );
}

export default Projects;
