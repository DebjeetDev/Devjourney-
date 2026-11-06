
export default function SearchBar({query, onSearch}) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
      {query && (
        <button onClick={() => onSearch("")} className="clear-btn">
          ✕
        </button>
      )}
    </div>
  )
}
