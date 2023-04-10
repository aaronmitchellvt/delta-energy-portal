/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    optimizeCss: true, // enabling this will enable SSR for Tailwind
  },
}

module.exports = nextConfig
