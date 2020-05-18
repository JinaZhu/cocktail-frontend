import styled from "styled-components";
import cocktail from "../static/cocktail.png";

export const Background = styled.div`
  background: url(${cocktail}) no-repeat center;
  background-size: 1500px 860px;
  height: 100vh;
`;

export const IngredientDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IngredientUl = styled.ul`
  min-width: 25%;
  list-style: none;
`;
export const IngredientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  min-width: 30%;
  margin: 0.5rem;
  background: #f1ece1;
`;

export const IngredientItem = styled.li`
  margin: 0 auto;
`;

export const DeleteIngredientButton = styled.button`
  color: #f1ece1;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
`;
