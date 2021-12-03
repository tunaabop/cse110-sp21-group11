import { fetchParams, fetchById } from "./service/api.js";
const recipes = []; // instead of using json files, we want recipes from the API
const recipeData = {}; // used to access the recipe data from Spoonacular

//router
const router = {};

window.addEventListener("DOMContentLoaded", init);

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

  //Bind search events to search bar
  bindSubPages();

  //Bind subpage functionality to dropdown menu
  bindSearchBars();

  //Display homepage by default
  homeCarousels(6);
}

function bindSubPages() {
  document.getElementById("homePage").addEventListener("click", function () {
    homeCarousels(6);

  //remove any subpage hero sections
  if (document.querySelector(".breakfast-hero")){
    document.querySelector(".breakfast-hero").classList.remove("seen");
  }
  if (document.querySelector(".lunch-hero")){
    document.querySelector(".lunch-hero").classList.remove("seen");
  }
  if (document.querySelector(".dinner-hero")){
    document.querySelector(".dinner-hero").classList.remove("seen");
  }
  if (document.querySelector(".dessert-hero")){
    document.querySelector(".dessert-hero").classList.remove("seen");
  }

  //add the home page sections
  document.querySelector(".hero").classList.add("seen");
    document.querySelector(".featured").classList.add("seen");
  });

  document
    .getElementById("breakfastPage")
    .addEventListener("click", function () {
      breakfastCarousels(6);
      //remove main website sections
      //if these sections have the class "seen", then remove. if not dont do anything
      document.querySelector(".hero").classList.remove("seen");
      document.querySelector(".featured").classList.remove("seen");

      //remove lunch sections if redirecting from lunch page
      if (document.querySelector(".lunch-hero")){
        document.querySelector(".lunch-hero").classList.remove("seen");
      }
      //remove dinner sections if redirecting from dinner page
      if (document.querySelector(".dinner-hero")){
        document.querySelector(".dinner-hero").classList.remove("seen");
      }
      //remove dessert section if redirecting from dessert page
      if (document.querySelector(".dessert-hero")){
        document.querySelector(".dessert-hero").classList.remove("seen");
      }

      //add breakfast section
      document.querySelector(".breakfast-hero").classList.add("seen");
    });

  document.getElementById("lunchPage").addEventListener("click", function () {
    lunchCarousels(6);
    //remove main website sections
    //if these sections have the class "seen", then remove. if not dont do anything
    document.querySelector(".hero").classList.remove("seen");
    document.querySelector(".featured").classList.remove("seen");

    //remove breakfast sections if redirecting from lunch page
    if (document.querySelector(".breakfast-hero")){
      document.querySelector(".breakfast-hero").classList.remove("seen");
    }
    //remove dinner sections if redirecting from dinner page
    if (document.querySelector(".dinner-hero")){
      document.querySelector(".dinner-hero").classList.remove("seen");
    }
    //remove dessert section if redirecting from dessert page
    if (document.querySelector(".dessert-hero")){
      document.querySelector(".dessert-hero").classList.remove("seen");
    }
    //add lunch section
    document.querySelector(".lunch-hero").classList.add("seen");
  });

  document.getElementById("dinnerPage").addEventListener("click", function () {
    dinnerCarousels(6);
    //remove main website sections
    document.querySelector(".hero").classList.remove("seen");
    document.querySelector(".featured").classList.remove("seen");
    //remove breakfast sections if redirecting from lunch page
    if (document.querySelector(".breakfast-hero")){
      document.querySelector(".breakfast-hero").classList.remove("seen");
    }
    //remove lunch sections if redirecting from dinner page
    if (document.querySelector(".lunch-hero")){
      document.querySelector(".lunch-hero").classList.remove("seen");
    }
    //remove dessert section if redirecting from dessert page
    if (document.querySelector(".dessert-hero")){
      document.querySelector(".dessert-hero").classList.remove("seen");
    }
    //add dinner section
    document.querySelector(".dinner-hero").classList.add("seen");
  });

  document.getElementById("dessertPage").addEventListener("click", function () {
    dessertCarousels(6);
    //remove main website sections
    document.querySelector(".hero").classList.remove("seen");
    document.querySelector(".featured").classList.remove("seen");
    //remove breakfast sections if redirecting from lunch page
    if (document.querySelector(".breakfast-hero")){
      document.querySelector(".breakfast-hero").classList.remove("seen");
    }
    //remove lunch section if redirecting from lunch page
    if (document.querySelector(".lunch-hero")){
      document.querySelector(".lunch-hero").classList.remove("seen");
    }
    //remove dinner sections if redirecting from dinner page
    if (document.querySelector(".dinner-hero")){
      document.querySelector(".dinner-hero").classList.remove("seen");
    }
    
    //add dessert section
    document.querySelector(".dessert-hero").classList.add("seen");
  });
}

