
const recipes = []; // instead of using json files, we want recipes from the API
const recipeData = {};  // used to access the recipe data from Spoonacular

//router
const router = {};

window.addEventListener('DOMContentLoaded', init);

async function init() {

  console.log("initiating");
  
    /*
    try {
      await fetchRecipes();
    } catch (err) {
      console.log(`Error fetching recipes: ${err}`);
      return;
    }
    */


    //createRecipeCards();
    //bindShowMore();
    //addRecipesToPage();

    //Test function
    addCarouselsToPage();

}

//load all recipes
async function fetchRecipes() {
    return new Promise((resolve, reject) => {
      recipes.forEach(recipe => {
        fetch(recipe)
          // CHANGE: implement with API
          .then(response => response.json())
          .then(data => {
            // This grabs the page name from the URL in the array above
            data['page-name'] = recipe.split('/').pop().split('.')[0];
            recipeData[recipe] = data;
            if (Object.keys(recipeData).length == recipes.length) {
              resolve();
            }
          })
          .catch(err => {
            console.log(`Error loading the ${recipe} recipe`);
            reject(err);
          });
      });
    });
}

// make recipe cards, add recipes cards to carousels, then append to page
async function addRecipesToPage(){
  console.log("Recipe number: " + recipes.length);

  //for (let i = 0; i < recipes.length; i++){
    for (let i = 0; i < 3; i++){

    // Makes a new recipe card
    const recipeCard = document.createElement('recipe-card');

    recipeCard.data = "TestData";
    //recipeCard.data = recipeData[recipes[i]];
    //const page = recipeData[recipes[i]]['page-name'];

    //append to page
    //document.querySelector('.recipes-wrapper').appendChild(recipeCard);

    console.log("Appending " + i);
    document.querySelector('.recipes-wrapper').appendChild(recipeCard);
  }
}

//Test fcn
async function addCarouselsToPage(){
  console.log("Recipe number: " + recipes.length);

  // Makes a new recipe card
  const testCarousel = document.createElement('card-carousel');
  var testCards = [];

  //for (let i = 0; i < recipes.length; i++){
  for (let i = 0; i < 12; i++){

    // Makes a new recipe card
    const recipeCard = document.createElement('recipe-card');

    recipeCard.data = "TestData";

    console.log("Appending " + i);
    //document.querySelector('.recipes-wrapper').appendChild(recipeCard);
    testCards[i] = recipeCard;

  }

  testCarousel.createCardCarousel(testCards);

  document.querySelector('.recipes-wrapper').appendChild(testCarousel);

}