var bow, bowImage ;
var arrow,arrowImage,arrowsGroup;
var green_balloon,green_balloonImage,greensGroup;
var red_balloon,red_balloonImage,redsGroup;
var pink_balloon,pink_balloonImage,pinksGroup; 
var blue_balloon,blue_balloonImage,bluesGroup;
var background,backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3.5
  
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redsGroup = createGroup();
  bluesGroup = createGroup();
  greensGroup = createGroup();
  pinksGroup = createGroup();
  arrowsGroup = createGroup();
  
  score = 0  
 
  
}

function draw() {

    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  bow.y = World.mouseY
  
  if (keyDown("space")) {
    createArrow();
    
  }
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if(arrowsGroup.isTouching(redsGroup)){
    redsGroup.destroyEach();
    arrowsGroup.destroyEach();
    score=score+1;
    
  }
  if(arrowsGroup.isTouching(bluesGroup)){
    bluesGroup.destroyEach();
    arrowsGroup.destroyEach();
    score=score+2;
    
  }
  if(arrowsGroup.isTouching(pinksGroup)){
    pinksGroup.destroyEach();
    arrowsGroup.destroyEach();
    score=score+3;
    
  }
  if(arrowsGroup.isTouching(greensGroup)){
    greensGroup.destroyEach();
    arrowsGroup.destroyEach();
    score=score+4;
    
  }
  
  drawSprites();
    text("Score: "+ score, 500,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redsGroup.add(red);
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  bluesGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greensGroup.add(green);   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinksGroup.add(pink);
}


 function createArrow() {
  var arrow= createSprite(100,100,60,10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowsGroup.add(arrow);
   
}
