import type { Image } from "@types";

export interface Project {
  title: string;
  description: string | string[];
  coverImage: string;
  imagesPath?: string;
  images?: Image[];
  company: "AGU" | "BBTS" | "Other";
  skills: string[];
  value: 1 | 2 | 3 | 4 | 5;
}
