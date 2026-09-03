"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import CardStack from "./CardStack";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [1, 0.8, 0.6, 0.4],
  );

  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.7], [1, 0.5, 0]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-background relative w-full text-white"
    >
      <div className="relative h-[400vh] w-full">
        <div className="pointer-events-none sticky top-0 z-10 grid h-dvh w-full place-content-center text-center">
          <motion.hgroup style={{ scale, opacity }}>
            <h2 className="mx-auto max-w-2xl text-7xl/21">
              Taciti sociosqu ad litora torquent
            </h2>

            <p className="mx-auto max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus
              ex sapien vitae pellentesque sem pretium tellus placerat in.
            </p>
          </motion.hgroup>
        </div>

        <CardStack parentRef={sectionRef} />
      </div>
    </section>
  );
}
