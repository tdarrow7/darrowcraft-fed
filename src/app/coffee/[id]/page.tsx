import React from 'react'
import { CoffeeModel } from '@/models/coffee'
import { fetchCoffeeByID } from '@/server/actions'
import { CoffeeDetails } from '@/app/components/CoffeeDetails'

export default async function CoffeeDetailsPage({params}: { params: {id: string}}) {
// export const CoffeeDetails = async ({params}: { params: {id: string}}) => {
    const id = params.id
    const coffee  = await fetchCoffeeByID(id)
    
  return (
    <div className='container mx-auto'>
        <div className='w-1/3'>
        <h1 className='text-4xl font-bold'>Coffee Deets</h1>
        <CoffeeDetails coffee={coffee}></CoffeeDetails>
        </div>
    </div>
    
  )
}
