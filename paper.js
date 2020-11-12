class Paper{
    constructor(){
      var options={
          
          restitution:0.5,
          density:1.2
      }  
      this.body= Bodies.circle(200,400,20,options);
      
      World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("cyan");
        ellipseMode(RADIUS);
        ellipse(0,0,17,17);
        pop();   
    }
}