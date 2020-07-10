const p5 = require("p5");

export default function sketch(p) {
  let paths = [];
  let painting = false;
  let next = 0;
  let current;
  let previous;

  p.setup = function () {
    p.createCanvas(600, 400);
    current = p.createVector(0, 0);
    previous = p.createVector(0, 0);
  };

  p.draw = function () {
    // p.background(153, 204, 255);
    p.background(218, 184, 199);

    p.fill(0);
    p.stroke(0);
    p.strokeWeight(0.25);
    p.text(
      "this website is currently under constuction :(",
      p.width / 2,
      p.height / 2
    );
    p.text(
      "try clicking and dragging across this rectangle",
      p.width / 2,
      p.height / 2 + 50
    );

    if (p.millis() > next && painting) {
      current.x = p.mouseX;
      current.y = p.mouseY;

      let force = p5.Vector.sub(current, previous);
      force.mult(0.05);

      paths[paths.length - 1].add(current, force);

      next = p.millis() + p.random(100);

      previous.x = current.x;
      previous.y = current.y;
    }

    for (let i of paths) {
      i.update();
      i.display();
    }
  };

  p.mousePressed = function () {
    next = 0;
    painting = true;
    previous.x = p.mouseX;
    previous.y = p.mouseY;
    paths.push(new Path(p));
  };

  p.mouseReleased = function () {
    painting = false;
  };
}

class Path {
  constructor(p) {
    this.p = p;
    this.particles = [];
    this.hue = this.p.random(0, 100);
    console.log(this.hue);
  }

  add(position, force) {
    this.particles.push(new Particle(this.p, position, force, this.hue));
  }

  update() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }
  }

  display() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
      } else {
        this.particles[i].display(this.particles[i + 1]);
      }
    }
  }
}

class Particle {
  constructor(p, position, force, hue) {
    this.p = p;
    this.position = this.p.createVector(position.x, position.y);
    this.velocity = this.p.createVector(force.x, force.y);
    this.drag = 0.95;
    this.lifespan = 255;
    // this.hue = hue;
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.mult(this.drag);
    this.lifespan--;
  }

  display(other) {
    this.p.stroke(0, this.lifespan);
    this.p.strokeWeight(1);
    this.p.fill(0, this.lifespan / 2);
    // this.p.stroke(t, this.lifespan);
    // this.p.fill(this.hue, this.lifespan / 2);
    this.p.ellipse(this.position.x, this.position.y, 8, 8);

    if (other) {
      this.p.line(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
    }
  }
}
