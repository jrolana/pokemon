import { Pokemon } from "./definition";

export function capitalize(str: any) {
  const temp = str.toString();
  return `${temp.charAt(0).toUpperCase()}${temp.slice(1)}`;
}

export function toThreeDigit(str: string) {
  try {
    return str.padStart(3, "0");
  } catch (error) {
    console.error("3-digit error:", error);
    throw new Error("Failed to transform to 3-digit.");
  }
}

export function sortFunc(pokemons: Pokemon[], criteria: string) {
  let order: any = criteria[0];
  const field = criteria.slice(1) as keyof Pokemon;

  if (order == "-") {
    order = -1;
  } else {
    order = 1;
  }

  pokemons.sort((a, b) => {
    let comparison = 0;

    if (a[field]! > b[field]!) {
      comparison = 1;
    } else if (a[field]! < b[field]!) {
      comparison = -1;
    }

    if (order === -1) {
      comparison *= -1;
    }

    return comparison;
  });

  return pokemons;
}
