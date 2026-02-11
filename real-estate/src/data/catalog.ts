import coordinationLead from "../assets/Varvik 3D view.jpg";
import clashImg from "../assets/Clash/Clash and Coordination.png";
import scanImg from "../assets/Schermafbeelding 2026-02-07 102915.png";
import templateImg from "../assets/Template Databse.png";
import lifecycleImg from "../assets/4d5d6d04.png";
import heroVarvik from "../assets/Varvik 3D view.jpg";
import heroArch from "../assets/Arch01.png";
import heroScript from "../assets/Script Automation.png";
import installPrefabrication from "../assets/project_img_2.jpg";
import installWorkshop from "../assets/project_img_3.jpg";
import lifecycleDashboard from "../assets/project_img_4.jpg";
import templateLibrary from "../assets/project_img_2.jpg";
import clashNavisworks from "../assets/project_img_5.jpg";
import yotelAll01 from "../assets/Scan to BIM/Yotelair/Yotelair Schiphol ALL.png";
import yotelAll02 from "../assets/Scan to BIM/Yotelair/Yotelair Schiphol ALL 2.png";
import tunnelsPtz01 from "../assets/Scan to BIM/Tunnels PTZ/Schermafbeelding1.png";
import tunnelsPtz02 from "../assets/Scan to BIM/Tunnels PTZ/Schermafbeelding2.png";
import airportScan01 from "../assets/Scan to BIM/Airport/Schermafbeelding3.png";
import assetManagement01 from "../assets/Assetmanagement/Schermafbeelding 2026-02-07 113859.png";
import toolbarImg from "../assets/Scripts AI Automation/Toolbar.png";
import aiAgentImg from "../assets/Scripts AI Automation/AI1.png";
import phil0 from "../assets/Architecture/phil0.png";
import phil1 from "../assets/Architecture/phil1.png";
import phil2 from "../assets/Architecture/phil2.png";
import phil3 from "../assets/Architecture/phil3.png";
import phil4 from "../assets/Architecture/phil4.png";
import phil5 from "../assets/Architecture/phil5.png";
import phil6 from "../assets/Architecture/phil6.png";
import skv0 from "../assets/Architecture/skv0.jpg";
import skv1 from "../assets/Architecture/skv1.jpg";
import skv2 from "../assets/Architecture/skv2.jpg";
import skv3 from "../assets/Architecture/skv3.jpg";
import skv4 from "../assets/Architecture/skv4.jpg";
import skv5 from "../assets/Architecture/skv5.jpg";
import chemicalPlant01 from "../assets/Mechanical Electrical/Chemical Plant 1.png";
import chemicalPlant02 from "../assets/Mechanical Electrical/Chemical Plant 2.png";
import chemicalPlant03 from "../assets/Mechanical Electrical/1.0.3-01 07 04 1 of 2.png";
import chemicalPlant04 from "../assets/Mechanical Electrical/1.0.3-01 07 04 1 of 3.png";
import hamerkwartierCut from "../assets/Mechanical Electrical/Hamerkwartier+ Cut View Zoomed in.png";
import labBuilding01 from "../assets/Mechanical Electrical/Lab Building 1 of 2.png";
import labBuilding02 from "../assets/Mechanical Electrical/Lab Building 1 of 3.png";
import p5Maassluis01 from "../assets/Mechanical Electrical/P5 Maassluis.png";
import p5Maassluis02 from "../assets/Mechanical Electrical/P5 Maassluis Woning.png";
import reitdiepstraat01 from "../assets/Mechanical Electrical/Reitdiepstraat 1 of 2.png";

import type { Language } from "../i18n/languages";

export type LocalizedString = Record<Language, string>;

export type ServiceTag = {
  id: string;
  label: LocalizedString;
};

export type ServiceCategory = {
  slug: string;
  title: LocalizedString;
  headline: LocalizedString;
  summary: LocalizedString;
  background: string;
  tags: ServiceTag[];
};

export type ProjectScope = {
  id: string;
  label: LocalizedString;
  image: string;
};

export type ProjectPortfolioItem = {
  id: string;
  title: LocalizedString;
  location: string;
  description: LocalizedString;
  year: number;
  scopes: ProjectScope[];
  extraInfo?: LocalizedString;
};

