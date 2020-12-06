
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(750, 600);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Bobclass(250,400,50);
	ball2 = new Bobclass(300,400,50);
	ball3 = new Bobclass(350,400,50);
	ball4 = new Bobclass(400,400,50);
	ball5 = new Bobclass(450,400,50);
	roof1 = new Roofclass(350,200,250,20);
	rope1 = new Ropeclass(ball1.body,roof1.body,-bobDiameter*2,0);
	rope2 = new Ropeclass(ball2.body,roof1.body,-bobDiameter*2,0);
	rope3 = new Ropeclass(ball3.body,roof1.body,-bobDiameter*2,0);
	rope4 = new Ropeclass(ball4.body,roof1.body,-bobDiameter*2,0);
	rope5 = new Ropeclass(ball5.body,roof1.body,-bobDiameter*2,0);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);
  strokeWeight(4);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

}



