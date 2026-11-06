import {useMemo, useState} from 'react'
import SearchBar from "./features/pokemon/components/SearchBar.jsx";
import PokemonGrid from "./features/pokemon/components/PokemonGrid.jsx";
import PokemonDetail from "./features/pokemon/components/PokemonDetail.jsx";
import ErrorMessage from "./features/pokemon/components/ErrorMessage.jsx";
import usePokemonList from "./features/pokemon/hook/usePokemonList";

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const {pokemonList , loading , error} = usePokemonList(retryCount);

    const filteredList = useMemo(() => {
    if (!searchQuery.trim()) return pokemonList;
    return pokemonList.filter((p) =>
      p.name.includes(searchQuery.toLowerCase().trim())
    );
  }, [pokemonList, searchQuery]);

  const handleRetry = () => setRetryCount((prev) => prev + 1);

   return (
    <div className="app">
      <header className="app-header">
        <h1>⚡ Pokémon Explorer</h1>
        <SearchBar query={searchQuery} onSearch={setSearchQuery} />
      </header>

      <main className="app-main">
        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="spinner" />
            <p>Fetching Pokémon...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <ErrorMessage message={error} onRetry={handleRetry} />
        )}

        {/* Pokemon Grid */}
        {!loading && !error && (
          <PokemonGrid
            pokemonList={filteredList}
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
