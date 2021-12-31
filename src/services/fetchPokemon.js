/* eslint-disable consistent-return */
const fetchPokemon = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
export default fetchPokemon;
