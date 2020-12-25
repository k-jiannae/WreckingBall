class Ball{
    constructor(x,y,radius){
        var option={
            restitution:0.8
        }
        this.body=Bodies.circle(x,y,radius,option);
        this.radius=radius;
        World.add(myworld,this.body)

    }
    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        fill("red")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}