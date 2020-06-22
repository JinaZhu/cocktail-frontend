import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Background,
  SearchBarContainer,
  InputStyle,
  StyleInputButtons,
} from "./HomepageStyles";
import logo from "../static/cocktail-logo.png";

import IngredientList from "./IngredientList";
import Results from "./results/Results";

const Homepage = () => {
  const [inputIngredient, setInputIngredient] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [cocktailResult, setCocktailResult] = useState([])

  function addIngredient(e) {
    e.preventDefault();
    //because state is 1 behind, we used 4 as the max length
    if (ingredient.length > 4) {
      alert('Maximum of 5 ingredients allowed per search.');
    }else {setIngredient(ingredient.concat(inputIngredient));
    setInputIngredient("");
    }
  }

  const deleteIngredient = (deleteIndex) => {
    const ingredientCopy = [...ingredient];
    ingredientCopy.splice(deleteIndex, 1);
    setIngredient(ingredientCopy);
  };

  //sending ingredients to server.py when clicking submit
  async function handleSubmit(e) {
    e.preventDefault();
    const data = { ingredients: ingredient };
    console.log('submit');
    console.log(data);
      try {
        const result = await fetch('/ingredientsresults.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          
        });
        const jsonCocktailResult = await result.json();
        //storing cocktail results
        setCocktailResult(jsonCocktailResult)
        console.log(jsonCocktailResult)
      } catch (error) {
          console.log(`Error: ${error}`)
      }
  }
  return (
    <div>
      {/* <Background> */}
        <img
          src={logo}
          alt="logo"
          width="210"
          style={{ margin: "5% 0 1% 0" }}
        />
        <p style= {{color: 'white'}}><em>*Add a maximum of 5 ingredients per search*</em></p>
        <SearchBarContainer>
          <InputStyle
            type="text"
            placeholder="enter ingredient"
            onChange={(e) => setInputIngredient(e.target.value)}
            value={inputIngredient}
          />
          <StyleInputButtons type="submit" onClick={addIngredient}>
            <FontAwesomeIcon icon={faPlus} />
          </StyleInputButtons>
          <StyleInputButtons type="submit" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </StyleInputButtons>
        </SearchBarContainer>
        <IngredientList
          ingredients={ingredient}
          deleteIngredient={deleteIngredient}
        />
      {/* </Background> */}
      <Results 
        results={cocktailResult}
      />
    </div>
  );
};

export default Homepage;