const scope = (
  id: string,
  en: string,
  nl: string,
  image: string,
): ProjectScope => ({
  id,
  label: { en, nl },
  image,
});

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "coordination-installations",
    title: {
      en: "Coordination for Electrical & Mechanical Installations",
      nl: "Coördinatie voor elektro- en werktuigbouwkundige installaties",
    },
    headline: {
      en: "Installation disciplines aligned from engineering to site handover.",
      nl: "Installatiedisciplines afgestemd van engineering tot oplevering.",
    },
    summary: {
      en: "BIM-led coordination that keeps piping, electrical, and HVAC systems buildable, clash-free, and ready for prefabrication.",
      nl: "BIM-gestuurde coördinatie die werktuigbouwkundige, elektrotechnische en HVAC-systemen uitvoerbaar, clashvrij en prefab-gereed houdt.",
    },
    background: heroVarvik,
    tags: [
      { id: "mep", label: { en: "MEP", nl: "MEP" } },
      {
        id: "installations",
        label: { en: "Installations", nl: "Installaties" },
      },
    ],
  },
  {
    slug: "architecture-delivery",
    title: { en: "Architecture", nl: "Architectuur" },
    headline: {
      en: "Architectural intent protected through coordinated detailing.",
      nl: "Architectonische intentie bewaakt via gecoördineerde detaillering.",
    },
    summary: {
      en: "Design support and authoring that translate the concept vision into coordinated construction models.",
      nl: "Ontwerpbegeleiding en modellering die de conceptvisie uitwerken tot gecoördineerde bouwmodellen.",
    },
    background: heroArch,
    tags: [
      { id: "authoring", label: { en: "Authoring", nl: "Modelleren" } },
      { id: "facade", label: { en: "Facade", nl: "Gevel" } },
    ],
  },
  {
    slug: "script-automation",
    title: {
      en: "AI Automation / Python Scripts",
      nl: "AI-automatisering / Python scripts",
    },
    headline: {
      en: "AI automation and Python tooling that keeps installation BIM consistent and scalable.",
      nl: "AI-automatisering en Python-tooling die installatie-BIM consistent en schaalbaar houdt.",
    },
    summary: {
      en: "Revit API, Python scripting, and BIM automation workflows that remove repetitive work, enforce standards, and improve model quality control.",
      nl: "Revit API-, Python scripting- en BIM-automatiseringsworkflows die repetitief werk verminderen, standaarden borgen en modelkwaliteitscontrole verbeteren.",
    },
    background: heroScript,
    tags: [
      { id: "automation", label: { en: "Automation", nl: "Automatisering" } },
      { id: "quality", label: { en: "Quality", nl: "Kwaliteit" } },
    ],
  },
  {
    slug: "clash-detection",
    title: { en: "Clash Detection", nl: "Clashdetectie" },
    headline: {
      en: "Actionable issue tracking that keeps installation teams confident on site.",
      nl: "Actieve issue-tracking die installatieteams zekerheid geeft op de bouwplaats.",
    },
    summary: {
      en: "Rule-based coordination workshops and install-ready reporting tailored to electrical and mechanical trades.",
      nl: "Regelgestuurde coördinatiesessies en installatieready rapportages, afgestemd op elektro- en werktuigbouw.",
    },
    background: clashImg,
    tags: [
      { id: "qa", label: { en: "QA", nl: "Kwaliteitscontrole" } },
      { id: "workshops", label: { en: "Workshops", nl: "Workshops" } },
    ],
  },
  {
    slug: "scan-to-bim",
    title: { en: "Scan to BIM", nl: "Scan naar BIM" },
    headline: {
      en: "Reality capture aligned with installation refurbishment plans.",
      nl: "Reality capture afgestemd op renovatie- en installatieschema’s.",
    },
    summary: {
      en: "Point cloud intelligence converted into digital twins that guide installation upgrades.",
      nl: "Puntwolkinformatie omgezet naar digitale twins die installatierenovaties sturen.",
    },
    background: scanImg,
    tags: [
      { id: "as-built", label: { en: "As-built", nl: "As-built" } },
      { id: "digital-twin", label: { en: "Digital Twin", nl: "Digital Twin" } },
    ],
  },
  {
    slug: "template-database",
    title: { en: "Template Database", nl: "Templatebibliotheek" },
    headline: {
      en: "Installation standards centralised for every project team.",
      nl: "Installatiestandaarden gecentraliseerd voor elk projectteam.",
    },
    summary: {
      en: "Revit templates, families, and parameters curated for mechanical and electrical delivery.",
      nl: "Revit-templates, families en parameters op maat voor werktuigbouwkundige en elektrotechnische projecten.",
    },
    background: templateImg,
    tags: [
      { id: "content", label: { en: "Content", nl: "Content" } },
      { id: "governance", label: { en: "Governance", nl: "Governance" } },
    ],
  },
  {
    slug: "lifecycle-delivery",
    title: { en: "4D / 5D / 6D Delivery", nl: "4D / 5D / 6D Levering" },
    headline: {
      en: "Operational insight layered on top of coordinated installations.",
      nl: "Operationeel inzicht bovenop gecoördineerde installaties.",
    },
    summary: {
      en: "Schedule, cost, and facilities intelligence embedded in the installation models we hand over.",
      nl: "Planning-, kosten- en beheerinformatie geïntegreerd in de installatiemodellen die we opleveren.",
    },
    background: lifecycleImg,
    tags: [
      { id: "4d", label: { en: "4D/5D/6D", nl: "4D/5D/6D" } },
      { id: "operations", label: { en: "Operations", nl: "Beheer" } },
    ],
  },
];

