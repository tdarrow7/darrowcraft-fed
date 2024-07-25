import Link from 'next/link'
import React from 'react'
import { PiShoppingCartSimpleThin } from "react-icons/pi"
import { BsCart2 } from "react-icons/bs";



const links = [
    {name: 'Coffee', href: '/coffee'},
    {name: 'Our Brands', href: '/brands'},
    {name: 'Roast Types', href: '/roast-types'},
    {name: 'Reviews', href: '/'},
]

export const PrimaryNav = () => {
  return (
    <div>
        <nav>
            <ul className='flex justify-end items-center'>
                {links.map((link) => {
                    return (
                        <Link className='py-1 px-2 font-bold text-green-500 hover:text-green-900 transition-colors' key={link.name} href={link.href}>{link.name}</Link>
                    )
                })}
                
            </ul>
        </nav>
    </div>
  )
}
