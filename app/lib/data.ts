import { Pokemon } from "./definition";
import { toThreeDigit } from "./utils";

export async function fetchPokemons() {
  try {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
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

    const data = await fetch(url);
    const response = await data.json();

    if (!response) {
      return null;
    }

    const pokemon: Pokemon = {
      id: response.id.toString(),
      name: response.name,
      imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${toThreeDigit(
        response.id
      )}.png`,
      types: response.types.map((element: any) => {
        return element.type.name;
      }),
    };

    return pokemon;
  } catch (error) {
    console.log("Pokemon Error:", error);
    return null;
  }
}
