import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import heroVarvik from "../../assets/Varvik 3D view.jpg";
import heroP3 from "../../assets/P3.png";
import heroSCB from "../../assets/SCB.png";
import heroWFCE from "../../assets/WFCE.png";

const copy = {
  en: {
    eyebrow: "Installation advisory bureau",
    heading: "Built-in intelligence for every installation model.",
    description:
      "We deliver BIM coordination for mechanical, electrical, and piping systems with AI automation in Revit, Python scripting, and Revit API workflows to keep models standardized, centralized, and execution-ready from day one.",
    buttons: [
      { label: "Projects", type: "route" as const, target: "/projects" },
      { label: "Services", type: "route" as const, target: "/services" },
      { label: "About Us", type: "route" as const, target: "/about" },
    ],
  },
  nl: {
    eyebrow: "Installatietechnische partner",
    heading: "BIM 3D specialist in de\ninstallatietechniek",
    description:
      "Wij leveren BIM-coordinatie voor werktuigbouwkundige, elektrotechnische en piping-installaties met AI-automatisering in Revit, Python scripting en Revit API-workflows, zodat modellen gestandaardiseerd, gecentraliseerd en uitvoeringsgereed zijn vanaf dag een.",
    buttons: [
      { label: "Projecten", type: "route" as const, target: "/projects" },
      { label: "Diensten", type: "route" as const, target: "/services" },
      { label: "Over ons", type: "route" as const, target: "/about" },
    ],
  },
};

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const labels = copy[language];

  const slides = useMemo(() => [heroVarvik, heroP3, heroSCB, heroWFCE], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    if (activeIndex >= slides.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, slides.length]);

  const handleButton = (button: (typeof labels.buttons)[number]) => {
    navigate(button.target);
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(6, 24, 26, 0.84), rgba(3, 16, 18, 0.84)), url(${slide})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-12 px-6 py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent">
              {labels.eyebrow}
              <span className="block h-px w-16 bg-brand-accent/60" />
            </span>
            <h1 className="whitespace-pre-line text-4xl font-semibold uppercase tracking-[0.12em] text-white md:text-5xl">
              {labels.heading}
            </h1>
            <p className="max-w-2xl text-xl font-semibold leading-relaxed text-white/90 transition-opacity duration-700 ease-out md:text-2xl">
              {labels.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          {labels.buttons.map((button) => (
            <button
              key={button.label}
              type="button"
              onClick={() => handleButton(button)}
              className="group flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition hover:border-brand-accent hover:text-brand-accent"
            >
              {button.label}
              <span className="ml-3 block h-px w-8 bg-white/30 transition group-hover:bg-brand-accent" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
