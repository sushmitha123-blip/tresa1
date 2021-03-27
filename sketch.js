
var trex ,trex_running,ground,invisibleground;
function preload(){
  
  trex_running = loadAnimation("bunny1[1].png","bunny2[1].png");
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.3;
  
  ground=createSprite(300,200,600,10);
  invisbleground=createSprite(300,200,600,10);
  ground.velocityX=-2
  
   ball1=createSprite(400,70,10,50);
   ball2=createSprite(420,80,10,50);
   ball3=createSprite(480,80,10,50);
   ball4=createSprite(500,80,10,50);
  
 ball1.velocityY=-2
  ball2.velocityY=-2  
   ball3.velocityY=-2
   ball4.velocityY=-2
  
}

function draw(){
  background("black")
  drawSprites();
 createEdgeSprites();
  
  if(keyDown("space")){
    trex.velocityY=-4      
  }
  trex.velocityY=trex.velocityY+0.8
  if(ground.x<300){
    ground.x=ground.width/2
    
  }
trex.collide(invisbleground);
  
  
}