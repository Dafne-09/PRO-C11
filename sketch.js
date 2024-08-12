 var seaImg;
 var ship1;

function preload(){
seaImg=loadImage("sea.png");
ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1400,700);
  sea = createSprite(50,250)
  sea.addImage("sea",seaImg);
  sea.x = sea.width / 2;
  sea.velocityX =-4

  ship = createSprite(700,350);
  ship.addAnimation("ship", ship1);
  ship.scale = 0.5
  
}

function draw(){
  background("blue");


  if(sea.x < 0){
    sea.x = sea.width/2;
  }
 
  drawSprites();
}
