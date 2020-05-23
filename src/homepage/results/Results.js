import React from "React";

const Results = ({ results }) => {
  const allResults = results.map((result, index) => {
    <div key={index}>
      <img src={result.image} alt="cocktail image" width="250" />
      <div>
        <h2>{result.name}</h2>
      </div>
      <div>
        <ul>
          {result.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
      </div>
    </div>;
  });

  return <div></div>;
};