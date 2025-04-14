"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import { Pokemon } from "../lib/definition";
import PokemonCard from "./pokemon_card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { capitalize, toThreeDigit } from "../lib/utils";
import { POKEMON_TYPE_COLOR } from "../lib/constants";
import Chart from "./charts";

interface PropsInterface {
  readonly pokemon: Pokemon;
}

export default function PokemonDetail(props: PropsInterface) {
  const { pokemon } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <PokemonCard pokemon={pokemon} />
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[90%] sm:max-h-full grid gap-0 p-0 md:grid-cols-2 overflow-auto rounded-xl">
        <DialogTitle className="sr-only"></DialogTitle>
        <div className="relative bg-muted md:flex items-center justify-center">
          <Image
            className="w-full object-contain"
            width={500}
            height={500}
            src={pokemon.imageUrl}
            alt={`${pokemon.name} image`}
          />
        </div>

        <div className="flex flex-col gap-6 pt-10 px-4">
          <div className="flex justify-between  items-center">
            <h2 className="text-xl md:text-2xl font-semibold">
              {capitalize(pokemon.name)}
            </h2>
            <Badge
              variant="secondary"
              className="flex gap-1 rounded-lg text-xs"
            >
              #{toThreeDigit(pokemon.id.toString())}
            </Badge>
          </div>

          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Height</span>
              <span>{pokemon.height} dm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Weight</span>
              <span>{pokemon.weight} hg</span>
            </div>
          </div>

          <div className="text-sm">
            <h4 className="font-medium mb-1">Types</h4>
            <div className="flex flex-wrap gap-2">
              {pokemon.types.map((type: string) => (
                <Badge
                  key={pokemon.id + type}
                  variant="default"
                  className={`flex gap-1 rounded-lg text-xs ${POKEMON_TYPE_COLOR[type]}`}
                >
                  {capitalize(type)}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <h4 className="font-medium mb-1">Weaknesses</h4>
            <div className="flex flex-wrap gap-2">
              {pokemon.weaknesses.map((weakness: string) => (
                <Badge
                  key={pokemon.id + weakness}
                  variant="default"
                  className={`flex gap-1 rounded-lg text-xs ${POKEMON_TYPE_COLOR[weakness]}`}
                >
                  {capitalize(weakness)}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-sm mb-10">
            <h4 className="font-medium mb-1">Stats</h4>
            <div className="h-40 w-full">
              <Chart chartData={pokemon.stats} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
