"use server";
import "../styles/globals.css";
import { Metadata, Viewport } from "next";

export async function generateViewport(): Promise<Viewport> {
  return {
    width: "device-width",
    initialScale: 1,
    colorScheme: "dark",
    themeColor: "#0e1012",
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: "Guilherme Bermeo | %s",
      absolute: "Guilherme Bermeo | Front-end Developer",
      default: "Guilherme Bermeo | Front-end Developer",
    },
    description:
      "Brazilian Senior Front-end Engineer & former UX Designer, excels in Next.js, React, and creating optimal user experiences in web development.",
    applicationName: "Guilherme Bermeo | Front-end Developer",
    alternates: {
      canonical: "https://www.bermeo.dev",
      languages: {
        "en-US": "https://www.bermeo.dev",
        "pt-br": "https://www.bermeo.com.br",
      },
    },
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
    creator: "Guilherme Bermêo",
    publisher: "Vercel",
    robots: {
      index: true,
      follow: true,
    },
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
    manifest: "/site.webmanifest",
    twitter: {
      card: "summary_large_image",
      site: "https://www.bermeo.dev",
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
    assets: [
      "/logo.svg",
      "/images/bbts/PLUGINS-Cover.png",
      "/images/agu/UNIO-Cover.png",
      "/images/other/CHAT-Persona5_Cover.png",
      "/images/agu/OTRS-SADAtende-Cover.png",
      "/download/article-introduction-to-narrative-in-music[br].pdf",
      "/resume/GuilhermeBermeo-en.md",
      "/resume/GuilhermeBermeo-en.pdf",
      "/resume/GuilhermeBermeo-br.md",
      "/resume/GuilhermeBermeo-br.pdf",
      "/download/CV-202312[en].pdf",
      "/download/CV-202312[br].pdf",
      "/favicons/android-chrome-192x192.png",
      "/favicons/android-chrome-512x512.png",
      "/favicons/apple-touch-icon.png",
      "/favicons/favicon-16x16.png",
      "/favicons/favicon-32x32.png",
      "/avatar1.jpg",
      "/avatar2.png",
      "/favicon.ico",
      "/favicon.svg",
      "/logo-transparent.svg",
      "/logo.svg",
      "/social/github.svg",
      "/social/linkedin.svg",
      "/social/linkedinBadge.svg",
      "/images/agu/APP-Cartaz-Pre.jpg",
      "/images/agu/APP-Cartaz.jpg",
      "/images/agu/APP-Email.png",
      "/images/agu/APP-Escola-Cover.png",
      "/images/agu/APP-Escola-mockup-1080.png",
      "/images/agu/APP-Escola-mockup-2160.png",
      "/images/agu/BRANDBOOK-DTI.png",
      "/images/agu/OTRS-SADAtende-Home.jpg",
      "/images/agu/UNIO-Logo-720.png",
      "/images/agu/UNIO-LogoBW-720.png",
      "/images/agu/UNIO-LogoTransition-1080.png",
      "/images/agu/UNIO-Modulos-1080.jpg",
      "/images/agu/UNIO-Modulos-2160.jpg",
      "/images/agu/UNIO-Pesquisa-1080.jpg",
      "/images/agu/UNIO-Pesquisa-2160.jpg",
      "/images/bbts/APP-BB_Windows-1080.jpg",
      "/images/bbts/APP-BB-3_1.jpg",
      "/images/bbts/APP-BB-3_2.jpg",
      "/images/bbts/APP-BB-3_3.jpg",
      "/images/bbts/APP-CONSUMIDOR-2160.jpg",
      "/images/bbts/APP-LIMITES.jpg",
      "/images/bbts/APP-TRANSFERENCIA.jpg",
      "/images/bbts/GPI-1080.jpg",
      "/images/bbts/HOTSITE-2160.jpg",
      "/images/bbts/INTRANET-MODULAR-2160.jpg",
      "/images/bbts/INTRANET-MODULAR-MOBILE.jpg",
      "/images/bbts/PLUGINS-iMac.png",
      "/images/bbts/PLUGINS-iPad.png",
      "/images/bbts/PLUGINS-Macbook.png",
      "/images/agu/UNIO-Modulos-1080.jpg",
      "/images/agu/UNIO-Pesquisa-1080.jpg",
      "/images/agu/APP-Escola-mockup-1080.png",
      "/images/bbts/APP-CONSUMIDOR-1080.jpg",
      "/images/bbts/INTRANET-MODULAR-1080.jpg",
      "/images/bbts/PLUGINS-Group-1080.png",
      "/images/bbts/PLUGINS-Group-2160.png",
      "/images/other/CHAT-Persona5_1-1080.jpg",
      "/images/other/CHAT-Persona5_2-1080.jpg",
      "/images/other/CHAT-Persona5_3-1080.jpg",
      "/images/other/CHAT-Persona5_4-1080.jpg",
      "/images/other/CHAT-Persona5_Mobile-1080.png",
      "/images/other/CHAT-Persona5_Mobile-2160.png",
      "/images/other/NLW-ESPORT_Cover-1080.png",
      "/images/gif/CORRUPTED-avatar1-600.gif",
      "/images/gif/CORRUPTED-Starry_Night_by_Van_Gogh-600.gif",
      "/images/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt-600.gif",
      "/images/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh-600.gif",
    ],
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
}

export default async function RootLayout({ children, params }: any) {
  return (
    <html lang={"en"}>
      <body>{children}</body>
    </html>
  );
}
