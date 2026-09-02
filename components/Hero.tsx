"use client";

import DottedBackground from "@/components/DottedBackground";

export default function Hero() {
  return (
    <section className="-mt-16 h-[calc(100dvh-40px)] w-full">
      <div className="relative size-full overflow-hidden rounded-3xl">
        <DottedBackground />
      </div>
    </section>
  );
}
