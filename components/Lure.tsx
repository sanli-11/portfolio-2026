"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import AnimatedAnchor from "@/components/AnimatedAnchor";

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
    ["-5vh", "0vh", "35vh", "40vh", "80vh"],
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
        <motion.div style={{ y }} className="grid place-items-center gap-6">
          <motion.p
            style={{ scale }}
            className="max-w-110 origin-top text-center text-5xl/13 lg:max-w-150 lg:text-6xl/18 2xl:max-w-3xl 2xl:text-7xl/21"
          >
            Ready to turn your idea into reality?
          </motion.p>
          <motion.div style={{ scale }}>
            <AnimatedAnchor shape="circle" size="large" href="#contact">
              <ArrowDown />
            </AnimatedAnchor>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
