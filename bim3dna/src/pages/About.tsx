import Alen from "../assets/Alen.png";
import Douwe from "../assets/Douwe.png";
import Emin from "../assets/me.jpg";
import Semir from "../assets/semir.jpg";
import { useLanguage } from "../context/LanguageContext";

const copy = {
  en: {
    eyebrow: "About us",
    heading: "BIM3DNA team",
    summary:
      "Our team combines installation engineering expertise with BIM modelling and automation support.",
    profiles: [
      {
        name: "Douwe O.",
        role: "MEP specialist & instructor",
        linkedin: "https://www.linkedin.com/in/douweoltheten/",
        text: "Douwe translates complex installation systems into clear, buildable BIM models. He supports project teams with practical coordination and training that helps engineers and installers work from the same technical truth.",
      },
      {
        name: "Alen H.",
        role: "Founder & lead BIM consultant",
        linkedin: "https://www.linkedin.com/in/alen-halilovic-bim3dna/",
        text: "Alen leads BIM strategy and delivery across installation projects. He aligns stakeholders, standards, and model quality so teams can move from design to execution with fewer issues and stronger control.",
      },
      {
        name: "Emin A.",
        role: "BIM automation specialist",
        linkedin: "https://www.linkedin.com/in/emin-avdovic-90210/",
        text: "Emin builds automation workflows that reduce repetitive modelling work and improve consistency. His scripts and QA checks help teams maintain reliable data and faster project delivery.",
      },
      {
        name: "Semir M.",
        role: "MEP BIM coordinator",
        linkedin: "https://www.linkedin.com/in/semir-mustajbasic-7957b3204/",
        text: "Semir coordinates MEP models with a focus on constructability, installation sequencing, and clash-free delivery. He bridges design intent and site execution so teams can build with confidence.",
      },
      {
        name: "Adrian J.",
        role: "BIM coordinator",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Adrian supports multidisciplinary BIM coordination and model quality checks, helping teams align technical requirements with practical site delivery.",
      },
      {
        name: "Adin A.",
        role: "BIM modeler",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Adin contributes to accurate installation modeling and drawing output, ensuring consistent data and clear documentation across project phases.",
      },
      {
        name: "Nedim P.",
        role: "MEP BIM specialist",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Nedim focuses on MEP model development and constructability, supporting clash-free coordination and execution-ready deliverables.",
      },
      {
        name: "Wael A.",
        role: "BIM engineer",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Wael strengthens technical BIM workflows by connecting design intent, installation constraints, and model consistency requirements.",
      },
      {
        name: "Emir B.",
        role: "BIM automation support",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Emir supports BIM automation and data standardization activities that improve model reliability, reduce repetitive tasks, and speed up delivery.",
      },
      {
        name: "Dzenita S.",
        role: "BIM documentation specialist",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Dzenita prepares structured BIM documentation and model outputs to keep communication clear between design, coordination, and site teams.",
      },
      {
        name: "Arnel H.",
        role: "BIM specialist",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Arnel supports BIM delivery with a focus on model consistency, clear coordination outputs, and reliable project documentation across disciplines.",
      },
    ],
  },
  nl: {
    eyebrow: "Over ons",
    heading: "BIM3DNA team",
    summary:
      "Ons team combineert installatietechnische expertise met BIM-modellering en procesautomatisatie.",
    profiles: [
      {
        name: "Douwe O.",
        role: "MEP-specialist & trainer",
        linkedin: "https://www.linkedin.com/in/douweoltheten/",
        text: "Douwe vertaalt complexe installaties naar duidelijke, uitvoerbare BIM-modellen. Hij ondersteunt projectteams met praktische coordinatie en training, zodat engineers en monteurs vanuit dezelfde technische basis werken.",
      },
      {
        name: "Alen H.",
        role: "Oprichter & lead BIM-consultant",
        linkedin: "https://www.linkedin.com/in/alen-halilovic-96ab8788/",
        text: "Alen leidt BIM-strategie en projectuitvoering binnen installatietechnische trajecten. Hij zorgt dat stakeholders, standaarden en modelkwaliteit op elkaar aansluiten, van ontwerp tot uitvoering.",
      },
      {
        name: "Emin A.",
        role: "BIM-automatiseringsspecialist",
        linkedin: "https://www.linkedin.com/in/emin-avdovic-90210/",
        text: "Emin ontwikkelt automatiseringsworkflows die repetitief modelleerwerk verminderen en consistentie verhogen. Zijn scripts en QA-controles zorgen voor betrouwbare data en snellere projectlevering.",
      },
      {
        name: "Semir M.",
        role: "MEP BIM-coordinator",
        linkedin: "https://www.linkedin.com/in/semir-mustajbasic-7957b3204/",
        text: "Semir coordineert MEP-modellen met focus op uitvoerbaarheid, installatiesequencing en clashvrije oplevering. Hij verbindt ontwerpintentie met uitvoering op de bouwplaats.",
      },
      {
        name: "Adrian J.",
        role: "BIM-coordinator",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Adrian ondersteunt multidisciplinaire BIM-coordinatie en modelkwaliteitscontroles, zodat technische eisen goed aansluiten op de uitvoering op locatie.",
      },
      {
        name: "Adin A.",
        role: "BIM-modelleur",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Adin levert nauwkeurige installatiemodellen en tekenwerk, met consistente data en duidelijke documentatie in elke projectfase.",
      },
      {
        name: "Nedim P.",
        role: "MEP BIM-specialist",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Nedim richt zich op MEP-modelontwikkeling en uitvoerbaarheid, met focus op clashvrije coordinatie en uitvoering gereed opleveringen.",
      },
      {
        name: "Wael A.",
        role: "BIM-engineer",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Wael versterkt technische BIM-workflows door ontwerpintentie, installatiebeperkingen en modelconsistentie met elkaar te verbinden.",
      },
      {
        name: "Emir B.",
        role: "BIM-automatisering support",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Emir ondersteunt BIM-automatisering en datastandaardisatie om modelbetrouwbaarheid te verhogen, repetitief werk te verminderen en de doorlooptijd te versnellen.",
      },
      {
        name: "Dzenita S.",
        role: "BIM-documentatiespecialist",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Dzenita verzorgt gestructureerde BIM-documentatie en modeloutput voor heldere afstemming tussen ontwerp, coordinatie en uitvoering.",
      },
      {
        name: "Arnel H.",
        role: "BIM-specialist",
        linkedin: "https://www.linkedin.com/company/bim3dna",
        text: "Arnel ondersteunt BIM-opleveringen met focus op modelconsistentie, duidelijke coordinatie-output en betrouwbare projectdocumentatie tussen disciplines.",
      },
    ],
  },
};

