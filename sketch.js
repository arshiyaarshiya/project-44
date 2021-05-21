var bg_1, basket1_i,life_i;
var life,form;
var playerCount;

function preload(){
  bg_1 = loadImage("bg1.png");
  basket1_i = loadImage("basket2.png");
  life_i = loadImage("life.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight-100);
  basket1 = createSprite(400, 550, 50, 50);
  basket1.addImage(basket1_i);
  basket2 = createSprite(600, 550,50,50);
  basket2.addImage(basket1_i);
}


function draw() {
  background(bg_1);  
  drawSprites();
  spawnLife();
}

function spawnLife(){
  if (frameCount % 60 === 0 ){
    life = createSprite(random(100,900),50);
    life.addImage(life_i);
    life.velocityY = 2;
    life.scale = 0.08;
    life.lifetime = 500;
  }
}