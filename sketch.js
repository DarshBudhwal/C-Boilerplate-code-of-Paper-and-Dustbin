
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100,100,20,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display();
  drawSprites();
 
}



