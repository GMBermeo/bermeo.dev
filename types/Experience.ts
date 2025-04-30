export interface Experience {
  title: string;
  company: string;
  companyShort: string;
  dateStart: string;
  dateEnd: string;
  description: string[];
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
