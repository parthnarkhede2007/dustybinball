
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

	//Create the Bodies Here.
	paper = new Paper();
	base1 = new Ground();
	rect1 = new Dustbin(600,675,150,20);
	rect2 = new Dustbin(535,615,20,100);
	rect3 = new Dustbin(664,615,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  paper.display();
  base1.display();
  rect1.display();
  rect2.display();
  rect3.display();
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})	
	}
}


