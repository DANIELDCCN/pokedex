import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonList = () => {
  const { typeId } = useParams();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${typeId}`);
      const data = await response.json();
      setPokemons(data.pokemon);
    };

    fetchPokemons();
  }, [typeId]);

  return (
    <div>
      <h2>Pokemons do tipo {typeId}</h2>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
