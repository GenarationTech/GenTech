"use client";

import { useActionState } from "react";
import { CircleCheck } from "lucide-react";
import { submitInquiry, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { FieldError, Input, Label, Textarea } from "@/components/ui/Field";
import { projectTypes } from "@/content/inquiry";

const initial: FormState = { status: "idle" };

export function InquiryForm({ defaultType }: { defaultType?: string }) {
  const [state, action, pending] = useActionState(submitInquiry, initial);
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="py-10 text-center">
        <CircleCheck aria-hidden className="mx-auto size-9 text-accent" />
        <p className="display-sm mt-5 text-2xl">Thanks, we have it.</p>
        <p className="mx-auto mt-2 max-w-sm text-fg-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-7">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <fieldset>
        <legend className="mb-3 text-sm font-medium">What are you building?</legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <label key={type} className="cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value={type}
                defaultChecked={type === defaultType}
                className="peer sr-only"
              />
              <span className="inline-flex rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:border-fg hover:text-fg peer-checked:border-fg peer-checked:bg-fg peer-checked:text-surface peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                {type}
              </span>
            </label>
          ))}
        </div>
        <FieldError id="projectType-error" message={errors.projectType} />
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="inquiry-name">Name</Label>
          <Input
            id="inquiry-name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "inquiry-name-error" : undefined}
          />
          <FieldError id="inquiry-name-error" message={errors.name} />
        </div>
        <div>
          <Label htmlFor="inquiry-email">Email</Label>
          <Input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "inquiry-email-error" : undefined}
          />
          <FieldError id="inquiry-email-error" message={errors.email} />
        </div>
      </div>

      <div>
        <Label htmlFor="inquiry-company">
          Company <span className="font-normal text-fg-subtle">(optional)</span>
        </Label>
        <Input id="inquiry-company" name="company" autoComplete="organization" />
      </div>

      <div>
        <Label htmlFor="inquiry-message">Tell us about the project</Label>
        <Textarea
          id="inquiry-message"
          name="message"
          placeholder="What problem are you solving? Who is it for? Is there a timeline?"
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "inquiry-message-error" : undefined}
        />
        <FieldError id="inquiry-message-error" message={errors.message} />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-accent">
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-fg-subtle">No fixed prices. We reply with questions first, then a proposal.</p>
        <Button type="submit" size="lg" arrow disabled={pending}>
          {pending ? "Sending…" : "Start a Conversation"}
        </Button>
      </div>
    </form>
  );
}
