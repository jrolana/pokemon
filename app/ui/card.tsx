import Image from "next/image";

export function Card({
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        width={100}
        height={100}
        src={imageUrl}
        alt=""
      />
      <div className="px-6 py-4 flex gap-2">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p>{id}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {types.map((type) => (
          <span
            key={id + type}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}
