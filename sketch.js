var garden, gardenImage

var cat, catImage, catMoveImages, catMove, catEnd, catEndImage

var mouse, mouseImage, mouseMoveImages, mouseMove, mouseEnd, mouseEndImage



function preload() {
    //load the images here
    gardenImage=loadImage("garden.png");

    catImage=loadImage("cat1.png");
    catMoveImages=loadAnimation("cat2.png,cat3.png")
    catEndImage=loadImage("cat4.png")

    mouseImage=loadImage("mouse1.png");
    mouseMoveImages=loadAnimation("mouse2.png,mouse3.png")
    mouseEndImage=loadImage("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500, 400, 20, 20);
    garden.addImage(gardenImage);

    //create tom and jerry sprites here
    cat=createSprite(850, 700, 20, 20);
    cat.addImage(catImage);

    mouse=createSprite(850, 100, 20, 20);
    mouse.addImage(mouseImage);


    drawSprites();

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyPressed("space")) {
        catMove=createSprite(850, 700, 20, 20);
        catMove.addAnimation(catMoveImages);
        catMove.velocityX = -2;

        mouseMove=createSprite(850, 100, 20, 20);
        mouseMove.addAnimation(mouseMoveImages);

    }

}
