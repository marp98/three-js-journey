import * as THREE from "three";
import Experience from "../Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setSunLight();
  }

  setSunLight() {
    this.setSunLight = new THREE.DirectionalLight("#ffffff", 4);
    this.setSunLight.castShadow = true;
    this.setSunLight.shadow.camera.far = 15;
    this.setSunLight.shadow.mapSize.set(1024, 1024);
    this.setSunLight.shadow.normalBias = 0.05;
    this.setSunLight.position.set(3.5, 2, -1.25);
    this.scene.add(this.setSunLight);
  }
}
