import AnimatedAnchor from "@/components/AnimatedAnchor";

const tiles = [
  {
    id: 0,
    title: "Hands-off strategy execution with instant risk checks.",
    pills: ["Algo Trading", "API"],
  },
  {
    id: 1,
    title: "Real-time visualization of market trends and drawdown.",
    pills: ["Live Analytics"],
  },
  {
    id: 2,
    title: "Reactive state management for instant parameter updates.",
    pills: ["Low Latency", "WebSockets"],
  },
  {
    id: 3,
    title: "Isolated background routines ensuring maximum uptime.",
    pills: ["REST APIs", "Microservices"],
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-background mx-auto grid w-full max-w-450 place-content-center gap-6 pt-32"
    >
      <div className="grid gap-6 max-lg:grid-rows-3 lg:grid-cols-7">
        <div className="overflow-hidden rounded-3xl bg-zinc-900 max-lg:row-span-2 lg:col-span-4"></div>

        <div className="overflow-hidden rounded-3xl bg-zinc-100 text-black lg:col-span-3">
          <hgroup className="grid place-content-center gap-8 p-16 lg:px-16 lg:py-28 xl:px-24 2xl:px-32 2xl:py-36">
            <h2 className="text-5xl/13 lg:text-6xl/18 2xl:text-7xl/21">
              Complex algorithms simplified into an intuitive visual console.
            </h2>
            <p className="before:mr-2 before:content-['—']">
              High-performance quantitative trading platform.
            </p>
          </hgroup>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4 xl:grid-cols-5">
        <div className="hidden size-full place-content-center rounded-3xl bg-zinc-900 lg:grid"></div>

        <div className="col-span-3 flex size-full flex-col items-center justify-center gap-6 overflow-hidden rounded-3xl bg-zinc-900 p-12 xl:col-span-4">
          <div className="flex size-full items-start justify-between gap-4">
            <hgroup className="grid gap-1">
              <h4 className="text-xl">TradingBot Max</h4>
              <p className="text-sm text-pretty">Full-Stack Algorithmic Tool</p>
            </hgroup>
            <AnimatedAnchor href="https://github.com/sanli-11" size="tiny">
              View Project
            </AnimatedAnchor>
          </div>

          <div className="grid size-full grid-cols-1 justify-items-start gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4">
            {tiles.map((tile) => (
              <div
                key={tile.id}
                className="pointer-events-none size-full rounded-3xl bg-zinc-800 p-4"
              >
                <div className="grid size-full grid-flow-row place-content-between gap-8 lg:grid-flow-col xl:grid-flow-row xl:gap-2">
                  <span className="ml-2 w-full text-pretty 2xl:max-w-60">
                    {tile.title}
                  </span>
                  <div className="flex w-full items-center justify-start gap-2">
                    {tile.pills.map((pill, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-zinc-600 px-3 py-0.5 text-sm text-nowrap"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
