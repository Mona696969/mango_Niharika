class Stone{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution:0.2,
            friction:0.5
           
        }
        this.x=x;
		this.y=y;
		this.r=r
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
        this.image = loadImage("stone.png");
    }

    hasCollided(bodyA){
        if(this.body.position.x - bodyA.x < this.body.width + bodyA.width &&
            bodyA.x -  this.body.position.x < this.body.width + bodyA.width &&
            this.body.position.y - bodyA.y < this.body.width + bodyA.width &&
            bodyA.y -  this.body.position.y < this.body.width + bodyA.width  ){
                return true
            }else{
                return false
            }
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0,0,this.r*2, this.r*2)
        pop()
    }
}