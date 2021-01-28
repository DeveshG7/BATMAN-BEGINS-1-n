const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops=[];
var umbrella;

function preload(){
    
}

function setup(){
 createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

 umbrella = new Ground(250, 600, 330, 400)

 drop1= new Drop(10, 100)
}

function draw(){
    background(0);
    Engine.update(engine);

    var maxDrops=100;

    for(i=0; i<maxDrops; i++){
    
        drops.push(new Drop, (random(0,400)), random(0,400));
    }
     
    drop1.display();
     umbrella.display();
}   

