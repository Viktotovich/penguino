import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL("https://res.cloudinary.com/dxryzhwxi/image/upload/**"),
    ],
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react", "@lucide/react"],
  },
};

export default nextConfig;
