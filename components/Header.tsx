import Link from "next/link";
import { FileUser, Slash } from "lucide-react";
import { siGithub } from "simple-icons";
import AnimatedButton from "@/components/AnimatedButton";
import SimpleIconSvg from "@/components/SimpleIconSvg";

export default function Header() {
  return (
    <>
      <a
        href="#"
        className="fixed -top-16 rounded-br-md bg-stone-400 px-6 py-2.5 text-black outline-offset-4 outline-red-400 transition-discrete duration-600 hover:top-0 hover:outline-2 focus:outline-2 focus-visible:top-0"
      >
        Skip to content
      </a>

      <header className="mx-auto flex max-w-450 items-center justify-between px-4 pt-12">
        <Link
          href="/"
          className="group grid size-8 place-content-center rounded-md bg-stone-100"
        >
          <Slash color="black" size={18} strokeWidth={5} />
        </Link>

        <nav className="flex items-center justify-end gap-8">
          <AnimatedButton size="small">About</AnimatedButton>
          <AnimatedButton size="small">Projects</AnimatedButton>
          <AnimatedButton size="small">Contact</AnimatedButton>

          <AnimatedButton
            inverted
            size="small"
            className="flex items-center justify-center gap-2"
          >
            <FileUser className="delay-200 hover:invert" />
            Download CV
          </AnimatedButton>

          <AnimatedButton inverted size="icon">
            <SimpleIconSvg
              icon={siGithub}
              className="delay-200 group-hover:invert"
            />
          </AnimatedButton>
        </nav>
      </header>
    </>
  );
}
