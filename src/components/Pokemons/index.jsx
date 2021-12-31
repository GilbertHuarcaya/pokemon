import PokemonCard from "../PokemonCard";
import { useStatePokemon } from "../../context";
import "./styles.scss";
import Spinner from "../../imgs/Spin.svg";

const Pokemons = () => {
  const { pokemonList, handleClickLoadMore } = useStatePokemon();

  return (
    <div className="Pokemons">
      <h1 className="Pokemons__title">PokemonData</h1>
      <div className="Pokemons__cards">
        {pokemonList.length > 0 ? (
          pokemonList.map((pokemon) => (
            <div key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </div>
          ))
        ) : (
          <img src={Spinner} alt="Spinner" className="Pokemons__loading" />
        )}
      </div>
      <button
        className="Pokemons__button"
        type="button"
        onClick={handleClickLoadMore}
      >
        Load More
      </button>
    </div>
  );
};
export default Pokemons;
