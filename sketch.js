var harry,harryStanding,voldemort,voldemortImg,stick, stickImg;

var gameState = "weak";

function preload(){


  harryStanding=loadImage("Images/harryStanding.png");
  voldemortImg=loadImage("Images/LordVoldemort.png");
  stickImg = loadImage("Images/stickImage.png");


  
  
}


function setup() {
  createCanvas(1500,1000);
  bedroom1=createSprite(50, 100, 10, 200);
  bedroom2=createSprite(145,200,200,10);
  bedroom3=createSprite(250,200,10,100);
  bedroom4=createSprite(450,100,10,200);
  bedroom5=createSprite(420,200,70,10);
  bedroom6=createSprite(380,200,10,100);



  mainRoom1=createSprite(600,200,10,100);
  mainRoom2=createSprite(750,200,300,10);
  mainRoom3=createSprite(900,295,10,200);
  mainRoom4=createSprite(945,400,100,10);
  mainRoom5=createSprite(1250,400,300,10);
  mainRoom6=createSprite(1400,205,10,400,10);


  Room1 = createSprite(1150,500,600,10);
  Room2 = createSprite(850,595,10,200);
  Room3 = createSprite(850,820,10,30);
  Room4 = createSprite(1145,840,600,10);
  Room5 = createSprite(1445,670,10,350);


  Room6 = createSprite(50,600,10,300)
  Room7 = createSprite(250,455,400,10);
  Room8 = createSprite(450,600,10,300);


  harry = createSprite(100,120);
  harry.addImage("harry",harryStanding)
  harry.scale=0.2;

  voldemort = createSprite(width -200,height-400);
  voldemort.addImage("youknowwho",voldemortImg);
  voldemort.scale=0.1;




}

function draw() {
  background("lightblue"); 

  if(frameCount % 60 ===0 && gameState === "weak"){
    var stick = createSprite(random(30,width-400),random(30,height-500));
    stick.lifetime = 60;
    stick.addImage(stickImg);
    stick.scale = 0.01;
    gameState = "strong";
}

  camera.x = harry.x;
  camera.y = harry.y;

  if(keyDown("w")){
    harry.y -=5;
  }
  if(keyDown("s")){
    harry.y +=5;
  }
  if(keyDown("a")){
    harry.x -=5;
  }
  if(keyDown("d")){
    harry.x +=5;
  }
  
  
  harry.collide(mainRoom1);
  harry.collide(mainRoom2);
  harry.collide(mainRoom3);
  harry.collide(mainRoom4);
  harry.collide(mainRoom5);
  harry.collide(mainRoom6);

  
  harry.collide(bedroom1);
  harry.collide(bedroom2);
  harry.collide(bedroom3);
  harry.collide(bedroom4);
  harry.collide(bedroom5);
  harry.collide(bedroom6);

  harry.collide(Room1);
  harry.collide(Room2);
  harry.collide(Room3);
  harry.collide(Room4);
  harry.collide(Room5);
  harry.collide(Room6);
  harry.collide(Room7);
  harry.collide(Room8);

  


  drawSprites();

  if(keyDown("space") && gameState === "strong"){
    stroke("red");
    strokeWeight("3");
    line(harry.x,harry.y,mouseX,mouseY);
    var laser = createSprite(mouseX,mouseY,20,20);
    laser.visible = false;

    if(laser.isTouching(voldemort)){
      if(frameCount % 50 === 0){
        voldemort.scale -=0.01;
      }
      if(voldermort.scale < 0.01){
        voldermort.destroy();
      }
    }
  }







}


