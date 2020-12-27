
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var paperBall;
var ground;
var engine;

function setup() {
	createCanvas(1200, 700);
	background("white");
	engine = Engine.create();
	world = engine.world;


	//var ground  = createSprite(width/2,height-35,width,10)
	//ground.shapeColor = ("yellow");

	dustbin1 = new Dustbin(700,640,20,60);
	dustbin2 = new Dustbin(900,640,20,60);
	dustbin3 = new Dustbin(800,660,180,20); 

	paperBall = new Paper(295,660,25); 
	ground = new Ground(600,675,1200,20);

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  paperBall.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();  

  //drawSprites();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
	}
}



