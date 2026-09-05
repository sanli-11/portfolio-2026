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
      <footer id="footer" className="relative mb-4 h-[50dvh] w-full">
        <div className="size-full overflow-hidden rounded-3xl">
          <DottedBackground />
        </div>

        <section className="absolute bottom-0 z-10 mb-24 flex w-full items-end justify-start gap-6 px-20">
          <h2 className="max-w-180 text-8xl/24 text-pretty">
            Available for select projects
          </h2>

          <div className="mb-6 flex items-center justify-evenly gap-8">
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
