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
    </section>
  );
}
