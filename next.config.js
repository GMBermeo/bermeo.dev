/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     require("./scripts/sitemap-generator");
  //   }
  //   return config;
  // },
  i18n: {
    // providing the locales supported by your application
    locales: ["en", "br"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en",
    localeDetection: false,

    domains: [
      {
        // Note: subdomains must be included in the domain value to be matched
        // e.g. www.example.com should be used if that is the expected hostname
        domain: "bermeo.dev",
        defaultLocale: "en",
      },
      {
        domain: "br.bermeo.dev",
        defaultLocale: "br",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/cv",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
