import { useLanguage } from '../context/LanguageContext'

const copy = {
  en: {
    eyebrow: 'Disclaimer',
    heading: 'Disclaimer BIM3DNA',
    intro:
      'BIM3DNA supplies technical drawings, BIM models, and related documentation to our clients under the following conditions:',
    clauses: [
      {
        title: 'Copyright and ownership',
        body: 'All documents remain our intellectual property and are protected by copyright law. Clients may not reproduce or distribute the material without written permission.',
      },
      {
        title: 'Accuracy of services',
        body: 'We deliver work with great care, but we cannot accept liability for any errors, omissions, or inaccuracies in supplied drawings or models.',
      },
      {
        title: 'Client responsibility',
        body: 'Clients must review the provided documentation before execution. BIM3DNA is not liable for damage, loss, or costs arising from its use.',
      },
      {
        title: 'Limited liability',
        body: 'Our liability is limited to the fee charged for the services delivered. We are not liable for indirect or consequential damages.',
      },
      {
        title: 'Changes and revisions',
        body: 'We may revise drawings or models when required to maintain quality and accuracy, without prior notice.',
      },
      {
        title: 'Applicable law',
        body: 'This disclaimer is governed by the laws applicable in the jurisdiction of the client engagement.',
      },
    ],
    acceptance:
      'By using our services you accept this disclaimer. If you do not agree, we advise you not to use our services.',
    dnr: 'DNR 2011 applies to all our services, proposals, and communications.',
    updated: 'Last updated: 15-10-2023',
    contact: 'Contact us with any questions regarding this disclaimer. Thank you for your trust.',
    signOffNames: 'Alen Halilovic & Douwe Oltheten',
  },
  nl: {
    eyebrow: 'Disclaimer',
    heading: 'Disclaimer BIM3DNA',
    intro:
      'BIM3DNA levert technische tekeningen, BIM-modellen en bijbehorende documentatie aan onze klanten onder de volgende voorwaarden:',
    clauses: [
      {
        title: 'Auteursrecht en eigendom',
        body: 'Alle documenten blijven ons intellectueel eigendom en zijn beschermd door het auteursrecht. Klanten mogen de stukken niet reproduceren of verspreiden zonder schriftelijke toestemming.',
      },
      {
        title: 'Nauwkeurigheid van diensten',
        body: 'Wij leveren onze diensten met zorg, maar kunnen niet aansprakelijk worden gesteld voor fouten, onvolkomenheden of onjuistheden in verstrekte tekeningen of modellen.',
      },
      {
        title: 'Verantwoordelijkheid van klanten',
        body: 'Klanten dienen de verstrekte documentatie te controleren voordat deze in uitvoering gaat. BIM3DNA is niet aansprakelijk voor schade, verlies of kosten die voortvloeien uit het gebruik ervan.',
      },
      {
        title: 'Beperkte aansprakelijkheid',
        body: 'Onze aansprakelijkheid is beperkt tot de vergoede diensten. Wij zijn niet aansprakelijk voor indirecte of gevolgschade.',
      },
      {
        title: 'Wijzigingen en revisies',
        body: 'Wij kunnen tekeningen of modellen aanpassen om kwaliteit en juistheid te waarborgen, zonder voorafgaande kennisgeving.',
      },
      {
        title: 'Toepasselijk recht',
        body: 'Deze disclaimer wordt beheerst door het recht dat van toepassing is op de opdracht bij de klant.',
      },
    ],
    acceptance:
      'Door gebruik te maken van onze diensten gaat u akkoord met deze disclaimer. Indien u het niet eens bent, adviseren wij onze diensten niet te gebruiken.',
    dnr: 'Op al onze diensten, offertes en mededelingen is DNR 2011 van toepassing.',
    updated: 'Laatste bijwerking: 15-10-2023',
    contact: 'Neem contact met ons op voor vragen over deze disclaimer. Bedankt voor het vertrouwen.',
    signOffNames: 'Alen Halilovic & Douwe Oltheten',
  },
}

function Disclaimer() {
  const { language } = useLanguage()
  const labels = copy[language]

  return (
    <main className='bg-[#020b0c] py-24 text-white'>
      <div className='mx-auto max-w-4xl space-y-8 px-6'>
        <header className='space-y-3 text-center md:text-left'>
          <p className='text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent'>
            {labels.eyebrow}
          </p>
          <h1 className='text-3xl font-semibold md:text-4xl'>{labels.heading}</h1>
        </header>

        <section className='space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 leading-relaxed text-white/80'>
          <p>{labels.intro}</p>

          <ol className='space-y-4 text-sm'>
            {labels.clauses.map((clause, index) => (
              <li key={clause.title}>
                <strong className='text-white'>
                  {index + 1}. {clause.title}
                </strong>
                <br />
                {clause.body}
              </li>
            ))}
          </ol>

          <p>{labels.acceptance}</p>
          <p>
            {labels.dnr}
            <br />
            <span className='text-xs uppercase tracking-[0.3em] text-white/50'>
              {labels.updated}
            </span>
          </p>
          <p>{labels.contact}</p>

          <div className='space-y-1'>
            <p className='font-semibold text-white'>BIM3DNA</p>
            <p className='text-sm text-white/70'>{labels.signOffNames}</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Disclaimer
