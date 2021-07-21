var ball,ground,leftTrash,rightTrash;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);

	var ground_options={
		isStatic:true
	}

	ground=Bodies.rectangle(300,550,600,10,ground_options);
	World.add(world,ground);

	Engine.run(engine);

	var rightTrash_options={
		isStatic:true
	}

	rightTrash=Bodies.rectangle(450,525,10,50,rightTrash_options);
	World.add(world,rightTrash);

	var leftTrash_options={
		isStatic:true
	}
	
	leftTrash=Bodies.rectangle(300,525,10,50,leftTrash_options);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20);

  rect(ground.position.x,ground.position.y,600,10);

  rect(rightTrash.position.x,rightTrash.position.y,10,50);

  rect(leftTrash.position.x,leftTrash.position.y,10,50);
  
  drawSprites();
 
  force();
}

function force(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-2.1});
	}
}



