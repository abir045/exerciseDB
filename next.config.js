/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_KEY: process.env.API_KEY,
    API_HOST: process.env.API_HOST,
  },
};

module.exports = nextConfig;