export const projectPortfolios: Record<string, ProjectPortfolioItem[]> = {
  "coordination-installations": [
    {
      id: "varvik-innovation-hub",
      title: {
        en: "Varvik Innovation Hub",
        nl: "Varvik Innovation Hub",
      },
      location: " · Rotterdam, NL",
      description: {
        en: "Multi-phase campus with packaged plant rooms, prefabricated risers, and coordinated cable routing ready for installation.",
        nl: "Meerfasig campusproject met prefab technische ruimtes, uitgewerkte schachten en gecoördineerde kabelroutes tot op uitvoeringsniveau.",
      },
      year: 2025,
      scopes: [
        scope(
          "architectural-bim",
          "Architectural BIM",
          "Architectonische BIM",
          coordinationLead,
        ),
        scope(
          "mep-coordination",
          "MEP Coordination",
          "MEP-coördinatie",
          installPrefabrication,
        ),
        scope(
          "lod-350",
          "LOD 350 Installables",
          "LOD 350 Installaties",
          installWorkshop,
        ),
      ],
    },
    {
      id: "chemical-plant",
      title: {
        en: "Chemical Plant",
        nl: "Chemical Plant",
      },
      location: "Netherlands",
      description: {
        en: "Mechanical and electrical installation coordination for process-area routing, equipment interfaces, and execution-ready BIM detailing.",
        nl: "Coordinatie van werktuigbouwkundige en elektrotechnische installaties voor procestracés, equipment-aansluitingen en uitvoeringsgereed BIM-detailwerk.",
      },
      year: 2025,
      scopes: [
        scope(
          "chemical-overview-01",
          "Chemical Plant View 1",
          "Chemical Plant beeld 1",
          chemicalPlant01,
        ),
        scope(
          "chemical-overview-02",
          "Chemical Plant View 2",
          "Chemical Plant beeld 2",
          chemicalPlant02,
        ),
        scope(
          "chemical-layout-01",
          "Process Layout 1",
          "Proceslayout 1",
          chemicalPlant03,
        ),
        scope(
          "chemical-layout-02",
          "Process Layout 2",
          "Proceslayout 2",
          chemicalPlant04,
        ),
      ],
    },
    {
      id: "hamerkwartier",
      title: {
        en: "Hamerkwartier",
        nl: "Hamerkwartier",
      },
      location: "Amsterdam, NL",
      description: {
        en: "Cut-view coordination for dense electrical and mechanical installation zones with focus on spatial clarity and buildability.",
        nl: "Cut-view coordinatie voor dichte elektro- en werktuigbouwkundige installatiezones met focus op ruimtelijke duidelijkheid en uitvoerbaarheid.",
      },
      year: 2025,
      scopes: [
        scope(
          "hamerkwartier-cut-view",
          "Cut View Zoomed In",
          "Cut view ingezoomd",
          hamerkwartierCut,
        ),
      ],
    },
    {
      id: "lab-building",
      title: {
        en: "Lab Building",
        nl: "Lab Building",
      },
      location: "Netherlands",
      description: {
        en: "Installation BIM coordination for lab spaces, including technical routing and coordinated equipment zones for controlled environments.",
        nl: "Installatie-BIM-coordinatie voor labruimten inclusief technische tracés en afgestemde equipmentzones voor gecontroleerde omgevingen.",
      },
      year: 2025,
      scopes: [
        scope(
          "lab-building-view-01",
          "Lab View 1",
          "Lab beeld 1",
          labBuilding01,
        ),
        scope(
          "lab-building-view-02",
          "Lab View 2",
          "Lab beeld 2",
          labBuilding02,
        ),
      ],
    },
    {
      id: "p5-maassluis",
      title: {
        en: "P5 Maassluis",
        nl: "P5 Maassluis",
      },
      location: "Maassluis, NL",
      description: {
        en: "Electrical and mechanical coordination package for residential installation works with model-driven detailing and execution alignment.",
        nl: "Elektro- en werktuigbouwkundig coordinatiepakket voor woninginstallaties met modelgestuurde detaillering en uitvoeringsafstemming.",
      },
      year: 2025,
      scopes: [
        scope(
          "p5-maassluis-main",
          "P5 Maassluis",
          "P5 Maassluis",
          p5Maassluis01,
        ),
        scope(
          "p5-maassluis-woning",
          "P5 Maassluis Woning",
          "P5 Maassluis Woning",
          p5Maassluis02,
        ),
      ],
    },
    {
      id: "reitdiepstraat",
      title: {
        en: "Reitdiepstraat",
        nl: "Reitdiepstraat",
      },
      location: "Netherlands",
      description: {
        en: "MEP coordination model for installation scope alignment and clash-free execution in residential context.",
        nl: "MEP-coordinatiemodel voor afstemming van installatiescope en clashvrije uitvoering in wooncontext.",
      },
      year: 2025,
      scopes: [
        scope(
          "reitdiepstraat-view",
          "Reitdiepstraat View",
          "Reitdiepstraat beeld",
          reitdiepstraat01,
        ),
      ],
    },
  ],
  "architecture-delivery": [
    {
      id: "multi-purpose-building",
      title: {
        en: "Multi-purpose building",
        nl: "Multi-purpose building",
      },
      location: "Netherlands",
      description: {
        en: "Project: Multi-purpose building\nDescription: Coordinated architectural BIM with detailed model views across key design phases.",
        nl: "Project: Multi-purpose building\nOmschrijving: Gecoördineerde architectuur-BIM met gedetailleerde modelviews door de belangrijkste ontwerpfases.",
      },
      year: 2025,
      scopes: [
        scope("phil-0", "View 1", "Weergave 1", phil0),
        scope("phil-1", "View 2", "Weergave 2", phil1),
        scope("phil-2", "View 3", "Weergave 3", phil2),
        scope("phil-3", "View 4", "Weergave 4", phil3),
        scope("phil-4", "View 5", "Weergave 5", phil4),
        scope("phil-5", "View 6", "Weergave 6", phil5),
        scope("phil-6", "View 7", "Weergave 7", phil6),
      ],
    },
    {
      id: "shooting-club-building",
      title: {
        en: "Shooting club building",
        nl: "Shooting club building",
      },
      location: "Netherlands",
      description: {
        en: "Project: Shooting club building\nDescription: Architectural coordination and visualization for a shooting club facility.",
        nl: "Project: Shooting club building\nOmschrijving: Architectonische coordinatie en visualisatie voor een schietclubgebouw.",
      },
      year: 2025,
      scopes: [
        scope("skv-0", "View 1", "Weergave 1", skv0),
        scope("skv-1", "View 2", "Weergave 2", skv1),
        scope("skv-2", "View 3", "Weergave 3", skv2),
        scope("skv-3", "View 4", "Weergave 4", skv3),
        scope("skv-4", "View 5", "Weergave 5", skv4),
        scope("skv-5", "View 6", "Weergave 6", skv5),
      ],
    },
  ],
  "script-automation": [
    {
      id: "revit-custom-toolbar",
      title: {
        en: "Revit Custom Toolbar",
        nl: "Revit Custom Toolbar",
      },
      location: "Netherlands",
      description: {
        en: "Project: Revit Custom Toolbar\nDescription: Custom Revit toolbar setup for streamlined BIM automation workflows.",
        nl: "Project: Revit Custom Toolbar\nOmschrijving: Maatwerk Revit-toolbar voor gestroomlijnde BIM-automatiseringsworkflows.",
      },
      year: 2025,
      scopes: [scope("toolbar-view-01", "View 1", "Weergave 1", toolbarImg)],
    },
    {
      id: "bimai-agent",
      title: {
        en: "BIMAI_Agent",
        nl: "BIMAI_Agent",
      },
      location: "Netherlands",
      description: {
        en: "Project: BIMAI_Agent\nDescription: AI-assisted BIM automation and scripting support for Revit workflows.",
        nl: "Project: BIMAI_Agent\nOmschrijving: AI-ondersteunde BIM-automatisering en scripting voor Revit-workflows.",
      },
      year: 2025,
      scopes: [scope("bimai-view-01", "View 1", "Weergave 1", aiAgentImg)],
    },
  ],
  "clash-detection": [],
  "scan-to-bim": [
    {
      id: "yotelair",
      title: {
        en: "Yotelair",
        nl: "Yotelair",
      },
      location: "Airport, NL",
      description: {
        en: "Project: Yotelair\nDescription: Replacement of the waste water pump system\nDate: 07/07/2025",
        nl: "Project: Yotelair\nOmschrijving: Vervanging van het afvalwaterpompsysteem\nDatum: 07/07/2025",
      },
      year: 2025,
      scopes: [
        scope("view-01", "View 1", "Weergave 1", yotelAll01),
        scope("view-02", "View 2", "Weergave 2", yotelAll02),
      ],
      extraInfo: {
        en: "For this project, a water pump system installation was delivered with coordinated layouts, equipment detailing, and point cloud verification to ensure precise site execution.",
        nl: "Voor dit project is een waterpompsysteeminstallatie gerealiseerd met gecoördineerde lay-outs, apparatuurdetaillering en puntwolkverificatie voor nauwkeurige uitvoering op locatie.",
      },
    },
    {
      id: "tunnels-ptz",
      title: {
        en: "Tunnels PTZ",
        nl: "Tunnels PTZ",
      },
      location: "Netherlands",
      description: {
        en: "Project: Tunnels PTZ\nDescription: Scan-to-BIM conversion for tunnel context and PTZ-aligned model verification.",
        nl: "Project: Tunnels PTZ\nOmschrijving: Scan-to-BIM omzetting voor tunnelcontext en PTZ-afgestemde modelverificatie.",
      },
      year: 2025,
      scopes: [
        scope("tunnels-ptz-view-01", "View 1", "Weergave 1", tunnelsPtz01),
        scope("tunnels-ptz-view-02", "View 2", "Weergave 2", tunnelsPtz02),
      ],
    },
    {
      id: "airport-scan",
      title: {
        en: "Airport",
        nl: "Airport",
      },
      location: "Netherlands",
      description: {
        en: "Project: Airport\nDescription: Scan-to-BIM model extraction and alignment from captured site data.",
        nl: "Project: Airport\nOmschrijving: Scan-to-BIM modelafleiding en uitlijning op basis van ingemeten locatiegegevens.",
      },
      year: 2025,
      scopes: [scope("airport-view-01", "View 1", "Weergave 1", airportScan01)],
    },
  ],
  "template-database": [
    {
      id: "asset-management",
      title: {
        en: "Asset Management",
        nl: "Asset Management",
      },
      location: "Netherlands",
      description: {
        en: "Project: Asset Management\nDescription: Structured BIM asset information and visual governance for operation-ready handover.",
        nl: "Project: Asset Management\nOmschrijving: Gestructureerde BIM-assetinformatie en visuele governance voor beheergerichte oplevering.",
      },
      year: 2025,
      scopes: [
        scope(
          "asset-management-view-01",
          "Asset Overview",
          "Assetoverzicht",
          assetManagement01,
        ),
      ],
    },
  ],
  "lifecycle-delivery": [],
};







