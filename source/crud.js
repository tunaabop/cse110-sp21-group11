window.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("addRecipeBtn").addEventListener("click", addRecipe);
  /**  document.getElementById("cancel").addEventListener("click", cancelRecipe);
  document.getElementById("edit").addEventListener("click", updateRecipe);
  document
    .getElementById("cancelEdit")
    .addEventListener("click", cancelEditRecipe); */
}

function addRecipe() {
  window.location.href = "crud.html";
}

/** 
function cancelRecipe() {}

function updateRecipe() {}

function cancelEditRecipe() {}

*/
