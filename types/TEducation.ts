export interface TEducation {
  type?: "Pós-graduação Lato Sensu" | "Ensino Superior" | undefined;
  title: string;
  company: string;
  dateStart?: string;
  dateEnd: string;
  hours?: string;
}
