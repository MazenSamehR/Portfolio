import { withSentryConfig } from "@sentry/nextjs";
import { PHASE_EXPORT } from "next/constants";

/** @type {import('next').NextConfig} */
const baseConfig = {
  images: {
    domains: ["your-image-domains.com"], // Add any domains if needed
  },
  reactStrictMode: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (phase) => {
  const isStaticExport = phase === PHASE_EXPORT;

  // For GitHub Pages (static export)
  if (isStaticExport) {
    return {
      ...baseConfig,
      output: "export",
      images: {
        unoptimized: true,
      },
      basePath: "/your-repo-name",
      assetPrefix: "/your-repo-name/",
    };
  }

  // For Vercel (dynamic build with Sentry support)
  return withSentryConfig(
    baseConfig,
    {
      silent: true,
      org: "javascript-mastery",
      project: "javascript-nextjs",
    },
    {
      widenClientFileUpload: true,
      transpileClientSDK: true,
      hideSourceMaps: true,
      disableLogger: true,
      automaticVercelMonitors: true,
    }
  );
};
