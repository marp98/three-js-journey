import * as THREE from "three";
import Experience from "../Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setSunLight();
    this.setEnvironmentMap();
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

  setEnvironmentMap() {
    this.environmentMap = {};
    this.environmentMap.intensity = 0.4;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.environmentMap.texture.encoding = THREE.sRGBEncoding;

    this.scene.environment = this.environmentMap.texture;

    this.environmentMap.updateMaterial = () => {
      this.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true
        }
      });
    };

    this.environmentMap.updateMaterial();
  }
}
