class Particle{
    constructor(x,y,r){
        var options ={ 
            restitution: 1}
            this.r = r;
            this.color = color(random( 193), random( 193), random( 193));
            
            this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);


    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}