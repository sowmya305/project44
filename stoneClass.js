class stoneClass{
    constructor(x,y,radius){
        var options ={
           restitution : 2,
           density : 1.0,
           friction : 1.5 
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.body);
    }
    display(){
        ellipse(this.body.position.x , this.body.position.y , this.radius , this.radius);
    }
}