import * as THREE from 'three'

class Level {
  constructor() {
  }

  build() { console.error('No implementation for build') }
  animate() { console.error('No implementation for animate') }
  teardown() { console.error('No implementation for teardown') }
}

class MixLevel extends Level {
  #isInState1 = true
  #rayCast = new THREE.Raycaster();

  /**
   * @param {string} finalColor - The color of the final mixture
   * @param {string[]} ingredients - The resource names of all the ingredients
   */
  constructor(ingredients, finalColor) {
    this.ingredients = ingredients;
    this.finalColor = finalColor;
  }

  #onPointerMove(event) {

  }

  build() {
    document.addEventListener('pointermove', this.#onPointerMove)

    this.#isInState1 = true;
  }

  animate(camera,) {
    if (this.#isInState1) {

    } else {

    }
  }

  teardown() {
    document.removeEventListener('pointermove', this.#onPointerMove);
  }
}

