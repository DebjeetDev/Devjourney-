// src/features/pokemon/components/PokemonGrid.jsx

import PokemonCard from "./PokemonCard";

export default function PokemonGrid({ pokemonList, onSelect }) {
  // Empty search result
  if (pokemonList.length === 0) {
    return (
      <div className="empty-state">
        <p>😕 No Pokémon found. Try a different name!</p>
      </div>
    );
  }

  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}