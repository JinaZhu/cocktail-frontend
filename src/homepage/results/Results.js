import React, {Component} from "react";
import cherryCocktail from "../../static/cherry-cocktail.jpg";
import {
  ResultContainer,
  CocktailTitleContainer,
  CocktailsContainer,
  CocktailTitleText,
  ListStyle,
  ListContainer,
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
      ingredients: ["cherry", "ice", "sugar", "lemon juice", "bourbon"],
    },
    {
      image: cherryCocktail,
      name: "Fresh Cherry Coolers",
      ingredients: ["cherry", "ice", "bourbon"],
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
        <ListContainer>
          {result.ingredients.map((ingredient, index) => {
            return <ListStyle key={index}>{ingredient}</ListStyle>;
          })}
        </ListContainer>
      </ResultContainer>
    );
  });

  return <CocktailsContainer>{allResults}</CocktailsContainer>;
};

export default Results;
