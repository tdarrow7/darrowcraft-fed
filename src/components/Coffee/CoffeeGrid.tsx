import { CoffeeModel } from "@/models/coffee";
import { fetchCoffee } from "@/actions/coffee";
import Link from "next/link";
import { CoffeeCard } from "../../components/Coffee/CoffeeCard";

import React from "react";

interface CoffeeList {
  coffeeList: CoffeeModel[];
}

export const CoffeeGrid = async () => {
  const coffee = await fetchCoffee();

  return (
    <ul className="grid gap-6 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {coffee?.map((c: CoffeeModel) => {
        return (
          <li key={c.id}>
            <Link href={`/coffee/${c.id}`} className="group">
              <CoffeeCard coffee={c}></CoffeeCard>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
