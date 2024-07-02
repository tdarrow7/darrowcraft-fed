import React from 'react'
import { CoffeeModel } from '@/models/coffee'
import { fetchCoffeeByID } from '@/server/actions'
import { CoffeeDetails } from '@/app/components/CoffeeDetails'
import Image from 'next/image'

export default async function CoffeeDetailsPage({params}: { params: {id: string}}) {
// export const CoffeeDetails = async ({params}: { params: {id: string}}) => {
    const id = params.id
    const coffee: CoffeeModel  = await fetchCoffeeByID(id)
    
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-2 gap-6'>
            <div className='prdct-img'>
                <figure className='w-full relative overflow-y-hidden pb-[100%]'>
                <Image className="absolute inset-0" src={coffee.imageurl} alt={`Image for ${coffee.name}`} width={500} height={500}/>
                </figure>
            </div>
            <div className='prct-detail pt-4'>
                <h1 className='text-4xl font-bold'>{coffee.name}</h1>
                <p>{coffee.description}</p>
            </div>
        </div>
        <div className='w-1/3'>
        <h1 className=''>Coffee Deets</h1>
        </div>
    </div>
    
  )
}
