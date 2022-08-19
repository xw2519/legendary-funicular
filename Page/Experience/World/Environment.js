import * as THREE from 'three'

import Experience from '../Experience';

export default class Environment {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.setSunlight()
  }

  setSunlight() {
    this.sunlight = new THREE.DirectionalLight('#FFFFFF', 3)
    this.sunlight.castShadow = true
    this.sunlight.shadow.camera.far = 20
    this.sunlight.shadow.mapSize.set(1024, 1024)
    this.sunlight.shadow.normalBias = 0.05
    this.sunlight.position.set(2, 8, 4)
    this.scene.add(this.sunlight)
  }

  resize() {}

  update() {}
}
