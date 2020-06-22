import React from "react";

import cherryCocktail from "../../static/cherry-cocktail.jpg";
import {
  ResultContainer,
  CocktailTitleContainer,
  CocktailsContainer,
  CocktailTitleText,
  ListStyle,
  ListContainer,
} from "./ResultStyles";

const Results = ({ results }) => {
  // const results = [
  //   {
  //     image: cherryCocktail,
  //     name: "Fresh Cherry Coolers",
  //     ingredients: ["cherry", "sugar", "lemon juice", "bourbon"],
  //   },
  //   {
  //     image: cherryCocktail,
  //     name: "Fresh Cherry Coolers",
  //     ingredients: ["cherry", "ice", "sugar", "lemon juice", "bourbon"],
  //   },
  //   {
  //     image: cherryCocktail,
  //     name: "Fresh Cherry Coolers",
  //     ingredients: ["cherry", "ice", "bourbon"],
  //   },
  // ];

  const allResults = results.map((result, index) => {
    return (
      <ResultContainer key={index}>
        <img
          src={result.drink_image}
          alt="cocktail"
          width="250"
          height="250"
          object-fit="cover"
        />
        <CocktailTitleContainer>
          <CocktailTitleText>{result.drink_name}</CocktailTitleText>
        </CocktailTitleContainer>
        <ListContainer>
          {result.drink_ingr.map((ingredient, index) => {
            return <ListStyle key={index}>{ingredient}</ListStyle>;
          })}
        </ListContainer>
      </ResultContainer>
    );
  });

  return <CocktailsContainer>{allResults}</CocktailsContainer>;
};

export default Results;
