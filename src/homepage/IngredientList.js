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

const IngredientList = ({ ingredients, deleteIngredient }) => {
  const allIngredients = ingredients.map((ingredient, index) => {
    return (
      <IngredientContainer key={index}>
        <IngredientItem>{ingredient}</IngredientItem>
        <DeleteIngredientButton onClick={() => deleteIngredient(index)}>
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
