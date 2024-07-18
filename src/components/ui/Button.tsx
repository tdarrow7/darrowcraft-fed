import Link from 'next/link';
import React from 'react'

type Props = {
    text: string,
    href?: string,
    newTab?: boolean,
}
const defaultClass = 'py-4 px-10 bg-black hover:bg-stone-900 uppercase text-white cursor-pointer';

export const Button = ({text, href, newTab}: Props) => {



  return (
    <>
        {(href) ? 
        <Link href={href} target={`${newTab} ? _blank : ''`} rel={`${newTab} ? noopener noreferrer: ''`} className={defaultClass}></Link>    
        : <span className={defaultClass}>{text}</span>
    }
    </>
    
  )
}
