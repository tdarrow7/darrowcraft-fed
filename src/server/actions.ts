'use server'

import { revalidateTag } from 'next/cache'

export async function fetchCoffee() {
    try {
        const data = await fetch('https://api.timdarrow.com/coffee/')
        if (!data) return null;
        else 
        return data.json();
        // {
            //     console.log(data.json());
            
            // }
        } catch (error) {
            return {error: error}
        }
    }
    
    export async function fetchCoffeeByID(id: string) {
        try {
            const data = await fetch(`https://api.timdarrow.com/coffee/${id}`)
        if (!data) return null;
        else return data.json();
    } catch (error) {
        return {error: error}
    }
}