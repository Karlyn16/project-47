var backgroundimg, girl, vulture, snake,spider, scorpion,cactus,badguy,ground,score;
var gameState = 0;
var gameState=1;

function preload() {
  backgroundimg=loadImage("desert2.jpeg");
  girl=loadImage("runninggirl (1).jpg");
  //vulture=loadImage("vulture.jpeg");
  //snake=loadImage("snake.jpeg");
  //spider=loadImage("spider.jpeg");
  //scorpion=loadImage("scorpion.png");
  //cactus=loadImage("cactus.png");
  //badguy=loadImage("badguy.jpeg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth/2,displayHeight/2);
  bg.addImage(backgroundimg);
  bg.scale = 1.5
  ground=createSprite(50,50)
  ground.visible=true;
  ground.velocityX=-5

  //snake=createSprite(50,50)
 // spider=createSprite(30,50)
 // scorpion=createSprite(50,50)
 // cactus=createSprite(50,50)

  
  
  
  //girl1=createSprite(20,displayHeight-20)
  //girl1.addImage("runninggirl(1)",girl)
  //girl1.scale=1;
  //vulture=createSprite(20,displayHeight-20);
  //vulture.addImage("vulture.jpeg")
  
 
  //ground.x=ground.width/2
  //ground.velocityX = -(5+ 3*score/100);

  
  }

  function draw() {
    background(255);  
    
    //if(gameState===0){
    //  score-score+Math.round (GetFrameRate()/60)
    //  ground.velocityX = -(5+ 3*score/100);
   // }
    //if(keyDown("space") && girl.y >= 159) {
    //  trex.velocityY = -12;
    //}
    
    if(Score>100){
      points+=1
      //positivesound.isPLAYED
    }
    girl.Collide(ground)
    spawnObstacles();
    spawn(vultures);
     
    if(obstaclesGroup.isTouching(trex)){
      gameState = 1;
  }


    if(ground.x<0){
      ground.x = ground.width/2;
    }
    drawSprites();
  }
//imag needs to be moving at a specific speed with a frame Count
// obstacles need to be spawn randomly using the function Rand
function obstacles(){
  scorpion.velocityX=-4
  cactus.velocityX=-4
  spider.velocityX=-4
  cactus.velocityX=-4
  snake.velocityX=-4
  
}

function vulture(){
  
}

function badguy(){

}




