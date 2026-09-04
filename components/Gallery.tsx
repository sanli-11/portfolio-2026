import AnimatedAnchor from "@/components/AnimatedAnchor";

const tiles = [
  {
    id: 0,
    title: "Nisl malesuada integer nunc posuere ut hendrerit",
    pills: ["Convallis", "Diam"],
  },
  {
    id: 1,
    title: "Amet consectetur elit quisque faucibus ex sapien",
    pills: ["Dignissim"],
  },
  {
    id: 2,
    title: "Bibendum egestas iaculis nisl malesuada integer",
    pills: ["Integer", "Abs"],
  },
  {
    id: 3,
    title: "Interdum tortor ligula congue erat viverra ac",
    pills: ["Hendrerit", "Liuster"],
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-background mx-auto grid max-h-screen min-h-screen w-full max-w-450 place-content-center gap-6 py-32"
    >
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-4 overflow-hidden rounded-3xl bg-zinc-900"></div>

        <div className="col-span-3 overflow-hidden rounded-3xl bg-zinc-100 text-black">
          <hgroup className="grid place-content-center gap-8 px-32 py-36">
            <h2 className="text-7xl/21">
              Quam justo lectus commodo augue arcu dignissim velit.
            </h2>
            <p className="before:mr-2 before:content-['—']">
              Donec rhoncus eros lobortis nulla molestie mattis scelerisque.
            </p>
          </hgroup>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-6">
        <div className="grid size-full place-content-center rounded-3xl bg-zinc-900">
          <AnimatedAnchor href="#" size="large">
            Go To Page
          </AnimatedAnchor>
        </div>

        <div className="col-span-5 grid size-full grid-flow-col place-content-center gap-6 overflow-hidden rounded-3xl bg-zinc-900 p-12">
          <div className="grid size-full max-w-48 content-center justify-items-start gap-4">
            <hgroup className="grid gap-2">
              <h4 className="text-xl">Bibendum egestas</h4>
              <p className="text-sm text-pretty">
                Iaculis massa nisl lacinia integer
              </p>
            </hgroup>
            <AnimatedAnchor href="#" size="tiny">
              Donec rhoncus
            </AnimatedAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
