import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Pokemon } from "../lib/definition";
import PokemonCard from "./pokemon_card";

interface PropsInterface {
  readonly pokemon: Pokemon;
}

export default async function SearchResult(props: PropsInterface) {
  const { pokemon } = props;

  return (
    <Command>
      <CommandGroup heading="Result">
        <CommandItem>
          <PokemonCard pokemon={pokemon} />
        </CommandItem>
      </CommandGroup>
    </Command>
  );
}
