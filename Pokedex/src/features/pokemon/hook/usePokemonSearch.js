import { useState } from "react";

export default function usePokemonSearch() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchPokemon = async (name) => {
    if (!name.trim()) return;
    setLoading(true);
    setError(null);

    setPokemon(null);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
      );
      if (!response.ok) throw new Error("Pokemon not found");
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const clearSearch = () =>{
    setPokemon(null);
    setError(null);
  }
  return {
    pokemon,
    loading,
    error,
    searchPokemon,
    clearSearch
  };
}
