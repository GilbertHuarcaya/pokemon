import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import About from "./pages/About";
import PokemonDetail from "./components/PokemonDetail";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="detalle" element={<Pokemon />}>
          <Route path=":pokemonId" element={<PokemonDetail />} />
        </Route>
        <Route path="About" element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Theres nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
