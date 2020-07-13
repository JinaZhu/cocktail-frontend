import { Ingredients } from './Ingredients';

function DisplayMatches(matchIng) {
  // const matchArray = searchMatches(inputIngredient, Ingredients)
  const filterList = Ingredients.filter(userIngInput => {
    //  match starting user input
    const regex = new RegExp(`^${matchIng}`, 'gi'); 
      return userIngInput.match(regex);
  })

  return filterList

};

 


export default DisplayMatches;

