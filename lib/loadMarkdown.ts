import fs from "fs";
import path from "path";
import { promisify } from "util";

export async function loadMarkdown(filePath: string) {
  const readFile = promisify(fs.readFile);
  const markdownPath = path.join(process.cwd(), filePath);
  const content = await readFile(markdownPath, "utf8");

  return content;
}
