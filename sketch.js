const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block;
var backgroundImg,platform;
var slingShot;

function preload() {
    background=("black");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

   
    //level one
    block1 = new block(330,235,30,40);
     block2 =  new block(360,235,30,40);
     block3 = new block(390,235,30,40);
    block4 = new block(420,235,30,40);

    //mid
    
    
   // level two
   block6 = new block(360,195,30,40); 
   block7 = new block(390,195,30,40)
    block8 = new block(420,195,30,40);

    //top
    block9 = new block(390,155,30,40);
    block10 = new block(420,155,30,40);

    //extreme top

    block11 = new block(390,115,30,40);
    

    

   
    slingshot = new SlingShot(this.body,{x:200, y:50});
}

function draw(){
   background=("black");
    Engine.update(engine);
    
    
    ground.display();
    
    block1.display();

    
    
    block3.display();

    
    block4.display();
    block5.display();

    
    platform.display();
   
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


    

