import { POKEMON_TYPE_WEAKNESSES } from "./constants";
import { Pokemon } from "./definition";
import { toThreeDigit } from "./utils";

export async function fetchPokemons(offset: number, limit: number) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch all pokemons.");
    }

    const data = await response.json();
    const results = data.results;
    let pokemons: Pokemon[] = [];

    for (const result of results) {
      const pokemon = await fetchPokemon(result.url);

      if (!pokemon) {
        throw new Error("Failed to fetch all pokemons.");
      }
      pokemons.push({ ...pokemon });
    }

    return pokemons;
  } catch (error) {
    console.error("All pokemons error:", error);
    throw new Error("Failed to fetch all pokemons.");
  }
}

export async function fetchPokemon(url: string) {
  try {
    if (!url) {
      throw new Error("Failed to fetch pokemon.");
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch pokemon.");
    }

    const pokemon: Pokemon = {
      id: data.id.toString(),
      name: data.name,
      imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${toThreeDigit(
        data.id
      )}.png`,
      types: data.types.map((element: any) => {
        return element.type.name;
      }),
      height: data.height,
      weight: data.weight,
      weaknesses: [],
      stats: data.stats.map((element: any) => {
        return { stat_name: element.stat.name, base_stat: element.base_stat };
      }),
    };

    pokemon.types.forEach((type) => {
      POKEMON_TYPE_WEAKNESSES[type].forEach((weakness: string) => {
        pokemon["weaknesses"].push(weakness);
      });
    });

    return pokemon;
  } catch (error) {
    console.log("Pokemon Error:", error);
    throw new Error("Failed to fetch pokemon.");
  }
}
