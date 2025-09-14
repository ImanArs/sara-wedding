import { useState } from "react";
import { useI18n } from "../i18n";

export default function GuestForm() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | "">("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: send to your backend / Google Sheet etc.
    alert(
      `${t("guestForm.alert.thanks")}\n${t("guestForm.alert.name")} ${
        name || "—"
      }\n${t("guestForm.alert.attendance")} ${
        attendance === "yes"
          ? t("guestForm.alert.status.yes")
          : attendance === "no"
          ? t("guestForm.alert.status.no")
          : "—"
      }`
    );
  }

  return (
    <section className="relative min-h-screen bg-[url('/bg/bg_2.png')] bg-top bg-cover bg-no-repeat text-center px-6 py-10">
      {/* Декор: цветы в углах (аним.) */}
      {/* Левый нижний угол — покачивание ветром (вместе, со сдвигом по времени) */}
      <div className="pointer-events-none select-none absolute left-0 bottom-0 z-0 p-2 sm:p-4">
        {/* <div className="relative" style={{ width: 160, height: 160 }}>
          {["/fl/right_bottom_2.png", "/fl/right_bottom_2.png"].map(
            (src, i) => (
              <img
                key={src}
                src={src}
                alt="flower sway"
                className="absolute left-0 bottom-0 h-auto max-w-[160px] opacity-90 animate-sway"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            )
          )}
        </div> */}
      </div>

      {/* Правый верхний угол — покачивание (три цветка с задержкой) */}
      <div className="pointer-events-none select-none absolute right-0 top-0 opacity-60 z-0 p-2 sm:p-4">
        <div className="relative" style={{ width: 180, height: 180 }}>
          {/* базовый цветок */}
          <img
            src="/fl/right_bottom_2.png"
            alt="flower sway base"
            className="absolute right-0 top-0 h-auto max-w-[150px] opacity-95 animate-sway"
            style={{ animationDelay: "0s", transformOrigin: "top right" }}
          />
          {/* два дополнительных, чуть смещены и тоже качаются */}
          <img
            src="/fl/right_bottom_2.png"
            alt="flower sway alt"
            className="absolute right-5 top-5 h-auto max-w-[120px] opacity-90 animate-sway"
            style={{ animationDelay: "0.35s", transformOrigin: "top right" }}
          />
          <img
            src="/fl/right_bottom_2.png"
            alt="flower sway alt 2"
            className="absolute right-7 top-12 h-auto max-w-[120px] opacity-90 animate-sway"
            style={{ animationDelay: "0.7s", transformOrigin: "top right" }}
          />
        </div>
      </div>

      {/* водяной знак/фон (опционально) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/bg/leaf-watermark.png')] bg-no-repeat bg-left-top opacity-20"
      />

      <form
        onSubmit={onSubmit}
        className="relative z-10 mx-auto max-w-[760px] space-y-8 text-slate-800"
      >
        {/* Заголовок в каллиграфическом стиле */}
        <h2 className="text-5xl md:text-6xl font-light italic leading-none mb-2">
          {t("guestForm.title")}
        </h2>

        <p className="text-lg md:text-xl leading-5 opacity-90 mt-10">
          {t("guestForm.description")}
        </p>

        {/* Имя */}
        <div className="space-y-3">
          <label htmlFor="name" className="block text-2xl md:text-[26px]">
            {t("guestForm.nameLabel")}
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("guestForm.namePlaceholder")}
            className="w-full rounded-none border border-slate-700/70 bg-transparent px-4 py-4 text-[18px] outline-none placeholder:text-slate-400 focus:border-slate-900"
          />
        </div>

        {/* Присутствие */}
        <fieldset className="space-y-4">
          <legend className="mb-2 text-2xl md:text-[26px] text-left">
            {t("guestForm.confirmAttendance")}
          </legend>

          <label className="text-left flex items-center gap-3 text-lg">
            <input
              type="radio"
              name="attendance"
              value="yes"
              checked={attendance === "yes"}
              onChange={() => setAttendance("yes")}
              className="h-5 w-5 accent-slate-800"
            />
            <span>{t("guestForm.optionYes")}</span>
          </label>

          <label className="text-left flex items-center gap-3 text-lg">
            <input
              type="radio"
              name="attendance"
              value="no"
              checked={attendance === "no"}
              onChange={() => setAttendance("no")}
              className="h-5 w-5 accent-slate-800"
            />
            <span>{t("guestForm.optionNo")}</span>
          </label>
        </fieldset>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md border border-slate-800/70 px-6 py-3 text-lg tracking-wide transition-colors hover:bg-slate-900 hover:text-white"
          >
            {t("guestForm.submit")}
          </button>
        </div>
      </form>
    </section>
  );
}
