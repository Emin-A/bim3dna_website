import { useState } from 'react'
import type { FormEvent } from 'react'

const inquiryOptions = [
  { label: 'Request services or information', value: 'services' },
  { label: 'Career opportunities with BIM3DNA', value: 'careers' },
]

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitted')
  }

  return (
    <section className="bg-[#e5fbf8] py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-black/[0.04] bg-white p-10 shadow-bevel">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-500">
            Start a conversation
          </p>
          <h2 className="text-3xl font-semibold text-black md:text-4xl">
            Whether you need BIM support or want to join the team, we&apos;d love to hear from you.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-2xl border border-black/[0.06] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition focus:border-brand-accent focus:bg-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-2xl border border-black/[0.06] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition focus:border-brand-accent focus:bg-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500" htmlFor="company">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Organisation (optional)"
                className="w-full rounded-2xl border border-black/[0.06] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition focus:border-brand-accent focus:bg-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500" htmlFor="interest">
                I&apos;m interested in
              </label>
              <select
                id="interest"
                name="interest"
                defaultValue={inquiryOptions[0].value}
                className="w-full rounded-2xl border border-black/[0.06] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition focus:border-brand-accent focus:bg-white"
              >
                {inquiryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500" htmlFor="message">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                required
                placeholder="Share project requirements, timelines, or your experience."
                className="w-full rounded-2xl border border-black/[0.06] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition focus:border-brand-accent focus:bg-white"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-gray-500">
                We respond within one business day. Your details stay confidential.
              </p>
              <button
                type="submit"
                className="rounded-full border border-brand-accent bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-transparent hover:text-brand-accent"
              >
                Send message
              </button>
            </div>
            {status === 'submitted' && (
              <p className="mt-4 text-sm font-medium text-brand-accent">
                Thanks for reaching out - we&apos;ll be in touch shortly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
