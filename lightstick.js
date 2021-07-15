class lightstick {
    constructor(x,y,r){
        var options = {
            restitution:0.1
        }
        this.r=r
        this.image=loadImage("ArmyBomb.jpg")
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);

        rotate(angle)
        fill("white")
        imageMode(CENTER);

        image(this.image,0,0,this.r,this.r)
    pop();
    }
}