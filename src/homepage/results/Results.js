import React from "react";

import cherryCocktail from "../../static/cherry-cocktail.jpg";

import {
  ResultContainer,
  CocktailTitleContainer,
  CocktailsContainer,
} from "./ResultStyles";

const Results = () => {
  const results = [
    {
      image: cherryCocktail,
      name: "Fresh Cherry Coolers",
      ingredients: ["cherry", "ice", "sugar", "lemon juice", "bourbon"],
    },
    {
      image: cherryCocktail,
      name: "Fresh Cherry Coolers",
      ingredients: ["cherry", "ice", "sugar", "lemon juice", "bourbon"],
    },
    {
      image: cherryCocktail,
      name: "Fresh Cherry Coolers",
      ingredients: ["cherry", "ice", "sugar", "lemon juice", "bourbon"],
    },
  ];

  const allResults = results.map((result, index) => {
    return (
      <ResultContainer key={index}>
        <img
          src={result.image}
          alt="cocktail image"
          width="250"
          height="250"
          object-fit="cover"
        />
        <CocktailTitleContainer>
          <h2>{result.name}</h2>
        </CocktailTitleContainer>
        <div>
          <ul>
            {result.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </div>
      </ResultContainer>
    );
  });

  return <CocktailsContainer>{allResults}</CocktailsContainer>;
};

export default Results;
