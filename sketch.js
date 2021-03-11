var canvas;
var music;
var b1,b2,b3,b4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);
     //create 4 different surfaces
     b1=createSprite(1,590,190,50);
     b1.shapeColor="yellow";
     b2=createSprite(190,590,150,50);
     b2.shapeColor="red"
     b3=createSprite(350,590,100,50);
     b3.shapeColor="blue";
     b4=createSprite(505,590,150,50);
     b4.shapeColor="green";
    //create box sprite and give velocity
   box=createSprite(random(20,170),390,100,40);
   box.shapeColor="white"
   box.velocityX=4;
   box.velocityY=6;
}
function draw(){
 background("lightblue")
edges=createEdgeSprites();
box.bounceOff(edges);
if(box.isTouching(b1)&& b1.bounceOff(box)){
box.shapeColor="yellow";
}
if(box.isTouching(b2)&& b2.bounceOff(box)){
    box.shapeColor="red";
}
if(box.isTouching(b3)&& b3.bounceOff(box)){
    box.shapeColor="blue";
}
if(box.isTouching(b4)&& b4.bounceOff(box)){
    box.shapeColor="green";
}
    drawSprites();
}