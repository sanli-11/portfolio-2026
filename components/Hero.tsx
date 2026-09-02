"use client";

import DottedBackground from "@/components/DottedBackground";

export default function Hero() {
  return (
    <section id="#" className="relative -mt-16 h-[calc(100dvh-40px)] w-full">
      <div className="size-full overflow-hidden rounded-3xl">
        <DottedBackground />
      </div>

      <article className="absolute top-1/2 left-1/2 z-1 size-full -translate-1/2 py-48 backdrop-blur-[1px]">
        <hgroup className="mx-auto grid size-full max-w-5xl justify-items-center gap-16 text-center">
          <p>
            <span>Lorem ipsum dolor</span>
            <span className="before:mx-2 before:text-red-400 before:content-['·']">
              sit amet, consectetur
            </span>
            <span className="before:mx-2 before:text-red-400 before:content-['·']">
              adipiscing elit
            </span>
          </p>

          <h1 className="text-9xl/[7rem]">
            Duis aute irure dolor in reprehenderit in voluptate velit
          </h1>

          <p className="mx-auto max-w-xl">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt
          </p>
        </hgroup>
      </article>
    </section>
  );
}
