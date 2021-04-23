var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,590,180,20);
    block1.shapeColor = "red";

    block2 = createSprite(300,590,180,20);
    block2.shapeColor = "green";

    block3 = createSprite(500,590,180,20);
    block3.shapeColor = "blue";

    block4 = createSprite(700,590,180,20);
    block4.shapeColor = "yellow";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),300, 20,20);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    movingSprite.velocityX = 3;
    movingSprite.velocityY = 3;
}

function draw() {
    background(rgb(10,10,10));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(movingSprite.x<0){
        music.stop()
            movingSprite.velocityX = 5
    }else if(movingSprite.x>800){
        music.stop()
            movingSprite.velocityX = -5
    }


    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red";
        music.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "green";
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
        music.play();
    }

        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
