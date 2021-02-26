var bullet, wall, speed, weight, thickness 


function setup() {
  createCanvas(1600,800);

  bullet = createSprite(50, 400, 50, 50);
 wall = createSprite(1500, 400, 50, 100);

 speed = random(220,320);
 weight = random(30,50);
 thickness = random(22,83);

bullet.velocityX = speed;


}

function draw() {
  background(255,255,255);  

if (hasCollided(bullet , wall )){
  bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (damage > 10 ){
    bullet.shapeColor = "red"
  }
 
  if (damage < 10 ){
    bullet.shapeColor = "lime"
  }
}
  drawSprites();
}

function hasCollided(lbullet, lwall){
 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x;
 if ( bulletRightEdge >= wallLeftEdge){
   return true;
 }
 return false;
}

