import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import recipesData from "../data/recipes.json";
import { Link } from "react-router-dom";

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const results = recipesData.recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.category.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(query.toLowerCase())
        )
    );
    setSearchResults(results);
  };

  return (
    <div className="search">
      <Link to={"/"}>🏠 Home</Link>
      <h1>Pesquisa de Receitas</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className="search-results">
        {searchResults.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Search;
