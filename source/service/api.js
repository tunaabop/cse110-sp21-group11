//var key = "4d388ae5990f41f195ca41c0f0a1a5bb";
var key = "199c50e0bf5a46d0b9b937e10db957c5";


export async function fetchById (id) {
  return new Proimise((resolve, reject) => {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
    .then(function(response) {
      resolve(true);
      return response.json();
    })
    .catch(reason => reject(reason));
  })
}
export async function fetchParams (parameters) {
  return new Promise((resolve, reject) => {
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&${parameters}`)
    .then(function(res) {
      resolve(res.json());
    })
    .catch((reason) => console.error(reason));
  })
}