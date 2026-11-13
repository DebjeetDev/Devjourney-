
export default function SearchBar({ query, onSearch, onSubmit, onClear }) {
  return (
    <form className="search-wrapper" onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />

      {query && (
        <button type="button" onClick={onClear} className="clear-btn">
          ✕
        </button>
      )}

      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}
