const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var chain;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 40);
  ground1 = new Ground(600,559,1200,40)

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(739, 100, 70, 70);
  box2 = new Box(810, 100, 70, 70);
  box3 = new Box(810, 100, 70, 70);
  box4 = new Box(810, 100, 70, 70);
  box5 = new Box(739, 100, 70, 70);
  box6 = new Box(739, 100, 70, 70);
  box7 = new Box(739, 100, 70, 70);
  box8 = new Box(739, 100, 70, 70);
  box9 = new Box(810, 100, 70, 70);
  box10 = new Box(810, 100, 70, 70);
  box11 = new Box(669, 100, 70, 70);
  box12 = new Box(669, 100, 70, 70);
  box13 = new Box(669, 100, 70, 70);
  box14 = new Box(880, 100, 70, 70);
  box15 = new Box(880, 100, 70, 70);
  box16 = new Box(880, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);

  fill("purple")
  ground.display();
  fill("blue")
  ground1.display();

  fill("red")
  box1.display();
  fill("red")
  box2.display();
  fill("orangered")
  box3.display();
  fill("yellow")
  box4.display();
  fill("orangered")
  box5.display();
  fill("yellow")
  box6.display();
  fill("green")
  box7.display();
  fill("skyblue")
  box8.display();
  fill("green")
  box9.display();
  fill("skyblue")
  box10.display();
  fill("yellow")
  box11.display();
  fill("green")
  box12.display();
  fill("skyblue")
  box13.display();
  fill("yellow")
  box14.display();
  fill("green")
  box15.display();
  fill("skyblue")
  box16.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
      Matter.Body.setPosition(rope.body, {x: 200 , y: 50});
      rope.attach();
  
}


function mouseReleased(){
rope.fly();
}

