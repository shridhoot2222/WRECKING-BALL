class Ball {
    constructor(x,y,radius) {
      var options = {
          
          frictionAir : 0.8,
          density:1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(2);
      stroke("black");
      fill("brown");
       ellipse(0,0, this.radius);
       pop();
    }
  };
