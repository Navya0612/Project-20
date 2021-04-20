var bgImage
var cat

function preload() {
   bgImage = loadImage("garden.png");
  catI1 = loadAnimation("cat1.png");
  mouseI1 = loadAnimation("mouse1.png");
 catI2 = loadAnimation("cat2.png,cat3.png");
   mouseI2 = loadAnimation("mouse2.png,mouse3.png");
}

function setup(){
    createCanvas(1000,800);
   cat = createSprite(600,500,60,60);
   cat.addAnimation("cat",catI1);
   mouse = createSprite(600,500,60,60);
   mouse.addAnimation("mouse", mouseI1);
}

function draw() {

   background("bgImage")

   if(cat.x - mouse.x < cat.width/2 - mouse.width/2
   && mouse.x - cat.x < cat.width/2 - mouse.width/2
   &&cat.y - mouse.y < cat.width/2 - mouse.width/2
   && mouse.y - cat.y < cat.width/2 - mouse.width/2){
  
   }

   cat.x = World.mouseX;
   cat.y = World.mouseY;

    drawSprites();
}


function keyPressed(){

   if(keycode === RIGHT_ARROW){
      mouse.addAnimation("teasing", mouseI2) ;
      mouse.changeAnimation("teasing");
      mouse.frameDelay = 25
    }

   if(keycode === LEFT_ARROW){
     mouse.addAnimation("teasing", mouseI2) ;
     mouse.changeAnimation("teasing");
     mouse.frameDelay = 25
   }
}
