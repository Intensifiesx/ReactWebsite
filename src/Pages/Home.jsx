// Description: This is the home page of the website

// Import CSS
import "../Color.css"
import * as THREE from "three";

// Import libraries
import {useEffect} from "react";

function getHexColor(){
  return "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
}

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
  camera.position.z = 250;
  camera.position.y = -190;
  camera.rotateX(0.5);

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

  let squares = [], squaresPosY = [], id = 0;
  for(let i = 0, x = -360; i < 22; i++, x += 35) {
    let layerColor = getHexColor();
    for(let k = 0, y = 100; k < 11; k++, y -= 30) {
      squares[id] = new THREE.Mesh(
        new THREE.BoxGeometry(25, 25, 25),
        new THREE.ShaderMaterial({
          uniforms: {
            color: { value: new THREE.Color(layerColor) },
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 color;
            varying vec2 vUv;
            void main() {
              gl_FragColor = vec4(color * vUv.x, 1.0);
            }
          `,
        })
      );
      squares[id].position.set(x, y, 0);
      squaresPosY[id] = y;
      squares[id].rotation.set(0, 0, 0);
      scene.add(squares[id]);
      id++;
    }
  }


  window.addEventListener(
    "resize",
    () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    false
  );

  console.log(squares);

  // Render loop
  const animate = () => {
    requestAnimationFrame(animate);
    squares.forEach((square) => {
      square.position.x += 0.3;
      square.rotation.y += 0.01;
      if(square.position.x > 350)
        square.position.x -= 770;
    });

    renderer.clear();
    renderer.render(scene, camera);
  };


  animate();
  }, []);

  return (
    // align the canvas to the center of the page
    <div style={{textAlign: "center", backgroundColor: "cadetblue"}} className="gradientHome">

      <div style={{paddingTop:"30px"}}></div>
      <div className="cleanText" >
        <h1>Home </h1>
        <p>Welcome to our React website!!<br></br>🥳🥳🥳🥳🥳</p>
      </div>
      
      <canvas id="canvas" style={{display:"block", margin:"0 auto", marginTop:"20px"}}/>
      <div className="bottom-text" style={{marginBottom:"-340px", backgroundColor:"black", color:"white", padding:"15px"}}>
        ©2023 Made by Silvia and Zain
      </div>
    </div>
  );
}