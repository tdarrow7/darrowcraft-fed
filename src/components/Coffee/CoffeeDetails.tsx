'use client'

import React, { useState } from 'react'
import { QuantityCounter } from '../ui/QuantityCounter'
import { Button } from '../ui/Button'
import Image from 'next/image'
import { CoffeeModel } from '@/models/coffee'

interface Props {
    coffee: CoffeeModel
}

export const CoffeeDetails = (props: Props) => {
    const coffee = props.coffee
    const [quantity, setQuantity] = useState(0)

    const addToCart = () => {
        console.log('adding to cart', quantity);
        
    }
    

  return (
    <div className='flex justify-between'>
            <div className='prdct-img w-1/3'>
                <figure className='w-full relative overflow-y-hidden pb-[100%] img-bg'>
                    {coffee ? <Image className="absolute inset-0" src={coffee.imageurl} alt={`Image for ${coffee.name}`} width={500} height={500}/> : ''}
                </figure>
            </div>
            <div className='prct-detail pt-4 w-1/2 prose prose-headings:font-bold prose-h1:text-5xl prose-h2:text-4xl'>
                <h1 className='text-4xl font-bold'>{coffee.name}</h1>
                <p>{coffee.description}</p>
                <QuantityCounter quantity={quantity} setQuantity={setQuantity}></QuantityCounter>
                <Button text='Add to Cart' onclick={addToCart} ></Button>
            </div>
        </div>
  )
}
