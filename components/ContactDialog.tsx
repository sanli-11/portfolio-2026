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
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
