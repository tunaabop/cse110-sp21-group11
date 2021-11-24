var key = "4d388ae5990f41f195ca41c0f0a1a5bb";
export async function fetchById(id) {
  // eslint-disable-next-line no-undef
  return new Proimise((resolve, reject) => {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
      .then(function (response) {
        resolve(true);
        return response.json();
      })
      .catch(reason => reject(reason));
  });
}
export async function fetchParams(parameters) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, _reject) => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&${parameters}`)
      .then(function (res) {
        resolve(res.json());
      })
      .catch((reason) => console.error(reason));
  });
}