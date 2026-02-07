import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import type { Language } from "../../i18n/languages";
import Alen from "../../assets/Alen.png";
import Douwe from "../../assets/Douwe.png";
import Emin from "../../assets/me.jpg";
import Semir from "../../assets/semir.jpg";
import Logo2 from "../../assets/Logo2.png";
import Logo3 from "../../assets/Logo3.png";
import Logo7 from "../../assets/Logo7.png";

type TeamTestimonial = {
  name: string;
  role: Record<Language, string>;
  quote: Record<Language, string>;
  image: string;
};

type ClientTestimonial = {
  quote: Record<Language, string>;
  name: string;
  title: Record<Language, string>;
  company: string;
};

const teamTestimonials: TeamTestimonial[] = [
  {
    name: "Douwe O.",
    role: {
      en: "MEP specialist & instructor",
      nl: "MEP-specialist & trainer",
    },
    quote: {
      en: "“I translate complex installation systems into intuitive Revit models so every fitter and engineer understands the build.”",
      nl: "“Ik vertaal complexe installaties naar intuïtieve Revit-modellen zodat iedere monteur en engineer begrijpt hoe het gebouwd wordt.”",
    },
    image: Douwe,
  },
  {
    name: "Alen H.",
    role: {
      en: "Founder & lead BIM consultant",
      nl: "Oprichter & lead BIM-consultant",
    },
    quote: {
      en: "“BIM3DNA combines coordination, automation, and site insight so installation partners can deliver without surprises.”",
      nl: "“BIM3DNA combineert coördinatie, automatisering en bouwplaatsinzicht zodat installatiepartners zonder verrassingen kunnen opleveren.”",
    },
    image: Alen,
  },
  {
    name: "Emin A.",
    role: {
      en: "BIM automation specialist",
      nl: "BIM-automatiseerder",
    },
    quote: {
      en: "“Custom tooling should remove friction. Our scripts keep models compliant, data tidy, and install teams confident.”",
      nl: "“Maatwerkscripts horen frictie weg te nemen. Onze tooling houdt modellen conform, data netjes en installatieteams zeker.”",
    },
    image: Emin,
  },
  {
    name: "Semir M.",
    role: {
      en: "MEP BIM coordinator",
      nl: "MEP BIM-coÃ¶rdinator",
    },
    quote: {
      en: "I align MEP models with constructability and installation sequencing so teams can build without surprises.",
      nl: "Ik stem MEP-modellen af op uitvoerbaarheid en installatiesequencing zodat teams zonder verrassingen kunnen bouwen.",
    },
    image: Semir,
  },
];

const clientTestimonials: ClientTestimonial[] = [
  {
    quote: {
      en: "“BIM3DNA cut weeks from coordination. Prefab partners received install kits that were buildable on day one.”",
      nl: "“BIM3DNA verkortte de coördinatie met weken. Prefab-partners kregen installatiesets die vanaf dag één uitvoerbaar waren.”",
    },
    name: "John M.",
    title: { en: "Project Manager", nl: "Projectmanager" },
    company: "ArchiCore Group",
  },
  {
    quote: {
      en: "“Automation kept our Revit libraries aligned across regions. Standards stuck without extra policing.”",
      nl: "“Automatisering hield onze Revit-bibliotheken in meerdere landen gelijk. Standaarden bleven geborgd zonder extra controle.”",
    },
    name: "Sara K.",
    title: { en: "Lead BIM Coordinator", nl: "Lead BIM-coördinator" },
    company: "MEP+Design",
  },
  {
    quote: {
      en: "“Scan to BIM output was precise and annotated for the install crew. Renovation shutdown time halved.”",
      nl: "“Scan-to-BIM output was exact en voorzien van annotaties voor de installateurs. De renovatiestilstand halveerde.”",
    },
    name: "Peter V.",
    title: { en: "Director", nl: "Directeur" },
    company: "VDW Engineering",
  },
  {
    quote: {
      en: "“Template governance finally made our installation content reliable. New hires hit the ground running.”",
      nl: "“Dankzij template-governance is onze installatiecontent eindelijk betrouwbaar. Nieuwe collega’s konden meteen aan de slag.”",
    },
    name: "Laila N.",
    title: { en: "BIM Manager", nl: "BIM-manager" },
    company: "TechSquare",
  },
  {
    quote: {
      en: "“Clash reviews were structured around the install schedule. Crews always knew the next priority.”",
      nl: "“Clashreviews waren afgestemd op de installatieschema’s. Teams wisten altijd wat de volgende prioriteit was.”",
    },
    name: "Tomas E.",
    title: { en: "Construction Director", nl: "Directeur uitvoering" },
    company: "ConstructIQ",
  },
  {
    quote: {
      en: "“Lifecycle dashboards connected install data to maintenance. Facility teams finally trust the model.”",
      nl: "“Lifecycle-dashboards koppelden installatiedata aan onderhoud. Beheerteams vertrouwen nu op het model.”",
    },
    name: "Karim W.",
    title: { en: "Facility Lead", nl: "Hoofd facilitair" },
    company: "MetroWorks",
  },
];

