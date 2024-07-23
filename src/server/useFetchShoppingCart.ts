'use client';

import { useEffect, useState } from "react";

export default function useFetchShoppingCart() {
    // const data = await fetch('https://api.timdarrow.com/coffee/')
    const [name, setName] = useState(() => {
        const saved = localStorage.getItem("name");
        const initialValue = saved ? JSON.parse(saved) : '';
        return initialValue || "";

    });
    // useEffect(() => {

    //     console.log('test', name);
    // })

    return true;
    
}