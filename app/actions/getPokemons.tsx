import { fetchPokemons } from "../lib/data";
import { Pokemon } from "../lib/definition";

export const getPokemons = async (
  offset: number,
  limit: number
): Promise<Pokemon[]> => {
  try {
    const data = (await fetchPokemons(offset, limit)) as Pokemon[];
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`An error occurred: ${error}`);
  }
};
