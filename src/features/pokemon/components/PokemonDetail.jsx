import usePokemonDetail from "../hook/usePokemonDetail";
import { capitalize, getArtworkUrl, typeColors } from "../utils/pokemonHelpers";
export default function PokemonDetail({name, onClose}) {
 const { detail, loading, error } = usePokemonDetail(name);
 

  if (loading) return <div className="detail-overlay"><p>Loading...</p></div>;
  if (error)  return <div className="detail-overlay"><p>❌ {error}</p><button onClick={onClose}>Go back</button></div>;
  
  if(!detail) return null;
  const artwork = detail.sprites.other["official-artwork"].front_default || getArtworkUrl(detail.id);

  const types = detail.types.map((t) => t.type.name);
  const stats = detail.stats.map((s) => ({
    name: s.stat.name,
    value: s.base_stat,
  }));
  return (
    <div className="detail-overlay" onClick={onClose}>
      {/* stopPropagation — overlay click se close, card click se nahi */}
      <div className="detail-card" onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={onClose}>✕</button>

        <img src={artwork} alt={detail.name} className="detail-img" />

        <h2>{capitalize(detail.name)}</h2>
        <p className="detail-id">#{String(detail.id).padStart(3, "0")}</p>

        {/* Types */}
        <div className="type-badges">
          {types.map((type) => (
            <span
              key={type}
              className="type-badge"
              style={{ backgroundColor: typeColors[type] || "#aaa" }}
            >
              {capitalize(type)}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="stats-section">
          <h4>Base Stats</h4>
          {stats.map((stat) => (
            <div key={stat.name} className="stat-row">
              <span className="stat-name">{capitalize(stat.name)}</span>
              <div className="stat-bar-wrapper">
                <div
                  className="stat-bar"
                  style={{ width: `${(stat.value / 255) * 100}%` }}
                />
              </div>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Extra info */}
        <div className="detail-meta">
          <p>⚖️ Weight: {detail.weight / 10} kg</p>
          <p>📏 Height: {detail.height / 10} m</p>
        </div>
      </div>
    </div>
  );
}
  
