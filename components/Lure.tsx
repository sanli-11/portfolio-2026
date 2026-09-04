"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function Lure() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.55], [0.8, 0.8, 1]);
  const rawY = useTransform(
    scrollYProgress,
    [0, 0.08, 0.2, 0.55, 0.3],
    ["-10vh", "0vh", "35vh", "40vh", "80vh"],
  );
  const y = useSpring(rawY, {
    stiffness: 180,
    damping: 50,
    mass: 0.25,
  });

  return (
    <section
      ref={sectionRef}
      id="lure"
      className="bg-background relative min-h-[150dvh] w-full overflow-clip"
    >
      <div className="sticky top-0 z-10 h-dvh">
        <motion.div style={{ y }} className="flex w-full justify-center">
          <motion.p
            style={{ scale }}
            className="origin-top text-center text-4xl leading-tight font-medium md:text-6xl lg:text-8xl"
          >
            Pharetra vestibulum fusce dictum.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
