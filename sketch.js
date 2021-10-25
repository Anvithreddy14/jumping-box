var canvas;
var music;
var block1,block2,block3,block4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(700,560,200,40)
    block1.shapeColor = "blue"
    block2 = createSprite(490,560,200,40)
    block2.shapeColor = "orange"
    block3 = createSprite(280,560,200,40)
    block3.shapeColor = "red"
    block4 = createSprite(70,560,200,40)
    block4.shapeColor = "green"



    //create box sprite and give velocity
    box = createSprite(400,250,30,30)
    box.shapeColor = "white"
    box.velocityX = 3;
    box.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges)

    //add condition to check if box touching surface and make it box
    

    if(box.isTouching(block1) && box.bounceOff(block1)){
        box.shapeColor = "blue"
        music.play();
    }
 else   if(box.isTouching(block2) && box.bounceOff(block2)){
        box.shapeColor = "orange"
        music.stop();
        box.velocityX=0
        box.velocityY=0

    }
    else   if(box.isTouching(block3) && box.bounceOff(block3)){
        box.shapeColor = "red"
        music.play();
    }
    else   if(box.isTouching(block4) && box.bounceOff(block4)){
        box.shapeColor = "green"
        music.play();
    }
    
    drawSprites()
}