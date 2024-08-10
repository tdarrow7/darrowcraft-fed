'use client'

import React, { useState } from 'react'
import { primaryNavLinks, secondaryNavLinks } from './navGroup'
import Link from 'next/link';

export const MobileNav = () => {
    const [isActive, setisActive] = useState(false)
    const mobileNavLinks = primaryNavLinks.concat(secondaryNavLinks)
    function handleActiveState(event: any) {
        setisActive((prev) => !prev)
    }

  return (
    <div>
        <div className={`hamburger ${isActive ? 'is-active' : ''}`} onClick={handleActiveState}>
            <div className='hamburger-box'>
                <span className='inner'></span>
            </div>
        </div>
    <ul>
        {mobileNavLinks.map((_link) => {
            return <li key={_link.name}><Link href={_link.href}>{_link.name}</Link></li>
        })}
    </ul>
    </div>
  )
}
