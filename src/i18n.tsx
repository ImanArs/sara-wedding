import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Lang = "ru" | "ky";

type Dictionary = Record<string, string>;

const translations: Record<Lang, Dictionary> = {
  ru: {
    "names.title": "Сара + Шералы",
    "invite.text":
      "С большой радостью и трепетом мы приглашаем вас разделить с нами счастье неповторимого события — день нашей свадьбы.\n23 октября 2025 года.",
    "venue.title": "Место проведения",
    "venue.place": "Ресторан «Ала-Арча», Бишкек",
    "timeline.title": "Таймлайн",
    "timeline.item1": "17:00 — сбор гостей",
    "timeline.item2": "18:00 — начало",
    "timeline.item3": "18:30 — регистрация",
    "rsvp.title": "Анкета гостя",
    "rsvp.question": "Сможете прийти?",
    "rsvp.yes": "Приду",
    "rsvp.no": "Не приду",
    "lang.ru": "Русский",
    "lang.ky": "Кыргызча",
    "lang.label": "Язык",
  },
  ky: {
    "names.title": "Сара + Шералы",
    "invite.text":
      "Чоң кубаныч жана толкундануу менен сизди биздин кайталангыс окуяга — тоюбуздун күнүнө кубанычыбызды бөлүшүүгө чакырабыз.\n2025‑жылдын 23‑октябры.",
    "venue.title": "Өткөрүлүүчү жай",
    "venue.place": "«Ала-Арча» рестораны, Бишкек",
    "timeline.title": "Иш-чара тартиби",
    "timeline.item1": "17:00 — коноктор чогулуу",
    "timeline.item2": "18:00 — башталышы",
    "timeline.item3": "18:30 — каттоо",
    "rsvp.title": "Конок анкетасы",
    "rsvp.question": "Келе аласызбы?",
    "rsvp.yes": "Келем",
    "rsvp.no": "Келбейм",
    "lang.ru": "Русский",
    "lang.ky": "Кыргызча",
    "lang.label": "Тил",
  },
};

type I18nContext = {
  lang: Lang;
  t: (key: string) => string;
  setLang: (lang: Lang) => void;
};

const Ctx = createContext<I18nContext | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    return saved ?? "ru";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? key,
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