//Enable search functionality
function bindSearchBars() {
  document
    .getElementById("topSearchButton")
    .addEventListener("click", function () {
      searchCarousels(false);
    });

  document
    .getElementById("topSearch")
    .addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.key === "Enter") {
        document.getElementById("topSearchButton").click();
      }
    });

  document
    .getElementById("heroSearchButton")
    .addEventListener("click", function () {
      searchCarousels(true);
    });

  document
    .getElementById("heroSearch")
    .addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.key === "Enter") {
        document.getElementById("heroSearchButton").click();
      }
    });
}

//Deletes all currently displayed carousels from the page
function clearCarousels() {
  //First clear recipe-wrapper
  var currCarousels = document.querySelectorAll("card-carousel");

  if (currCarousels) {
    for (let i = 0; i < currCarousels.length; i++) {
      currCarousels[i].remove();
    }
  }

  var currCarouselTitles = document.querySelectorAll("[id=carousel-title]");
  if (currCarouselTitles) {
    for (let i = 0; i < currCarouselTitles.length; i++) {
      currCarouselTitles[i].remove();
    }
  }

  //Resets carouselNum
  carouselNum = 0;
}

//The specific carousels to load on the home page
async function homeCarousels(numResults) {
  clearCarousels();

  //load carousel of local recipes

  await addCarouselsToPage("pasta", numResults, "Top Results for Pasta");
  await addCarouselsToPage("burger", numResults, "Top Burger Recipes");
  await addCarouselsToPage(
    "thanksgiving",
    numResults,
    "Top Thanksgiving Recipes"
  );
}

//The specific carousels to load on the breakfast page
async function breakfastCarousels(numResults) {
  clearCarousels();

  //load carousel of local recipes

  await addCarouselsToPage("breakfast", numResults, "Top Breakfast Recipes");
  await addCarouselsToPage("pancake", numResults, "Best Pancakes Around");
  await addCarouselsToPage("egg", numResults, "Top Egg Recipes");
  await addCarouselsToPage(
    "breakfast",
    numResults,
    "Vegan Breakfast Options",
    "vegan"
  );
}

//The specific carousels to load on the lunch page
async function lunchCarousels(numResults) {
  clearCarousels();

  //load carousel of local recipes

  await addCarouselsToPage("lunch", numResults, "Top Lunch Recipes");
  await addCarouselsToPage("sandwich", numResults, "Our Best Sandwiches");
  await addCarouselsToPage("lunch", numResults, "A Vegan Lunch", "vegan");
}

//The specific carousels to load on the dinner page
async function dinnerCarousels(numResults) {
  clearCarousels();

  //load carousel of local recipes

  await addCarouselsToPage("dinner", numResults, "Top Dinner Recipes");
  await addCarouselsToPage("pasta", numResults, "Top Pasta Recipes");
  await addCarouselsToPage(
    "dinner",
    numResults,
    "Vegan Dinner Options",
    "vegan"
  );
}
/**
 * 
 * @param {*} numResults 
 */
//The specific carousels to load on the dessert page
async function dessertCarousels(numResults) {
  clearCarousels();

  //load carousel of local recipes

  await addCarouselsToPage("dessert", numResults, "Top Dessert Recipes");
  await addCarouselsToPage("ice cream", numResults, "The Best of Ice Cream");
  await addCarouselsToPage(
    "dessert",
    numResults,
    "Vegan Dessert Options",
    "vegan"
  );
}

