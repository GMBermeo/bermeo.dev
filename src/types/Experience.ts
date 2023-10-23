export interface TExperience {
  title: { en: string; br: string };
  company: string;
  companyShort: string;
  dateStart: string;
  dateEnd: string;
  description: { en: string[]; br: string[] };
  linkTo?: string;
}

export interface TExperienceResponse {
  title: string;
  company: string;
  companyShort: string;
  dateStart: string;
  dateEnd: string;
  description: string[];
  linkTo?: string;
}

export interface TExperienceProps {
  title: string;
  company: string;
  companyShort: string;
  dateStart: string;
  dateEnd: string;
  description: string[];
  linkTo?: string;
}
