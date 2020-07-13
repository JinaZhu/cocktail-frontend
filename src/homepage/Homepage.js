import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  HomepageContainer,
  SearchBarContainer,
  InputStyle,
  StyleInputButtons,
} from "./HomepageStyles";
import logo from "../static/cocktail-logo.png";

import IngredientList from "./IngredientList";
import Results from "./results/Results";

import DisplayMatches from "./SearchIngredients";

const Homepage = () => {
  
  const [onType, setOnType] = useState(false);
  const [filterMatch, setFilterMatch] = useState([])
  const [inputIngredient, setInputIngredient] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [cocktailResult, setCocktailResult] = useState([]);


  useEffect(() => {
    // runs only when user starts typing, avoids running on refresh
    if (onType && inputIngredient.length > 0) {
      const ingredientMatches = DisplayMatches(inputIngredient)
      if (ingredientMatches.length > 5) {
      setFilterMatch(ingredientMatches.slice(0, 5))
      }
      else {
        setFilterMatch(ingredientMatches)
      }
    }
    else {
      setFilterMatch([])
    };
  }, [inputIngredient])


  function addIngredient(e) {
    e.preventDefault();
    if (inputIngredient === "") {
      alert("Please enter a valid ingredient");
    } else {
      //because state is 1 behind, we used 4 as the max length
      if (ingredient.length > 4) {
        alert("Maximum of 5 ingredients allowed per search.");
      } else {
        setIngredient(ingredient.concat(inputIngredient));
        setInputIngredient("");
      }
    }
  }

  const updateSearchIng = (evt) => {
    setInputIngredient(evt.target.value)
    setOnType(true);
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
 
    try {
      const result = await fetch("/ingredientsresults.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jsonCocktailResult = await result.json();

      // alert no results found when there is a message returned
      if (jsonCocktailResult.message) {
        console.log(jsonCocktailResult.message, 'message')
        alert(jsonCocktailResult.message);
      } else {
        //storing cocktail results
        setCocktailResult(jsonCocktailResult);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  return (
    <div>
      <HomepageContainer>
        <img
          src={logo}
          alt="logo"
          width="210"
          style={{ margin: "5% 0 1% 0" }}
        />
        <p style={{ color: "white" }}>
          <em>*Add a maximum of 5 ingredients per search*</em>
        </p>
        <SearchBarContainer>
          <InputStyle
            type="text"
            placeholder="enter ingredient"
            onChange={updateSearchIng}
            value={inputIngredient}
          />
          <StyleInputButtons type="submit" onClick={addIngredient}>
            <FontAwesomeIcon icon={faPlus} />
          </StyleInputButtons>
          <StyleInputButtons type="submit" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </StyleInputButtons>
        </SearchBarContainer>
        <ul>
          {filterMatch.map((match, index) => {
            return (
              <li key={index}>
                <span style={{color: 'white'}}>{match}</span>
              </li>
            )
          })}
        </ul>
        <IngredientList
          ingredients={ingredient}
          deleteIngredient={deleteIngredient}
        />
      </HomepageContainer>
      <Results results={cocktailResult} />
    </div>
  );
};

export default Homepage;
