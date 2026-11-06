import { useEffect, useState } from "react";

export default function usePokemonDetail(name) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) {
      setDetails(null);
      setLoading(false);
      setError(null);
      return;
    }

    let ignored = false;

    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      setDetails(null);

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch Pokémon: ${name}`);
        }

        const data = await response.json();

        if (!ignored) {
          setDetails(data);
        }
      } catch (err) {
        if (!ignored) {
          setError(err.message);
        }
      } finally {
        if (!ignored) {
          setLoading(false);
        }
      }
    };

    fetchDetail();

    return () => {
      ignored = true;
    };
  }, [name]);

  return {
    detail: details,
    loading,
    error,
  };
}