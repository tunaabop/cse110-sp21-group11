# Decision- Use Spoonacular API for recipe retrieval rather than a MongoDB database 
## Context and Problem Statement: We want to retrieve recipes to display from an outside source. We previously had decided to have user-created recipes and store these in a MongoDB database; is this still the best route to take?
## Considered Options  
*  [MongoDB](https://www.mongodb.com/) - A no-SQL document-based database
 *  [Spoonacular API](https://spoonacular.com/food-api) - A powerful API with many features relevant to our purposes
## Decision Outcome: Chosen option: "Spoonacular API", because 
* Time is extremely limited and adding such a database would add extra layers of complexity.
* The Spoonacular API already houses 5000+ ready-to-use recipes in a standardized format for ease of parsing.
* The Spoonacular API already contains implementations or partial implementations of many previously proposed features, such as filterting search results by ingredients, cuisine and more, helping to reduce dev time even more. 
* The Spoonacular API has a very robust semantic search option.
* The Spoonacular API does indeed have a free plan.
