import { useI18n } from "../i18n";

export default function InvitationText() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex flex-col bg-[url('/bg/bg_2.png')] bg-top bg-cover bg-no-repeat py-16 px-6 text-center overflow-hidden">
      {/* decor: corners swaying */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <img
          src="/fl/right_bottom.png"
          alt=""
          className="absolute -right-2 top-2 w-[120px] h-auto opacity-90 animate-sway"
          style={{ animationDelay: "0.15s", transformOrigin: "top left" }}
        />
        <img
          src="/fl/right_bottom.png"
          alt=""
          className="absolute -left-2 scale-x-[-1] top-2 w-[120px] h-auto opacity-90 animate-sway"
          style={{ animationDelay: "0.15s", transformOrigin: "top left" }}
        />
        <img
          src="/fl/roses.png"
          alt=""
          className="absolute rotate-[-90deg] -right-6 bottom-50 w-[140px] h-auto opacity-90 animate-sway"
          style={{ animationDelay: "0.5s", transformOrigin: "bottom right" }}
        />
        <img
          src="/fl/lilia.png"
          alt=""
          className="absolute rotate-[90deg] -left-[50%] top-1/2 w-[140px] h-auto opacity-90 animate-sway"
          style={{ animationDelay: "0.5s", transformOrigin: "bottom right" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[680px] text-slate-700">
        {/* Приветствие */}
        <p className="text-[28px] leading-none font-light tracking-[0.12em] uppercase opacity-80">
          {t("invite.greeting")}
        </p>

        {/* Основной текст */}
        <p className="mt-6 whitespace-pre-line text-balance text-[18px] leading-6 opacity-90">
          {t("invite.text")}
        </p>

        {/* Дата */}
        <div className="mt-10 flex items-center justify-center gap-6 text-slate-800">
          <span className="text-[18px] tracking-[0.18em] uppercase opacity-70">
            {t("date.month")}
          </span>

          <span className="h-8 w-px bg-slate-300/70" />

          <span className="text-[44px] leading-none font-light tracking-[0.08em]">
            {t("date.day")}
          </span>

          <span className="h-8 w-px bg-slate-300/70" />

          <span className="text-[22px] tracking-[0.18em] uppercase opacity-80">
            {t("date.year")}
          </span>
        </div>

        {/* Место */}
        <div className="mt-10">
          <p className="text-[14px] tracking-[0.22em] uppercase opacity-60">
            {t("venue.sectionTitle")}
          </p>
          <p className="mt-2 text-[26px] font-light leading-none">
            {t("venue.name")}
          </p>
          <p className="mt-2 text-[16px] opacity-80">{t("venue.address")}</p>
        </div>

        {/* Заключение */}
        <p className="mt-12 text-[22px] italic font-light opacity-90">
          {t("closing.line")}
        </p>
      </div>

      <p className="relative z-10 mt-auto">{t("owners")}: Эдиль и Айнура</p>
    </section>
  );
}
