"use client";

import { useState } from "react";
import DottedBackground from "@/components/DottedBackground";
import { Mail } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import AnimatedButton from "@/components/AnimatedButton";

export default function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  {
    return (
      <footer id="contact" className="relative mb-4 h-[50dvh] w-full">
        <div className="size-full overflow-hidden rounded-3xl">
          <DottedBackground />
        </div>

        <section className="absolute bottom-0 z-10 mb-24 flex w-full flex-col items-start justify-start gap-6 px-20 lg:flex-row lg:items-end">
          <h2 className="text-6xl/18 text-pretty lg:max-w-130 lg:text-7xl/21 2xl:max-w-170 2xl:text-8xl/24">
            Available for select projects
          </h2>

          <div className="mb-6 flex items-center gap-8">
            <AnimatedButton onClick={() => setIsDialogOpen(true)} size="large">
              Start the Conversation
            </AnimatedButton>
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

          <ContactDialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          />
        </section>
      </footer>
    );
  }
}
