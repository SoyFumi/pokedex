import { useState } from "react";
import Pokedex from "./Pokedex";

function Container() {
  // const pokemonList = [
  //   { id: 1, name: "Bulbasaur" },
  //   { id: 2, name: "Ivysaur" },
  //   { id: 3, name: "Venasaur" },
  // ];

  const [pokemonList, setPokemonList] = useState([]);
  fetch("https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=151")
    .then((response) => response.json())
    .then((allPokemon) => {
      setPokemonList(allPokemon.results);
    });
  return (
    <>
      <div class="container text-center">
        <div class="row align-items-start">
          {pokemonList.map((pokemon) => {
            return <Pokedex id={pokemon.url.split("/")[6]} name={pokemon.name} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Container;
