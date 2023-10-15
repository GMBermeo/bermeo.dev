import { TImage } from "@types";

export interface TProject {
  title: { en: string; br: string };
  description: { en: string | string[]; br: string | string[] };
  coverImage: string;
  imagesPath: string | null;
  company: "AGU" | "BBTS" | "Other";
  skills: string[];
  value: 1 | 2 | 3 | 4 | 5;
}

export interface TProjectRaw {
  title: { en: string; br: string };
  description: { en: string | string[]; br: string | string[] };
  coverImage: string;
  imagesPath?: string | null;
  images?: TImage[];
  company: "AGU" | "BBTS" | "Other";
  skills: string[];
  value: 1 | 2 | 3 | 4 | 5;
}
