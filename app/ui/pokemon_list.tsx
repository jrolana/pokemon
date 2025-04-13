"use client";

import PokemonCard from "../ui/pokemon_card";
import { Pokemon } from "../lib/definition";
import { useState } from "react";
import { getPokemons } from "../actions/getPokemons";
import { POKEMONS_PER_PAGE } from "../lib/constants";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonCardList from "./skeleton_cards";

interface PropsInterface {
  readonly initialPokemons: Pokemon[];
}

export default function PokemonList(props: PropsInterface) {
  const { initialPokemons } = props;
  const [offset, setOffset] = useState(POKEMONS_PER_PAGE);
  const [Pokemons, setPokemons] = useState<Pokemon[]>(initialPokemons);
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadMorePokemons = async () => {
    if (hasMoreData) {
      const apiPokemons = await getPokemons(offset, POKEMONS_PER_PAGE);

      if (apiPokemons.length == 0) {
        setHasMoreData(false);
      }

      setPokemons((prevPokemons) => [...prevPokemons, ...apiPokemons]);
      setOffset((prevOffset) => prevOffset + POKEMONS_PER_PAGE);
    }
  };

  return (
    <InfiniteScroll
      dataLength={Pokemons.length}
      next={loadMorePokemons}
      hasMore={hasMoreData}
      loader={<SkeletonCardList />}
      endMessage={<p>No more data to load.</p>}
    >
      <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-3 @5xl/main:grid-cols-5 grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
        {Pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
