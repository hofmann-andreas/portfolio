import { AlertCircle } from "lucide-react";
import { ReactNode } from "react";

export interface FormFieldWrapperProps {
  children: ReactNode;
  label?: string;
  error?: string;
  id?: string;
}

export function FormFieldWrapper(props: FormFieldWrapperProps) {
  const { children, label, error, id } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>

      <div className="flex flex-col gap-1">
        {children}

        {error && (
          <p
            className="flex items-center gap-1 text-sm text-destructive"
            role="alert"
            aria-live="polite"
          >
            <AlertCircle className="h-4 w-4" />
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
