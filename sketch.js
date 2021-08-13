var bg;
var iss, issImg;
var spacecraft, spacecraftImg;
var hasDocked = false;

function preload(){
  bg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  spacecraftImg = loadImage("spacecraft1.png");
}

function setup() {
  createCanvas(800,500);
  spacecraft = createSprite(320, 330, 50, 50);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.2;
  iss = createSprite(400,200);
  iss.addImage(issImg);
}

function draw() {
  background(bg);

  
  if(hasDocked === false){
    spacecraft.x = spacecraft.x + random(-1,1);
    if (keyDown(LEFT_ARROW)){
      spacecraft.x -= 5;
    }
    if (keyDown(RIGHT_ARROW)){
      spacecraft.x += 5;
    }
    if (keyDown(UP_ARROW)){
      spacecraft.y -= 5;
    }
    if (keyDown(DOWN_ARROW)){
      spacecraft.y += 5;
    }
  }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 200, 400);
  }

  drawSprites();
}