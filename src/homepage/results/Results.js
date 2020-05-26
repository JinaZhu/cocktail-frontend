import React from "react";

import cherryCocktail from "../../static/cherry-cocktail.jpg";

import {
  ResultContainer,
  CocktailTitleContainer,
  CocktailsContainer,
  CocktailTitleText,
  ListStyle,
} from "./ResultStyles";

const Results = () => {
  const results = [
    {
      image: cherryCocktail,
      name: "Fresh Cherry Coolers",
      ingredients: ["cherry", "sugar", "lemon juice", "bourbon"],
    },
    {
      image: cherryCocktail,
      name: "Fresh Cherry Coolers",
      ingredients: [
        "cherry",
        "ice",
        "sugar",
        "lemon juice",
        "bourbonsssssssssssssssssssssssssss",
      ],
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
          <CocktailTitleText>{result.name}</CocktailTitleText>
        </CocktailTitleContainer>
        <div>
          <ul>
            {result.ingredients.map((ingredient, index) => {
              return <ListStyle key={index}>{ingredient}</ListStyle>;
            })}
          </ul>
        </div>
      </ResultContainer>
    );
  });

  return <CocktailsContainer>{allResults}</CocktailsContainer>;
};

export default Results;
