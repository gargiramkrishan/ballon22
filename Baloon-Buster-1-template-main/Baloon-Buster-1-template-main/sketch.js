var backgroundu,bg,p,ar,ball,bl,ball2,bl2,ball3,bl3,ball4,bl4,score,game,end,play;

function preload()
{
  bg = loadImage("background0.png")
  ar = loadImage("bow0.png")
  bl = loadImage("blue_balloon0.png")
  bl2 = loadImage("green_balloon0.png")
  bl3 = loadImage("red_balloon0.png")

  score = 0
  play = 1;
  end = 0; 
  game = play;
}


function setup() 
{
  createCanvas(400,400);
  backgroundu = createSprite(200,200)
  backgroundu.addAnimation("uui",bg);
  p = createSprite(390,200)
  p.addAnimation("tt",ar)
  ball = createSprite(50,200);
  ball.addAnimation("ffg", bl)
  ball.scale = 0.2
}

function draw() {
 background("white")
 
 if(game == play)
 {
   if(keyDown("Up"))
   {
    p.y = p.y - 4
   }
   if(keyDown("Down"))
   {
    p.y = p.y + 4
   }
   ball.x = ball.x + 5
   ball.scale = 0.1
   ballons();
 }

 else if(game == end)
 {
   backgroundu.VelocityY = 89
 }
 drawSprites();
 text("score :" + score, 200,200)
 score = score + Math.round(frameCount % 110)
}

function ballons()
{
  if(frameCount%110==0)
  {
    ball = createSprite(50,200);
    ball.y = Math.round(random(90,400))
    ball.x = ball.x + 5
    barll = Math.round(random(1,4))
    ball.scale = 0.3
    switch(barll)
    {
      case 1 : ball.addImage(bl)
      break
      case 2 : ball.addImage(bl2)
      break
      case 3 : ball.addImage(bl3)
      break      
      default:
        break
    }
  }

}