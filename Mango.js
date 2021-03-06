class Mango{
    constructor(x,y,r){
        var options = {
            isStatic : true
        }
        this.x =x;
        this.y = y;
        this.r= r;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
        this.image = loadImage("mango.png");
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop()
    }
}