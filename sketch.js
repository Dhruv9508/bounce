const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,390,400,30);
    ball=new Ball(100,100,20);
    box1=new Box(200,300,50,50);
    box2=new Box(245,50,50,100);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    ball.display();
    box2.display();
}