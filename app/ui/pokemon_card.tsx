import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export function PokemonCard({
  name,
  id,
  imageUrl,
  types,
}: {
  readonly name: string;
  readonly id: string;
  readonly imageUrl: string;
  readonly types: string[];
}) {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <Image
          className="w-full"
          width={100}
          height={100}
          src={imageUrl}
          alt=""
        />
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold">
          {name}
        </CardTitle>
        <div className="absolute right-4 top-4">
          <Badge variant="secondary" className="flex gap-1 rounded-lg text-xs">
            ID No: {id}
          </Badge>
        </div>
      </CardHeader>
      <CardFooter className="flex items-start gap-1 text-sm">
        <div className="line-clamp-1 font-medium">Types:</div>
        {types.map((type) => (
          <Badge
            key={id + type}
            variant="default"
            className="flex gap-1 rounded-lg text-xs"
          >
            {type}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
