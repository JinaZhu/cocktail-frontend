import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  IngredientContainer,
  IngredientItem,
  IngredientDiv,
  IngredientUl,
  DeleteIngredientButton,
} from "./HomepageStyles";

const IngredientList = (ingredients) => {
  const allIngredients = ingredients.ingredients.map((ingredient, index) => {
    return (
      <IngredientContainer key={index}>
        <IngredientItem>{ingredient}</IngredientItem>
        <DeleteIngredientButton>
          <FontAwesomeIcon icon={faTimes} />
        </DeleteIngredientButton>
      </IngredientContainer>
    );
  });

  return (
    <IngredientDiv>
      <IngredientUl>{allIngredients}</IngredientUl>
    </IngredientDiv>
  );
};

export default IngredientList;
