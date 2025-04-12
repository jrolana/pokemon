import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { capitalize, toThreeDigit } from "../lib/utils";
import { Pokemon } from "../lib/definition";

export default function PokemonCard(pokemon: Pokemon) {
  const bgColor: { [key: string]: string } = {
    normal: "bg-gray-300",
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400",
    ice: "bg-blue-200",
    fighting: "bg-red-700",
    poison: "bg-purple-600",
    ground: "bg-yellow-700",
    flying: "bg-sky-300",
    psychic: "bg-pink-500",
    bug: "bg-lime-500",
    rock: "bg-yellow-800",
    ghost: "bg-purple-800",
    dragon: "bg-indigo-600",
    dark: "bg-gray-800",
    steel: "bg-gray-400",
    fairy: "bg-pink-300",
  };

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <Image
          className="w-full"
          width={100}
          height={100}
          src={pokemon.imageUrl}
          alt=""
        />
        <div className="absolute right-4 -top-2">
          <Badge variant="secondary" className="flex gap-1 rounded-lg text-xs">
            #{toThreeDigit(pokemon.id)}
          </Badge>
        </div>
        <CardTitle className="@[250px]/card:text-2xl text-xl font-semibold">
          {capitalize(pokemon.name)}
        </CardTitle>
        <CardDescription className="flex gap-2">
          {pokemon.types.map((type: string) => (
            <Badge
              key={pokemon.id + type}
              variant="default"
              className={`flex gap-1 rounded-lg text-xs ${bgColor[type]}`}
            >
              {capitalize(type)}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
