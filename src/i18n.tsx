import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import ru from "./locales/ru.json";
import ky from "./locales/ky.json";

type Lang = "ru" | "ky";

type Dictionary = Record<string, string>;

const translations: Record<Lang, Dictionary> = {
  ru,
  ky,
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
