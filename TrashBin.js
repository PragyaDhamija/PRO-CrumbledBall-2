class TrashBin{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.bin1 = Bodies.rectangle(x+40, y-50, width, height, options);
        this.bin2 = Bodies.rectangle(x, y, 20,100, options);
        this.bin3 = Bodies.rectangle(x+240, y, 20,100, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.bin1);
    World.add(world, this.bin2);
    World.add(world, this.bin3);

    this.dustB = loadImage("dustbingreen.png")
  }
  display(){
    var pos = this.bin1.position;
    var angle = this.bin1.angle;
    //fill("red")
    //rect(this.bin2.position.x, this.bin2.position.y, 20,100);
    //rect(this.bin3.position.x, this.bin3.position.y, 20,100);

    image(this.dustB,this.bin1.position.x, this.bin1.position.y, 200,100)
    /*push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("blue")
    fill("lightblue");*/
    //rect(pos.x, pos.y, this.width, this.height);
    //pop();

  }
};
  