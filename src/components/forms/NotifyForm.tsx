"use client";

import { useActionState } from "react";
import { CircleCheck } from "lucide-react";
import { submitNotify, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { FieldError, Input, Label } from "@/components/ui/Field";

const initial: FormState = { status: "idle" };

export function NotifyForm() {
  const [state, action, pending] = useActionState(submitNotify, initial);

  if (state.status === "success") {
    return (
      <p role="status" className="flex items-start gap-3 rounded-2xl border border-line bg-surface-2 p-4 text-sm">
        <CircleCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} noValidate className="flex flex-col gap-3 sm:flex-row sm:items-start">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex-1">
        <Label htmlFor="notify-email" className="sr-only">
          Email address
        </Label>
        <Input
          id="notify-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "notify-email-error" : undefined}
        />
        <FieldError id="notify-email-error" message={state.errors?.email} />
      </div>
      <Button type="submit" variant="accent" size="lg" className="h-12" disabled={pending}>
        {pending ? "Sending…" : "Get Notified"}
      </Button>
    </form>
  );
}
