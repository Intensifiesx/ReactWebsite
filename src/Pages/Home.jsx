// Description: This is the home page of the website

// Import CSS
import "../Color.css"

// Import libraries
import React, {useEffect} from "react";
import * as THREE from "three";

export default function MainPage() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000 
    );
    camera.position.z = 46;

    const canvas = document.getElementById("canvas");
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.51);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotlight = new THREE.SpotLight(0xffffff, 1);
    spotlight.castShadow = true;
    spotlight.position.set(0, 64, 32);
    scene.add(spotlight);

    const torusGeo = new THREE.TorusGeometry(10, 3, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({ color: 0xCA5C00 });
    const torus1 = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus1);

    const stickGeo = new THREE.CylinderGeometry(1, 1, 10, 20);
    const stickMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const stick = new THREE.Mesh(stickGeo, stickMat);
    stick.rotation.x = Math.PI / 2;
    scene.add(stick);

    const platformGeo = new THREE.BoxGeometry(200, 10, 50);
    const platformMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.set(0, -19, 0);
    scene.add(platform);

    const bgGeo = new THREE.BoxGeometry(210, 210, 20);
    const bgMat = new THREE.MeshStandardMaterial({ color: 0xF08080 });
    const bg = new THREE.Mesh(bgGeo, bgMat);
    bg.position.set(0, 0, -40);
    scene.add(bg);

    const animate = function () {
      requestAnimationFrame(animate);

      torus1.rotateX(0.02);
      torus1.rotateY(0.01);
      torus1.rotateZ(0.006);

      stick.rotateX(0.001);
      stick.rotateY(0.01);
      stick.rotateZ(0.006);

      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    // align the canvas to the center of the page
    <div style={{textAlign: "center"}}>
      <h1>Home </h1>
      <p>Hi, this is our website project!!!!</p>
      <p>🥳🥳🥳🥳🥳</p>
      <input type="text" placeholder="Type something here"/>
      <canvas id="canvas" style={{display:"block", margin:"0 auto", marginTop:"20px"}}/>
    </div>
  );
}