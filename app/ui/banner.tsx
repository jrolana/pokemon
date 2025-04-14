import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full justify-center items-center max-w-sm gap-6">
        <Image
          className="flex items-center self-center "
          width={100}
          height={100}
          src="https://api.nuget.org/v3-flatcontainer/pokeapi-nj.net/1.2.0/icon"
          alt="{`${pokemon.name} image`}"
        />
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold text-black">Pokedex</h1>
          <p className="text-gray-600 text-sm mt-2 text-left">
            A simple catalogue webpage where you can list and view details of
            Pokemons
          </p>
        </div>
      </div>
    </div>
  );
}
