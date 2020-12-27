class Dustbin{
    constructor(x, y, width, height) {
        var options = {
            //restitution:0.8,
            isStatic:true,
            friction:1.0,
            density:1.0
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options); //Creates the body
        World.add(world,this.body); //Adding the body 
        this.image = loadImage("dustbingreen.png");
    
      }
      display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill("white");
        image(pos.x,pos.y,this.width,this.height);//no width anad Height
        
      }
}