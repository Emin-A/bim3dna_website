import architectureImg from '../assets/Varvik 3D view.jpg'
import automationImg from '../assets/script-automation.jpg'
import clashImg from '../assets/clash-detection.jpg'
import scanImg from '../assets/scan-to-bim.jpg'
import templateImg from '../assets/template-database.jpg'
import lifecycleImg from '../assets/lifecycle-delivery.jpg'

export type ServiceCategory = {
  slug: string
  title: string
  headline: string
  summary: string
  background: string
  tags: string[]
}

export type ProjectPortfolioItem = {
  title: string
  location: string
  description: string
  image: string
  year: number
  scope: string[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'architecture-coordination',
    title: 'Architecture & Coordination',
    headline: 'Architectural, structural, and MEP teams aligned from concept to delivery.',
    summary:
      'Integrated authoring for architectural envelopes, structural systems, and MEP coordination delivering construction-ready BIM models.',
    background: architectureImg,
    tags: ['Architecture', 'Coordination'],
  },
  {
    slug: 'script-automation',
    title: 'Script / Automation',
    headline: 'Automation that accelerates Revit and BIM authoring with repeatable intelligence.',
    summary:
      'Custom Dynamo, C#, and pyRevit tooling that removes repetitive work, enforces standards, and keeps data quality consistent.',
    background: automationImg,
    tags: ['Scripts', 'Automation'],
  },
  {
    slug: 'clash-detection',
    title: 'Clash Detection',
    headline: 'Coordinated federated models with actionable clash intelligence.',
    summary:
      'Multi-disciplinary issue tracking, model QA, and rule-based validation that keeps downstream fabrication on schedule.',
    background: clashImg,
    tags: ['Clash Detection', 'QA'],
  },
  {
    slug: 'scan-to-bim',
    title: 'Scan to BIM',
    headline: 'Point cloud intelligence transformed into data-rich digital twins.',
    summary:
      'Reality capture alignment, accurate geometry reconstruction, and asset attribution ready for refurbishment and FM workflows.',
    background: scanImg,
    tags: ['Scan to BIM', 'Digital Twins'],
  },
  {
    slug: 'template-database',
    title: 'Template Database',
    headline: 'Governed template and content libraries tailored to your standards.',
    summary:
      'Centralised Revit templates, families, and metadata structures that scale across offices and project teams.',
    background: templateImg,
    tags: ['Template Database', 'Content'],
  },
  {
    slug: 'lifecycle-delivery',
    title: '4D / 5D / 6D Delivery',
    headline: 'Schedule, cost, and facilities intelligence layered onto trusted models.',
    summary:
      'Time, cost, and asset data integrations that extend BIM deliverables beyond handover for predictive operations.',
    background: lifecycleImg,
    tags: ['4D/5D/6D', 'Lifecycle'],
  },
]

export const projectPortfolios: Record<string, ProjectPortfolioItem[]> = {
  'architecture-coordination': [
    {
      title: 'Varvik Innovation Hub',
      location: 'Rotterdam, NL',
      description:
        'Multi-phase campus designed with coordinated architectural and MEP systems, ready for fabrication detailing.',
      image: architectureImg,
      year: 2025,
      scope: ['Architectural BIM', 'MEP Coordination', 'LOD 350'],
    },
    {
      title: 'Sirius Residential Tower',
      location: 'Amsterdam, NL',
      description:
        'Parametric facade modelling with structural integration and staged coordination workshops for contractor teams.',
      image: architectureImg,
      year: 2024,
      scope: ['Facade BIM', 'Structural Integration', 'BIM Execution Plan'],
    },
  ],
  'script-automation': [
    {
      title: 'PyRevit Standards Suite',
      location: 'Global rollout',
      description:
        'Automation toolkit covering QA, sheet setup, parameter governance, and batch publishing across 200+ designers.',
      image: automationImg,
      year: 2025,
      scope: ['pyRevit', 'Quality Control', 'Batch Processing'],
    },
    {
      title: 'Prefab Library Generator',
      location: 'Copenhagen, DK',
      description:
        'Dynamo scripts that convert manufacturer specs into compliant Revit families and cost assemblies overnight.',
      image: automationImg,
      year: 2024,
      scope: ['Dynamo', 'Content Automation', 'Cost Data'],
    },
  ],
  'clash-detection': [
    {
      title: 'Metro Interchange Upgrade',
      location: 'The Hague, NL',
      description:
        'Weekly clash coordination covering MEP racks, envelope penetrations, and staged install sequences with Navisworks automation.',
      image: clashImg,
      year: 2025,
      scope: ['Navisworks Automation', 'Issue Tracking', 'Site Sequencing'],
    },
    {
      title: 'Data Centre Delivery',
      location: 'Frankfurt, DE',
      description:
        'High-density MEP systems validated with rule-based clash templates and cloud coordination dashboards.',
      image: clashImg,
      year: 2024,
      scope: ['Model QA', 'Reporting Dashboards', 'LOD 350'],
    },
  ],
  'scan-to-bim': [
    {
      title: 'Heritage Library Digital Twin',
      location: 'Leiden, NL',
      description:
        'Hybrid terrestrial scanning converted into an as-built BIM complete with heritage annotation for restoration specialists.',
      image: scanImg,
      year: 2025,
      scope: ['Point Cloud Registration', 'Historic BIM', 'Asset Tagging'],
    },
    {
      title: 'Hospital Diagnostic Wing',
      location: 'Utrecht, NL',
      description:
        'High-detail MEP and architectural capture enabling prefabricated refurbishment with minimal downtime.',
      image: scanImg,
      year: 2024,
      scope: ['Reality Capture', 'MEP Modeling', 'FM Data'],
    },
  ],
  'template-database': [
    {
      title: 'Enterprise Template Overhaul',
      location: 'EU & Middle East',
      description:
        'Unified library with governed parameters, title blocks, and code-compliant views for 14 regional studios.',
      image: templateImg,
      year: 2025,
      scope: ['Template Strategy', 'Content Governance', 'Training'],
    },
    {
      title: 'Infrastructure BIM Standards',
      location: 'Benelux',
      description:
        'Discipline-specific Revit standards with automated audits and documentation sets for civil and rail teams.',
      image: templateImg,
      year: 2024,
      scope: ['Standards Development', 'Audit Automation', 'Documentation'],
    },
  ],
  'lifecycle-delivery': [
    {
      title: '4D Logistics Playbook',
      location: 'Vienna, AT',
      description:
        'Construction phasing simulations linked to master schedules enabling just-in-time prefab delivery.',
      image: lifecycleImg,
      year: 2025,
      scope: ['4D Planning', 'Logistics Simulation', 'Prefabrication'],
    },
    {
      title: '6D Operations Portal',
      location: 'Luxembourg',
      description:
        'Integrated maintenance datasets overlayed onto BIM models for facilities insights and SLA tracking.',
      image: lifecycleImg,
      year: 2024,
      scope: ['5D Cost', '6D FM Data', 'Power BI Dashboards'],
    },
  ],
}
