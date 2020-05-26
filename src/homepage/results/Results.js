import React from "React";

import cherryCocktail from "../../static/cherry-cocktail.jpg";

import { ResultContainer, CocktailTitleContainer } from "./ResultStyles";

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
    <ResultContainer key={index}>
      <img src={result.image} alt="cocktail image" width="250" />
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
    </ResultContainer>;
  });

  return <div>{allResults}</div>;
};
