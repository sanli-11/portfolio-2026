import AnimatedAnchor from "@/components/AnimatedAnchor";

const tiles = [
  {
    id: 0,
    title: "Hands-off strategy execution with instant risk checks.",
    pills: ["Algo Trading", "API Integration"],
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
      className="bg-background mx-auto grid max-h-screen w-full max-w-450 place-content-center gap-6 pt-32"
    >
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-4 overflow-hidden rounded-3xl bg-zinc-900"></div>

        <div className="col-span-3 overflow-hidden rounded-3xl bg-zinc-100 text-black">
          <hgroup className="grid place-content-center gap-8 px-32 py-36">
            <h2 className="text-7xl/21">
              Complex algorithms simplified into an intuitive visual console.
            </h2>
            <p className="before:mr-2 before:content-['—']">
              High-performance quantitative trading platform.
            </p>
          </hgroup>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-6">
        <div className="grid size-full place-content-center rounded-3xl bg-zinc-900"></div>

        <div className="col-span-5 grid size-full grid-flow-col place-content-center gap-6 overflow-hidden rounded-3xl bg-zinc-900 p-12">
          <div className="grid size-full max-w-48 content-center justify-items-start gap-4">
            <hgroup className="grid gap-2">
              <h4 className="text-xl">TradingBot Max</h4>
              <p className="text-sm text-pretty">Full-Stack Algorithmic Tool</p>
            </hgroup>
            <AnimatedAnchor href="https://github.com/sanli-11" size="tiny">
              View Project
            </AnimatedAnchor>
          </div>

          <div className="grid size-full grid-cols-4 justify-items-start gap-6">
            {tiles.map((tile) => (
              <div
                key={tile.id}
                className="size-full min-h-35 min-w-70 rounded-3xl bg-zinc-800 p-4"
              >
                <div className="grid size-full place-content-between gap-2">
                  <span className="ml-2 text-pretty">{tile.title}</span>
                  <div className="flex w-full items-center justify-start gap-2">
                    {tile.pills.map((pill, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-zinc-600 px-3 py-0.5 text-sm"
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
