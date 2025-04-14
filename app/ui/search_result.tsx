import {
  Command,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import { Pokemon } from "../lib/definition";
import PokemonDetail from "./pokemon_detail";

interface PropsInterface {
  readonly pokemon?: Pokemon;
  readonly hasNoResult?: boolean;
}

export default async function SearchResult(props: PropsInterface) {
  const { pokemon, hasNoResult } = props;

  return (
    <Command>
      <CommandGroup heading="Result">
        {hasNoResult && <CommandEmpty>No results found.</CommandEmpty>}
        {pokemon && (
          <CommandItem>
            <PokemonDetail pokemon={pokemon} />
          </CommandItem>
        )}
      </CommandGroup>
    </Command>
  );
}
