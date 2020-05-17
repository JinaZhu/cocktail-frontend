import React from "react";

const IngredientList = (ingredients) => {
  const allIngredients = ingredients.ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });

  return (
    <div>
      <ul>{allIngredients}</ul>
    </div>
  );
};

export default IngredientList;
