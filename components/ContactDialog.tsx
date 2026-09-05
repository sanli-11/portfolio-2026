"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import { X } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactDialog({ open, onClose }: ContactDialogProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      previouslyFocusedElement.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      document.body.style.overflow = "hidden";

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleKeyDown);
      };
    }

    document.body.style.overflow = "";

    const element = previouslyFocusedElement.current;

    if (element && document.contains(element)) element.focus();

    previouslyFocusedElement.current = null;

    return () => {
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-50"
        >
          <motion.section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            className="bg-background absolute inset-0 size-full overflow-x-hidden overflow-y-auto px-24 py-32"
            variants={{
              closed: { y: "100%" },
              open: {
                y: 0,
                transition: {
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 28,
                  mass: 0.9,
                },
              },
            }}
          >
            <div className="absolute top-16 right-24">
              <AnimatedButton
                shape="square"
                size="icon"
                onClick={onClose}
                aria-label="Close dialog"
              >
                <X size={24} />
              </AnimatedButton>
            </div>

            <motion.div
              className="items-top mx-auto flex size-full max-w-275 origin-top items-center justify-center gap-6"
              variants={{
                closed: { scaleY: 0, opacity: 0 },
                open: {
                  scaleY: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.7,
                    scaleY: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.25, ease: "easeOut" },
                  },
                },
              }}
            >
              <hgroup className="grid max-w-90 content-start gap-6">
                <h2
                  id="contact-dialog-title"
                  className="h-fit rounded-3xl bg-zinc-900 p-12 text-4xl"
                >
                  Start a project
                </h2>

                <div className="grid h-fit gap-4 rounded-3xl bg-zinc-900 p-12">
                  <p>
                    Ornare sagittis vehicula praesent dui felis venenatis
                    ultrices.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <p>
                    Pharetra vestibulum fusce dictum risus blandit quis
                    suspendisse.
                  </p>
                  <p>Himenaeos orci</p>
                </div>
              </hgroup>
            </motion.div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
