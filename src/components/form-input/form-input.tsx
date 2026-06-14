import clsx from "clsx";
import { InputHTMLAttributes } from "react";

import { FormFieldWrapper } from "../form-field-wrapper/form-field-wrapper";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: string;
}

export function FormInput(props: FormInputProps) {
  const { label, error, ...rest } = props;
  return (
    <FormFieldWrapper error={error} label={label} id={rest.id}>
      <input
        {...rest}
        className={clsx(
          "w-full resize-none rounded border bg-input-background px-4 py-2.5 transition-colors placeholder:text-muted-foreground/50 focus:ring-2 focus:outline-none",
          {
            "border-destructive focus:ring-destructive dark:border-red-400 dark:focus:ring-red-400":
              error,
            "border-border focus:ring-primary": !error,
          }
        )}
      />
    </FormFieldWrapper>
  );
}
