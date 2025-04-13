import { Pokemon } from "./definition";
import { toThreeDigit } from "./utils";

export async function fetchPokemons(offset: number, limit: number) {
  try {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
    const response = await data.json();
    const results = response.results;
    let pokemons: Pokemon[] = [];

    for (const result of results) {
      const pokemon = await fetchPokemon(result.url);

      if (!pokemon) {
        return null;
      }
      pokemons.push({ ...pokemon });
    }

    return pokemons;
  } catch (error) {
    console.error("Fetching all pokemons error:", error);
    return null;
  }
}

export async function fetchPokemon(url: string) {
  try {
    if (!url) {
      return null;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return null;
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
    };

    return pokemon;
  } catch (error) {
    console.log("Pokemon Error:", error);
    return null;
  }
}
