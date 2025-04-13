import { getPokemons } from "./actions/getPokemons";
import { fetchPokemon } from "./lib/data";
import { POKEMONS_PER_PAGE } from "./lib/constants";
import PokemonList from "./ui/pokemon_list";
import SearchCommand from "./ui/search";
import SearchResult from "./ui/search_result";
import { toThreeDigit } from "./lib/utils";

interface PropsInterface {
  readonly searchParams?: Promise<{
    query?: string;
  }>;
}

export default async function Page(props: PropsInterface) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query;
  const initialPokemons = await getPokemons(0, POKEMONS_PER_PAGE);
  let pokemon;
  try {
    pokemon = await fetchPokemon(
      `https://pokeapi.co/api/v2/pokemon/${toThreeDigit(query)}/`
    );
  } catch (error) {
    pokemon = null;
  }

  const hasNoResult = query && pokemon == null;

  return (
    <main className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 p-4 m-4 md:gap-6 md:py-6">
        <div className="flex gap-2">
          <SearchCommand placeholder="Search for pokemon..." />
        </div>
        {hasNoResult && <SearchResult hasNoResult={true} />}
        {pokemon && <SearchResult pokemon={pokemon} />}
        <PokemonList initialPokemons={initialPokemons} />
      </div>
    </main>
  );
}
