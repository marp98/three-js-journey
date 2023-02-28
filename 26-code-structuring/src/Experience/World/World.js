import * as THREE from "three";
import Experience from "../Experience";
import Environment from "./Environment";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Test mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial();
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    this.resources.on("ready", () => {
      // Setup
      this.environment = new Environment();
    });
  }
}
