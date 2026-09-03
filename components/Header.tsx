import { Fragment } from "react";
import Link from "next/link";
import AnimatedAnchor from "@/components/AnimatedAnchor";
import SimpleIconSvg from "@/components/SimpleIconSvg";
import { FileUser, Slash } from "lucide-react";
import { siGithub } from "simple-icons";

export default function Header() {
  return (
    <div className="relative z-10">
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

          <nav className="flex items-center justify-end gap-6">
            <AnimatedAnchor size="small" href="#about">
              About
            </AnimatedAnchor>
            <AnimatedAnchor size="small" href="#projects">
              Projects
            </AnimatedAnchor>
            <AnimatedAnchor size="small" href="#contact">
              Contact
            </AnimatedAnchor>

            <AnimatedAnchor
              inverted
              size="icon"
              href="https://github.com/sanli-11"
              rel="noopener noreferrer"
            >
              <SimpleIconSvg
                icon={siGithub}
                className="delay-200 group-hover:invert"
              />
            </AnimatedAnchor>
          </nav>
        </header>
      </>

      <nav className="fixed top-1/2 right-0 translate-x-24 -translate-y-1/2">
        <AnimatedAnchor
          inverted
          size="large"
          download
          href="/assets/files/Hassan-Ali-CV.pdf"
          rel="noopener noreferrer"
          className="rotate-270"
        >
          <span className="lg:hidden">CV</span>
          <span className="hidden lg:inline">Download CV</span>
          <FileUser className="ml-4 rotate-90 delay-200 hover:invert" />
        </AnimatedAnchor>
      </nav>
    </div>
  );
}
