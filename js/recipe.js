const generatePage = (recipe) => {
  // Set the banner
  getElement("#banner").style["background-image"] = `url(${recipe.image})`;

  // Set title
  getElement("#title-h1").innerText = recipe.title;

  // Set ingredients
  const ingredientList = getElement("#ingredient-list");
  for (let ingredient of recipe.ingredients) {
    const li = createElement('li');
    li.innerText = ingredient;
    ingredientList.appendChild(li);
  }

  // Set steps
  const stepsList = getElement('#steps-list');
  for (let step of recipe.steps) {
    const li = createElement('li');
    li.innerText = step;
    stepsList.appendChild(li);
  }
}

const generateMissing = () => {
  // Set title
  getElement("#title-h1").innerText = "404"
}

const getRecipeIndex = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

(() => {
  const recipeIndex = getRecipeIndex();
  const recipe = recipes[recipeIndex];
  if (recipe !== undefined) generatePage(recipe);
  else generateMissing();
})();

