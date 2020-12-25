const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var myengine,myworld;
var ground, ball;
var ch;
var box1=[];
var box2=[];
var vehicle;
function preload(){
  vehicle=loadImage("construction-vehicle-009-512.png")
}

function setup(){
  myengine=Engine.create();
  myworld=myengine.world;

  createCanvas(1200,600)
  ground=Bodies.rectangle(600,580,1200,10,{isStatic:true});
  World.add(myworld,ground);

  ball = new Ball(400,200,40);
  ch = new Chain(ball.body,{x:360,y:120})
   for (var i=0;i<=500;i=i+50){
     box1.push(new Box(420,200+i,50,50))
   }

   for (var i=0;i<=500;i=i+50){
    box2.push(new Box(500,300+i,50,50))
  }
}

function draw(){
  background("white")
  Engine.update(myengine);
  rectMode(CENTER)
  fill("brown");
  rect(ground.position.x,ground.position.y,800,10);
  image(vehicle,100,100,300,300)
  ball.display();
  ch.display();
  for(var k=0;k<box1.length;k++){
    box1[k].display()
  }
  for(var k=0;k<box1.length;k++){
    box2[k].display()
  }
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

/*function mouseReleased(){
  ch.fly()
}*/