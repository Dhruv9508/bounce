
class Ball{
    constructor(x,y,radius){

        var options ={
            isStatic: false
        }
    
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle;
        push ();
        rotate (angle);
        translate (pos.x,pos.y);
        stroke ("black");
        fill ("yellow");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}

