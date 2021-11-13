var wall, thickness;
var bullet, speed, weight;
var damage;
function setup() {
  createCanvas(800, 800);
  thickness = random(28, 83);
  wall = createSprite(700, 200, thickness, height / 2);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 20, 20);

  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
  console.log(damage);
}

function draw() {
  background("black");
  bullet.velocityX = speed;
  if (bullet.isTouching(wall)) {
    if (damage >= 2 && damage <= 10) {
      bullet.velocityX = 0;
      wall.shapeColor = "green";
    } else {
      bullet.velocityX = 0;
      wall.shapeColor = "red";
    }
  }
  drawSprites();
}
