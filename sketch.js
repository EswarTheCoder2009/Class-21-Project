
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var edges;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Wall(0, 580, 1600, 20)
	leftBarrier = new Wall(580, 520, 18, 100)
	rightBarrier = new Wall(750, 520, 18, 100)


	var ball_options = {
		restitution: 0.3,
		isStatic: false,
		friction: 0,
		density: 1.2
	}

	ball = Matter.Bodies.circle(100, 100, 25, ball_options)
	World.add(world, ball)

	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.show();
  leftBarrier.show();
  rightBarrier.show();
  ellipse(ball.position.x, ball.position.y, 25)

  if (keyIsDown(UP_ARROW)) {
	Matter.Body.applyForce(ball, {x: 0, y:0}, {x:20, y:-35})
  }

  Engine.update(engine);
  drawSprites();
 
}

