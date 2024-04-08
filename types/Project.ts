import { Image } from "@types";

export interface Project {
  title: { en: string; br: string };
  description: { en: string | string[]; br: string | string[] };
  coverImage: string;
  imagesPath: string | null;
  company: "AGU" | "BBTS" | "Other";
  skills: string[];
  value: 1 | 2 | 3 | 4 | 5;
}

export interface ProjectRaw {
  title: { en: string; br: string };
  description: { en: string | string[]; br: string | string[] };
  coverImage: string;
  imagesPath?: string | null;
  images?: Image[];
  company: "AGU" | "BBTS" | "Other";
  skills: string[];
  value: 1 | 2 | 3 | 4 | 5;
}
