var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera (100,window.innerWidth/window.innerHeight,0.01,10000);
 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var update = function()
{
    //cube.rotation.x+=0.01;
    //cube.rotation.y+=0.02;

};

window.addEventListener('resize',function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
})

var render= function(){
    renderer.render(scene,camera)
};

//shape
var geometry=new THREE.BoxGeometry(2,2,2);
var cubeMaterials =[
    new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load('60083415.jpg'), side: THREE.DoubleSide }), //R
    new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load('60083415.jpg'), side: THREE.DoubleSide }), //L
    new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load('60083415.jpg'), side: THREE.DoubleSide }), //T
    new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load('xiangjiaojun.jpg'), side: THREE.DoubleSide }), //B
    new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load('60083415.jpg'), side: THREE.DoubleSide }), //F
    new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load('60083415.jpg'), side: THREE.DoubleSide }) //B
];

//shape color texture
var material = new THREE.MeshFaceMaterial(cubeMaterials);
var cube= new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z=3

//orbit control
var controls = new THREE.OrbitControls( camera, renderer.domElement );


var GameLoop = function(){
    requestAnimationFrame(GameLoop);

    update();
    render();

};


GameLoop();