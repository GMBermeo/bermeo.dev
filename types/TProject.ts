export interface TProject {
  title: string;
  description: string;
  coverImage: string;
  company: "AGU" | "BBTS" | "Other";
  skills: string[];
  value: 1 | 2 | 3 | 4 | 5;
}
