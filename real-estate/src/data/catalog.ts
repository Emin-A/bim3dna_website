import coordinationLead from "../assets/Varvik 3D view.jpg";
import automationImg from "../assets/script-automation.jpg";
import clashImg from "../assets/Clash/Clash and Coordination.png";
import scanImg from "../assets/Schermafbeelding 2026-02-07 102915.png";
import templateImg from "../assets/Template Databse.png";
import lifecycleImg from "../assets/4d5d6d04.png";
import heroVarvik from "../assets/Varvik 3D view.jpg";
import heroArch from "../assets/Arch01.png";
import heroScript from "../assets/Script Automation.png";
import architectureFeature from "../assets/project_img_1.jpg";
import architectureInterior from "../assets/project_img_4.jpg";
import installPrefabrication from "../assets/project_img_2.jpg";
import installWorkshop from "../assets/project_img_3.jpg";
import automationSuite from "../assets/project_img_5.jpg";
import automationDashboard from "../assets/project_img_6.jpg";
import lifecycleDashboard from "../assets/project_img_4.jpg";
import templateLibrary from "../assets/project_img_2.jpg";
import clashNavisworks from "../assets/project_img_5.jpg";
import yotelAll01 from "../assets/Scan to BIM/Yotelair/Yotelair Schiphol ALL.png";
import yotelAll02 from "../assets/Scan to BIM/Yotelair/Yotelair Schiphol ALL 2.png";
import tunnelsPtz01 from "../assets/Scan to BIM/Tunnels PTZ/Schermafbeelding1.png";
import tunnelsPtz02 from "../assets/Scan to BIM/Tunnels PTZ/Schermafbeelding2.png";
import airportScan01 from "../assets/Scan to BIM/Airport/Schermafbeelding3.png";
import assetManagement01 from "../assets/Assetmanagement/Schermafbeelding 2026-02-07 113859.png";
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
      id: "canal-district-housing",
      title: {
        en: "Canal District Housing",
        nl: "Grachtengordel Wonen",
      },
      location: "Airport, NL",
      description: {
        en: "Heritage-sensitive housing with parametric facades tuned to daylight and coordinated with mechanical exhausts.",
        nl: "Monumentaal woonproject met parametrische gevels geoptimaliseerd voor daglicht en afgestemd op mechanische ventilatiekanalen.",
      },
      year: 2025,
      scopes: [
        scope(
          "concept-authoring",
          "Concept Authoring",
          "Conceptmodellering",
          architectureFeature,
        ),
        scope(
          "facade-rationalisation",
          "Facade Rationalisation",
          "Geveloptimalisatie",
          architectureInterior,
        ),
        scope(
          "install-interface",
          "Install Interface",
          "Installatie-afstemming",
          coordinationLead,
        ),
      ],
    },
    {
      id: "northshore-cultural-centre",
      title: {
        en: "Northshore Cultural Centre",
        nl: "Northshore Cultuurcentrum",
      },
      location: " · Groningen, NL",
      description: {
        en: "Public programme where architectural detailing and mechanical routing were resolved together to preserve interior intent.",
        nl: "Publiek programma waarbij architectonische detaillering en installatietracten samen zijn opgelost om de ruimtelijke kwaliteit te behouden.",
      },
      year: 2024,
      scopes: [
        scope(
          "spatial-programming",
          "Spatial Programming",
          "Ruimtelijke programmering",
          architectureInterior,
        ),
        scope(
          "technical-authoring",
          "Technical Authoring",
          "Technische uitwerking",
          architectureFeature,
        ),
        scope(
          "visualisation",
          "Visualisation",
          "Visualisatie",
          automationSuite,
        ),
      ],
    },
  ],
  "script-automation": [
    {
      id: "pyrevit-standards-suite",
      title: {
        en: "PyRevit Standards Suite",
        nl: "PyRevit Standaardensuite",
      },
      location: " · Global rollout",
      description: {
        en: "Automation toolkit covering QA, sheet setup, and parameter governance for 200+ installation designers.",
        nl: "Automatiseringssuite voor kwaliteitscontroles, tekenbladopzet en paramaterbeheer voor meer dan 200 installatiemodelleurs.",
      },
      year: 2025,
      scopes: [
        scope("pyrevit", "pyRevit Toolkit", "pyRevit-toolkit", automationImg),
        scope(
          "batch-processing",
          "Batch Processing",
          "Batchverwerking",
          automationSuite,
        ),
        scope(
          "compliance",
          "Compliance Checks",
          "Conformiteitscontrole",
          automationDashboard,
        ),
      ],
    },
    {
      id: "prefab-library-generator",
      title: {
        en: "Prefab Library Generator",
        nl: "Prefab Bibliotheekgenerator",
      },
      location: " · Copenhagen, DK",
      description: {
        en: "Scripts that transform manufacturer data into multi-discipline families complete with install instructions.",
        nl: "Scripts die fabrikantsdata omzetten naar multidisciplinaire families inclusief installatieschema’s.",
      },
      year: 2024,
      scopes: [
        scope(
          "dynamo",
          "Dynamo Automation",
          "Dynamo-automatisering",
          automationSuite,
        ),
        scope(
          "content-automation",
          "Content Automation",
          "Content-automatisering",
          automationImg,
        ),
        scope(
          "cost-data",
          "Cost Data Binding",
          "Kostendata-koppeling",
          automationDashboard,
        ),
      ],
    },
  ],
  "clash-detection": [
    {
      id: "metro-interchange-upgrade",
      title: {
        en: "Metro Interchange Upgrade",
        nl: "Metro Verkeersknooppunt Upgrade",
      },
      location: " · The Hague, NL",
      description: {
        en: "Weekly install workshops resolving dense MEP racks, penetrations, and staged sequences with Navisworks automations.",
        nl: "Wekelijkse installatieworkshops voor dichte MEP-racks, sparingen en gefaseerde sequenties met Navisworks-automatiseringen.",
      },
      year: 2025,
      scopes: [
        scope("issue-tracking", "Issue Tracking", "Issue-tracking", clashImg),
        scope(
          "install-sequencing",
          "Install Sequencing",
          "Installatiesequenties",
          clashNavisworks,
        ),
        scope(
          "navisworks",
          "Navisworks Automation",
          "Navisworks-automatisering",
          installWorkshop,
        ),
      ],
    },
    {
      id: "data-centre-delivery",
      title: {
        en: "Data Centre Delivery",
        nl: "Datacentrumlevering",
      },
      location: " · Frankfurt, DE",
      description: {
        en: "High-density plant validated through rule-based clashes and dashboards powering install readiness.",
        nl: "Hoogwaardige technische installaties gevalideerd met regels-gebaseerde clashes en dashboards voor installatiereadiness.",
      },
      year: 2024,
      scopes: [
        scope("model-qa", "Model QA", "Model QA", clashImg),
        scope(
          "reporting",
          "Reporting Dashboards",
          "Rapportage dashboards",
          clashNavisworks,
        ),
        scope("lod", "LOD 350 Review", "LOD 350 review", installPrefabrication),
      ],
    },
  ],
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
      id: "enterprise-template-overhaul",
      title: {
        en: "Enterprise Template Overhaul",
        nl: "Enterprise Template Vernieuwing",
      },
      location: " · EU & Middle East",
      description: {
        en: "Unified libraries governing parameters, title blocks, and install kits across 14 studios.",
        nl: "Geünificeerde bibliotheken met parameters, titelbladen en installatiesets voor 14 studio’s.",
      },
      year: 2025,
      scopes: [
        scope(
          "template-strategy",
          "Template Strategy",
          "Templatestrategie",
          templateImg,
        ),
        scope(
          "content-governance",
          "Content Governance",
          "Content governance",
          templateLibrary,
        ),
        scope("training", "Team Training", "Teamtraining", automationDashboard),
      ],
    },
    {
      id: "infrastructure-bim-standards",
      title: {
        en: "Infrastructure BIM Standards",
        nl: "Infrastructuur BIM-standaarden",
      },
      location: " · Benelux",
      description: {
        en: "Discipline-specific Revit standards with automated audits and install documentation.",
        nl: "Disciplinegerichte Revit-standaarden met geautomatiseerde audits en installatiedocumentatie.",
      },
      year: 2024,
      scopes: [
        scope(
          "standards",
          "Standards Development",
          "Standaardontwikkeling",
          templateLibrary,
        ),
        scope(
          "audit-automation",
          "Audit Automation",
          "Auditautomatisering",
          automationSuite,
        ),
        scope(
          "documentation",
          "Install Documentation",
          "Installatiedocumentatie",
          templateImg,
        ),
      ],
    },
  ],
  "lifecycle-delivery": [
    {
      id: "4d-logistics-playbook",
      title: {
        en: "4D Logistics Playbook",
        nl: "4D-logistiek handboek",
      },
      location: " · Vienna, AT",
      description: {
        en: "Construction phasing linked to installation kits, ensuring just-in-time delivery.",
        nl: "Bouwfasering gekoppeld aan installatiesets voor just-in-time levering.",
      },
      year: 2025,
      scopes: [
        scope("4d-planning", "4D Planning", "4D-planning", lifecycleImg),
        scope(
          "logistics",
          "Logistics Simulation",
          "Logistieke simulatie",
          lifecycleDashboard,
        ),
        scope(
          "prefab",
          "Prefab Readiness",
          "Prefab gereed",
          installPrefabrication,
        ),
      ],
    },
    {
      id: "6d-operations-portal",
      title: {
        en: "6D Operations Portal",
        nl: "6D operationsportaal",
      },
      location: " · Luxembourg",
      description: {
        en: "Facilities dashboards combining install data with predictive maintenance insights.",
        nl: "Beheerdashboards met installatiedata en voorspellende onderhoudsinzichten.",
      },
      year: 2024,
      scopes: [
        scope(
          "5d-cost",
          "5D Cost Control",
          "5D-kostencontrole",
          lifecycleDashboard,
        ),
        scope("6d-fm", "6D FM Data", "6D-FM-data", lifecycleImg),
        scope(
          "powerbi",
          "Power BI Dashboards",
          "Power BI-dashboards",
          automationDashboard,
        ),
      ],
    },
  ],
};

