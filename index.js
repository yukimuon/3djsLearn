var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera (100,window.innerWidth/window.innerHeight,1,100);
 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var update = function()
{
    cube.rotation.x+=0.01;
    cube.rotation.y+=0.02;

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
var geometry=new THREE.BoxGeometry(1,1,1);

//shape color texture
var material = new THREE.MeshBasicMaterial({color:0xFFFFFF, wireframe:true});
var cube= new THREE.Mesh( geometry, material);
scene.add(cube);

camera.position.z=3


var GameLoop = function(){
    requestAnimationFrame(GameLoop);

    update();
    render();

};


GameLoop();