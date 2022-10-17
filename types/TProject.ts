import { TImage } from "./TImage";

export interface TProject {
  title: { en: string; br: string };
  description: { en: string | string[]; br: string | string[] };
  coverImage: string;
  imagesPath?: string;
  company: "AGU" | "BBTS" | "Other";
  skills: string[];
  value: 1 | 2 | 3 | 4 | 5;
}

export interface TProjectResponse {
  title: { en: string; br: string };
  description: { en: string | string[]; br: string | string[] };
  coverImage: string;
  images?: TImage[];
  company: "AGU" | "BBTS" | "Other";
  skills: string[];
  value: 1 | 2 | 3 | 4 | 5;
}
