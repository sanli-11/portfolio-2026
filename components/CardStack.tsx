"use client";

import { RefObject, useEffect, useRef } from "react";
import { SquareArrowUpRight } from "lucide-react";
import AnimatedAnchor from "@/components/AnimatedAnchor";

const cards = [
  {
    id: 0,
    title: "TradingBot Max",
    description:
      "A full-stack, scalable dashboard for real-time market tracking and risk metrics.",
    domain: "Algorithmic Trading",
    link: "https://github.com/sanli-11/",
  },
  {
    id: 1,
    title: "TradingBot Max",
    description:
      "A full-stack, scalable dashboard for real-time market tracking and risk metrics.",
    domain: "Algorithmic Trading",
    link: "https://github.com/sanli-11/",
  },
  {
    id: 2,
    title: "TradingBot Max",
    description:
      "A full-stack, scalable dashboard for real-time market tracking and risk metrics.",
    domain: "Algorithmic Trading",
    link: "https://github.com/sanli-11/",
  },
  {
    id: 3,
    title: "TradingBot Max",
    description:
      "A full-stack, scalable dashboard for real-time market tracking and risk metrics.",
    domain: "Algorithmic Trading",
    link: "https://github.com/sanli-11/",
  },
];

interface CardStackProps {
  parentRef: RefObject<HTMLElement | null>;
}

export default function CardStack({ parentRef }: CardStackProps) {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    let animationFrame = 0;

    const update = () => {
      const section = parentRef.current;
      if (!section) {
        animationFrame = requestAnimationFrame(update);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollDistance = section.offsetHeight - window.innerHeight;
      if (scrollDistance <= 0) {
        animationFrame = requestAnimationFrame(update);
        return;
      }

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
          const jProgress = (stackProgress - jStart) / (jEnd - jStart);
          newerCardsEntered += Math.max(0, Math.min(1, jProgress));
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

    animationFrame = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [parentRef]);

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <div className="sticky top-0 grid h-dvh w-full max-w-dvw place-content-center overflow-hidden">
        <div className="relative aspect-4/3 w-xl perspective-distant lg:w-3xl">
          {cards.map((card, index) => (
            <article
              key={card.id}
              ref={(element) => (cardsRef.current[index] = element)}
              style={{ zIndex: index + 1 }}
              className="card-stack-card absolute inset-0 grid origin-center grid-rows-4 gap-6 rounded-3xl bg-zinc-900 p-6 text-white will-change-transform transform-3d"
            >
              <section className="row-span-3 flex w-full items-center justify-between">
                <h3 className="max-w-36 text-xl lg:text-2xl 2xl:text-3xl">
                  {card.domain}
                </h3>
                <div className="size-full rounded-lg" />
              </section>

              <hgroup className="grid content-end gap-4 lg:gap-2 2xl:gap-4">
                <div className="flex w-full items-end justify-between lg:items-start">
                  <h2 className="text-2xl tracking-tight lg:text-3xl 2xl:text-4xl">
                    {card.title}
                  </h2>

                  <AnimatedAnchor
                    size="icon"
                    href={card.link}
                    className="pointer-events-auto flex gap-2"
                  >
                    <span className="sr-only">Visit Page</span>
                    <SquareArrowUpRight />
                  </AnimatedAnchor>
                </div>

                <p>{card.description}</p>
              </hgroup>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
