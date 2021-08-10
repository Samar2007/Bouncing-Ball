const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies;

var engine,world,object;
var ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create(); 
  world=engine.world;
  var object_properties={ isStatic:true }
  object= Bodies.rectangle(400,380,800,50,object_properties);
  World.add(world,object);
  var ballOption= {
    restitution:0.8
  }
  ball=Bodies.circle(400,100,40,ballOption);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,800,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
}