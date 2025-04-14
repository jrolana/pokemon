import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://assets.pokemon.com/assets/cms2/img/pokedex/full/*.png"),
      new URL(
        "https://api.nuget.org/v3-flatcontainer/pokeapi-nj.net/1.2.0/icon"
      ),
    ],
  },
};

export default nextConfig;
