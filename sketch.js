
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

var obstaclesGroup;
var bananasGroup;
var survival_time;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 390, 900, 10);
  ground.velocityX =-4;
  ground.x= ground.width/2;
  console.log(ground.x)

   obstaclesGroup =createGroup();
  bananasGroup = createGroup();
  
  survival_time = 0;
}


function draw() {
 background("lightblue");
  text("survival Time "+ survival_time, 200,50);

 survival_time = Math.round(frameCount/40);
  
  
  if(keyDown("space")&& monkey.y >= 354.3) {
        monkey.velocityY = -12;
    }
  console.log(monkey.y);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //add gravity
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  spawnbananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnbananas() {

  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(50,150));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananasGroup.add(banana);
  }
}

function spawnObstacles(){
 if (frameCount % 150 === 0){
   var obstacle = createSprite(600,365,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -4;         
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
 }
}



