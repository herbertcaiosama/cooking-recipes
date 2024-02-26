import { Link } from "react-router-dom";

function RecipeDetails({ recipe }) {
  return (
    <div className="recipe-details">
      <Link to={"/"}>🏠 Home</Link>
      <h2>{recipe.title}</h2>
      <p>{recipe.category}</p>
      <img src={recipe.image} alt={recipe.title} />
      <p>Preparo: {recipe.prepTime}</p>
      <p>Porções: {recipe.servings}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instruções:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetails;
