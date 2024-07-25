/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      // Add other static pages here if necessary
    };
  },
};

export default nextConfig;
