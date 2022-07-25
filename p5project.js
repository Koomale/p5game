let speedX=8; //speeds x and y 
let score =0; //starting score
let speedY=5; //starting speeds
let ballX=100;  //ball starts here 
let ballY=100;  //ball starts here   
let myXpos =100; //ur thing starts here           
let ys=0;
//all of those are set values for the ball andj its speed along with the score which comes later
function setup()  {
    createCanvas(600,500);     //create canvas 
    background(0,0,0)
    
}

function draw() {
background(0); //so it doesnt overlap
textFont('Helevetica') //font
textSize(30);
text("Score:" + score, 270,40);
Pong()//functions must be called to be drawn
go()
walls()
movingoff()
gameover()
fill(255)
rect( myXpos, 490,80,150);     //white rectangle to bounce ball off
   if(keyIsDown(LEFT_ARROW)) {
     myXpos -=15
   }
   if(keyIsDown(RIGHT_ARROW)) {
     myXpos +=15
   }
}
function Pong() { //yknow the pong
   ellipse(ballX,ballY,40,40);
}
function go() {           //for ball movement
    ballX += speedX;
    ballY += speedY;
    
}
 function walls () {  //the Walls guarantee that the ball and and the pallet  dont go outside
    if (ballX < 10 ||
    ballX >600) {
        speedX *= -1;
    }
  if (ballY <10) {
    speedY *= -1;
  }
  if (myXpos < 10 ||
    myXpos >540) {
        myXpos *= -1; //reading a article helped me figure out my main issue with this project which was the gravity and turning  the ball from wall to wall or pallet to wall,  Using the negative value changes its direction which basically is perfect for this
    }

 }
function movingoff() { //score increases when bounces off the pallet + speeds up (doesnt work very well for speeding up though)
    if ((ballX >myXpos && ballX < myXpos+100) && (ballY >= 490)) {
        speedX++; //increases
        speedY*=-1; 
        score++;
        ys++;
        

    }
}

function gameover() { //whenever u lose/ the pong hits the ground this happens
      if (ballY >= 500) {
        background(0);
        textFont('Helevetica');
        textSize(50);
        text("game over",180,50);
        textSize(17)
        text("click refresh nerd" , ys, 300,500)
      }
}

//My project is Pong sorry for not bringing the idea upfront first it wasnt easy to do this alone but thanks to the help of previous code alongs i was able to scrap and reuse certain code





