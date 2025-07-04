import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Guilherme Bermêo | Front-end Developer",
    short_name: "Guilherme Bermêo",
    start_url: "/",
    background_color: "#040413",
    theme_color: "#FF6358",
    display: "fullscreen",
    categories: [
      "personal",
      "portfolio",
      "developer",
      "react",
      "nextjs",
      "typescript",
      "javascript",
      "css",
      "html",
      "brazil",
      "relocate",
    ],
    lang: "en",
    description: "",
    dir: "ltr",
    orientation: "any",
    icons: [
      {
        src: "/images/logo/logo48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        src: "/images/logo/logo72.png",
        type: "image/png",
        sizes: "72x72",
      },
      {
        src: "/images/logo/logo96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        src: "/images/logo/logo144.png",
        type: "image/png",
        sizes: "144x144",
      },
      {
        src: "/images/logo/logo192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/images/logo/logo256.png",
        type: "image/png",
        sizes: "256x256",
      },
      {
        src: "/images/logo/logo384.png",
        type: "image/png",
        sizes: "384x384",
      },
      {
        src: "/images/logo/logo512.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        src: "favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
