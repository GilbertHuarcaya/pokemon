import { useEffect } from "react";
import Pokemons from "../../components/Pokemons";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Pokemons />;
};

export default Home;
