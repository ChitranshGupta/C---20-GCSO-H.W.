/*

Note :- 

Car 3 is Zenia 
car 2 is Tourus
Car 1 is Cyclap


*/

var wall,wallimg;
var car1,car2,car3;

//function preload(){
// wallimg.loadImage("download.jpg");
//}
function setup() {
  createCanvas(800,400);
//createSprite(400, 200, 50, 50);

  wall = createSprite(780, 200, 10, 400);
// wall.addImage("w", wallimg);

}

function draw() {
  background(255,255,255); 
  random();

  drawSprites();
}

function random(){
  car1 = createSprite(80, 200, 50, 30);
  car2 = createSprite(80, 200, 50, 30);
  car3 = createSprite(80, 200, 50, 30);

  car1.velocityX = -3;
  car2.velocityX = -5;
  car3.velocityX = -7;

  if(car1.isTouching(wall) ){
    car1.shapeColor("green");
  
  }

  if(car2.isTouching(wall)){
    car2.shapeColor("yellow");

  }
  
  if(car3.isTouching(wall)){
    car3.shapeColor("red");

  }
}