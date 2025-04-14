"use client";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandEmpty,
  CommandList,
} from "@/components/ui/command";
import { Pokemon } from "../lib/definition";
import PokemonDetail from "./pokemon_detail";
import { XCircle } from "lucide-react";

interface PropsInterface {
  readonly pokemon?: Pokemon;
  readonly hasNoResult?: boolean;
}

export default function SearchResult(props: PropsInterface) {
  const { pokemon, hasNoResult } = props;

  return (
    <Command className="rounded-lg border shadow-md ">
      <CommandList className="max-h-96">
        {hasNoResult && (
          <CommandEmpty className="py-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <XCircle className="h-8 w-8 text-muted-foreground/70" />
              <p>No Pokémon found.</p>
              <p className="text-xs text-muted-foreground">
                Try searching with a different name or ID.
              </p>
            </div>
          </CommandEmpty>
        )}

        {pokemon && (
          <CommandGroup heading="Result" className="py-2">
            <CommandItem className="flex items-center justify-center p-2">
              <div className="max-w-[200px] w-full p-1 ">
                <PokemonDetail propPokemon={pokemon} />
              </div>
            </CommandItem>
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  );
}
