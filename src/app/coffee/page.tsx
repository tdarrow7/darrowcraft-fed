import { CoffeeModel } from "@/models/coffee";
import { fetchCoffee, fetchCoffeeByID } from "@/server/actions";
import Image from "next/image";
import Link from "next/link";
import { CoffeeGrid } from "@/components/Coffee/CoffeeGrid";
import { Suspense } from "react";
import { CoffeeSkeleton } from "@/components/Coffee/CoffeeSkeleton";

export default function CoffeePage() {
  
  return (
    <div>
      <main>List of coffees</main>
      <div className="container mx-auto">
          <CoffeeGrid></CoffeeGrid>
        </div>
      </div>
  );
}
