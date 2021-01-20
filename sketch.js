// declaring global variables
var monkey , monkey_running
var banana ,bananaImage, OBSTACLE, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  // loading animations and images
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  // creating canvas
  createCanvas(500,380);
  
  // creating obstacle
 
  //creating monkey.
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  // creating ground
  ground = createSprite(400,350,1000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  // creating groups
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  //score
  score = 0;
  
}


function draw() {
  
  //creating background.
background(255);
  
  //displaying score;
  var SurvivalTime = 0;
  text("score: "+score,250,10);
  textSize(30);
  
  SurvivalTime = Math.round(frameCount/frameRate());
  text("Survival Time: "+SurvivalTime,150,50);
  textSize(30);
  
  
  // creating scrolling ground.
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
   //making monkey jump.
 if(keyDown("space")){
   monkey.velocityY = -12;
 }
  
  //giving gravity to the monkey so that it will come back after jumping.
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //colliding monkey from the ground so that it will not fall off.
  monkey.collide(ground);
  
//functions.
  food();
  obstacles();
  
 // draw sprites
  drawSprites();
  
}

function food(){
  
    // creating sprite after very 80 frames.
  if(World.frameCount%80=== 0){
    banana = createSprite(500,200,10,10)
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    
    banana.y = Math.round(random(120,200));
    banana.velocityX = -4;
    // giving life to the sprite which prevents memory leak.
    banana.lifetime=150;
  
    //adding sprite to the group
    FoodGroup.add(banana);
  
    
  }
  }

function obstacles(){

if(World.frameCount%300===0){
  OBSTACLE = createSprite(500,310,10,30);
  OBSTACLE.addImage(obstacleImage);
  OBSTACLE.velocityX = -4;
  OBSTACLE.lifetime = 150;
  OBSTACLE.scale = 0.2;
  
  obstacleGroup.add(OBSTACLE);
}

 

}





