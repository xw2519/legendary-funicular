import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Experience from './Experience';

export default class Camera {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    this.createPerspectiveCamera()
    this.createOrthographicCamera()
    this.createOrbitControls()
  }

  createPerspectiveCamera() {
    this.prespectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 1000)
    this.scene.add(this.prespectiveCamera)
    this.prespectiveCamera.position.z = 5
  }

  createOrthographicCamera() {
    this.frustrum = 5
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.sizes.frustrum / 2,
      -this.sizes.frustrum / 2,
      -100,
      100
    )
    this.scene.add(this.orthographicCamera)
  }

  createOrbitControls() {
    this.controls = new OrbitControls(this.prespectiveCamera, this.canvas)
    this.controls.enableDamping = true
    this.controls.enableZoom = true
  }

  resize() {
    // Update the perspective camera when resized
    this.prespectiveCamera.aspect = this.sizes.aspect
    this.prespectiveCamera.updateProjectionMatrix()

    // Update the orthographic camera when resized
    this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2
    this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2
    this.orthographicCamera.top = this.sizes.frustrum / 2
    this.orthographicCamera.bottom = -this.sizes.frustrum / 2
  }

  update() {
    this.controls.update()
  }
}
