import { useState } from 'react'
import { useI18n } from '../i18n'

export default function RSVP() {
  const { t } = useI18n()
  const [answer, setAnswer] = useState<'yes' | 'no' | null>(null)

  return (
    <section className="py-6">
      <h2 className="text-lg font-medium mb-2">{t('rsvp.title')}</h2>
      <p className="mb-3 opacity-90">{t('rsvp.question')}</p>
      <div className="flex gap-3">
        <button
          onClick={() => setAnswer('yes')}
          className={`flex-1 rounded-lg px-4 py-2 border transition ${
            answer === 'yes'
              ? 'bg-green-500 text-white border-green-400'
              : 'bg-white/5 border-white/10 hover:bg-white/10'
          }`}
        >
          {t('rsvp.yes')}
        </button>
        <button
          onClick={() => setAnswer('no')}
          className={`flex-1 rounded-lg px-4 py-2 border transition ${
            answer === 'no'
              ? 'bg-red-500 text-white border-red-400'
              : 'bg-white/5 border-white/10 hover:bg-white/10'
          }`}
        >
          {t('rsvp.no')}
        </button>
      </div>
      {answer && (
        <p className="mt-3 text-sm opacity-80">
          {answer === 'yes' ? '✓' : '—'}
        </p>
      )}
    </section>
  )
}

