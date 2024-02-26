import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import Search from "../pages/Search";

function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default Rotas;
