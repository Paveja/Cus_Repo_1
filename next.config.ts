import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
export default config;
