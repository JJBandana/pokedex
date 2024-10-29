export interface Pokemon {
  name: string;
  url: string;
}

export interface PokeResponse {
  results: Pokemon[];
}