const profileImages: Array<string | null> = [
  Douwe,
  Alen,
  Emin,
  Semir,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

function About() {
  const { language } = useLanguage();
  const labels = copy[language];

  return (
    <main className="bg-black text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#021010] via-[#021b1c] to-[#010505]" />
        <div className="mx-auto max-w-5xl space-y-5 px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
            {labels.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            {labels.heading}
          </h1>
          <p className="max-w-3xl text-sm text-white/70">{labels.summary}</p>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_top,_rgba(20,37,39,0.8),_#050f11)] py-20">
        <div className="mx-auto max-w-5xl space-y-10 px-6">
          {labels.profiles.map((profile, index) => (
            <article
              key={profile.name}
              className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-start"
            >
              {profileImages[index] ? (
                <img
                  src={profileImages[index] ?? undefined}
                  alt={profile.name}
                  className={`h-40 w-40 rounded-xl object-cover ring-1 ring-white/20 ${
                    profile.name === "Semir M." ? "object-[50%_20%]" : ""
                  }`}
                  loading="lazy"
                />
              ) : (
                <div className="flex h-40 w-40 items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  No Image
                </div>
              )}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold">{profile.name}</h2>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-brand-accent/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent transition hover:border-brand-accent hover:bg-brand-accent/10"
                  >
                    LinkedIn
                  </a>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
                  {profile.role}
                </p>
                <p className="text-sm text-white/80">{profile.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
