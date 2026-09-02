"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import DottedBackground from "@/components/DottedBackground";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.1, 1.2, 1.1],
  );

  return (
    <section
      ref={sectionRef}
      id="#"
      className="relative -mt-16 h-[calc(100dvh-40px)] w-full overflow-hidden rounded-3xl"
    >
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
        className="absolute inset-0 size-full"
      >
        <div className="size-full overflow-hidden rounded-3xl">
          <DottedBackground />
        </div>
      </motion.div>

      <article className="absolute top-1/2 left-1/2 z-1 size-full -translate-1/2 py-64 backdrop-blur-[1px]">
        <hgroup className="mx-auto grid size-full max-w-5xl justify-items-center gap-12 text-center">
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
