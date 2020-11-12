class Ground{
    constructor(){
      var options={
          isStatic:true
      }
        this.body = Bodies.rectangle(400,695,800,15,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("darkgreen");
rect(this.body.position.x,this.body.position.y,800,15)
    }
}