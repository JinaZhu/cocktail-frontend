import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Background } from "./HomepageStyles";
import logo from "../static/cocktail-logo.png";

import IngredientList from "./IngredientList";

const Homepage = () => {
  const [inputIngredient, setInputIngredient] = useState("");
  const [ingredient, setIngredient] = useState([]);

  function addIngredient(e) {
    e.preventDefault();
    setIngredient(ingredient.concat(inputIngredient));
    setInputIngredient("");
  }

  const deleteIngredient = (deleteIndex) => {
    const ingredientCopy = [...ingredient];
    ingredientCopy.splice(deleteIndex, 1);
    setIngredient(ingredientCopy);
  };

  return (
    <Background>
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
      <IngredientList
        ingredients={ingredient}
        deleteIngredient={deleteIngredient}
      />
    </Background>
  );
};

export default Homepage;
