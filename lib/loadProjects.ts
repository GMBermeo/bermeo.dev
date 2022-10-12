import { DataProjects, projects } from "@data/projects";

// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadExperiences(locale: string) {
  //   const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  //   // Call an external API endpoint to get posts
  //   const res = await fetch("http://localhost:3000/api/experience/" + locale);
  //   const data = await res.json();

  return projects[locale as keyof DataProjects];
}
