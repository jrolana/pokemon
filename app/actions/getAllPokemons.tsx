import { fetchPokemons } from "../lib/data";
import { Pokemon } from "../lib/definition";

export const getAllPokemons = async (
  offset: number,
  limit: number
): Promise<Pokemon[]> => {
  try {
    const data = await fetchPokemons(offset, limit);
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`Getting all pokemons failed: ${error}`);
  }
};
