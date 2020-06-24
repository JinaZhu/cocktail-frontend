import React from "react";
import {
  ResultContainer,
  CocktailTitleContainer,
  CocktailsContainer,
  CocktailTitleText,
  ListStyle,
  ListContainer,
  SaveButton,
} from "./ResultStyles";

const Results = ({ results }) => {
  const handleSave = async (index, e) => {
    e.preventDefault();
    console.log(results[index]);

    try {
      const response = await fetch("/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(results[index]),
      });
      const jsonResponse = await response.json();
      alert(jsonResponse.response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

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
        <SaveButton onClick={(e) => handleSave(index, e)}>Save</SaveButton>
      </ResultContainer>
    );
  });

  return <CocktailsContainer>{allResults}</CocktailsContainer>;
};

export default Results;
