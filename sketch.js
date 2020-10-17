const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bg1,bg2,bg3,bg;
var box,player1,question1;
var bike,track,question2;
var trophy,pacman,ghost4,ghost3,ghost2,ghost1,question3;
var option11,option21,option12,option22,option13,option23 ;
var option11IMG,option21IMG,option12IMG,option22IMG,option13IMG,option23IMG ;
var bg1IMG,bg2IMG,bgIMG;
var boxIMG,player1IMG,question1IMG;
var bikeIMG,trackIMG,question2IMG;
var trophyIMG,pacmanIMG,ghost4IMG,ghost3IMG,ghost2IMG,ghost1IMG,question3IMG;
var g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11;

function preload(){
    option11IMG=loadImage("level1IMG/1level1.png");
    option21IMG=loadImage("level1IMG/2level1.png");
    option12IMG=loadImage("level2IMG/2level1.png");
    option22IMG=loadImage("level2IMG/2level2.png");
    option13IMG=loadImage("level3IMG/3level1.png");
    option23IMG=loadImage("level3IMG/3level2.png");
 bg1IMG=loadImage("level1IMG/bg1.png");
 bg2IMG=loadImage("level2IMG/bg2.png");
 bgIMG=loadImage("bg.png");
 boxIMG=loadImage("level1IMG/box.png");
 player1IMG=loadImage("level1IMG/player1.png");
 question1IMG=loadImage("level1IMG/question1.png");
 bikeIMG=loadImage("level2IMG/bike.png");
 trackIMG=loadImage("level2IMG/track.png");
 question2IMG=loadImage("level2IMG/question2.png");
trophyIMG=loadImage("level3IMG/trophy.png");
pacmanIMG=loadImage("level3IMG/pacman.png");
ghost4IMG=loadImage("level3IMG/ghost4.png");
ghost3IMG=loadImage("level3IMG/ghost3.png");
ghost2IMG=loadImage("level3IMG/ghost2.png");
ghost1IMG=loadImage("level3IMG/ghost1.png");
question3IMG=loadImage("level3IMG/question3.png");


}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);

     player1=createSprite(50,windowHeight/2-20,50,50)
     player1.addImage(player1IMG)
     player1.scale=0.3;

     

    engine = Engine.create();
    world = engine.world;

    g1=SpriteCreation(70,windowHeight/2+20,100,20)
    g2=SpriteCreation(70,605,140,100)
    g3=SpriteCreation(770,605,1200,100)
    g4=SpriteCreation(150,windowHeight/2+130,300,20)
    g5=SpriteCreation(270,windowHeight/2+190,20,20)
    g6=SpriteCreation(140,windowHeight/2+190,20,20)
    g7=SpriteCreation(360,505,80,20)
    g8=SpriteCreation(1000,348,700,20)
    g9=SpriteCreation(1200,248,100,20)
    g10=SpriteCreation(1300,190,20,20)
    g11=SpriteCreation(140,windowHeight/2+190,20,20)
}
function draw(){
    background(bgIMG)


edges=createEdgeSprites();


   if (keyDown("space")){
       player1.velocityX=2;
       player1.velocityY=3;
   }
   if(keyDown(UP_ARROW)) {
    player1.velocityX = 0;
    player1.velocityY = -4;
  }
  
  if(keyDown(DOWN_ARROW)) {
    player1.velocityX = 0;
    player1.velocityY = 4;
  }
  
  if(keyDown(RIGHT_ARROW)) {
    player1.velocityX = 4;
    player1.velocityY = 0;
  }
  
  if(keyDown(LEFT_ARROW)) {
    player1.velocityX = -4;
    player1.velocityY = 0;
  }

   player1.collide(g2)
   player1.collide(g1)
   player1.collide(g3)



    drawSprites();
}   

function SpriteCreation(x,y,width,height){
    var obj=createSprite(x,y,width,height)
    player1.collide(obj);
    return obj;
    
}