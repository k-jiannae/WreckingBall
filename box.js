class Box{
    constructor (x,y,width,height){
        var option={
            density:0.5,
            friction:0.2
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.image=loadImage("house.bmp")
        World.add(myworld,this.body)
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        stroke("green");
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}