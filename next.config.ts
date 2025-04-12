import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://assets.pokemon.com/assets/cms2/img/pokedex/full/*.png"),
    ],
  },
};

export default nextConfig;
