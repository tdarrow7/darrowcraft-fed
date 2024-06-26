import { CoffeeModel } from "@/models/coffee";
import { fetchCoffee } from "@/server/actions";
import Image from "next/image";
import Link from "next/link";
import { CoffeeDetails } from "../components/CoffeeDetails";

export default async function CoffeePage() {
  const coffee = await fetchCoffee();
  
  return (
    <div>
      <main>List of coffees</main>
      <div className="container mx-auto">
          {coffee.length === 0 ? (
            <p>Nothin here</p>
          ) : (
            <ul className="grid grid-cols-3 gap-6">
              {coffee?.map((c: CoffeeModel) => {
                return (
                  <div className="bg-sky-500" key={c.id}>
                    <Link href={`/coffee/${c.id}`}>
                      <CoffeeDetails coffee={c}>
                        
                      </CoffeeDetails>
                    </Link>
                  </div>
                );
              })}
            </ul>
          )}
        </div>

      </div>
  );
}
