var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 var option ={
		 isStatic: true,
	 }

	 box1 = createSprite(width/2,650,200,20);
	 box1.shapeColor = "red";
	 box1body = Bodies.rectangle(width/2-100,635,200,20,option);
	 World.add(world,box1body);
	 

     box2 = createSprite(width/2-100,610,20,100);
	 box2.shapeColor = "red";
	 box2body = Bodies.rectangle(width/2-80,610,20,100,option);
	 World.add(world,box2body);
	 
	 box3 = createSprite(width/2+100,610,20,100);
	 box3.shapeColor = "red";
	 box3body = Bodies.rectangle(width/2,550,20,100);
	 World.add(world,box3body);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on

	hellicopterSprite.x = hellicopterSprite.x -20;
	translation={x:-20,y:0}
	Matter.Body.translate(packageBody, translation);
	
  }
  else if (keyCode=== RIGHT_ARROW){
	hellicopterSprite.x = hellicopterSprite.x +20;
	translation={x:20,y:0}
	Matter.Body.translate(packageBody, translation);
  }
  else if (keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false);
  }
}



