export default function Timeline() {
  const items = [
    {
      time: "17:00",
      title: "Сбор гостей",
      desc: "Встреча и рассадка гостей перед началом церемонии",
    },
    {
      time: "18:00",
      title: "Начало",
      desc: "Официальное открытие торжества",
    },
    {
      time: "18:30",
      title: "Регистрация",
      desc: "Торжественная регистрация брака",
    },
  ];

  return (
    <section className="py-12 relative min-h-[80vh] bg-[url('/bg/bg_2.png')] bg-top bg-cover bg-no-repeat px-6 text-center overflow-hidden">
      {/* decor: subtle swaying flowers on sides */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        {/* left stack */}
        <div className="absolute left-0 top-10 w-[160px] h-[180px]">
          <img
            src="/fl/right_bottom.png"
            alt=""
            className="absolute -bottom-10 rotate-[6deg] left-[160px] scale-x-[-1] w-[140px] h-auto opacity-40 animate-sway"
            style={{ animationDelay: "0.1s", transformOrigin: "bottom left" }}
          />
          <img
            src="/fl/right_bottom.png"
            alt=""
            className="absolute bottom-0 left-[140px] w-[140px] h-auto opacity-40 scale-x-[-1] animate-sway"
            style={{ animationDelay: "0.35s", transformOrigin: "bottom left" }}
          />
        </div>
        {/* right stack */}
        {/* <div className="absolute right-0 bottom-10 w-[170px] h-[190px]">
          <img
            src="/fl/right_bottom_2.png"
            alt=""
            className="absolute bottom-0 right-2 w-[150px] h-auto opacity-90 animate-sway"
            style={{ animationDelay: "0.45s", transformOrigin: "bottom right" }}
          />
          <img
            src="/fl/right_bottom_2.png"
            alt=""
            className="absolute bottom-0 right-[12px] w-[140px] h-auto opacity-80 animate-sway"
            style={{ animationDelay: "0.7s", transformOrigin: "bottom right" }}
          />
        </div> */}
      </div>
      {/* Заголовок */}
      <h2 className="relative z-10 text-5xl md:text-6xl font-light italic leading-none text-slate-800 mb-10">
        Программа
      </h2>

      <ul className="relative z-10 space-y-12">
        {items.map((it, i) => (
          <li
            key={i}
            className="grid grid-cols-[auto_1px_1fr] gap-6 items-center"
          >
            {/* Время вертикально */}
            <span className="text-slate-500 tracking-[0.2em] text-sm md:text-base [writing-mode:vertical-rl] rotate-180 select-none">
              {it.time}
            </span>

            {/* Вертикальная линия */}
            <span className=" w-px bg-slate-300 h-full rounded-full" />

            {/* Контент */}
            <div className="text-left ">
              <p className="text-2xl md:text-3xl font-serif text-slate-800">
                {it.title}
              </p>
              <p className="mt-2 text-base text-slate-600 opacity-90">
                {it.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
