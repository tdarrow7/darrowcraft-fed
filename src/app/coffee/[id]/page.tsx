
import React, { useEffect, useState } from 'react'
import { CoffeeModel } from '@/models/coffee'
import { fetchCoffeeByID } from '@/server/actions'
import { CoffeeDetails } from '@/components/Coffee/CoffeeDetails'

export default async function CoffeeDetailsPage({params}: { params: {id: string}}) {
    const id = params.id
    const coffee: CoffeeModel = await fetchCoffeeByID(params.id);

    if (!coffee) return <div>Loading...</div>

  return (
    <div className='container mx-auto'>
        <CoffeeDetails coffee={coffee}></CoffeeDetails>
    </div>
    
  )
}
