import { Ingredients } from './Ingredients';

function DisplayMatches(matchIng) {
  // const matchArray = searchMatches(inputIngredient, Ingredients)
  const filterList = Ingredients.filter(userIngInput => {
    //  match starting user input
    const regex = new RegExp(`^${matchIng}`, 'gi'); 
      return userIngInput.match(regex);
  })

  // const filterResult = filterList.map(ingredient => {
  //   return `
  //     <li>
  //       <span>${ingredient}</span>
  //     </li>
  //   `
  // });
  // console.log(Ing, 'Ing')
  return filterList

};

 


export default DisplayMatches;

