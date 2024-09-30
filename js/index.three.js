import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { getElements } from './modules/util.mjs'

const elementsFor3d = getElements('div[data-model]');

for (const element of elementsFor3d) {
  let movement = 0;
  element.addEventListener('mouseenter', () => {
    movement = 0.01;
  });
  element.addEventListener('mouseleave', () => {
    movement = 0;
  });

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, element.offsetWidth / element.offsetHeight, 0.1, 1000);
  const light = new THREE.AmbientLight(0xFFFFFF);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  const spotLight = new THREE.SpotLight(0xddddff, 100);

  spotLight.position.set(5, 10, 0);
  spotLight.castShadow = true;

  scene.background = new THREE.Color(0xAAAABB);

  const loader = new GLTFLoader();
  let item
  loader.load(element.getAttribute('data-model'), function(gltf) {
    item = gltf.scene;
    scene.add(item)

  }, undefined, function(error) {
    console.error(error);
  });

  scene.add(light);
  scene.add(directionalLight);
  scene.add(spotLight);

  camera.position.z = 0.75;
  camera.position.y = 0.375;
  camera.rotation.x = -0.5;

  const renderer = new THREE.WebGLRenderer();

  const animate = () => {
    if (item) item.rotation.y += movement;
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);

  renderer.setSize(element.offsetWidth, element.offsetHeight);
  element.appendChild(renderer.domElement);
}

