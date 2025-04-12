import { fetchPokemon, fetchPokemons } from "./lib/data";
import PokemonCard from "./ui/pokemon_card";
import { Pokemon } from "./lib/definition";
import { SearchCommand } from "./ui/search";
import SearchResult from "./ui/search_result";

export default async function Page(props: {
  readonly searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query;
  const pokemons = await fetchPokemons();
  const pokemon = query
    ? await fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${query}/`)
    : null;

  return (
    <main className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 m-4 md:gap-6 md:py-6">
        <SearchCommand placeholder="Search for pokemon..." />

        {pokemon && <SearchResult {...pokemon} />}

        {pokemons && (
          <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card lg:px-6">
            {pokemons.map((pokemon: Pokemon) => (
              <PokemonCard key={pokemon.id} {...pokemon} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
