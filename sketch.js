const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    bird = new Bird(100,100);

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    piggy1 = new Pig(810,550);
    log1 = new Log(810,460,300,PI/2);

    box3 = new Box(700,420,70,70);
    box4 = new Box(920,420,70,70);
    piggy2 = new Pig(810,420);
    log2 = new Log(810,360,300,PI/2);

    box5 = new Box(810,360,70,70);
    log3 = new Log(760,320,150,PI/7);
    log4 = new Log(870,320,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    ground.display();
    bird.display();

    log1.display();
    box1.display();
    box2.display();
    piggy1.display();

    log2.display();
    box3.display();
    box4.display();
    piggy2.display();

    box5.display();
    log3.display();
    log4.display();
}