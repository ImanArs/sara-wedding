import { useI18n } from "../i18n";

export default function ChangeLanguage() {
  const { lang, setLang, t } = useI18n();
  return (
    <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-center p-2">
      <div className="rounded-full bg-black/60 backdrop-blur text-white shadow px-3 py-1 flex gap-2 text-sm">
        {/* <span className="opacity-80">{t('lang.label')}:</span> */}
        <button
          className={`px-2 py-0.5 rounded-full transition ${
            lang === "ru" ? "bg-white text-black" : "hover:bg-white/10"
          }`}
          onClick={() => setLang("ru")}
        >
          {t("lang.ru")}
        </button>
        <button
          className={`px-2 py-0.5 rounded-full transition ${
            lang === "ky" ? "bg-white text-black" : "hover:bg-white/10"
          }`}
          onClick={() => setLang("ky")}
        >
          {t("lang.ky")}
        </button>
      </div>
    </div>
  );
}
