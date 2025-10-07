const steps = [
  {
    title: 'Discovery & Brief',
    subtitle: 'Align goals, requirements, and stakeholders to define measurable outcomes.',
  },
  {
    title: 'BIM Setup & Automate',
    subtitle: 'Establish templates, logic, and automation tailored to your workflows.',
  },
  {
    title: 'Iterate & Collaborate',
    subtitle: 'Coordinate disciplines, resolve clashes, and enrich data iteratively.',
  },
  {
    title: 'Delivery & Support',
    subtitle: 'Deploy final models, train teams, and stay engaged post-handover.',
  },
]

function Process() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-500">
            Collaborative approach
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Guided partnership from first briefing to go-live.
          </h2>
        </div>

        <div className="mt-12 space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="grid gap-6 border-b border-black/[0.06] pb-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.subtitle}</p>
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-400">
                Step {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
