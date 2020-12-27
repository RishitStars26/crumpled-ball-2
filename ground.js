class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.width = width ;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world, this.body);
    
    }
    display(){
    var pos =this.body.position;
    //push()
    //translate(pos.x,pos.y)
    fill("brown");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    //pop()
    }
}
