var car,car1,car2,car3,wall,wall1;
var c1,c2,c3,c4,s1;
var speed1, speed2, speed3, speed4, weight;

function preload(){

c1 = loadImage("car.jpg");
c2 = loadImage("car1.jpg");
c3 = loadImage("car2.jpg");
c4 = loadImage("car3.jpg");

s1 = loadSound("wow.mp3");


}


function setup() {
  createCanvas(1200,600);

  speed1 = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  speed4 = random(55,90);

  weight = random(400,1500);

  car = createSprite(200,100,50,50);
  car.addImage(c3);
  car.velocityX=speed1;

  car1 = createSprite(200,240,50,50);
  car1.addImage(c3);
  car1.velocityX=speed2;

  car2 = createSprite(200,380,50,50);
  car2.addImage(c3);
  car2.velocityX=speed3;

  car3 = createSprite(200,520,50,50);
  car3.addImage(c3);
  car3.velocityX=speed4;

  wall = createSprite(1150,300,60,550);
  wall1 = createSprite(1155,300,60,550);


}

function draw() {
  background("white"); 

  drawSprites();

  car.collide(wall1);  
  car1.collide(wall1); 
  car2.collide(wall1); 
  car3.collide(wall1); 

  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;

    var deformation1 = 0.5 * weight * speed1 * speed1/22509;
    
    if(deformation1>180){
      car.addImage(c1)
    }
    if(deformation1<180 && deformation1>100){
      car.addImage(c4)
    }
    if(deformation1<100){
      car.addImage(c2)
    }
  }
  
  if(wall.x-car1.x < (car1.width+wall.width)/2){

    car1.velocityX=0;
  
    var deformation2 = 0.5 * weight * speed2 * speed2/22509;
    
    if(deformation2>180){
      car1.addImage(c1)
    }
    if(deformation2<180 && deformation2>100){
      car1.addImage(c4)
    }
    if(deformation2<100){
      car1.addImage(c2)
    }
  }
  
  if(wall.x-car2.x < (car2.width+wall.width)/2){

    car2.velocityX=0;
  
    var deformation3 = 0.5 * weight * speed3 * speed3/22509;
    
    if(deformation3>180){
      car2.addImage(c1)
    }
    if(deformation3<180 && deformation3>100){
      car2.addImage(c4)
    }
    if(deformation3<100){
      car2.addImage(c2)
    }
  }
  
  if(wall.x-car3.x < (car3.width+wall.width)/2){
  
    car3.velocityX=0;

    var deformation4 = 0.5 * weight * speed4 * speed4/22509;
    
    if(deformation4>180){
      car3.addImage(c1)
    }
    if(deformation4<180 && deformation4>100){
      car3.addImage(c4)
    }
    if(deformation4<100){
      car3.addImage(c2)
    }
  }
  

}