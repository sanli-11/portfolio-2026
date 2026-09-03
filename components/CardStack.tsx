"use client";

import { useEffect, useRef } from "react";

const cards = [
  {
    id: 0,
    title: "Lorem ipsum dolor",
    description:
      "Turpis fames primis vulputate ornare sagittis vehicula praesent.",
    domain: "lorem ipsum",
  },
  {
    id: 1,
    title: "Cursus mi pretium",
    description:
      "Ultricies habitant morbi senectus netus suscipit auctor curabitur.",
    domain: "lorem ipsum",
  },
  {
    id: 2,
    title: "Aenean sed diam urna",
    description: "Amet consectetur adipiscing elit quisque faucibus ex sapien.",
    domain: "lorem ipsum",
  },
  {
    id: 3,
    title: "Integer nunc posuere",
    description: "Nostra inceptos himenaeos orci varius natoque penatibus et.",
    domain: "lorem ipsum",
  },
];

export default function CardStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    let animationFrame = 0;

    const update = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollDistance = section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / scrollDistance));
      const cardCount = cards.length;

      const STACK_END = 0.9;
      const stackProgress = Math.min(1, progress / STACK_END);
      const pullProgress = Math.max(
        0,
        Math.min(1, (progress - STACK_END) / (1 - STACK_END)),
      );

      const targetPeelDistances = cards.map((_, idx) => {
        if (idx === cardCount - 1) return 0;
        return -200 + idx * 75;
      });

      const peelRanges: { start: number; end: number }[] = new Array(cardCount);

      const maxDist = 200;
      const staggerStep = 0.25;
      const baseDuration = 0.5;

      for (let i = 0; i < cardCount; i++) {
        if (i === cardCount - 1) {
          peelRanges[i] = { start: 1, end: 1 };
          continue;
        }

        const start = i * staggerStep;
        const distRatio = Math.abs(targetPeelDistances[i]) / maxDist;
        const duration = baseDuration * (0.6 + 0.4 * distRatio);
        const end = Math.min(1, start + duration);

        peelRanges[i] = { start, end };
      }

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const stackStart = index / cardCount;
        const stackEnd = (index + 1) / cardCount;

        let cardProgress =
          (stackProgress - stackStart) / (stackEnd - stackStart);
        cardProgress = Math.max(0, Math.min(1, cardProgress));

        let newerCardsEntered = 0;
        for (let j = index + 1; j < cardCount; j++) {
          const jStart = j / cardCount;
          const jEnd = (j + 1) / cardCount;
          const jProg = (stackProgress - jStart) / (jEnd - jStart);
          newerCardsEntered += Math.max(0, Math.min(1, jProg));
        }

        const range = peelRanges[index];
        let rawPeel = 0;
        if (range.end > range.start)
          rawPeel = (pullProgress - range.start) / (range.end - range.start);

        rawPeel = Math.max(0, Math.min(1, rawPeel));

        const smoothstep = rawPeel * rawPeel * (3 - 2 * rawPeel);
        const ultraFluidEase = Math.pow(smoothstep, 1.2);

        const peelYPx = ultraFluidEase * targetPeelDistances[index];

        const maxBlur = 6;
        const depthBehindTop = newerCardsEntered;
        const blurPx = Math.min(maxBlur, depthBehindTop * 4);

        card.style.setProperty("--card-progress", cardProgress.toString());
        card.style.setProperty("--newer-entered", newerCardsEntered.toString());
        card.style.setProperty("--peel-y-px", `${peelYPx}px`);
        card.style.setProperty("--peel-progress", ultraFluidEase.toString());
        card.style.setProperty("--blur-px", `${blurPx}px`);
      });

      animationFrame = requestAnimationFrame(update);
    };

    const handleScroll = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="absolute top-0 z-20 h-[400vh] w-full">
      <div className="sticky top-0 grid h-dvh place-content-center overflow-hidden">
        <div className="relative aspect-3/4 h-100 w-3xl perspective-distant">
          {cards.map((card, index) => (
            <article
              key={card.id}
              ref={(element) => (cardsRef.current[index] = element)}
              style={{ zIndex: index + 1 }}
              className="card-stack-card absolute inset-0 grid origin-center grid-rows-3 gap-6 rounded-md bg-zinc-900 p-8 text-white will-change-transform transform-3d"
            >
              <section className="row-span-2 flex w-full items-center justify-between">
                <h3 className="text-4xl">{card.domain}</h3>
                <div className="size-full rounded-md bg-amber-400" />
              </section>

              <hgroup className="grid gap-4">
                <h2 className="text-5xl font-medium tracking-tight">
                  {card.title}
                </h2>
                <p>{card.description}</p>
              </hgroup>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
