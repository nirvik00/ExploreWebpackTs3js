import * as THREE from 'three'
const scene = new THREE.Scene()
const camera= new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(10,0,0)
camera.lookAt(0,0,0);
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

let box= new THREE.BoxGeometry(5,5,5)
let mat = new THREE.MeshBasicMaterial({color:0xfff000})
let mesh = new THREE.Mesh(box, mat)
scene.add(mesh)
animationLoop();

function update(){
    mesh.rotation.x+=0.1;
    //mesh.rotation.y+=0.1;
    
}

function render(){
    renderer.render(scene, camera)
}

function animationLoop(){
    update();
    render();
    requestAnimationFrame(animationLoop);
}

