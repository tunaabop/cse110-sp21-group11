export const fetchById = (id, func) => {
  await fetch(`https://api.spoonacular.com/recipes/${id}/information`)
  .then(res => res.json())
  .then(data => func(data['title'], data))
  .catch(console.error('failed fetch'));
}

export const fetchParams = (query, cuisine, diet, tag, func) => {
  await fetch(`https://api.spoonacular.com/recipes/complexSearch`, 
  {query: query,
  cuisine: cuisine,
  diet: diet,
  tag: tag,})
  .then(res => res.json())
  .then(data => func(data['title'], data))
  .catch(console.error('failed fetch'));
}