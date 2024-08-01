import Link from 'next/link';
import React from 'react'

type Props = {
    text: string,
    href?: string,
    newTab?: boolean,
    onclick?: () => void
}
const defaultClass = 'py-4 px-10 bg-black hover:bg-stone-900 uppercase text-white cursor-pointer';

export const Button = ({text, href, newTab, onclick}: Props) => {



  return (
    <>
        {(href) ? 
        <Link href={href} target={`${newTab} ? _blank : ''`} rel={`${newTab} ? noopener noreferrer: ''`} className={defaultClass}></Link>    
        : 
        onclick ? 
          <span className={defaultClass} onClick={onclick}>{text}</span>
          :
          <span className={defaultClass}>{text}</span>
    }
    </>
    
  )
}
