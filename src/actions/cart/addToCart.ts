"use server";

export async function fetchCoffee() {
  try {
    const data = await fetch("https://api.timdarrow.com/coffee/");
    return data ? data.json() : null;
  } catch (error) {
    return { error: error };
  }
}

export async function fetchCoffeeByID(id: string) {
  try {
    const data = await fetch(`https://api.timdarrow.com/coffee/${id}`);
    if (!data) return null;
    else return data.json();
  } catch (error) {
    return { error: error };
  }
}
