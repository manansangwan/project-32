const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
 
    polygonimage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

Engine.run(engine)
    ground = new Ground();
    stand1 = new Stand (390, 300, 250, 10);
    stand2 = new Stand (700, 200, 200, 10);

    b1 = new Block(300,275,30,40)

    b2 = new Block(330,275,30,40) 
    b3 = new Block(360,275,30,40)
    b4 = new Block(390,275,30,40)
    b5 = new Block(420,275,30,40)
    b6 = new Block(480,275,30,40)

    b7 = new Block(450,275,30,40)
    
    b8 = new Block(330,235,30,40)

    b9 = new Block(360,235,30,40)
    b10 = new Block(390,235,30,40)
    b11= new Block(420,235,30,40)
    b12= new Block(450,235,30,40)
    b13= new Block(360,195,30,40)

    b14= new Block(390,195,30,40)
    b15= new Block(420,195,30,40)
    b16= new Block(390,155,30,40)

    bb1= new Block(640,175,30,40)
    bb2= new Block(670,175,30,40)
    bb3= new Block(700,175,30,40)
    bb4= new Block(730,175,30,40)
    bb5= new Block(760,175,30,40)

    bb6= new Block(670,135,30,40)
    bb7= new Block(700,135,30,40)
    bb8= new Block(730,135,30,40)
    bb9= new Block(700,95,30,40)
    
ball = Bodies.circle(50,200,20)
World.add(world,ball)
slingshot = new SlingShot(this.ball,{x:100,y:200})
        

}

function draw(){
 background(56,44,44)
 textSize(20)
 fill("yellow")
 text("drag the hexaigonal stone and release it ,to launch towards the blocks",100,30)

    
ground.display();
stand1.display();
stand2.display();
 
b1.display();

b2.display();
b3.display();
b4.display();
b5.display();
b6.display();

b7.display();
b8.display();
b9.display();
b10.display();
b11.display();

b12.display();
b13.display();
b14.display();
b15.display();
b16.display();

bb1.display();
bb2.display();
bb3.display();
bb4.display();
bb5.display();
bb6.display();
bb7.display();
bb8.display();
bb9.display();

fill("pink")
imageMode(CENTER)
image(polygonimage,ball.position.x,ball.position.y,40,40)
slingshot.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
  

}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.ball)
    }
}


