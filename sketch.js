
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, dustbin1, dustbin2;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,500,10);
	ground = new Ground(400,600,800,20);
	dustbin = new Dustbin(700,580,150,10);
	dustbin1 = new Dustbin(625,540,10,100);
	dustbin2 = new Dustbin(775,540,10,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display();
  ground.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body,paper.body.position,{x:3.2,y:-5})

	}
}



