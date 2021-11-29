import { fetchParams, fetchById } from "./service/api.js";
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
  /*
  let params = 'query=pasta&maxFat=25&nuber=2';
  await fetchParams(params).then(function(res){
   const fetchedRecipes = res.results;
   for (let i = 0; i < fetchedRecipes.length; i++) {
     recipeData[fetchedRecipes[i].title] = fetchedRecipes[i].id;
   }
  })*/


    //Manually add two different carousels

    await addCarouselsToPage("pasta", 4);
    await addCarouselsToPage("burger", 6); 
    await addCarouselsToPage("thanksgiving", 6);



}

/*NOTE: if you're getting a 402 error in the console because the number of queries for the day have been used up, change the number x in 'apiKeys[x]' 
in the following two functions to a different value*/


//Returns json data of resultant API search
//query = search term i.e. "pasta", numResults = number of recipes to return from search results
async function queryApi(query, numResults) {
  const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=" + query + '&number=' + numResults, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "e26569aaabmsh3816991676f73b4p175a23jsn09f144d9bffb"
    }
  });


  return response.json();

}



//Returns json data of recipe with id specified in parameter 'id'

async function getRecipe(id) {
  //Query API by specific recipe id
  const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + id + "/information", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "e26569aaabmsh3816991676f73b4p175a23jsn09f144d9bffb"
    }
  });


  //Return data in json format
  return response.json();

}


//Search API for numResults number of recipes matching the query parameter;
//Returns an array of recipe ids matching the search parameters

async function getRecipeList(query, numResults) {
  var recipeResults = [];

  //Query api
  await queryApi(query, numResults).then((value) => {

    //Parse json, put ids of returned recipes into recipeResults
    for (let i = 0; i < numResults; i++) { //TODO: error checking in case less than numResults results are actually returned
      recipeResults[i] = value.results[i].id;
    }

    //console.log(recipeResults)

  });

  return recipeResults;

}




/*load all recipes
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
}*/

let carouselNum = 0;
//Create carousel, add to page
async function addCarouselsToPage(searchQuery, numRecipes) {

  // Makes a new empty carousel
  const newCarousel = document.createElement('card-carousel');

  //To be filled with all relevant recipe cards
  var carouselCards = [];

  //Queries api, stores all recipe ids matching search parameters in recipeList, an array of ids
  var recipeList;
  await getRecipeList(searchQuery, numRecipes).then((value) => {

    recipeList = value;


  });

  //Caps maximum number of recipes in a carousel to prevent accidental excessive queries
  const MAX_RECIPES_IN_CAROUSEL = 12;
  for (let i = 0; i < recipeList.length && i < MAX_RECIPES_IN_CAROUSEL; i++) {

    // Makes a new recipe card
    const recipeCard = document.createElement('recipe-card');

    //Gets a recipe id from recipeList, queries the api for the recipe's data, stores the data in the card
    await getRecipe(recipeList[i]).then((value) => {
      console.log(value);
      recipeCard.data = value;

    });


    //Stores the card into the array carouselCards
    carouselCards[i] = recipeCard;

  }


  //Inserts all the recipe cards in carouselCards into the carousel
  newCarousel.createCardCarousel(carouselCards);
  console.log(carouselCards.length);



  //Appends the newly created and populated carousel to the class recipes-wrapper in the document
  document.querySelectorAll('.recipes-wrapper')[carouselNum].appendChild(newCarousel);


  //Binds the back and forward buttons to their respective carousel's functions

  document.querySelectorAll('.back')[carouselNum].addEventListener('click', () => {
    newCarousel.prevCards();
  });

  document.querySelectorAll('.forward')[carouselNum].addEventListener('click', () => {
    newCarousel.nextCards();
  });

  carouselNum++;
  
  //Return a reference to the carousel
  return newCarousel;



}

/*
function dummyCarousel1() {

  // Makes a new empty carousel
  const newCarousel = document.createElement('card-carousel');

  //To be filled with all relevant recipe cards
  var carouselCards = [];



  //Caps maximum number of recipes in a carousel to prevent accidental excessive queries
  const MAX_RECIPES_IN_CAROUSEL = 12;
  for (let i = 0; i < MAX_RECIPES_IN_CAROUSEL; i++) {

    // Makes a new recipe card
    const recipeCard = document.createElement('recipe-card');

    //recipeCard.data = dummyRecipe1.json();

    //recipeCard.data = JSON.stringify(eval("(" + dummyRecipe1 + ")"));
    recipeCard.data = JSON.stringify(dummyRecipe1);

    //Stores the card into the array carouselCards
    carouselCards[i] = recipeCard;

  }


  //Inserts all the recipe cards in carouselCards into the carousel
  newCarousel.createCardCarousel(carouselCards);


  //Appends the newly created and populated carousel to the class recipes-wrapper in the document
  document.querySelector('.recipes-wrapper').appendChild(newCarousel);

  //Return a reference to the carousel
  return newCarousel;

}*/

module.exports = {
    queryApi: queryApi,
    getRecipe: getRecipe,
    getRecipeList: getRecipeList,
    addCarouselsToPage: addCarouselsToPage
};