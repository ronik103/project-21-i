
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	var ball_options ={
		restitution: 1,
		density:1.2
	}
	var wall_options ={
		isStatic:true,
	}

	//Create the Bodies Here.
    var ground = new Ground(400,690,800,20);

    ball = Bodies.circle(100,50,20,ball_options);
	World.add(world,ball);

    ellipseMode(RADIUS);
	rectMode(CENTER);

	Engine.run(engine);
    
	
}

function draw() {
  
  background(0);
  
ellipse(ball.position.x, ball.position.y, 20);
fill("brown")
//rect(ground.position.x,ground.position.y, 800,20)

  ground.display();
  drawSprites();
 
}



