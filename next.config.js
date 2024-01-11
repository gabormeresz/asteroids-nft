/** @type {import('next').NextConfig} */
// Path: next.config.js
const nextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aquamarine-brave-dove-509.mypinata.cloud"
      }
    ]
  }
};

module.exports = nextConfig;
