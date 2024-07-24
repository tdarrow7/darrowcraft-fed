'use client';

import React, { useEffect, useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

interface QuantityCounterProps {
  // quantity: number;
  handleQuantity: (newQty: number) => void
}

export const QuantityCounter: React.FC<QuantityCounterProps> = ({handleQuantity}) => {
    const [quantity, setQuantity] = useState(0);
    // const [objCount, setObjCount] = useState(quantity)
    console.log('quantity', quantity);
    
    // useEffect(() => {
    //   const
    
    //   return () => {
    //     second
    //   }
    // }, [])
    

    const decrement = () => {
        setQuantity(quantity > 0 ? quantity -1 : quantity)
        handleQuantity(quantity);
        // console.log(objCount);

    }

    const increment = () => {
      setQuantity(quantity + 1)
      
        handleQuantity(quantity);
    }

  return (
    <div className='bg-gray-200 rounded-3xl p-2 w-fit flex justify-between items-center'>
        <AiFillMinusCircle className='text-2xl hover:text-stone-600 cursor-pointer transition-colors' onClick={decrement}></AiFillMinusCircle>
        <span className='w-20 mx-1 text-center'>{quantity}</span>
        <AiFillPlusCircle className='text-2xl hover:text-stone-600 cursor-pointer transition-colors' onClick={increment}></AiFillPlusCircle>
    </div>
  )
}
