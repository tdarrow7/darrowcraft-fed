'use server'

export async function fetchAllCoffee() {
    try {
        const data = await fetch('https://api.timdarrow.com/coffee/')
        if (!data) return null;
        else return data.json();
    } catch (error) {
        return {error: error}
    }
}