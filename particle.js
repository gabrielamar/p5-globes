// Gabriela Martín Torres
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Assignment 2: Pricking Globes

function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;

  
  this.applyForce = function(force) {
    var f = force.copy();
//    f.div(this.mass);
    this.acc.add(f);
  }
 
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255, 150);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }

  this.edges = function() {
    if (this.pos.y < 0) {
      this.vel.y *= -1;
      this.pos.y = 0;
    }

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
  }

}