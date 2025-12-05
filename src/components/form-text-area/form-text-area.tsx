import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

import { FormFieldWrapper } from "../form-field-wrapper/form-field-wrapper";

interface FormTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  error?: string;
}

export function FormTextArea(props: FormTextAreaProps) {
  const { label, error, ...rest } = props;
  return (
    <FormFieldWrapper error={error} label={label} id={rest.id}>
      <textarea
        {...rest}
        className={clsx(
          "w-full rounded-lg border bg-input px-4 py-2 transition-colors focus:ring-2 focus:outline-none",
          {
            "border-destructive focus:ring-destructive": error,
            "border-border focus:ring-primary": !error,
          }
        )}
      />
    </FormFieldWrapper>
  );
}
