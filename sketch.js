var car, wall, speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = ("White")
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (80, 80, 80);
  speed = random(55, 90);
  car.velocityX = speed;
  weight = random(400, 1500)
}

function draw() {
  background("Black");  
  
  if(wall.x-car.x < car.width/2 + wall.width/2) {
  car.velocityX = 0;

  var deformation = 0.5*weight*speed*speed/22500;
  if(deformation > 180) {
    car.shapeColor = (0, 255, 0);  
    }
  if(deformation < 180 && deformation > 100) {
  car.shapeColor = (230, 230, 0);  
  }
  if(deformation < 100) {  
    car.shapeColor = (255, 0, 0);
    }
  }
  
  drawSprites();
}
