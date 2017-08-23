var drops = [];

function setup(){
  var sketch = createCanvas(windowWidth, windowHeight);
  sketch.parent('header');
  colorMode(HSB);
}

function draw(){
  clear();
  drops.push(new Drop(mouseX, mouseY))
  for (let i = 0; i < drops.length ; i ++){
    drop = drops[i];
    if (drop.lifespan >= 0){
      drop.update();
      drop.show();
    }
  }
}

function Drop(x,y){
  this.pos = createVector(x,y)
  this.lifespan = 1
}

Drop.prototype.update = function(){
  this.lifespan -= 0.02
}

Drop.prototype.show = function(){
  let radius = map(this.lifespan, 1, 0, 30, 0)
  let hue = map(this.pos.x, 0, windowWidth, 0, 255)
  noStroke();
  fill(hue,100,100,this.lifespan);
  ellipse(this.pos.x, this.pos.y, radius)
}

function Satellite(x,y, speed, force){
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.maxSpeed = speed;
  this.maxForce = force;
}
