import { useI18n } from "../i18n";

export default function Names() {
  const { t } = useI18n();
  return (
    <section className="relative h-screen text-center py-16 bg-[url('/bg/bg_2.png')] bg-no-repeat bg-top bg-cover overflow-hidden">
      {/* TOP DECOR (два одинаковых, правый отзеркален) */}
      <div className="pointer-events-none select-none absolute top-[6%] left-1/2 -translate-x-1/2 w-full max-w-[820px] z-0">
        <div className="flex items-start justify-center gap-10">
          <img
            src="/fl/main_top.png"
            alt=""
            className="w-[250px] h-[220px] object-cover animate-sway"
            style={{ animationDelay: "0s", transformOrigin: "top center" }}
          />
          <img
            src="/fl/main_top.png"
            alt=""
            className="w-[250px] h-[220px] object-cover scale-x-[-1] animate-sway"
            style={{ animationDelay: "0.35s", transformOrigin: "top center" }}
          />
        </div>
      </div>

      {/* MONOGRAM */}
      <img
        src="/fl/top.png"
        className="top-10 absolute left-1/2 -translate-x-1/2 z-[9] w-[240px]"
        alt=""
      />
      <div className="absolute flex top-[10%] left-[calc(50%-5px)] -translate-x-1/2 z-10">
        <p className="text-[34px] font-tangerine tracking-wide relative top-0">
          S
        </p>
        <p className="text-[34px] font-tangerine tracking-wide relative top-2">
          S
        </p>
      </div>

      {/* TEXT BLOCK */}
      <div className="relative z-10 w-full flex flex-col gap-3 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-6">
        <p className="uppercase text-gray-500 tracking-wide text-lg">
          {t("names.banner")}
        </p>

        <h1 className="mt-2 text-3xl italic font-light tracking-wide text-slate-700">
          Шералы
        </h1>

        <p className="italic text-[22px] leading-4 text-gray-400">
          {t("names.and")}
        </p>

        <h1 className="pb-2 text-3xl italic font-light tracking-wide text-slate-700">
          Сара
        </h1>

        <p className="mt-2 leading-4 text-lg uppercase tracking-wide text-gray-500">
          {t("date.weekday")}, {t("date.day")} {t("date.month")} {t("date.year")}
        </p>
        <p className="text-lg uppercase tracking-wide text-gray-500">
          {t("names.venueLine")}
        </p>
      </div>

      {/* BOTTOM DECOR — 2 группы по 3 ветки, наложены друг на друга с шагом 10px */}
      <div className="pointer-events-none select-none absolute bottom-[6%] left-1/2 -translate-x-1/2 w-full max-w-[820px] z-0">
        <div className="relative w-full h-[200px] mx-auto flex items-end justify-center gap-12">
          {/* Левая группа (слева от центра): 3 слоя, смещены вправо на 0/10/20px */}
          <div className="relative w-[240px] h-[190px]">
            <img
              src="/fl/main_bottom.png"
              alt=""
              className="absolute bottom-0 right-0 w-[200px] h-[180px] object-cover animate-sway"
              style={{
                animationDelay: "0.05s",
                transformOrigin: "bottom center",
              }}
            />
            <img
              src="/fl/main_bottom.png"
              alt=""
              className="absolute bottom-0 right-[0px] -rotate-[25deg] -top-5 w-[200px] h-[180px] object-cover animate-sway opacity-95"
              style={{
                animationDelay: "0.2s",
                transformOrigin: "bottom center",
              }}
            />
            <img
              src="/fl/main_bottom.png"
              alt=""
              className="absolute bottom-0 right-[60px] top-10 w-[200px] h-[180px] object-cover animate-sway"
              style={{
                animationDelay: "0.35s",
                transformOrigin: "bottom center",
              }}
            />
          </div>

          {/* Правая группа (справа от центра): 3 слоя, смещены влево на 0/10/20px */}
          <div className="relative w-[240px] h-[190px]">
            <img
              src="/fl/main_bottom.png"
              alt=""
              className="absolute bottom-0 left-0 w-[200px] h-[180px] object-cover scale-x-[-1] animate-sway"
              style={{
                animationDelay: "0.5s",
                transformOrigin: "bottom center",
              }}
            />
            <img
              src="/fl/main_bottom.png"
              alt=""
              className="absolute bottom-0 -rotate-[25deg] left-[40px] top-7 w-[200px] h-[180px] object-cover scale-x-[-1] animate-sway opacity-95"
              style={{
                animationDelay: "0.65s",
                transformOrigin: "bottom center",
              }}
            />
            <img
              src="/fl/main_bottom.png"
              alt=""
              className="absolute bottom-0 left-[60px] top-10 w-[200px] h-[180px] object-cover scale-x-[-1] animate-sway"
              style={{
                animationDelay: "0.8s",
                transformOrigin: "bottom center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
