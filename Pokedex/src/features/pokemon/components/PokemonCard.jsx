import { capitalize, getArtworkUrl } from '../utils/pokemonHelpers';

export default function PokemonCard({ pokemon, onSelect }) {
    const {id , name } = pokemon;
    const artwork = getArtworkUrl(id);
    
   return (
    <div
      className="pokemon-card"
      onClick={() => onSelect(name)}
      role="button"
      tabIndex={0}
    >
      <img
        src={artwork}
        alt={name}
        loading="lazy"
        onError={(e) => {
          // Fallback agar artwork load na ho
          e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        }}
      />
      <p className="pokemon-id">#{String(id).padStart(3, "0")}</p>
      <h3 className="pokemon-name">{capitalize(name)}</h3>
    </div>
 );
}
