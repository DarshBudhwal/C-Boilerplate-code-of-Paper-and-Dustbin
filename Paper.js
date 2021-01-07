class Paper{
 constructor(x,y,radius,height){
 var options={
     isStatic:false,
     restitution:0.4,
     friction:0.5,
     density:1.2
 }
 this.body = Bodies.circle(x,y,radius,height,options);
 World.add(world,this.body);
 }
 display(){
   if(keyDown("UP")){
   this.body.velocity.y = -2;
   }

 }
}