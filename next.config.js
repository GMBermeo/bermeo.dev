/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  },
};

module.exports = nextConfig;
