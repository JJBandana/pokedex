import type { PokeResponse, Pokemon } from "./types";

export async function getPokemons() { 
  let pokemons: Pokemon[] = [];
  
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

    if (!response.ok){
      throw new Error('Error al obtener los pokemon');
    }

    const data : PokeResponse = await response.json();
    pokemons.push(...data.results)
  }
  
  catch (error) {
    console.error('Error al cargar los pokemon', error);
  }
  
  return pokemons}