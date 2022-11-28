let sprite = []; //variable to contain our sprite.

var myColors = []

var x = 0;

var fps = 30;

var capturer;
// the canvas capturer instance
capturer = new CCapture( {  format: 'webm',  fps,  name: 'fll_webm',  quality: 100,} );

function preload(){
  img = loadImage('fall_tree_shrunk.jpg');
}

function setup() {
  createCanvas(762,1108);
  //frameRate(fps);  // I had to comment out frameRate to get the capture to work
 //capturer.start();
  //console.log("Started capturer")
  
  myColors = [
    color('#FE2B4E'),
    color('#E58634'),
    color('#F74B03'),
    color('#C40B10'),
    color('#FFC488'),]
  
}

function draw() {
 //background(200);
  img.resize(762,1108);
  image(img, 0,0,img.width,img.height)
  makeSprites();
  drawSprites();
   console.log('capturing frame');
  capturer.capture(document.getElementById('defaultCanvas0'));
}

function makeSprites(){
 
  groupOf = new Group ();
 // for (var x = 0; x < 2; x++){
 //   sprite[x] = createSprite(width / 2 + (x*20) , height / 2 + (x*20), 100, 100);
    sprite[x] = createSprite(370 + random(-200,280) , 450 ,6,8);
    let c = random(myColors)
    sprite[x].shapeColor = [random(255), random(255), random(255)];
    sprite[x].shapeColor = c
    sprite[x].setSpeed(random(4) +8 ,random(80,150));
    sprite[x].rotationSpeed = 8
    groupOf.add(sprite[x]);
   x = x +1;
  //}
  
}


function mouseClicked (){
  capturer.start();
  console.log("Started capturer")

}

function keyPressed(){
  capturer.stop();
  capturer.save();
}