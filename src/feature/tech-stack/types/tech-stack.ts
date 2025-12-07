import { IconName } from "@/components/icon";
import { ReactNode } from "react";

export interface TechStackData {
  category: string;
  icon: ReactNode;
  technologies: Array<string>;
}
