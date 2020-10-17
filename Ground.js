class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.body=createSprite(x,y,width,height)
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  }
