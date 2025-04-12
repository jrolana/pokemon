export async function fetchPokemons() {
  try {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
    const response = await data.json();
    const results = response.results;
    let pokemons: any[] = [];

    for (const result of results) {
      const pokemon = await fetchPokemon(result.url);
      pokemons.push(pokemon);
    }

    return pokemons;
  } catch (error) {
    console.error("Fetching all pokemons error:", error);
    throw new Error("Failed to fetch all pokemons data.");
  }
}

export async function fetchPokemon(url: string) {
  try {
    const data = await fetch(url);
    const response = await data.json();

    const pokemon = {
      id: response.id,
      name: response.name,
      imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${response.id
        .toString()
        .padStart(3, "0")}.png`,
      types: response.types.map((element: any) => {
        return element.type.name;
      }),
    };

    return pokemon;
  } catch (error) {
    console.error("Fetching Pokemon Data Error:", error);
    throw new Error("Failed to fetch pokemon data.");
  }
}
