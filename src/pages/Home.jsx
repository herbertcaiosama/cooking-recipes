import recipesData from "../data/recipes.json";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Plataforma de Receitas Culinárias</h1>
      <Link to={"/search"}>🔎 Pesquisar Receita</Link>
      <div className="recipe-list">
        {recipesData.recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
