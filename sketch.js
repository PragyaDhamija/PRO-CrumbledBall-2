
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paper1,paper2;
var TrashBin1,TrashBin2,TrashBin3;

function setup() {
	var canvas = createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20)
	paper1 = new Paper(50,365)
	paper2 = new Paper(750,365)
	TrashBin1 = new TrashBin(262,340,50,20);
	//TrashBin2 = new TrashBin(538,340,20,100);
	//TrashBin3 = new TrashBin(400,380,250,20);

}


function draw() {
	background(220);

	Engine.update(engine);
 
  ground.display();
  paper1.display();
  paper2.display();
  TrashBin1.display();
  //TrashBin2.display();
  //TrashBin3.display();
  
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.trash,paper1.trash.position,{x:85,y:-85});
		Matter.Body.applyForce(paper2.trash,paper2.trash.position,{x:-85,y:-85})
	}
}



