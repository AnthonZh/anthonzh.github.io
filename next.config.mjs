/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "",
  assetPrefix: "",
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig
