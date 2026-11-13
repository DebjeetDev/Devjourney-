import {useMemo, useState} from 'react'
import SearchBar from "./features/pokemon/components/SearchBar.jsx";
import PokemonGrid from "./features/pokemon/components/PokemonGrid.jsx";
import PokemonDetail from "./features/pokemon/components/PokemonDetail.jsx";
import ErrorMessage from "./features/pokemon/components/ErrorMessage.jsx";
import usePokemonList from "./features/pokemon/hook/usePokemonList";
import usePokemonSearch from "./features/pokemon/hook/usePokemonSearch";

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
const {
  pokemonList,
  loading: listLoading,
  error: listError,
} = usePokemonList(retryCount);
const {
  pokemon: searchedPokemon,
  loading: searchLoading,
  error: searchError,
  searchPokemon,
  clearSearch,
} = usePokemonSearch();

    const filteredList = useMemo(() => {
    if (!searchQuery.trim()) return pokemonList;
    return pokemonList.filter((p) =>
      p.name.includes(searchQuery.toLowerCase().trim())
    );
  }, [pokemonList, searchQuery]);

  const displayedPokemon = searchedPokemon
  ? [searchedPokemon]
  : filteredList;

  const handleRetry = () => setRetryCount((prev) => prev + 1);
  const handleSearch = () => {
  if (searchQuery.trim()) {
    searchPokemon(searchQuery);
  }
};

const handleClear = () => {
  setSearchQuery("");
  clearSearch();
};
   return (
    <div className="app">
      <header className="app-header">
        <h1>⚡ Pokémon Explorer</h1>
        <SearchBar query={searchQuery} onSearch={setSearchQuery} onSubmit={handleSearch} onClear={handleClear} />
      </header>

      <main className="app-main">
        {/* Loading State */}
        {searchLoading && (
          <div className="loading-state">
            <div className="spinner" />
            <p>Fetching Pokémon...</p>
          </div>
        )}

        {/* Error State */}
        {!searchLoading && searchError && (
          <ErrorMessage message={searchError} onRetry={handleRetry} />
        )}

        {/* Pokemon Grid */}
        {!listLoading && !listError && (
          <PokemonGrid
            pokemonList={displayedPokemon}
            onSelect={setSelectedPokemon}
          />
        )}
      </main>

      {/* Detail Modal — sirf tab render ho jab selectedPokemon ho */}
      {selectedPokemon && (
        <PokemonDetail
          name={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
}
