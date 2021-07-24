// defining constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// defining variables
var engine, world;
var ground, slingshot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9,  block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;
var polygon;

function preload()
{}

function setup() {

    // creating canvas 
	createCanvas(800, 700);

    // creating engine and adding it to world
	engine = Engine.create();
	world = engine.world;

	// creating bodies
    ground1 = new Ground(600, 285, 200, 10);
    ground2 = new Ground(200, 505, 200, 10);
    ground3 = new Ground(400, 600, 850, 10);
    
    block1 = new Block(600,260,30,40);
    block2 = new Block(570,260,30,40);
    block3 = new Block(540,260,30,40);
    block4 = new Block(630,260,30,40);
    block5 = new Block(660,260,30,40);

    block6 = new Block(585,220,30,40);
    block7 = new Block(555,220,30,40);
    block8 = new Block(615,220,30,40);
    block9 = new Block(645,220,30,40);
    
    block10 = new Block(600,170,30,40);
    block11 = new Block(570,180,30,40);
    block12 = new Block(630,180,30,40);
    
    block13 = new Block(600,140,30,40);

    block14 = new Block(152,500,30,40);
    block15 = new Block(180,500,30,40);
    block16 = new Block(210,500,30,40);
    block17 = new Block(230,500,30,40);
    block18 = new Block(250,500,30,40);

    block19 = new Block(170,465,30,40);
    block20 = new Block(200,465,30,40);
    block21 = new Block(230,465,30,40);

    block22 = new Block(200,440,30,40);

    polygon = new Polygon(100, 100, 50,50);

    slingshot = new Slingshot(polygon.body,{x:100, y:100});

    // running engine
	Engine.run(engine);
  
}


function draw() {
    
    // rect
    rectMode(CENTER);

    // giving background color
    background("red");

    // displaying sprites
    drawSprites();

    ground1.display();
    ground2.display();
    ground3.display();
    
  
  fill(rgb(135, 205, 236));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  fill("lightPink");
  block10.display();
  block11.display();
  block12.display();
  fill(rgb(47, 48, 48));
  block13.display();
  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("lightGreen");
  block19.display();
  block20.display();
  block21.display();
  fill("lime");
  block22.display();
 
  polygon.display();

  slingshot.display();    

}

function mouseDragged(){
    if(slingshot.slingshot.bodyA == polygon.body){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}}

function mouseReleased(){
    slingshot.fly();
}

// space key 
function keyPressed(){
if(keyCode === 32){
slingshot.attach(this.polygon.body);
}
}