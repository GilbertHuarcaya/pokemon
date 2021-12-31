import PropTypes from "prop-types";
import { useMemo, createContext, useContext, useState, useEffect } from "react";
import fetchPokemon from "../services/fetchPokemon";

const Pokemon = createContext();

export const PokemonProvider = ({ children, value = [] }) => {
  const [pokemonList, setPokemonList] = useState(value);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon");

  const getAllPokemon = async () => {
    const getPokemons = await fetchPokemon(loadMore);
    setLoadMore(getPokemons.next);

    const getSinglePokemon = async (r) => {
      r.forEach(async ({ url }) => {
        const pokemonData = await fetchPokemon(url);
        setPokemonList((currentList) => [...currentList, pokemonData]);
      });
    };
    setTimeout(() => {
      getSinglePokemon(getPokemons.results);
    }, 500);
  };

  const handleClickLoadMore = async () => {
    getAllPokemon();
  };

  useEffect(() => {
    getAllPokemon();
    setPokemonList(pokemonList.sort((a, b) => a.id - b.id));
  }, [setPokemonList]);

  const pokemonlistToPass = useMemo(() => ({
    pokemonList,
    handleClickLoadMore,
  }));

  return (
    <Pokemon.Provider value={pokemonlistToPass}>{children}</Pokemon.Provider>
  );
};

export const useStatePokemon = () => {
  const context = useContext(Pokemon);

  if (context === undefined) {
    throw new Error("error");
  }
  return context;
};

PokemonProvider.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
};

PokemonProvider.defaultProps = {
  value: [],
};