const logos = [Logo7, Logo2, Logo3];

const copy = {
  en: {
    eyebrow: "About BIM3DNA",
    heading: "Installation-focused BIM specialists with automation in our DNA.",
    body: "We operate as an advisory bureau for installation contractors—pairing coordination expertise, automation, and lifecycle insight so mechanical and electrical teams deliver with confidence.",
    teamTitle: "Team perspectives",
    clientsTitle: "Client reflections",
    previous: "Previous",
    next: "Next",
  },
  nl: {
    eyebrow: "Over BIM3DNA",
    heading:
      "Installatiegerichte BIM-specialisten met automatisering in het DNA.",
    body: "Wij werken als adviesbureau voor installateurs en aannemers. Met coördinatie-expertise, automatisering en lifecycle-inzicht zorgen we dat werktuigbouwkundige en elektrotechnische teams zeker leveren.",
    teamTitle: "Teamreflecties",
    clientsTitle: "Klantervaringen",
    previous: "Vorige",
    next: "Volgende",
  },
};

const useLoopingSlice = <T,>(
  items: T[],
  length: number,
  startIndex: number,
): T[] => {
  if (items.length <= length) {
    return items;
  }
  const result: T[] = [];
  for (let i = 0; i < length; i += 1) {
    result.push(items[(startIndex + i) % items.length]);
  }
  return result;
};

function AboutSection() {
  const [teamIndex, setTeamIndex] = useState(0);
  const [clientIndex, setClientIndex] = useState(0);
  const { language } = useLanguage();
  const labels = copy[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setClientIndex((prev) => (prev + 1) % clientTestimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const activeClientSet = useMemo(
    () => useLoopingSlice(clientTestimonials, 4, clientIndex),
    [clientIndex],
  );

  const handleTeamNavigate = (direction: "prev" | "next") => {
    setTeamIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % teamTestimonials.length;
      }
      return (prev - 1 + teamTestimonials.length) % teamTestimonials.length;
    });
  };

  return (
    <section
      id="about"
      className="bg-[radial-gradient(circle_at_top,_rgba(20,37,39,0.8),_#050f11)] py-24 text-white"
    >
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
            {labels.eyebrow}
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            {labels.heading}
          </h2>
          <p className="max-w-3xl text-sm text-white/70">{labels.body}</p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-l-4 border-brand-accent/70 pl-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              {labels.teamTitle}
            </h3>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleTeamNavigate("prev")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-brand-accent/60 hover:text-brand-accent"
                aria-label={labels.previous}
              >
                {"<"}
              </button>
              <button
                type="button"
                onClick={() => handleTeamNavigate("next")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-brand-accent/60 hover:text-brand-accent"
                aria-label={labels.next}
              >
                {">"}
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${teamIndex * 100}%)` }}
            >
              {teamTestimonials.map((testimonial) => (
                <div key={testimonial.name} className="min-w-full px-0">
                  <div className="space-y-4 border-l-2 border-brand-accent/60 pl-6">
                    <p className="text-lg text-white/90">
                      {testimonial.quote[language]}
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={`h-12 w-12 rounded-full object-cover ring-2 ring-brand-accent/70 ${
                          testimonial.name === "Semir M." ? "scale-110" : ""
                        }`}
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                          {testimonial.role[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 px-6 py-8">
          <div className="mask-fade-x mask-fade-y flex animate-marquee items-center gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={`${logo}-${index}`}
                src={logo}
                alt="Client logo"
                className="h-12 w-auto opacity-80 transition hover:opacity-100"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-l-4 border-brand-accent/70 pl-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              {labels.clientsTitle}
            </h3>
            <div className="flex gap-2">
              {clientTestimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setClientIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    clientIndex === index
                      ? "bg-brand-accent"
                      : "bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`${language === "en" ? "Show testimonial group" : "Toon testimonialgroep"} ${
                    index + 1
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {activeClientSet.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="space-y-3 border-l-2 border-brand-accent/60 pl-5 text-left text-sm leading-relaxed text-white/80"
              >
                <blockquote className="text-sm text-white/90">
                  {testimonial.quote[language]}
                </blockquote>
                <figcaption className="mt-4 space-y-1 text-xs uppercase tracking-[0.2em] text-white/50">
                  <p className="text-sm font-semibold normal-case text-white">
                    {testimonial.name}
                  </p>
                  <p>{testimonial.title[language]}</p>
                  <p>{testimonial.company}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
