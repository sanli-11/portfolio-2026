import DottedBackground from "@/components/DottedBackground";
import { Mail } from "lucide-react";
import AnimatedAnchor from "@/components/AnimatedAnchor";

export default function Footer() {
  {
    return (
      <footer id="footer" className="relative mb-4 h-[50dvh] w-full">
        <div className="size-full overflow-hidden rounded-3xl">
          <DottedBackground />
        </div>

        <section className="absolute bottom-0 z-10 mb-24 flex w-full items-end justify-start gap-6 px-20">
          <h2 className="max-w-250 text-9xl/27 text-pretty">
            Duis irure dolor reprehender in
          </h2>

          <div className="mb-6 flex items-center justify-evenly gap-8">
            <AnimatedAnchor
              href="mailto:sanli.has11@gmail.com"
              shape="rounded"
              size="large"
            >
              Interdum tortor
            </AnimatedAnchor>
          </div>
        </section>

        <section className="grid w-full place-content-center py-4">
          <a
            href="mailto:sanli.has11@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail size={16} />
            sanli.has11@gmail.com
          </a>
        </section>
      </footer>
    );
  }
}
