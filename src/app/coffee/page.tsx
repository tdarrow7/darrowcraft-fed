import { CoffeeModel } from "@/models/coffee";
import { fetchCoffee, fetchCoffeeByID, fetchSession } from "@/server/actions";
import Image from "next/image";
import Link from "next/link";
import { CoffeeGrid } from "@/components/Coffee/CoffeeGrid";
import { Suspense } from "react";
import { CoffeeSkeleton } from "@/components/Coffee/CoffeeSkeleton";
import { cookies } from "next/headers";

export default function CoffeePage() {
  
  const x = fetchSession()
  

  return (
    <div>
      <main>List of coffees</main>
      <div className="container mx-auto">
          <CoffeeGrid></CoffeeGrid>
        </div>
      </div>
  );
}
