import Ingredient from "./ingredient.mjs"

/**
 * A cooking recipe
 * @class
 * @constructor
 * @public
 */
class Recipe {
  /** @type {string} */
  #title
  /** @type {Ingredient[]} */
  #ingredients
  /** @type {string[]} */
  #steps
  /** @type {number} */
  #rating
  /** @type {number} */
  #ratingCount
  /** @type {string} */
  #image
  /** @type {string} */
  #model3d

  /**
   * Create a new instance of Recipe
   * @param title {string} - The name of the recipe
   * @param ingredients {Ingredient[]} - A list of the needed ingredients
   * @param steps {string[]} - A list of the steps to follow
   * @param rating {number} - A rating from 0 to 5 on how good the recipe is
   * @param ratingCount {number} - The number of people who have rated this recipe
   * @param image {string} - An image representing this recipe
   * @param model3d {string} - A 3D resource representing this image
  */
  constructor(title, ingredients, steps, rating, ratingCount, image, model3d) {
    this.#title = title;
    this.#ingredients = ingredients
    this.#steps = steps
    this.#rating = rating
    this.#ratingCount = ratingCount
    this.#image = image
    this.#model3d = model3d
  }

  get title() {
    return this.#title;
  }

  get ingredients() {
    return this.#ingredients;
  }

  get steps() {
    return this.#steps;
  }

  get rating() {
    return this.#rating;
  }

  get ratingCount() {
    return this.#ratingCount;
  }

  get image() {
    return this.#image;
  }

  get model3d() {
    return this.#model3d;
  }
}

export default Recipe;
