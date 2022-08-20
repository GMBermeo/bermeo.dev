import "../styles/globals.css";

import type { AppProps } from "next/app";
import { SEO } from "../next-seo.config";
import { DefaultSeo } from "next-seo";

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
            content: "GuilhermeBermeo",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/img/logo/logo96.png",
            sizes: "96x96",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
