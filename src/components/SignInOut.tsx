// 'use client';
import React, { useState } from 'react'
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from 'next/link';
import { SignInButton, SignOutButton } from '@clerk/nextjs';
import { CiUser } from "react-icons/ci";

type Props = {}

export const SignInOut = async (props: Props) => {
    const { userId } = auth();
    const user = await currentUser()
    
  return (
    <div className='flex items-center'>
        {user ? <div className='text-green-500 transition-colors ml-1'><CiUser className='text-2xl'/></div>  : ''}
        <span className={`py-1 px-2 text-green-500 hover:text-green-900 font-bold transition-colors ${user ? 'ml-2' : ''}`}>
            {!userId ? <SignInButton/> : <SignOutButton/>}
        </span>
    </div>
  )
}