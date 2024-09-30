import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { getElement } from './modules/util.mjs'

const gameParent = getElement('#game-screen');

/** @var {THREE.Vector2} */
let mousePos = undefined;
/** @var {THREE.Raycaster} */
let raycaster = undefined;
/** @var {THREE.Camera} */
let camera = undefined;
/** @var {THREE.Scene} */
let scene = undefined;
/** @var {THREE.Renderer} */
let renderer = undefined;
/** @var {THREE.Light} */
let light = undefined;
/** @var {THREE.Mesh} */
let floor = undefined;
/** @var {THREE.Mesh} */
let plane = undefined;

/** @type {THREE.Mesh} */
let bowl = undefined;

/**
* @typedef {Object} FallingIngredient
* @property {number} speed - The element's speed falling.
* @property {THREE.Mesh} mesh - The element's mesh.
*/
/** @type {FallingIngredient[]} */
let ingredients = [];

/** 
 * Clamps a number between a minimum and a maximum
 * @param n {number} - The number to be clamped
 * @param min {number} - The minimum number for the clamp
 * @param max {number} - The maximum number for the clamp
 * @returns {number} - The clamped number
 */
const clamp = (n, min, max) => {
  return Math.min(Math.max(n, min), max);
}

const animate = () => {
  if (!mousePos || !raycaster || !camera || !scene || !renderer || !light || !floor || !plane || !bowl) return;
  renderer.render(scene, camera);

  raycaster.setFromCamera(mousePos, camera);
  const intersections = raycaster.intersectObject(plane)
  for (const intersection of intersections) {
    bowl.position.x = clamp(intersection.point.x, -0.5, 0.5);
    bowl.position.y = clamp(intersection.point.y, -0.5, 0.5);
    bowl.position.z = clamp(intersection.point.z, -0.5, 0.5);
  }
}

const onPointerMove = (event) => {
  const rect = gameParent.getBoundingClientRect();

  mousePos.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mousePos.y = - ((event.clientY - rect.top) / rect.height) * 2 + 1;

  console.log(mousePos);
}

const startGame = () => {
  mousePos = new THREE.Vector2(0, 0);
  raycaster = new THREE.Raycaster();

  document.addEventListener('pointermove', onPointerMove);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xAAAABB);

  camera = new THREE.PerspectiveCamera(75, gameParent.offsetWidth / gameParent.offsetHeight, 0.1, 1000);
  camera.position.z = 0.75;
  camera.position.y = 0.375;
  camera.rotation.x = -0.5;

  light = new THREE.AmbientLight(0xFFFFFF);
  scene.add(light);

  {
    const geometry = new THREE.PlaneGeometry(100, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = - Math.PI / 2;  // -90 degrees in radians
    plane.position.y = 0.08;

    plane.visible = false;
  }
  scene.add(plane);

  renderer = new THREE.WebGLRenderer();

  const loader /** @Type {GLTFLoader} */ = new GLTFLoader();
  loader.load('res/3d/kenny/floor.glb', function(gltf) {
    floor = gltf.scene;

    floor.scale.x *= 2;
    floor.scale.z *= 2;

    scene.add(floor);

  }, undefined, function(error) {
    console.error(error);
  });

  loader.load("res/3d/kenny/bowl.glb", function(gltf) {
    bowl = gltf.scene;

    bowl.scale.x = 0.5;
    bowl.scale.y = 0.5;
    bowl.scale.z = 0.5;

    scene.add(bowl);
  }, undefined, function(error) {
    console.log(error);
  });

  renderer.setAnimationLoop(animate);

  renderer.setSize(gameParent.offsetWidth, gameParent.offsetHeight);
  gameParent.appendChild(renderer.domElement);
};

const killGame = () => {
  gameParent.innerHTML = ''

  document.removeEventListener('pointermove', onPointerMove);
}

const addOpenAndCloseDialogFunctionality = () => {
  const dialog = getElement("#game-dialog");
  const playButton = getElement("#play-button");
  const closeButton = getElement('#dialog-close button');

  playButton.addEventListener('click', () => {
    dialog.showModal();
    dialog.classList.remove("closing");
    startGame();
  })

  closeButton.addEventListener('click', () => {
    dialog.classList.add("closing");
    setTimeout(() => {
      dialog.close();
      killGame();
    }, 400);
  });

  dialog.addEventListener('close', (e) => {
    e.preventDefault();
    dialog.classList.add('closing');
    setTimeout(() => {
      dialog.close();
      killGame();
    }, 400);
  })

}

(() => {
  addOpenAndCloseDialogFunctionality();
})();
