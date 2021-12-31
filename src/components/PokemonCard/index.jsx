import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.scss";

const PokemonCard = (props) => {
  const { pokemon } = props;

  return (
    <Link
      className="PokemonCard__button"
      id={pokemon.id}
      to={`/detalle/${pokemon.id}`}
    >
      <div className="PokemonCard">
        <div className="PokemonCard__photo">
          <img
            className="PokemonCard__img"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <h3 className="PokemonCard__title">{pokemon.name}</h3>
      </div>
    </Link>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any),
};

PokemonCard.defaultProps = {
  pokemon: {},
};

export default PokemonCard;
