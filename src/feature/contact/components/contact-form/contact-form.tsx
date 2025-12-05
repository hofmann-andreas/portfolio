"use client";

import { AlertCircle, CheckCircle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/button";
import { FormInput } from "@/components/form-input";
import { FormTextArea } from "@/components/form-text-area";
import {
  emailValidation,
  messageValidation,
  nameValidation,
} from "@/utils/form-validation/form-validation";

import { ContactFormData } from "../../types";
import { useContactSubmit } from "../../use-contact-submit/use-contact-submit";

export function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: { email: "", name: "", message: "" },
    mode: "onBlur",
  });

  const { submitContactData, isSuccess, isSubmitting, hasError } = useContactSubmit();

  const onSubmit: SubmitHandler<ContactFormData> = async (values: ContactFormData) => {
    await submitContactData(values);
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {isSuccess && (
          <div
            className="flex items-start gap-3 rounded-lg border border-green-500/20 bg-green-500/10 p-4"
            role="status"
            aria-live="polite"
          >
            <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
            <div>
              <p className="text-green-500">Message sent successfully!</p>
              <p className="mt-1 text-sm text-green-500/80">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          </div>
        )}

        {hasError && (
          <div
            className="flex items-center gap-3 rounded-lg border border-destructive/20 bg-destructive/10 p-4"
            role="alert"
          >
            <AlertCircle className="h-5 w-5 shrink-0 text-destructive" />
            <p className="text-sm text-destructive">
              Something went wrong. Please try again or contact me via email directly.
            </p>
          </div>
        )}

        <FormInput
          type="text"
          id="name"
          label="Name"
          placeholder="Your name"
          error={errors.name?.message}
          {...register("name", nameValidation)}
        />
        <FormInput
          type="email"
          id="email"
          label="Email"
          placeholder="your.email@example.com"
          error={errors.email?.message}
          {...register("email", emailValidation)}
        />

        <FormTextArea
          id="message"
          label="Message"
          placeholder="Your message..."
          rows={5}
          error={errors.message?.message}
          {...register("message", messageValidation)}
        />

        <Button type="submit" isFullWidth disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
