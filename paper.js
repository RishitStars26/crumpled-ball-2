class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.r = radius;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
        this.image = loadImage("paper.png");
    
    }
    display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("red");
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
    }
}
    
