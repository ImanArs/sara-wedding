import { useI18n } from '../i18n'

export default function Venue() {
  const { t } = useI18n()
  return (
    <section className="py-6">
      <h2 className="text-lg font-medium mb-2">{t('venue.title')}</h2>
      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <p className="text-base">{t('venue.place')}</p>
      </div>
    </section>
  )
}

