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
import { POKEMON_TYPE_COLOR } from "../lib/constants";

interface PropsInterface {
  readonly pokemon: Pokemon;
}

export default function PokemonCard(props: PropsInterface) {
  const { pokemon } = props;

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
              className={`flex gap-1 rounded-lg text-xs ${POKEMON_TYPE_COLOR[type]}`}
            >
              {capitalize(type)}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
