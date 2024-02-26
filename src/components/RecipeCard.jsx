import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div>
      <img src={recipe.image} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>{recipe.category}</p>
      <Link to={`/recipe/${recipe.id}`}>👨‍🍳 Ver Receita</Link>
    </div>
  );
}

export default RecipeCard;
