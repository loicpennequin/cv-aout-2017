var img;

function preload() {
  img = loadImage("assets/header.jpg");
}

function setup(){
  var mycanvas = createCanvas((windowWidth-17), windowHeight);
  mycanvas.parent('header');
  image(img, 0, 0);
}

function draw(){
  clear();
  image(img, 0, 0);
  loadPixels();
  var c = color(255,255,255,0)
  for (var i = mouseX-60; i < mouseX+60 ; i++ ){
    for (var j = mouseY-60 ; j < mouseY+60 ; j++){
      if (dist(mouseX,mouseY, i,j) < 60) {
        set(i, j, c)
      }
    }
  };
  updatePixels()

}
