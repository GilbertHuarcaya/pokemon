import { useEffect } from "react";
import PokemonDetail from "../../components/PokemonDetail";

const Pokemon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PokemonDetail />;
};

export default Pokemon;
