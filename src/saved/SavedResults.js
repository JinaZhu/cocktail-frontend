import React, { useState } from 'react';
import {
  FilteredPhoto,
  SaveButton,
  ListStyle
} from '../homepage/results/ResultStyles';
import styled from 'styled-components';


const SavedContainer = styled.div`
  display: flex;
  padding: 1%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 2%;
  height: auto;
  width: 250px;
  border: 1px solid white;
  z-index: 100;
`;

const SavedCocktailTitleContainer = styled.div`
  border: 1px solid white;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const SavedCocktailTitleText = styled.h2`
  margin: 2%;
  font-size: 1.5rem;
  color: white;
`

const SavedCocktailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 8%;
  margin: auto;
  row-gap: 1rem;
  column-gap: 1rem;
  width: 85%;
`
const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 225px;
  flex-wrap: wrap;
  padding: 0;
  color: white;
`;


const SavedResults = ({ results, setSavedResults }) => {

  const [showIng, setShowIng] = useState({});

  const fetchIng = async (savedCocktail, e) => {
      e.preventDefault();
      try {
        const ingredients = await fetch("/getIngredients.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(savedCocktail),
        });
        const jsonIngredients = await ingredients.json();
        if (!(showIng[savedCocktail])) {
          const currShowIng = {...showIng}
          currShowIng[savedCocktail] = jsonIngredients
          setShowIng(currShowIng)
        }
      } catch (error) {
        console.log("Error:", error);
      }
  }

  const removeCocktail = async (removeCocktail, e) => {
    e.preventDefault();
    try {
      await fetch("/deleteSavedCocktail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(removeCocktail),
      });
      setSavedResults(results.filter(cocktails => cocktails.cocktail_name !== removeCocktail));
    } catch (error) {
      console.log("Error:", error);
    }
  }

  const allSavedResults = results.map((result, index)=> {
    return (
      <SavedContainer key={index}>
        <FilteredPhoto src={result.img_url} alt="cocktail" />
        <SavedCocktailTitleContainer>
          <SavedCocktailTitleText>
            {result.cocktail_name}
          </SavedCocktailTitleText>
        </SavedCocktailTitleContainer>

        {!showIng[result.cocktail_name] && (
          <SaveButton onClick={(e) => fetchIng(result.cocktail_name, e)}>
            See Ingredients
          </SaveButton>
        )}

        {showIng[result.cocktail_name] && (
          <ListContainer>
          {showIng[result.cocktail_name].map((ingredient, index) => {
            return <ListStyle key={index}>{ingredient}</ListStyle>;
          })}
          </ListContainer>
        )}

        <SaveButton onClick={(e) => removeCocktail(result.cocktail_name, e)}>
            x
        </SaveButton> 

      </SavedContainer>
    );
  }
  );
  return <SavedCocktailsContainer>{allSavedResults}</SavedCocktailsContainer>
}

export default SavedResults;