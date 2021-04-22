const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 600);	
	
	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(1000,570,210,12);
	paper = new Paper(150,300,35);	
	ground = new Ground(width/2,height-20,1200,12);

	Engine.run(engine);
}

function draw() {
  background("black");
  Engine.update(engine);

  dustbin.display();
  paper.display();
  ground.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:55, y:-75});
	}
}