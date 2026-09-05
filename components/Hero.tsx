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
      className="relative -mt-16 h-[105dvh] w-full overflow-hidden rounded-3xl"
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

      <article className="absolute top-1/2 left-1/2 z-1 size-full -translate-1/2 pt-80 pb-24 backdrop-blur-[1px]">
        <hgroup className="mx-auto grid size-full max-w-5xl content-start justify-items-center gap-12 text-center">
          <p>
            <span>Interfaces</span>

            <span className="before:mx-4 before:text-amber-600 before:content-['·']">
              APIs
            </span>

            <span className="before:mx-4 before:text-amber-600 before:content-['·']">
              Systems
            </span>
          </p>

          <h1 className="mx-auto grid max-w-3xl text-9xl/tight tracking-tight">
            You bring the problem. I&#39;ll build the solution.
          </h1>

          <p className="mx-auto mt-40 max-w-xl">
            Partnering with teams and founders to ship production-ready web
            applications built to scale.
          </p>
        </hgroup>
      </article>
    </section>
  );
}
