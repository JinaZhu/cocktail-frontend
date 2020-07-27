import React from 'react';
import {
  FilteredPhoto,
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

const SavedResults = ({ results }) => {
  const allSavedResults = results.map((result, index)=> {
    return (
      <SavedContainer key={index}>
        <FilteredPhoto src={result.img_url} alt="cocktail" />
        <SavedCocktailTitleContainer>
          <SavedCocktailTitleText>{result.cocktail_name}</SavedCocktailTitleText>
        </SavedCocktailTitleContainer>
      </SavedContainer>
    );
  }
  );
  return <SavedCocktailsContainer>{allSavedResults}</SavedCocktailsContainer>
}

export default SavedResults;