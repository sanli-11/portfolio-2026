type Data = {
  name: string;
  email: string;
  organization: string;
  website: string;
  projectDetails: string;
};

type FormErrors = Partial<Record<keyof Data, string>>;

export function validateForm(form: Data): FormErrors {
  const nextErrors: FormErrors = {};

  const trimmedName = form.name.trim();
  const trimmedEmail = form.email.trim();
  const trimmedWebsite = form.website.trim();
  const trimmedProjectDetails = form.projectDetails.trim();

  if (!trimmedName) nextErrors.name = "Name is required.";
  else if (trimmedName.length < 2)
    nextErrors.name = "Name must be at least 2 characters.";

  if (!trimmedEmail) nextErrors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(trimmedEmail))
    nextErrors.email = "Enter a valid email address.";

  if (trimmedWebsite) {
    try {
      const url = new URL(
        trimmedWebsite.startsWith("http")
          ? trimmedWebsite
          : `https://${trimmedWebsite}`,
      );

      if (!["http:", "https:"].includes(url.protocol))
        nextErrors.website = "Enter a valid website.";
    } catch {
      nextErrors.website = "Enter a valid website.";
    }
  }

  if (!trimmedProjectDetails)
    nextErrors.projectDetails = "Project details are required.";
  else if (trimmedProjectDetails.length < 20)
    nextErrors.projectDetails =
      "Project details must be at least 20 characters.";

  return nextErrors;
}
