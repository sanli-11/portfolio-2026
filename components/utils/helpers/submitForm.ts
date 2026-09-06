import type { RefObject } from "react";
import { validateForm } from "@/components/utils/helpers/validateForm";

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

export async function submitForm(
  ref: RefObject<HTMLElement | null>,
  form: FormData,
  setForm: (data: FormData) => void,
  setErrors: (errors: FormErrors) => void,
) {
  const nextErrors = validateForm(form);

  setErrors(nextErrors);

  if (Object.keys(nextErrors).length > 0) {
    const firstInvalidField = (
      Object.keys(nextErrors) as Array<keyof FormData>
    )[0];
    const input = ref.current?.querySelector<HTMLElement>(
      `[name="${firstInvalidField}"]`,
    );

    input?.focus();
    return false;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        organization: form.organization.trim(),
        website: form.website.trim(),
        projectDetails: form.projectDetails.trim(),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Email submission failed:", result);
      return false;
    }

    setForm(initialForm);
    setErrors({});

    return true;
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return false;
  }
}
