import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Pokemon } from "../lib/definition";
import PokemonCard from "./pokemon_card";

export default async function SearchResult(pokemon: Pokemon) {
  return (
    <Command>
      <CommandGroup heading="Result">
        <CommandItem>
          <PokemonCard {...pokemon} />
        </CommandItem>
      </CommandGroup>
    </Command>
  );
}