async function searchCarousels(searchingFromHero) {
  clearCarousels();

  let query = "";

  if (!searchingFromHero) query = document.getElementById("topSearch").value;
  else query = document.getElementById("heroSearch").value;

  await addCarouselsToPage(query, 6, "Top Results");
  await addCarouselsToPage(query, 6, "Vegetarian Options", "vegetarian");
  await addCarouselsToPage(query, 6, "Vegan Options", "vegan");
}

//Returns json data of resultant API search
//query = search term i.e. "pasta", numResults = number of recipes to return from search results
async function queryApi(query, numResults, diet) {
  let response = "";

  if (!diet) {
    response = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=" +
        query +
        "&number=" +
        numResults,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "e26569aaabmsh3816991676f73b4p175a23jsn09f144d9bffb",
        },
      }
    );
  } else {
    //alert("max time: " + maxTime);
    response = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=" +
        query +
        "&diet=" +
        diet +
        "&number=" +
        numResults,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "e26569aaabmsh3816991676f73b4p175a23jsn09f144d9bffb",
        },
      }
    );
  }

  return response.json();
}

//Returns json data of recipe with id specified in parameter 'id'

async function getRecipe(id) {
  //Query API by specific recipe id
  const response = await fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
      id +
      "/information",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "e26569aaabmsh3816991676f73b4p175a23jsn09f144d9bffb",
      },
    }
  );

  //Return data in json format
  return response.json();
}

//Search API for numResults number of recipes matching the query parameter;
//Returns an array of recipe ids matching the search parameters
async function getRecipeList(query, numResults, maxTime) {
  var recipeResults = [];

  //Query api
  await queryApi(query, numResults, maxTime).then((value) => {
    //console.log(value.results);

    //Parse json, put ids of returned recipes into recipeResults
    for (let i = 0; i < numResults; i++) {
      //TODO: error checking in case less than numResults results are actually returned
      recipeResults[i] = value.results[i].id;
    }

    //console.log(recipeResults)
  });

  return recipeResults;
}

//Global variable keeping track of carousels
var carouselNum = 0;
//Create carousel, add to page
async function addCarouselsToPage(searchQuery, numRecipes, title, diet) {
  // Makes a new empty carousel
  let newCarousel = document.createElement("card-carousel");

  //To be filled with all relevant recipe cards
  var carouselCards = [];

  //Queries api, stores all recipe ids matching search parameters in recipeList, an array of ids
  var recipeList;
  await getRecipeList(searchQuery, numRecipes, diet).then((value) => {
    recipeList = value;
  });

  //Caps maximum number of recipes in a carousel to prevent accidental excessive queries
  const MAX_RECIPES_IN_CAROUSEL = 12;
  for (let i = 0; i < recipeList.length && i < MAX_RECIPES_IN_CAROUSEL; i++) {
    // Makes a new recipe card
    const recipeCard = document.createElement("recipe-card");

    //Gets a recipe id from recipeList, queries the api for the recipe's data, stores the data in the card
    await getRecipe(recipeList[i]).then((value) => {
      //console.log(value);
      recipeCard.data = value;
    });

    //Stores the card into the array carouselCards
    carouselCards[i] = recipeCard;
  }

  //Inserts all the recipe cards in carouselCards into the carousel
  newCarousel.createCardCarousel(carouselCards);
  //console.log(carouselCards.length);

  let cardTitle = document.createElement("h2");
  cardTitle.innerText = title;
  cardTitle.setAttribute("id", "carousel-title");
  //alert(cardTitle.innerText + " vs " + title);
  cardTitle.innerHTML = title + '<i class="fa fa-long-arrow-right"></i>';
  document
    .querySelectorAll(".recipes-wrapper")
    [carouselNum].appendChild(cardTitle);

  //Appends the newly created and populated carousel to the class recipes-wrapper in the document
  document
    .querySelectorAll(".recipes-wrapper")
    [carouselNum].appendChild(newCarousel);

  //Binds the back and forward buttons to their respective carousel's functions

  document
    .querySelectorAll(".back")
    [carouselNum].addEventListener("click", () => {
      newCarousel.prevCards();
    });

  document
    .querySelectorAll(".forward")
    [carouselNum].addEventListener("click", () => {
      newCarousel.nextCards();
    });

  carouselNum++;

  //Return a reference to the carousel
  return newCarousel;
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
