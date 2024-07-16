import { CoffeeModel } from "@/models/coffee";
import Image from "next/image";

export const CoffeeDetails = (
  { coffee }: { coffee: CoffeeModel },
  className: string = ""
) => {
  return (
    <>
      <figure className="w-full h-auto relative overflow-y-hidden pb-[100%] bg-stone-900 overflow-hidden">
        <Image
          className="absolute inset-0 group-hover:opacity-75 scale-100 group-hover:scale-105 transition-all"
          src={coffee.imageurl}
          alt={`Image for ${coffee.name}`}
          width={500}
          height={500}
        />
      </figure>
      <div className="txt-bx my-2 flex justify-between">
        <div className="descr translate-x-0 group-hover:translate-x-2 transition-transform w-4/5">
          <strong className="text-2xl">{coffee.name}</strong>
          <p className="text-sm">{coffee.description}</p>
        </div>
          <div className="price group-hover:scale-105 transition-transform">$00.00</div>
      </div>
    </>
  );
};
