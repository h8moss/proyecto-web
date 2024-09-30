import { createElement, getElement } from './modules/util.mjs'
import { recipes } from './db';
import Recipe from './modules/models/Recipe.mjs';

/** 
 * Fill the data in the page using a recipe
 * @param recipe {Recipe} - The recipe to fill data for
 */
const generatePage = (recipe) => {
  // Set the banner
  getElement("#banner").style["background-image"] = `url(${recipe.image})`;

  // Set title
  getElement("#title-h1").innerText = recipe.title;

  // Set ingredients
  const ingredientList = getElement("#ingredient-list");
  for (let ingredient of recipe.ingredients) {
    const li = createElement('li');
    li.innerText = ingredient.stringify();
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

/**
 * Gets the id field of the URL parameters
 * @returns {number} - The value of id or undefined if it doesn't exist
 */
const getRecipeIndex = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const result = urlParams.get("id");
  return result === undefined ? undefined : parseInt(result);
}

(() => {
  const recipeIndex = getRecipeIndex();
  if (recipeIndex !== undefined) {
    const recipe = recipes[recipeIndex];
    generatePage(recipe);
  }
  else generateMissing();
})();

