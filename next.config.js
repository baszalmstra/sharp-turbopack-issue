/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
    ],
  },
}

module.exports = nextConfig
