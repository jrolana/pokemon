"use client";

import PokemonCard from "../ui/pokemon_card";
import { Pokemon } from "../lib/definition";
import { useState } from "react";
import { getPokemons } from "../actions/getPokemons";
import { POSTS_PER_PAGE } from "../lib/constants";
import InfiniteScroll from "react-infinite-scroll-component";

interface PropsInterface {
  readonly initialPosts: Pokemon[];
}

export default function PokemonList(props: PropsInterface) {
  const { initialPosts } = props;
  const [offset, setOffset] = useState(POSTS_PER_PAGE);
  const [posts, setPosts] = useState<Pokemon[]>(initialPosts);
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadMorePosts = async () => {
    if (hasMoreData) {
      const apiPosts = await getPokemons(offset, POSTS_PER_PAGE);

      if (apiPosts.length == 0) {
        setHasMoreData(false);
      }

      setPosts((prevPosts) => [...prevPosts, ...apiPosts]);
      setOffset((prevOffset) => prevOffset + POSTS_PER_PAGE);
    }
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={loadMorePosts}
      hasMore={hasMoreData}
      loader={<p>Loading...</p>}
      endMessage={<p>No more data to load.</p>}
    >
      <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
        {posts.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
