/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/resume",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
