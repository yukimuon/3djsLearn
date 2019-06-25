var scene = new THREE.Scene();
/*PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
fov — Camera frustum vertical field of view.
aspect — Camera frustum aspect ratio.
near — Camera frustum near plane.
far — Camera frustum far plane.*/
var camera = new THREE.PerspectiveCamera (100,window.innerWidth/window.innerHeight,1,100);


var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//How the scene changes
var update = function()
{

};

//Control when the window resizes
window.addEventListener('resize',function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
})

//renderer function
var render= function(){
    renderer.render(scene,camera)
};

//shape
var geometry=new THREE.BoxGeometry(1,1,1);

//shape, color, texture
var material = new THREE.MeshBasicMaterial({color:0xFFFFFF, wireframe:true});
var cube= new THREE.Mesh( geometry, material);
scene.add(cube);

//initial camera position
camera.position.z=3

//start function
var GameLoop = function(){
    requestAnimationFrame(GameLoop);
    update();
    render();
};

//initialization
GameLoop();