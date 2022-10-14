export interface TDegree {
  type: {
    en: "Postgraduate Degree" | "Undergraduate Degree";
    br: "Pós-graduação Lato Sensu" | "Ensino Superior";
  };
  title: {
    en: string;
    br: string;
  };
  institution: string;
  dateStart: string;
  dateEnd: string;
}
export interface TCourse {
  title: { en: string; br: string };
  institution: string;
  dateEnd: string;
  hours: number;
}
export interface TCertification {
  title: string;
  institution: string;
  dateEnd: string;
}

export interface TDegreeResponse {
  type: string;
  title: string;
  institution: string;
  dateStart: string;
  dateEnd: string;
}
export interface TCourseResponse {
  title: string;
  institution: string;
  dateEnd: string;
  hours: number;
}
export interface TCertificationResponse {
  title: string;
  institution: string;
  dateEnd: string;
}

export interface TEducationProps {
  type?: string;
  title: string;
  institution: string;
  dateStart?: string;
  dateEnd: string;
  hours?: number;
}
