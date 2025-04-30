export interface Degree {
  type: "Postgraduate Degree" | "Undergraduate Degree";
  title: string;
  thesis?: string;
  institution: string;
  dateStart: string;
  dateEnd: string;
  link?: string;
}
export interface Course {
  title: string;
  institution: string;
  dateEnd: string;
  hours: number;
}
export interface Certification {
  title: string;
  institution: string;
  dateEnd: string;
}

export interface DegreeResponse {
  type: string;
  title: string;
  institution: string;
  dateStart: string;
  dateEnd: string;
  link?: string;
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
  link?: string;
}
