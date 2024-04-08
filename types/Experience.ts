export interface Experience {
  title: { en: string; br: string };
  company: string;
  companyShort: string;
  dateStart: string;
  dateEnd: string;
  description: { en: string[]; br: string[] };
  linkTo?: string;
}

export interface ExperienceResponse {
  title: string;
  company: string;
  companyShort: string;
  dateStart: string;
  dateEnd: string;
  description: string[];
  linkTo?: string;
}

export interface ExperienceProps {
  title: string;
  company: string;
  companyShort: string;
  dateStart: string;
  dateEnd: string;
  description: string[];
  linkTo?: string;
}
