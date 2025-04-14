import { fetchPokemon } from "../lib/data";
import { Pokemon } from "../lib/definition";
import { toThreeDigit } from "../lib/utils";

export const getPokemon = async (id: number | string): Promise<Pokemon> => {
  try {
    let pokemonId = id;
    if (typeof id == "string") {
      pokemonId = id.replace(/^0+/, "");
    }
    console.log(toThreeDigit(pokemonId.toString()));

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    const data = await fetchPokemon(url);
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`Getting a pokemon failed:  ${error}`);
  }
};
