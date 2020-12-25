class Chain{
    constructor(body1,point){
        var option={
            bodyA:body1,
            pointB:point,
            stiffness:0.5,
            //angularStiffness:1,
            length:200
        }
        this.chain=Constraint.create(option)
        this.pointB=point;
        World.add(myworld,this.chain)
    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
        var posA=this.chain.bodyA.position;
        var posB=this.chain.pointB;
        strokeWeight(4)
        line(posB.x,posB.y,posA.x,posA.y)
    }
}