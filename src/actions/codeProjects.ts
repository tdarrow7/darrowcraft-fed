'use server'

export async function fetchCodeProjects() {
  try {
    const data = await fetch("https://api.timdarrow.com/codeprojects/");
    if (!data) return null;
    else return data.json();
  } catch (error) {
    return { error: error };
  }
}