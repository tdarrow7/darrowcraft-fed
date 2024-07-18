'use client';

import React, { useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";


export const QuantityCounter = () => {
    const [objCount, setObjCount] = useState(0)
    const decrement = () => {
        setObjCount(objCount > 0 ? objCount - 1 : 0);
    }

    const increment = () => {
        setObjCount(objCount + 1);
    }

  return (
    <div className='bg-gray-200 rounded-3xl p-2 w-fit flex justify-between items-center'>
        <AiFillMinusCircle className='text-2xl hover:text-stone-600 cursor-pointer transition-colors' onClick={decrement}></AiFillMinusCircle>
        <span className='w-20 mx-1 text-center'>{objCount}</span>
        <AiFillPlusCircle className='text-2xl hover:text-stone-600 cursor-pointer transition-colors' onClick={increment}></AiFillPlusCircle>
    </div>
  )
}
