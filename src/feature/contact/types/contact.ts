import { ReactNode } from "react";

export interface ContactData {
  icon: ReactNode;
  label: string;
  text: string;
  href?: string;
  ariaLabel?: string;
}
