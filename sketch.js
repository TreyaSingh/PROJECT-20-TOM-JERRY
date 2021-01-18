var bg, bgImg;
var cat, catImg, catRunning, catNotRunning;
var jerry, jerryImg, jerryStand, jerryMicro;
function preload() {
  bgImg=loadImage("images/garden.png");
  catImg = loadImage("images/tomOne.png");
  catRunning = loadAnimation("images/tomTwo.png","images/tomThree.png");
  catNotRunning = loadImage("images/tomFour.png");
  jerryChesse = loadImage("images/jerryOne.png");
  jerryStand = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
  jerryMicro = loadImage("images/jerryFour.png")
    
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
    bg = createSprite(400,400,1000,600);
    bg.addImage(bgImg);
    bg.scale = 1;

    cat = createSprite(600, 520);
	  cat.addImage(catImg);
    cat.scale =0.15;
    
    jerry = createSprite(100,530);
    jerry.addImage(jerryChesse);
    jerry.scale=0.14;

}

function draw() {
  
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - jerry.x < (cat.width + jerry.width)/2) {
        cat.velocityX = 0;
        cat.changeAnimation(catNotRunning);
        jerry.changeAnimation(jerryMicro);
  
    }
  keyPressed();
    drawSprites();
}


function keyPressed(){
  
  //For moving and changing animation write code here
  
  
	 if(keyCode===LEFT_ARROW){
    cat.velocityX = -5;
    cat.changeImage(catRunning);
    jerry.addAnimation(jerryStand)
	}


}
