
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground, survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey = createSprite(80, 315, 20, 20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;
  
  
ground = createSprite(400, 350, 900, 10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x);
survivalTime = 0;
}


function draw() {
background("aqua")
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime:" + survivalTime, 100, 50);

    
    
    
  
  
if(keyDown("space")&& monkey.y>=100){
monkey.velocityY = -12;

  
  


}
food();
obstacles();
  
monkey.velocityY = monkey.velocityY+ 0.8;
 if (ground.x < 0){
      ground.x = ground.width/2;
 
    }
  
monkey.collide(ground);
  
drawSprites() ;



}

function food(){
if(frameCount % 80 === 0){
var banana = createSprite(200, 200, 10, 40);
var rand = Math.round(random(120,200));
banana.addImage(bananaImage);
banana.scale = 0.1;
banana.velocityX = -4;
banana.lifetime = 50;
bananaGroup = new Group();
bananaGroup.add(banana);
} 
}
function obstacles(){
if (frameCount % 300 === 0){
   var obstacle = createSprite(300,325,10,40);
   obstacle.velocityX = -4
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.lifetime = 70;
}
}



