import type { NextConfig } from "next";

const backendInternalUrl =
  process.env.BACKEND_INTERNAL_URL || "https://hitapi.kumasihive.com";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/backend-api/:path*",
        destination: `${backendInternalUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
