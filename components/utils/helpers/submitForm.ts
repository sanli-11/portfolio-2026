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

export function submitForm(
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
    return;
  }

  setForm(initialForm);
  setErrors({});
}
