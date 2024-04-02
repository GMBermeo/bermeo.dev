import "../styles/globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Guilherme Bermeo | %s",
    absolute: "Guilherme Bermeo | Front-end Developer",
    default: "Guilherme Bermeo | Front-end Developer",
  },
  description: "Guilherme Bermeo | Front-end Developer",
  applicationName: "Guilherme Bermeo | Front-end Developer",
  authors: [
    {
      name: "Guilherme Bermêo",
      url: "http://www.bermeo.dev",
    },
  ],
  generator: "Next.js",
  keywords: [
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "Typescript",
    "Front-end",
    "Brasília",
    "Roraima",
    "Guilherme Bermêo",
    "Bermeo",
    "Vue.js",
    "Jest",
    "React",
    "MUI",
    "Relocate",
    "Relocation",
    "Developer",
    "TanStack Query",
    "Belgium",
    "Canada",
    "Montreal",
    "Tailwind CSS",
    "Bootstrap",
  ],
  referrer: "origin",
  themeColor: "#0e1012",
  colorScheme: "dark",
  viewport: "width=device-width, initial-scale=1",
  creator: "Guilherme Bermêo",
  publisher: "Vercel",
  robots: {
    index: true,
    follow: true,
  },
  alternates: null,
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      url: "/favicons/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      url: "/favicons/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
  manifest: "https://bermeo.dev/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    site: "https://bermeo.dev",
    creator: "guilherme.bermeo",
    images: "https://www.bermeo.dev/opengraph.png",
  },
  appleWebApp: {
    capable: true,
    title: "Guilherme Bermeo | Front-end Developer",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  archives: null,
  assets: "/assets",
  bookmarks: "/bookmarks",
  category: "Front-end Developer",
  classification: "Developer",
  openGraph: {
    type: "website",
    url: "https://www.bermeo.dev",
    title: "Guilherme Bermeo - Senior Front-end React Developer",
    description:
      "👋 I'm a senior front-end developer and ux designer from Brazil focused on web systems using Next. A versatile and detail-oriented professional, I bring passion and expertise in front-end development and user experience to fast-paced environments. With a background in Systems Analysis and Development, Graphic Design, Music, and experience in various industries, I excel in cross-functional collaboration and adaptability. Skilled in JavaScript frameworks, high-fidelity prototyping, and cutting-edge technologies like React, TypeScript, Tailwind CSS, and Next. Committed to continuous improvement and exploring new tech, I blend creativity with problem-solving skills to deliver exceptional results.",
    siteName: "GuilhermeBermeo",
    images: [
      {
        url: "https://www.bermeo.dev/opengraph.png",
        width: 2416,
        height: 1276,
        alt: "Guilherme Bermêo - Social Background",
      },
      {
        url: "https://www.bermeo.dev/avatar1.jpg",
        width: 1000,
        height: 1000,
        alt: "Guilherme Bermêo - Painting Avatar",
      },
      {
        url: "https://www.bermeo.dev/opengraph.svg",
        alt: "Guilherme Bermêo - Social Background",
      },
    ],
  },
};

export default function RootLayout({ children, params }: any) {
  return (
    <html lang={"en"}>
      <body>{children}</body>
    </html>
  );
}
