import { languageLabels, languageNames, type Language } from '../../i18n/languages'
import { useLanguage } from '../../context/LanguageContext'

type LanguageToggleProps = {
  variant?: 'header' | 'footer'
}

const buttonBase =
  'inline-flex items-center justify-center rounded-full border uppercase tracking-[0.25em] text-xs font-semibold transition'

const variantStyles: Record<NonNullable<LanguageToggleProps['variant']>, string> = {
  header:
    'border-white/15 px-4 py-2 text-white/80 hover:border-brand-accent hover:text-brand-accent',
  footer:
    'border-white/20 px-4 py-2 text-white/80 hover:border-brand-accent hover:text-brand-accent',
}

export default function LanguageToggle({ variant = 'header' }: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage()

  const nextLanguage: Language = language === 'en' ? 'nl' : 'en'

  return (
    <button
      type='button'
      onClick={toggleLanguage}
      className={`${buttonBase} ${variantStyles[variant]}`}
      aria-label={`Switch to ${languageNames[nextLanguage]}`}
    >
      <span>{languageLabels[language]}</span>
      <span className='mx-2 h-4 w-px bg-white/20' aria-hidden />
      <span className='text-white/60'>{languageLabels[nextLanguage]}</span>
    </button>
  )
}
