import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "@emotion/cache",
      "@emotion/styled",
      "@emotion/react",
      "@mui/icons-material",
      "@mui/x-date-pickers-pro",
      "@mui/x-date-pickers",
      "react-window",
    ],
  },
};

export default nextConfig;
