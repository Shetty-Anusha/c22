//namespacing
//create the physics engine
const Engine = Matter.Engine;
//creates the physical world
const World = Matter.World;
//creates physical bodies or objects
const Bodies = Matter.Bodies;

var engine,world,object;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  };
  object = Bodies.rectangle(200,300,20,20,options);
    World.add(world,object);

    console.log(object);
    console.log(object.position.x);
    console.log(object.position.y);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER) 
  rect(object.position.x,object.position.y,50,20)
  drawSprites();
}