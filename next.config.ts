import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // If your GitHub repository name is NOT 'sylvaan.github.io' (user page),
  // you might need a 'basePath'. But since it matches the username, it's usually root.
};

export default nextConfig;
