var fr,mr;
function setup() {
  createCanvas(1200,800);
  fr = createSprite(600, 400, 50, 80);
  mr = createSprite(400, 200, 80, 30);
}

function draw() {
  background(255,255,255); 
  mr.x = World.mouseX;
  mr.y = World.mouseY;
  if(mr.x - fr.x < fr.width/2 +mr.width/2 && fr.x - mr.x < fr.width/2 +mr.width/2 && mr.y - fr.y < fr.height/2 +mr.height/2 && fr.y - mr.y < fr.height/2 +mr.height/2 ){
    

    mr.shapeColor = "red";
    fr.shapeColor = "red";

  }
  else {
    mr.shapeColor = "green";
    fr.shapeColor = "green";
  }
  drawSprites();
}