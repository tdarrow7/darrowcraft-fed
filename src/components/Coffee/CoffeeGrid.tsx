import { CoffeeModel } from "@/models/coffee";
import { fetchCoffee, fetchCoffeeByID } from "@/server/actions";
import Link from "next/link";
import { CoffeeCard } from "../../components/Coffee/CoffeeCard";

import React from 'react'

interface CoffeeList {
  coffeeList: CoffeeModel[]
}

export const CoffeeGrid = async () => {
    const coffee = await fetchCoffee();

  return (
<ul className="grid grid-cols-4 gap-6">
              {coffee?.map((c: CoffeeModel) => {
                return (
                  <li key={c.id}>
                    <Link href={`/coffee/${c.id}`} className="group">
                      <CoffeeCard coffee={c}>
                        
                      </CoffeeCard>
                    </Link>
                  </li>
                );
              })}
            </ul>
  )
}

