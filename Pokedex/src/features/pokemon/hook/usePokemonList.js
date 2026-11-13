import { useEffect, useState } from "react"

export default function usePokemonList(retryCount) {
const [pokemonList, setPokemonList] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
 useEffect(()=>{
 let ignore = false;
 const fatchpokemonList = async () =>{
    setLoading(true);
    setError(null);
    try {
        const res =  await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
       if(!res.ok){
        throw new Error("Something went wrong");
       }
       const data = await res.json();
       const enchartedData = data.results.map((pokemon,index)=>({
        name: pokemon.name,
        url: pokemon.url,
        id: index + 1,
       }))
    if(!ignore) setPokemonList(enchartedData);
        
    } catch (error) {
        if(!ignore) setError(error.message);
    } finally {
       if (!ignore) setLoading(false);
    }
 }
 fatchpokemonList();

 return () => {
    ignore = true;
 }
 },[retryCount])

  return {pokemonList , loading ,error}
}
