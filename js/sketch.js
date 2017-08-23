var particles = [];

function setup(){
  var mycanvas = createCanvas((windowWidth-17), windowHeight);
  mycanvas.parent('header');
}

function draw(){
  clear()
  noStroke();
  particles.push(new Particle())
  if ( particles.length > 100){
    particles.splice(0,1);
  }
  particles.forEach(function(part){
    part.update();
    if(part.lifespan > 0) {
      part.show();
    }
  })
}

function Particle(){
  this.pos = createVector(mouseX + random(-30,30), mouseY + random(-30,30))
  this.lifespan = 1;
}

Particle.prototype.update = function(){
  this.lifespan -= 0.04
  this.pos.x += random(-5,5)
  this.pos.y += random(-5,5)
}

Particle.prototype.show = function(){
  var opacity = map(this.lifespan, 1,0, 150,0);
  fill(255,opacity)
  ellipse(this.pos.x, this.pos.y, 10)
}
