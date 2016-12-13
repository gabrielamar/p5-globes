// Gabriela Martín Torres
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Assignment 2: Pricking Globes

var particles = [];

function setup() {
  createCanvas(840, 560);
  globes();
}

//Creates a number of globes of different diameters
function globes() {
          for (i=0;i<20;i++) {
                        particles[i] = new Particle(random(840),random(280,560), 
                          random(1,4));
          }
}

// If the mouse is pressed close enough to the center of the globe, it desappears
function mousePressed() {
  
      for(i=0; i< particles.length ; i++){

                var mouse = createVector(mouseX,mouseY)
 

                if (p5.Vector.sub(mouse, particles[i].pos).mag() < particles[i].mass*10 ) {
                                particles.splice(i, 1);
                }
                
      }
      
}



function draw() {
  background(51);

  

  for (var i = 0; i < particles.length; i++) {
    var gravity = createVector(0, -0.05 * particles[i].mass);
   particles[i].applyForce(gravity);



    particles[i].update();
    particles[i].edges();
    particles[i].display();

    
  }
  

}
