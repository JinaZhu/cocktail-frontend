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
  background: white;
  min-width: 30%;
  margin: 0.5rem;
  opacity: 0.7;
`;

export const IngredientItem = styled.li`
  margin: 0 auto;
  color: #6c6c6c;
  font-size: 1.5rem;
`;

export const DeleteIngredientButton = styled.button`
  color: #6c6c6c;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    color: white;
    background: #6c6c6c;
  }
`;

export const SearchBarContainer = styled.form`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const InputStyle = styled.input`
  padding: 0.5rem;
  font-size: 2rem;
  color: #6c6c6c;
  border: none;
  background: white;
`;

export const StyleInputButtons = styled.button`
  color: #6c6c6c;
  background: white;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 2rem;
  border: none;

  &:hover {
    color: white;
    background: #6c6c6c;
  }
`;
