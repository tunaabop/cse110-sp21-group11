import { fetchParams, fetchById } from "./service/api.js";
const recipes = []; // instead of using json files, we want recipes from the API
const recipeData = {};  // used to access the recipe data from Spoonacular

//We're using the free Spoonacular api plan; each key in this array can do 150 requests per day. 
//Pls make a free Spoonacular api account and add your key to this array!
const apiKeys = ["4d388ae5990f41f195ca41c0f0a1a5bb", "199c50e0bf5a46d0b9b937e10db957c5", "c0444bbab49f48e1a3b5afa0054f3f67", "a29de94d61a64814b01ebe1ae8f6fb82", "9de1898ae94b46298bf1b5eb0a3151bb"];

//router
const router = {};

/*
var dummyRecipe1 = ` {"extendedIngredients":[{"id":20081,"aisle":"Baking","image":"flour.png","consistency":"solid","name":"flour","nameClean":"wheat flour","original":"2 tablespoons Flour","originalString":"2 tablespoons Flour","originalName":"Flour","amount":2.0,"unit":"tablespoons","meta":[],"metaInformation":[],"measures":{"us":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"solid","name":"green onions","nameClean":"spring onions","original":"cup Green Onions, chopped","originalString":"cup Green Onions, chopped","originalName":"Green Onions, chopped","amount":1.0,"unit":"cup","meta":["chopped"],"metaInformation":["chopped"],"measures":{"us":{"amount":1.0,"unitShort":"cup","unitLong":"cup"},"metric":{"amount":236.588,"unitShort":"ml","unitLong":"milliliters"}}},{"id":1085,"aisle":"Milk, Eggs, Other Dairy","image":"milk.jpg","consistency":"liquid","name":"non-fat milk","nameClean":"fat free milk","original":"1 1/4 cups Non-Fat Milk","originalString":"1 1/4 cups Non-Fat Milk","originalName":"Non-Fat Milk","amount":1.25,"unit":"cups","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":295.735,"unitShort":"ml","unitLong":"milliliters"}}},{"id":4053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"liquid","name":"olive oil","nameClean":"olive oil","original":"2 tablespoons Olive Oil","originalString":"2 tablespoons Olive Oil","originalName":"Olive Oil","amount":2.0,"unit":"tablespoons","meta":[],"metaInformation":[],"measures":{"us":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":11282,"aisle":"Produce","image":"brown-onion.png","consistency":"solid","name":"onion","nameClean":"onion","original":"2 tablespoons Onion, minced","originalString":"2 tablespoons Onion, minced","originalName":"Onion, minced","amount":2.0,"unit":"tablespoons","meta":["minced"],"metaInformation":["minced"],"measures":{"us":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1033,"aisle":"Cheese","image":"parmesan.jpg","consistency":"solid","name":"parmesan cheese","nameClean":"parmesan","original":"1/4 cup Parmesan Cheese, grated","originalString":"1/4 cup Parmesan Cheese, grated","originalName":"Parmesan Cheese, grated","amount":0.25,"unit":"cup","meta":["grated"],"metaInformation":["grated"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":59.147,"unitShort":"ml","unitLong":"milliliters"}}},{"id":11297,"aisle":"Produce;Spices and Seasonings","image":"parsley.jpg","consistency":"solid","name":"parsley","nameClean":"parsley","original":"cup Fresh Parsley or Basil, chopped","originalString":"cup Fresh Parsley or Basil, chopped","originalName":"Fresh Parsley or Basil, chopped","amount":1.0,"unit":"cup","meta":["fresh","chopped"],"metaInformation":["fresh","chopped"],"measures":{"us":{"amount":1.0,"unitShort":"cup","unitLong":"cup"},"metric":{"amount":236.588,"unitShort":"ml","unitLong":"milliliters"}}},{"id":20420,"aisle":"Pasta and Rice","image":"fusilli.jpg","consistency":"solid","name":"pasta","nameClean":"pasta","original":"8 ounces Tubular Pasta","originalString":"8 ounces Tubular Pasta","originalName":"Tubular Pasta","amount":8.0,"unit":"ounces","meta":[],"metaInformation":[],"measures":{"us":{"amount":8.0,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":226.796,"unitShort":"g","unitLong":"grams"}}},{"id":11304,"aisle":"Produce","image":"peas.jpg","consistency":"solid","name":"peas","nameClean":"petite peas","original":"1 cup Frozen Peas, thawed","originalString":"1 cup Frozen Peas, thawed","originalName":"Frozen Peas, thawed","amount":1.0,"unit":"cup","meta":["frozen","thawed"],"metaInformation":["frozen","thawed"],"measures":{"us":{"amount":1.0,"unitShort":"cup","unitLong":"cup"},"metric":{"amount":236.588,"unitShort":"ml","unitLong":"milliliters"}}},{"id":6168,"aisle":"Condiments","image":"hot-sauce-or-tabasco.png","consistency":"liquid","name":"pepper sauce","nameClean":"hot sauce","original":"1 dsh Hot Pepper Sauce","originalString":"1 dsh Hot Pepper Sauce","originalName":"dsh Hot Pepper Sauce","amount":1.0,"unit":"","meta":["hot"],"metaInformation":["hot"],"measures":{"us":{"amount":1.0,"unitShort":"","unitLong":""},"metric":{"amount":1.0,"unitShort":"","unitLong":""}}},{"id":15121,"aisle":"Canned and Jarred","image":"canned-tuna.png","consistency":"solid","name":"water-packed tuna","nameClean":"tuna packed in water","original":"6 1/2 ounces Can Water-Packed Tuna, drained","originalString":"6 1/2 ounces Can Water-Packed Tuna, drained","originalName":"Water-Packed Tuna, drained","amount":6.5,"unit":"ounces","meta":["drained"],"metaInformation":["drained"],"measures":{"us":{"amount":6.5,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":184.272,"unitShort":"g","unitLong":"grams"}}}],"id":654959,"title":"Pasta With Tuna","readyInMinutes":45,"servings":4,"sourceUrl":"http://www.foodista.com/recipe/K6QWSKQM/pasta-with-tuna","image":"https://spoonacular.com/recipeImages/654959-556x370.jpg","imageType":"jpg","summary":"Pasta With Tuna might be just the main course you are searching for. One serving contains <b>421 calories</b>, <b>24g of protein</b>, and <b>10g of fat</b>. For <b>$1.68 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. Head to the store and pick up flour, onion, peas, and a few other things to make it today. It is a good option if you're following a <b>pescatarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/pasta-and-tuna-salad-ensalada-de-pasta-y-atn-226303\">Pastan and Tuna Salad (Ensalada de Pasta y Atún)</a>, <a href=\"https://spoonacular.com/recipes/tuna-pasta-565100\">Tuna Pasta</a>, and <a href=\"https://spoonacular.com/recipes/tuna-pasta-89136\">Tuna Pasta</a> for similar recipes.","cuisines":[],"dishTypes":["lunch","main course","main dish","dinner"],"diets":["pescatarian"],"occasions":[],"winePairing":{"pairedWines":[],"pairingText":"No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.","productMatches":[]},"instructions":"<ol><li>Cook pasta in a large pot of boiling water until al dente. Drain and return to warm pot. Put olive oil in saucepan and add onion. Saute until transparent. Stir in flour and cook for a few seconds and then whisk in milk. Stir constantly until this thickens. Add peas, tuna (shredded into chunks,) parsley, green onions, cheese and hot pepper sauce. Pour over pasta and stir gently to mix. Serve at once.</li></ol>","analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Cook pasta in a large pot of boiling water until al dente.","ingredients":[{"id":20420,"name":"pasta","localizedName":"pasta","image":"fusilli.jpg"},{"id":14412,"name":"water","localizedName":"water","image":"water.png"}],"equipment":[{"id":404752,"name":"pot","localizedName":"pot","image":"stock-pot.jpg"}]},{"number":2,"step":"Drain and return to warm pot. Put olive oil in saucepan and add onion.","ingredients":[{"id":4053,"name":"olive oil","localizedName":"olive oil","image":"olive-oil.jpg"},{"id":11282,"name":"onion","localizedName":"onion","image":"brown-onion.png"}],"equipment":[{"id":404669,"name":"sauce pan","localizedName":"sauce pan","image":"sauce-pan.jpg"},{"id":404752,"name":"pot","localizedName":"pot","image":"stock-pot.jpg"}]},{"number":3,"step":"Saute until transparent. Stir in flour and cook for a few seconds and then whisk in milk. Stir constantly until this thickens.","ingredients":[{"id":20081,"name":"all purpose flour","localizedName":"all purpose flour","image":"flour.png"},{"id":1077,"name":"milk","localizedName":"milk","image":"milk.png"}],"equipment":[{"id":404661,"name":"whisk","localizedName":"whisk","image":"whisk.png"}]},{"number":4,"step":"Add peas, tuna (shredded into chunks,) parsley, green onions, cheese and hot pepper sauce.","ingredients":[{"id":6168,"name":"hot sauce","localizedName":"hot sauce","image":"hot-sauce-or-tabasco.png"},{"id":11291,"name":"green onions","localizedName":"green onions","image":"spring-onions.jpg"},{"id":11297,"name":"parsley","localizedName":"parsley","image":"parsley.jpg"},{"id":1041009,"name":"cheese","localizedName":"cheese","image":"cheddar-cheese.png"},{"id":11304,"name":"peas","localizedName":"peas","image":"peas.jpg"},{"id":10015121,"name":"tuna","localizedName":"tuna","image":"canned-tuna.png"}],"equipment":[]},{"number":5,"step":"Pour over pasta and stir gently to mix.","ingredients":[{"id":20420,"name":"pasta","localizedName":"pasta","image":"fusilli.jpg"}],"equipment":[]},{"number":6,"step":"Serve at once.","ingredients":[],"equipment":[]}]}],"originalId":null,"spoonacularSourceUrl":"https://spoonacular.com/pasta-with-tuna-654959"} `;
*/

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


  const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKeys[0] + '&query=' + query + '&number=' + numResults);


  return response.json();

}


//Returns json data of recipe with id specified in parameter 'id'
async function getRecipe(id) {
  //Query API by specific recipe id
  const response = await fetch('https://api.spoonacular.com/recipes/' + id + '/information?apiKey=' + apiKeys[0]);


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

}

