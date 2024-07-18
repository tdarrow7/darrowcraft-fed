import React from 'react'
import { CoffeeModel } from '@/models/coffee'
import { fetchCoffeeByID } from '@/server/actions'
import { CoffeeDetails } from '@/components/CoffeeDetails'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { QuantityCounter } from '@/components/ui/QuantityCounter'

export default async function CoffeeDetailsPage({params}: { params: {id: string}}) {
// export const CoffeeDetails = async ({params}: { params: {id: string}}) => {
    const id = params.id
    const coffee: CoffeeModel  = await fetchCoffeeByID(id)
    
  return (
    <div className='container mx-auto'>
        <div className='flex justify-between'>
            <div className='prdct-img w-1/3'>
                <figure className='w-full relative overflow-y-hidden pb-[100%] img-bg'>
                <Image className="absolute inset-0" src={coffee.imageurl} alt={`Image for ${coffee.name}`} width={500} height={500}/>
                </figure>
            </div>
            <div className='prct-detail pt-4 w-1/2 prose prose-headings:font-bold prose-h1:text-5xl prose-h2:text-4xl'>
                <h1 className='text-4xl font-bold'>{coffee.name}</h1>
                <p>{coffee.description}</p>
                <QuantityCounter></QuantityCounter>
                <Button text='Add to Cart'></Button>
            </div>
        </div>
    </div>
    
  )
}
