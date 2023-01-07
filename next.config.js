/*
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["node_modules"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
