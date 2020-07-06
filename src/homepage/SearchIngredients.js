import Ingredients from './Ingredients';

console.log(Ingredients, 'Ingredients')
function DisplayMatches(inputIngredient) {
  const matchArray = searchMatches(inputIngredient, Ingredients)
  console.log(matchArray, 'matchArray')
}

// matchIng in lits ingredients, 2nd param
function searchMatches(matchIng, Ingredients) {
    // filter thru list of Ingredients
  return Ingredients.filter(userIngInput => {
    //   match thru regex with current inputIngredient (may need useEffect)
    const regex = new RegExp(matchIng, Ingredients); 
    // 
      return userIngInput.ingredient.match(regex) || userIngInput.match(regex);
  });
}

export default DisplayMatches;