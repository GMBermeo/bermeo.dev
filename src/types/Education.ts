import { Translation } from "@types";

export interface Degree {
  type: {
    en: "Postgraduate Degree" | "Undergraduate Degree";
    br: "Pós-graduação Lato Sensu" | "Ensino Superior";
  };
  title: Translation;
  thesis?: Translation;
  institution: string;
  dateStart: string;
  dateEnd: string;
}

export interface DegreeResponse {
  type: string;
  title: string;
  institution: string;
  dateStart: string;
  dateEnd: string;
}

export interface Course {
  title: Translation;
  institution: string;
  dateEnd: string;
  hours: number;
}

export interface Certification {
  title: string;
  institution: string;
  dateEnd: string;
}

export interface CourseResponse {
  title: string;
  institution: string;
  dateEnd: string;
  hours: number;
}

export interface CertificationResponse {
  title: string;
  institution: string;
  dateEnd: string;
}

export interface EducationProps {
  type?: string;
  title: string;
  thesis?: string;
  institution: string;
  dateStart?: string;
  dateEnd: string;
  hours?: number;
}
