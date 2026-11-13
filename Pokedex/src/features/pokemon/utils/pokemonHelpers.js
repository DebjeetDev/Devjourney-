// src/features/pokemon/utils/pokemonHelpers.js

// Official artwork URL — sprites se better quality
export function getArtworkUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

// Type ke liye background color
export const typeColors = {
  fire:     "#F08030",
  water:    "#6890F0",
  grass:    "#78C850",
  electric: "#F8D030",
  psychic:  "#F85888",
  ice:      "#98D8D8",
  dragon:   "#7038F8",
  dark:     "#705848",
  normal:   "#A8A878",
  fighting: "#C03028",
  poison:   "#A040A0",
  ground:   "#E0C068",
  flying:   "#A890F0",
  bug:      "#A8B820",
  rock:     "#B8A038",
  ghost:    "#705898",
  steel:    "#B8B8D0",
  fairy:    "#EE99AC",
};

// Name capitalize karo — "bulbasaur" → "Bulbasaur"
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}