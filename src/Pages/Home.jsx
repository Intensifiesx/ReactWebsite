// Description: This is the home page of the website

// Import CSS
import "../Color.css"
import Bg from "../Images/Bg.jpg";
import Skull from "../Images/Skull.png";

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


    const bgGeo = new THREE.BoxGeometry(210, 210, 20);
    const loader = new THREE.TextureLoader();
    let material = new THREE.MeshLambertMaterial({
      map: loader.load(Bg),
    });

    var mesh = new THREE.Mesh(bgGeo, material);
    mesh.position.set(0, 0, -40);
    scene.add(mesh);

    let time = 0;

    const animate = function () {
      requestAnimationFrame(animate);

      torus1.material.color.setRGB(
        Math.sin(0.1 * time + 0.1), 
        Math.sin(0.2 * time + 0.2), 
        Math.sin(0.3 * time + 0.3)
        );
      time += 0.01;

      stick.material.color.setRGB(Math.sin(time*0.1), Math.cos(time*0.5), Math.sin(time*0.9));
          
      
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
    <div style={{textAlign: "center", backgroundColor: "cadetblue"}}>
      <h1 style={{color:"white"}}>Home </h1>
      <p style={{color:"white"}}>Hi, this is our website project!!!!</p>
      <p>🥳🥳🥳🥳🥳</p>
      <input type="text" placeholder="Type something here"/>
      <canvas id="canvas" style={{display:"block", margin:"0 auto", marginTop:"20px"}}/>
      <div className="bottom-text" style={{marginBottom:"-290px", backgroundColor:"black", color:"white", padding:"10px"}}>
        <img src={Skull} alt="Skull" width="50px" height="50px" style={{position:"relative", right: "10px"}}/>
        ©2023 Made by Silvia and Zain
      </div>
    </div>
  );
}