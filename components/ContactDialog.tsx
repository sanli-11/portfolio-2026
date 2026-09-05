"use client";

import { AnimatePresence, motion } from "motion/react";
import { SubmitEventHandler, useEffect, useRef, useState } from "react";
import { submitForm } from "@/components/utils/helpers/submitForm";
import AnimatedButton from "@/components/AnimatedButton";
import { X } from "lucide-react";
import Field from "@/components/Field";
import Textfield from "@/components/Textfield";

type FormData = {
  name: string;
  email: string;
  organization: string;
  website: string;
  projectDetails: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  organization: "",
  website: "",
  projectDetails: "",
};

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactDialog({ open, onClose }: ContactDialogProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

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

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));

    setErrors((current) => {
      if (!current[field]) return current;

      const next = { ...current };
      delete next[field];

      return next;
    });
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    submitForm(dialogRef, form, setForm, setErrors);
  };

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
            className="bg-background absolute inset-0 size-full overflow-x-hidden overflow-y-auto px-24 py-12"
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

            <div className="flex size-full items-center justify-center">
              <motion.div
                className="mx-auto flex w-full max-w-360 origin-top items-start justify-center gap-6"
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    </p>
                    <p>
                      Pharetra vestibulum fusce dictum risus blandit quis
                      suspendisse.
                    </p>
                    <p>Himenaeos orci</p>
                  </div>
                </hgroup>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid w-full gap-6 rounded-3xl bg-zinc-900 p-12"
                >
                  <h4 className="flex items-center gap-2">
                    <span className="rounded-sm bg-zinc-600 px-2 py-px">1</span>
                    <div className="h-px w-full bg-zinc-600" />
                    <span className="py-0.5 tracking-tighter text-nowrap">
                      About You
                    </span>
                  </h4>

                  <section className="grid grid-cols-2 gap-4">
                    <div className="group relative">
                      <Field
                        id="name"
                        label="Name"
                        value={form.name}
                        onChange={(event) =>
                          updateField("name", event.target.value)
                        }
                        error={errors.name}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                    </div>

                    <div className="group relative">
                      <Field
                        id="email"
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        error={errors.email}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                    </div>
                  </section>

                  <h4 className="mt-2 flex items-center gap-2">
                    <span className="rounded-sm bg-zinc-600 px-2 py-px">2</span>
                    <div className="h-px w-full bg-zinc-600" />
                    <span className="py-0.5 tracking-tighter text-nowrap">
                      Your Organization
                    </span>
                  </h4>

                  <section className="grid grid-cols-2 gap-4">
                    <div className="group relative">
                      <Field
                        id="organization"
                        label="Organization"
                        value={form.organization}
                        onChange={(event) =>
                          updateField("organization", event.target.value)
                        }
                        error={errors.organization}
                        aria-invalid={Boolean(errors.organization)}
                        aria-describedby={
                          errors.organization ? "organization-error" : undefined
                        }
                      />
                    </div>

                    <div className="group relative">
                      <Field
                        id="website"
                        label="Website"
                        value={form.website}
                        onChange={(event) =>
                          updateField("website", event.target.value)
                        }
                        error={errors.website}
                        aria-invalid={Boolean(errors.website)}
                        aria-describedby={
                          errors.website ? "website-error" : undefined
                        }
                      />
                    </div>
                  </section>

                  <h4 className="mt-2 flex items-center gap-2">
                    <span className="rounded-sm bg-zinc-600 px-2 py-px">3</span>
                    <div className="h-px w-full bg-zinc-600" />
                    <span className="py-0.5 tracking-tighter text-nowrap">
                      Your Project
                    </span>
                  </h4>

                  <Textfield
                    id="projectDetails"
                    label="Project Details"
                    value={form.projectDetails}
                    onChange={(event) =>
                      updateField("projectDetails", event.target.value)
                    }
                    error={errors.projectDetails}
                    aria-invalid={Boolean(errors.projectDetails)}
                    aria-describedby={
                      errors.projectDetails
                        ? "project-details-error"
                        : undefined
                    }
                  />

                  <AnimatedButton
                    shape="circle"
                    size="large"
                    type="submit"
                    className="ml-auto"
                  >
                    Send
                  </AnimatedButton>
                </form>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
