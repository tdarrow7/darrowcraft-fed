'use client';

import React, { useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

interface QuantityCounterProps {
  quantity: number;
  handleQuantity: (newQty: number) => void
}

export const QuantityCounter: React.FC<QuantityCounterProps> = ({quantity, handleQuantity}) => {
    const [objCount, setObjCount] = useState(quantity)
    console.log('quantity', quantity);
    
    const decrement = () => {
        handleQuantity(objCount > 0 ? objCount - 1 : 0);
    }

    const increment = () => {
      console.log(objCount + 1);
      
        handleQuantity(objCount + 1);
    }

  return (
    <div className='bg-gray-200 rounded-3xl p-2 w-fit flex justify-between items-center'>
        <AiFillMinusCircle className='text-2xl hover:text-stone-600 cursor-pointer transition-colors' onClick={decrement}></AiFillMinusCircle>
        <span className='w-20 mx-1 text-center'>{objCount}</span>
        <AiFillPlusCircle className='text-2xl hover:text-stone-600 cursor-pointer transition-colors' onClick={increment}></AiFillPlusCircle>
    </div>
  )
}
