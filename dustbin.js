class Dustbin{
    constructor(x,y,width,height){
        var option = {
            isStatic:true,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.body);
        this.width = width;
        this.height = height;

    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("yellow")
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }

}