import { useParams } from "react-router-dom";
import { useStatePokemon } from "../../context";
import "./styles.scss";
import Spinner from "../../imgs/Spin.svg";

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const { pokemonList } = useStatePokemon();
  const pokemon = pokemonList?.find((prod) => prod.id === Number(pokemonId));

  return (
    <main className="PokemonDetail">
      {pokemon ? (
        <div className="PokemonDetail__card">
          <div className="PokemonDetail__card__subtitle">
            Types:{" "}
            {pokemon.types.map((e) => (
              <p key={e.slot}>
                {e.slot}:{e.type.name}
              </p>
            ))}
          </div>
          <h2 className="PokemonDetail__card__name">
            {pokemon.name}#{pokemon.id}
          </h2>
          <div className="PokemonDetail__card__photo">
            <img
              className="PokemonDetail__card__img"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
          </div>
          <h3 className="PokemonDetail__card__subtitle">Abilities</h3>
          <div className="PokemonDetail__card__description">
            {pokemon.abilities.map((e) => (
              <p key={e.slot}>
                {e.is_hidden ? "Hidden: " : null}
                {e.ability.name}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <img src={Spinner} alt="Spinner" className="Pokemons__loading" />
      )}
    </main>
  );
};
export default PokemonDetail;
