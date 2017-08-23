var satellites = [];

function setup(){
  var mycanvas = createCanvas((windowWidth-17), windowHeight);
  mycanvas.parent('header');
  noStroke();
  fill(255);
  for(var i = 1; i < 20 ; i++){
    satellites.push(new Satellite(random(width), random(height)))
  }
}

function draw(){
  clear()
  satellites.forEach(function(sat){
    sat.update();
    sat.show();
  })
}

function Satellite(x,y){
  this.pos = createVector(x, y);
  this.vel = createVector();
  this.desire = createVector();
  this.maxSpeed = 6;
  this.maxForce = 1;
  this.history = [];
  this.target = createVector(random(width), random(height))
}

Satellite.prototype.update = function(){
  this.history.push(createVector(this.pos.x, this.pos.y))
   if (this.history.length > 30) {
       this.history.splice(0,1)
   }

  this.desire = createVector(this.target.x, this.target.y).sub(this.pos);
  var steer = this.desire.sub(this.vel);
  steer.limit(this.maxForce);
  this.vel.add(steer);
  this.vel.setMag(this.maxSpeed)
  this.pos.add(this.vel);
  if (dist(this.pos.x, this.pos.y, this.target.x, this.target.y) < 10){
    this.target = createVector(random(width), random(height))
  }
}

Satellite.prototype.show = function(){
  fill(255);
  for (var i = 0 ; i < this.history.length ; i ++) {
    fill(255, map(i,0,this.history.length, 0, 100));
    pos = this.history[i];
    ellipse(pos.x, pos.y, i/3  );
  }
  fill(255,0,0);
}
