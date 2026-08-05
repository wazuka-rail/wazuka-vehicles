import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/wazuka-vehicles",
  assetPrefix: "/wazuka-vehicles/",
  distDir: "out/wazuka-vehicles",
  output: "export",
  reactCompiler: true,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              titleProp: true,
              titleId: "filePath",
            },
          },
        ],
        as: "*.js",
      },
    },
  },
  transpilePackages: ["three"],
  experimental: {
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
