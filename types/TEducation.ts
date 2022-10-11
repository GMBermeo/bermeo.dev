export interface TEducation {
  type?:
    | "Pós-graduação Lato Sensu"
    | "Ensino Superior"
    | "Postgraduate Degree"
    | undefined;
  title: string;
  company: string;
  dateStart?: string;
  dateEnd: string;
  hours?: string;
}
