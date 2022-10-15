import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { SEO } from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { LocaleStorage } from "@contexts/LocaleContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        {...SEO}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Guilherme Bermêo",
          },
          {
            name: "application-name",
            content: "Guilherme Bermeo | Front-end Developer",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "icon",
            href: "/favicons/favicon-16x16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            rel: "icon",
            href: "/favicons/favicon-32x32.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            rel: "apple-touch-icon",
            href: "/favicons/apple-touch-icon.png",
            sizes: "180x180",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
        ]}
      />
      <LocaleStorage>
        <Component {...pageProps} />
      </LocaleStorage>
    </>
  );
}

export default MyApp;
