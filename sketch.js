var harry,harryStanding,voldemort,voldemortImg,stick, stickImg,minion1,minion2,minonImg,gameoverImg,gameover ;

var life;

var gameState = "weak";

var spriteGroup;
var stickGroup;

function preload(){


  harryStanding=loadImage("Images/harryStanding.png");
  voldemortImg=loadImage("Images/LordVoldemort.png");
  stickImg = loadImage("Images/stickImage.png");
  minionImg = loadImage("Images/minion.png");
  gameoverImg=loadImage("Images/gameOver.jpg");

  
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  spriteGroup= new Group();
  stickGroup = new Group();

  var widthRatio = windowWidth/1500;
  var heightRatio = windowHeight/1080;

  edges = createEdgeSprites();
  
  bedroom1=createSprite(50*widthRatio, 100, 10, 200);
  bedroom2=createSprite(145*widthRatio,200,200*widthRatio,10);
  bedroom3=createSprite(250*widthRatio,200,10,100);
  bedroom4=createSprite(450*widthRatio,100,10,200);
  bedroom5=createSprite(420*widthRatio,200,70*widthRatio,10);
  bedroom6=createSprite(380*widthRatio,200,10,100);

  spriteGroup.add(bedroom1);
  spriteGroup.add(bedroom2);
  spriteGroup.add(bedroom3);
  spriteGroup.add(bedroom4);
  spriteGroup.add(bedroom5);
  spriteGroup.add(bedroom6);



  mainRoom1=createSprite(600*widthRatio,200,10,100*heightRatio);
  mainRoom2=createSprite(750*widthRatio,200,300*widthRatio,10);
  mainRoom3=createSprite(900*widthRatio,295,10,200*heightRatio);
  mainRoom4=createSprite(945*widthRatio,400,100*widthRatio,10);
  mainRoom5=createSprite(1250*widthRatio,400,300*widthRatio,10);
  mainRoom6=createSprite(1400*widthRatio,205,10,400*widthRatio,10);


  spriteGroup.add(mainRoom1);
  spriteGroup.add(mainRoom2);
  spriteGroup.add(mainRoom3);
  spriteGroup.add(mainRoom4);
  spriteGroup.add(mainRoom5);
  spriteGroup.add(mainRoom6);





  Room1 = createSprite(1150*widthRatio,500*heightRatio,600*widthRatio,10);
  Room2 = createSprite(850*widthRatio,595*heightRatio,10,200*heightRatio);
  Room3 = createSprite(850*widthRatio,820*heightRatio,10,30*heightRatio);
  Room4 = createSprite(1145*widthRatio,840*heightRatio,600*widthRatio,10);
  Room5 = createSprite(1445*widthRatio,670*heightRatio,10,350*heightRatio);


  Room6 = createSprite(50*widthRatio,600*heightRatio,10,300*heightRatio)
  Room7 = createSprite(250*widthRatio,455*heightRatio,400*widthRatio,10);
  Room8 = createSprite(450*widthRatio,600*heightRatio,10,300*heightRatio);


  spriteGroup.add(Room1);
  spriteGroup.add(Room2);
  spriteGroup.add(Room3);
  spriteGroup.add(Room4);
  spriteGroup.add(Room5);
  spriteGroup.add(Room6);
  spriteGroup.add(Room7);
  spriteGroup.add(Room8);


  harry = createSprite(100*widthRatio,120*heightRatio);
  harry.addImage("harry",harryStanding)
  harry.scale=0.2;
  
  spriteGroup.add(harry);

  voldemort = createSprite(width -200,height-400);
  voldemort.addImage("youknowwho",voldemortImg);
  voldemort.scale=0.1;

  spriteGroup.add(voldemort);

  minion1 = createSprite(1000*widthRatio,300*heightRatio);
  minion1.addImage("minion",minionImg);
  minion1.scale=0.03;

  spriteGroup.add(minion1);

  minion2 = createSprite(200*widthRatio,500*heightRatio);
  minion2.addImage("minion",minionImg);
  minion2.scale=0.03;
  spriteGroup.add(minion2);


  gameover = createSprite(width/2,height/2-300);
  gameover.addImage("gameOver",gameoverImg);
  gameover.scale = 1;
  gameover.visible=false;


  life = 3;

}

function draw() {
  background("lightblue"); 

  if(gameState != "gameOver"){

  harry.collide(edges[0]);
  harry.collide(edges[1]);
  harry.collide(edges[2]);
  harry.collide(edges[3]);

  if(frameCount % 60 ===0 && gameState === "weak"){
    var stick = createSprite(random(30,width-400),random(30,height-500));
    stick.lifetime = 60;
    stick.addImage(stickImg);
    stick.scale = 0.01;
    stickGroup.add(stick);
   
  }

  if(stickGroup.isTouching(harry)&&gameState === "weak"){
    gameState = "strong";
  }

 // camera.x = harry.x;
  //camera.y = harry.y;

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

  textSize(20);
  textFont("Georgia");
  stroke("black")
  text("The Life Remaining ="+life,50,50);
  text("Harry is "+gameState,50,70);

  if(harry.isTouching(minion1)|| harry.isTouching(minion2)){
    if(gameState === "strong"){
      gameState = "weak";
    }
    else if(gameState === "weak"){
      life= life-1;
    }
    harry.x = 100;
    harry.y = 120;
  }

  if(life === 0){
    gameState = "gameOver";
  }

  }



  else if(gameState ==="gameOver"){
    spriteGroup.setVisibleEach(false);
    console.log(gameState);
    gameover.visible = true;
    drawSprites();
  }

}


