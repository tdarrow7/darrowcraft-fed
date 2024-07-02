import { CoffeeModel } from "@/models/coffee";
import Image from "next/image";

export const CoffeeDetails = ({coffee}: {coffee: CoffeeModel}, className: string = '') => {
    return (
        <>
            <figure className="w-full h-auto relative overflow-y-hidden pb-[100%]">
                      <Image className="absolute inset-0" src={coffee.imageurl} alt={`Image for ${coffee.name}`} width={500} height={500}/>
                    </figure>
                    <div className="txt-bx my-2">
                      <strong className="text-2xl">{coffee.name}</strong>
                      <p className="text-sm">{coffee.description}</p>
                    </div>
        </>
    )
}