const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   ground = new Ground(400,650,800,20);
   paper = new Paper(100,600,20);
   dustbin1 = new Dustbin(600,630,250,50);
   dustbin2 = new Dustbin(500,555,50,100);
   dustbin3 = new Dustbin(700,555,50,100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
  }
}

