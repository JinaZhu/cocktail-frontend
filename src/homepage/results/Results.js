import React from "React";

const Results = ({ results }) => {
  const allResults = results.map((result, index) => {
    <div>
      <img src={result.image} alt="cocktail image" width="250" />
      <div>
        <h2>{result.name}</h2>
      </div>
      <div></div>
    </div>;
  });

  return <div></div>;
};
