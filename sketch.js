
//sprites
var grid = 50;
var width = 1366;
var height = 2700;
var school;
var player, cars, logs;

//groups
var carGroup1, logGroup1, playGruop;
var grassHeight = 100;

//gamestates
var gameState = "play";

//image
var carImage1, carImage2, logImage, logImage2, playerImage;

function preload()
{
  
  //image
  playerImage = loadImage("Player-03.png"); 
  carImage1 = loadImage("car1.png");
  carImage2 = loadImage("car2.png");
  logImage1 = loadImage("log1.png");
  logImage2 = loadImage("log2.png");
   
}

function setup() 
{

  //canvas
  createCanvas(1366, 2700);

  //groups
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  //road, grass and river
  for(var i = 0; i < 6; i++)
  {

    var grass = createSprite(683, 2600 - (i*400), 1366, grassHeight);
    grass.shapeColor = "gray";
    if(i%2 === 0)
    {

      var road = createSprite(683, 2500 - (i*400) - grassHeight, 1366, 300);
      road.shapeColor = "black";

    }

  }

  //cars
  for(i = 0; i < 40; i++)
  {

    cars = new Car(2);
    carGroup1.add(cars.spt);

  }

  //logs
  for(i = 0; i < 40; i++)
  {
  
    logs = new Log(2);
    logGroup1.add(logs.spt);
  
  }  
  
  //player
  player = new Player(683, height - 25);

}

function draw() {

  //background
  background("skyblue");

  //controal for player
  keyPressed();

  //tuching mument
  if(carGroup1.isTouching(player.spt))
  {

    player.spt.x = 683;
    player.spt.y = height - 25;

  }

  if(logGroup1.isTouching(player.spt))
  {

    player.spt.x = player.spt.x - 3;

  }

  else if
  (  (player.spt.y > height - 1550 && player.spt.y < height - 1300)
   ||(player.spt.y < height - 500 && player.spt.y > height - 850)
   ||(player.spt.y > height)
   ||(player.spt.x < 0)
   ||(player.spt.x > width))
  {

    player.spt.x = width/2;
    player.spt.y = height - 25;

  }
  

  //draw
  drawSprites();

}

//control
function keyPressed()
{

  if(keyCode == UP_ARROW)
  {player.move(0, -5)}
  else if(keyCode == DOWN_ARROW)
  {player.move(0, 5)}
  else if(keyCode == LEFT_ARROW)
  {player.move(-5, 0)}
  else if(keyCode == RIGHT_ARROW)
  {player.move(5, 0)}

}



