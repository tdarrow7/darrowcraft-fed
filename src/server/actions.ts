'use server'

import axios from 'axios';
import { revalidateTag } from 'next/cache'
import { cookies, headers } from 'next/headers';
import { env } from 'process';

export async function fetchCoffee() {
    try {
        const data = await fetch('https://api.timdarrow.com/coffee/')
        return data ? data.json() : null;
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

export async function fetchCodeProjects() {
    try {
        const data = await fetch('https://api.timdarrow.com/codeprojects/');
        if (!data) return null;
        else return data.json();
    } catch (error) {
        return {error: error}
    }
}

interface SessionResponse {
    sessionID: string
}

export async function fetchSession() {
    const cookieStore = cookies();
    const hasSession = cookieStore.has('_sid')
    if (!hasSession) {
        console.log('no session');
        
        try {
            const response = await axios.post<SessionResponse>('https://api.timdarrow.com/session/', {
                headers: {
                    'Authorization': `Token ${process.env.API_TOKEN}`
                }
            }).then(response => {
                console.log(response.data);
                
            })
        } catch (error) {
            console.log('err', error);
            
        }
    }
    console.log('hasSession', hasSession);
    
    return hasSession;
}