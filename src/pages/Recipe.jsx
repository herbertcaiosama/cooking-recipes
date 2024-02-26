import { useParams } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";
import recipesData from "../data/recipes.json";

function Recipe() {
  const { id } = useParams();
  const recipe = recipesData.recipes.find(
    (recipe) => recipe.id === parseInt(id)
  );

  return (
    <div className="recipe">
      {recipe ? (
        <RecipeDetails recipe={recipe} />
      ) : (
        <p>Receita não encontrada.</p>
      )}
    </div>
  );
}

export default Recipe;
