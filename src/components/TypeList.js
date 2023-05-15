import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonList = () => {
  const { type } = useParams();
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        const pokemonUrls = response.data.pokemon.map(pokemon => pokemon.pokemon.url);
        const pokemonListData = await Promise.all(pokemonUrls.map(url => axios.get(url)));
        const formattedPokemonList = pokemonListData.map(pokemon => ({
          id: pokemon.data.id,
          name: pokemon.data.name,
          image: pokemon.data.sprites.front_default,
          types: pokemon.data.types.map(type => type.type.name),
        }));
        setPokemonList(formattedPokemonList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonList();
  }, [type]);

  return (
    <div>
      <h1>Pokemons do tipo {type}</h1>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <p>{pokemon.types.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
