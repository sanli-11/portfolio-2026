"use client";

import type { ButtonHTMLAttributes } from "react";

const sizeVariants = {
  icon: {
    container: "min-w-8 max-h-10",
    padding: "px-3 py-2",
  },
  small: {
    container: "min-w-16 max-h-10",
    padding: "px-8 py-2",
  },
  medium: {
    container: "min-w-24 max-h-12",
    padding: "px-10 py-3",
  },
  large: {
    container: "min-w-32 max-h-16",
    padding: "px-12 py-4",
  },
} as const;

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizeVariants;
  inverted?: boolean;
}

export default function AnimatedButton({
  size = "medium",
  inverted = false,
  type = "button",
  className = "",
  children,
  ...props
}: AnimatedButtonProps) {
  const variant = sizeVariants[size];

  return (
    <button
      type={type}
      className={`group relative isolate overflow-hidden rounded-md border ${inverted ? "border-stone-900 hover:border-stone-100" : "border-stone-100 hover:border-stone-900"} ${variant.container} transition-colors delay-100 ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className={`flex items-center justify-center gap-2 ${variant.padding} ${inverted ? "bg-stone-100 text-black" : "bg-transparent text-white"} transition-all delay-100 duration-500 ease-out group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none`}
      >
        {children}
      </span>

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-10 grid translate-y-full place-items-center ${inverted ? "bg-transparent text-white" : "bg-stone-100 text-black"} transition-transform delay-150 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:transition-none`}
      >
        <span className="flex translate-y-8 items-center justify-center gap-2 opacity-0 transition-all delay-50 duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
          {children}
        </span>
      </span>

      <span className="sr-only">{children}</span>
    </button>
  );
}
