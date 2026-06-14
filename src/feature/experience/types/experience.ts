export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  focusAreas: string[];
  stack: string[];
  companyUrl?: string;
  isCurrent?: boolean;
}
