import { Ingredients } from './Ingredients';

function DisplayMatches(inputIngredient) {
  const matchArray = searchMatches(inputIngredient, Ingredients)

}

// passes in user input and compares input to ingredients in list
function searchMatches(matchIng, Ingredients) {
  // filter thru list of Ingredients
  const Ing = Ingredients.filter(userIngInput => {
    //  match starting user input
    const regex = new RegExp(`^${matchIng}`, 'gi'); 

      return userIngInput.match(regex);
  });
 
}

export default DisplayMatches;

