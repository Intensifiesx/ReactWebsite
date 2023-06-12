// Description: This is the home page of the website

// Import CSS
import "../Color.css"
import * as THREE from "three";

// Import libraries
import {useEffect} from "react";

export default function MainPage() {
  useEffect(() => {
    // Create the scene and camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 500;

  // Attach the renderer to the canvas and set its settings
  const canvas = document.getElementById("canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight); // Fullscreen
  renderer.autoClear = false; // To allow render overlay on top of sprited sphere
  renderer.setClearColor(0x000000, 0.0); // Transparent background

  // Create particle parent
  let particle = new THREE.Object3D();
  scene.add(particle); // Add to center of scene

  // Create 5000 particles
  for (var i = 0; i < 5000; i++) {
    var mesh = new THREE.Mesh(
      new THREE.TetrahedronGeometry(2, 0), // Create tetrahedron with radius of 2
      new THREE.MeshPhongMaterial({
        // Create white particle material
        color: 0xffffff,
        flatShading: true,
      })
    );
    // Set particles positon
    mesh.position
      .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5) // Randomizes x,y,z +-0.5 positions in all quadrants
      .normalize() // Normalize the vector 0 to 1, results in a dome shape
      .multiplyScalar(90 + Math.random() * 700); // Multiply the length of the vector by 90 to 190
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2); // Randomize rotation from 0 to 2 radians or 0 to 360 degrees
    particle.add(mesh);
  }

  let circle = new THREE.Object3D(),
    skelet = new THREE.Object3D();
  scene.add(circle);
  scene.add(skelet);
  var mat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: true,
    shininess: 0,
  });

  let geom = new THREE.TorusGeometry(5, 2, 8, 50),
    geom2 = new THREE.TorusGeometry(7, 4.7, 16, 100);
  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 16;
  circle.add(planet);

  var mat2 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide,
  });
  var planet2 = new THREE.Mesh(geom2, mat2);
  planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
  skelet.add(planet2);

  var ambientLight = new THREE.AmbientLight(0x999999);
  scene.add(ambientLight);

  var lights = [];
  lights[0] = new THREE.DirectionalLight(0xffffff, 1);
  lights[0].position.set(1, 0, 0);
  lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);
  lights[1].position.set(0.75, 1, 0.5);
  lights[2] = new THREE.DirectionalLight(0x8200c9, 1);
  lights[2].position.set(-0.75, -1, 0.5);
  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);

  window.addEventListener(
    "resize",
    () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    false
  );

  let t = Math.random() + 0.001;
  const animate = function () {
    requestAnimationFrame(animate);

    particle.rotation.y -= 0.0015;
    circle.rotation.x -= t * 0.002;
    circle.rotation.y -= t * 0.004;
    skelet.rotation.x -= t * 0.002;
    skelet.rotation.y -= t * 0.004;
    
    renderer.clear();
    renderer.render(scene, camera);
  };

  animate();
  }, []);

  return (
    // align the canvas to the center of the page
    <div style={{textAlign: "center", backgroundColor: "cadetblue"}} className="gradientHome">
      <h1 style={{color:"white"}}>Home </h1>
      <p style={{color:"white"}}>Hi, this is our website project!!!!</p>
      <p>🥳🥳🥳🥳🥳</p>
      <input type="text" placeholder="Type something here"/>
      <canvas id="canvas" style={{display:"block", margin:"0 auto", marginTop:"20px"}}/>
      <div className="bottom-text" style={{marginBottom:"-290px", backgroundColor:"black", color:"white", padding:"15px"}}>
        ©2023 Made by Silvia and Zain
      </div>
    </div>
  );
}