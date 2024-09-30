/**
 * An ingredient in a recipe
 * @class
 * @constructor
 * @public
 */
class Ingredient {
  /** @type {string} */
  #name

  /** @type {number} */
  #amount

  /** @type {string} */
  #unit;

  /** @type {boolean} */
  #isVolume;

  /** @type {string} */
  #resource

  /**
   * Create a new instance of Ingredient
   * @param name {string} - The name of the ingredient
   * @param amount {number} - The amount of the ingredient
   * @param unit {string} - The name of the units the amount is in
   * @param isVolume {boolean} - Weather the unit represents a volume or not
   * @param resource {string} - The name of the 3D resource linked to this ingredient
  */
  constructor(name, amount, unit, isVolume, resource) {
    this.#name = name;
    this.#amount = amount;
    this.#unit = unit;
    this.#isVolume = isVolume;
    this.#resource = resource;
  }

  get name() {
    return this.#name;
  }
  get amount() {
    return this.#amount;
  }
  get unit() {
    return this.#unit;
  }
  get isVolume() {
    return this.#isVolume;
  }
  get resource() {
    return this.#resource;
  }

  #fractionize(n) {
    const unitNumber = Math.floor(n);
    const unit = (unitNumber || '').toString()
    const fractionNumber = Math.round((n - unitNumber) * 4);
    const fraction = fractionNumber === 0 ? '' : `${fractionNumber}/4`;

    return `${unit} ${fraction}`.trim();
  }

  stringify() {
    return `${this.#fractionize(this.amount)}${this.unit} x ${this.name}`;
  }
}

export default Ingredient;
