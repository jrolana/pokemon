"use client";

import { Pokemon } from "../lib/definition";
import { useState } from "react";
import { getAllPokemons } from "../actions/getAllPokemons";
import { POKEMONS_PER_PAGE } from "../lib/constants";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonCardList from "./skeleton_cards";
import PokemonDetail from "./pokemon_detail";
import { sortFunc } from "../lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PropsInterface {
  readonly initialPokemons: Pokemon[];
}

export default function PokemonList(props: PropsInterface) {
  const { initialPokemons } = props;
  const [offset, setOffset] = useState(POKEMONS_PER_PAGE);
  const [pokemons, setPokemons] = useState<Pokemon[]>(initialPokemons);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [sortField, setSortField] = useState("");

  const loadMorePokemons = async () => {
    if (hasMoreData) {
      const apiPokemons = await getAllPokemons(offset, POKEMONS_PER_PAGE);

      if (apiPokemons.length == 0) {
        setHasMoreData(false);
      }

      setPokemons((prevPokemons) => [...prevPokemons, ...apiPokemons]);
      setOffset((prevOffset) => prevOffset + POKEMONS_PER_PAGE);
    }
  };

  const handleSort = (sortKey: string) => {
    if (sortKey) {
      let sortedData = sortFunc(pokemons, sortKey);
      setSortField(() => sortKey);
      setPokemons(() => sortedData);
    }
  };

  return (
    <>
      <Select
        value={sortField}
        onValueChange={(sortKey) => {
          handleSort(sortKey);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort Pokemons" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-id">Highest ID (First)</SelectItem>
          <SelectItem value="+id">Lowest ID (First)</SelectItem>
          <SelectItem value="-name">Z-A</SelectItem>
          <SelectItem value="+name">A-Z</SelectItem>
        </SelectContent>
      </Select>

      <InfiniteScroll
        dataLength={pokemons.length}
        next={loadMorePokemons}
        hasMore={hasMoreData}
        loader={<SkeletonCardList />}
        endMessage={<p>No more data to load.</p>}
      >
        <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-3 @5xl/main:grid-cols-5 grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          {pokemons.map((pokemon: Pokemon) => (
            <PokemonDetail key={pokemon.id} propPokemon={pokemon} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
