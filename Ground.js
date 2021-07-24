class Ground {

    constructor(x, y, width, height) {
      var options = {
          isStatic : true
      }

      // dimensions, creating body, and adding it to world
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){

    // nickname
      var pos =this.body.position;
    // mode
      rectMode(CENTER);
    //color
      fill("white");
    // position
      rect(pos.x, pos.y, this.width, this.height);
    }
  };