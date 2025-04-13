import { getPokemons } from "./actions/getPokemons";
import { fetchPokemon, fetchPokemons } from "./lib/data";
import { POSTS_PER_PAGE } from "./lib/constants";
import PokemonList from "./ui/pokemon_list";
import SearchCommand from "./ui/search";
import SearchResult from "./ui/search_result";

interface PropsInterface {
  readonly searchParams?: Promise<{
    query?: string;
  }>;
}

export default async function Page(props: PropsInterface) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query;
  const initialPosts = await getPokemons(0, POSTS_PER_PAGE);

  const pokemon = query
    ? await fetchPokemon(
        `https://pokeapi.co/api/v2/pokemon/${query.replace(/^0+/, "")}/`
      )
    : null;

  return (
    <main className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 p-4 m-4 md:gap-6 md:py-6">
        <div className="flex gap-2">
          <SearchCommand placeholder="Search for pokemon..." />
        </div>
        {pokemon && <SearchResult pokemon={pokemon} />}

        <PokemonList initialPosts={initialPosts} />
      </div>
    </main>
  );
}
