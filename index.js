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
var geometry=new THREE.BoxGeometry(2.7,2.7,2.7);
var cubeMaterials = new THREE.MeshLambertMaterial({ map:new THREE.TextureLoader().load('box.jpg'), side: THREE.DoubleSide });
var cube= new THREE.Mesh( geometry, cubeMaterials );
scene.add(cube);
cube.position.x=7;
cube.position.y=0;
cube.position.z=0;



//floor
var floorGeometry = new THREE.CubeGeometry(40,2,20);
var floorMaterial = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('bg.jpg'),side:THREE.DoubleSide});
var floorcube = new THREE.Mesh(floorGeometry,floorMaterial);
floorcube.position.y=-5;
scene.add(floorcube);



camera.position.x=0;
camera.position.y=8;
camera.position.z=1;


//var ambientLight = new THREE.AmbientLight(0xFFFFFF,1  );
//scene.add(ambientLight);  

var light1 = new THREE.PointLight(0xFFFFFF,4,50);
scene.add(light1);

light1.position.z=8;
light1.position.x=12;
light1.position.y=0;




var light3 = new THREE.PointLight(0xFFFFFF,2,50);
scene.add(light3);

light3.position.z=20;
light3.position.x=0;
light3.position.y=10;



//orbit control
var controls = new THREE.OrbitControls( camera, renderer.domElement );


var GameLoop = function(){
    requestAnimationFrame(GameLoop);

    update();
    render();

};


GameLoop();