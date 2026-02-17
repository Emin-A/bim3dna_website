import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const copy = {
  en: {
    eyebrow: 'Start a conversation',
    heading:
      "Whether you need installation coordination support or want to work with us, we'd love to connect.",
    fullName: 'Full name',
    email: 'Email',
    company: 'Company',
    companyPlaceholder: 'Organisation (optional)',
    interest: "I'm interested in",
    message: 'How can we help?',
    messagePlaceholder: 'Share project requirements, timelines, or your experience.',
    responseTime: 'We respond within one business day. Your details stay confidential.',
    submit: 'Send message',
    success: "Thanks for reaching out—we'll be in touch shortly.",
    options: [
      { label: 'Request installation or BIM support', value: 'services' },
      { label: 'Career opportunities with BIM3DNA', value: 'careers' },
    ],
  },
  nl: {
    eyebrow: 'Neem contact op',
    heading:
      'Zoek je ondersteuning bij installaties of wil je met ons samenwerken? We horen graag van je.',
    fullName: 'Volledige naam',
    email: 'E-mail',
    company: 'Bedrijf',
    companyPlaceholder: 'Organisatie (optioneel)',
    interest: 'Ik ben geïnteresseerd in',
    message: 'Waarmee kunnen we helpen?',
    messagePlaceholder: 'Deel projectvereisten, planning of je ervaring.',
    responseTime: 'We reageren binnen één werkdag. Je gegevens blijven vertrouwelijk.',
    submit: 'Verstuur bericht',
    success: 'Bedankt voor je bericht – we nemen snel contact op.',
    options: [
      { label: 'Aanvraag voor installatie- of BIM-ondersteuning', value: 'services' },
      { label: 'Carrièremogelijkheden bij BIM3DNA', value: 'careers' },
    ],
  },
}

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')
  const { language } = useLanguage()
  const labels = copy[language]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.currentTarget.reset()
    setStatus('submitted')
  }

  return (
    <section className='bg-[#e5fbf8] py-24'>
      <div className='mx-auto max-w-5xl rounded-3xl border border-black/[0.04] bg-white p-10 shadow-bevel'>
        <div className='space-y-4'>
          <p className='text-xs font-semibold uppercase tracking-[0.4em] text-gray-500'>
            {labels.eyebrow}
          </p>
          <h2 className='text-3xl font-semibold text-black md:text-4xl'>{labels.heading}</h2>
        </div>

        <form onSubmit={handleSubmit} className='mt-10 grid gap-8 md:grid-cols-2'>
          <div className='space-y-6'>
            <div className='space-y-2'>
              <label className='text-xs font-semibold uppercase tracking-[0.3em] text-gray-500' htmlFor='name'>
                {labels.fullName}
              </label>
              <input
                id='name'
                name='name'
                type='text'
                required
                placeholder={language === 'en' ? 'Your name' : 'Jouw naam'}
                className='w-full rounded-2xl border border-black/[0.06] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition focus:border-brand-accent focus:bg-white'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xs font-semibold uppercase tracking-[0.3em] text-gray-500' htmlFor='email'>
                {labels.email}
              </label>
              <input
                id='email'
                name='email'
                type='email'
                required
                placeholder='you@email.com'
                className='w-full rounded-2xl border border-black/[0.06] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition focus:border-brand-accent focus:bg-white'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xs font-semibold uppercase tracking-[0.3em] text-gray-500' htmlFor='company'>
                {labels.company}
              </label>
              <input
                id='company'
                name='company'
                type='text'
                placeholder={labels.companyPlaceholder}
                className='w-full rounded-2xl border border-black/[0.06] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition focus:border-brand-accent focus:bg-white'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-xs font-semibold uppercase tracking-[0.3em] text-gray-500' htmlFor='interest'>
                {labels.interest}
              </label>
              <select
                id='interest'
                name='interest'
                defaultValue={labels.options[0].value}
                className='w-full rounded-2xl border border-black/[0.06] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition focus:border-brand-accent focus:bg-white'
              >
                {labels.options.map((option) => (
                  <option key={`${language}-${option.value}`} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='space-y-2'>
              <label className='text-xs font-semibold uppercase tracking-[0.3em] text-gray-500' htmlFor='message'>
                {labels.message}
              </label>
              <textarea
                id='message'
                name='message'
                rows={8}
                required
                placeholder={labels.messagePlaceholder}
                className='w-full rounded-2xl border border-black/[0.06] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition focus:border-brand-accent focus:bg-white'
              />
            </div>
            <div className='mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <p className='text-xs text-gray-500'>{labels.responseTime}</p>
              <button
                type='submit'
                className='rounded-full border border-brand-accent bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-transparent hover:text-brand-accent'
              >
                {labels.submit}
              </button>
            </div>
            {status === 'submitted' && (
              <p className='mt-4 text-sm font-medium text-brand-accent'>{labels.success}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
