import { useState } from "react";

function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      handleSearch(query);
    } else {
      alert("Por favor, digite um nome ou categoria antes de buscar.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquisar por nome ou categoria"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
