"use server";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const read = (formData: FormData, key: string) => String(formData.get(key) ?? "").trim();

/**
 * Project inquiry. Validates on the server and currently logs the payload.
 * TODO: deliver to an inbox or CRM (email provider, webhook, database).
 */
export async function submitInquiry(_previous: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real users never fill this field.
  if (read(formData, "website")) return { status: "success", message: "Thanks. We will be in touch." };

  const name = read(formData, "name");
  const email = read(formData, "email");
  const company = read(formData, "company");
  const projectType = read(formData, "projectType");
  const message = read(formData, "message");

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL.test(email)) errors.email = "Enter a valid email address.";
  if (!projectType) errors.projectType = "Pick the closest project type.";
  if (message.length < 20) errors.message = "A few sentences help us understand the project.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors };
  }

  console.info("[gentech] inquiry", { name, email, company, projectType, receivedAt: new Date().toISOString() });

  return {
    status: "success",
    message: "We have received your project details and will reply by email.",
  };
}

/**
 * "Get notified" for future education programs. Logs only for now.
 * TODO: connect to a mailing list provider.
 */
export async function submitNotify(_previous: FormState, formData: FormData): Promise<FormState> {
  if (read(formData, "website")) return { status: "success", message: "You are on the list." };

  const email = read(formData, "email");
  if (!EMAIL.test(email)) {
    return { status: "error", message: "Enter a valid email address.", errors: { email: "Enter a valid email address." } };
  }

  console.info("[gentech] notify", { email, receivedAt: new Date().toISOString() });

  return { status: "success", message: "You are on the list. We will email you when the first program opens." };
}
