import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL("https://res.cloudinary.com/dxryzhwxi/image/upload/**"),
    ],
  },
  experimental: {
    optimizePackageImports: ["@radix-ui/*", "lucide/react", "react-icons"],
  },
};

export default nextConfig;
