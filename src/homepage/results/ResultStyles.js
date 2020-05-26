import styled from "styled-components";

export const CocktailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 50px 20px 50px;
  border: 1px solid black;
  min-height: 500px;
  max-width: 250px;
`;

export const CocktailTitleContainer = styled.div`
  border: 1px solid black;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CocktailTitleText = styled.h2`
  margin: 3%;
`;

export const ListStyle = styled.li`
  list-style-type: "- ";
`;
