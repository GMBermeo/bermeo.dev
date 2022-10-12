export interface TEducation {
  type?: {
    en: "Postgraduate Degree" | "Ensino Superior" | undefined;
    br: "Pós-graduação Lato Sensu" | "Ensino Superior" | undefined;
  };
  title: { en: string; br: string };
  company: { en: string; br: string };
  dateStart?: string;
  dateEnd: string;
  hours?: string;
}
