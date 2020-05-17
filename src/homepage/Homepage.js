import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

import IngredientList from "./IngredientList";

const Homepage = () => {
  const [inputIngredient, setInputIngredient] = useState("");
  const [ingredient, setIngredient] = useState([]);

  function addIngredient(e) {
    e.preventDefault();
    setIngredient(ingredient.concat(inputIngredient));
    setInputIngredient("");
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="enter ingredient"
          onChange={(e) => setInputIngredient(e.target.value)}
          value={inputIngredient}
        />
        <button type="submit" onClick={addIngredient}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <IngredientList ingredients={ingredient} />
    </div>
  );
};

export default Homepage;
