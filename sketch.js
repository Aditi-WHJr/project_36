var database ,dog,dog1,dog2
var position
var form
var feed,add
var foodobject
var Feedtime
var Lastfeed
var gameState="g";
var texti=20;
var home;
//Create variables here

function preload()

{
  dogimg1 = loadImage("images/dogImg.png")
  dogimg2 = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
//  console.log(database);
 
  foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
  
 

  var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
feed = createButton("FEED DOG")
feed.position(500,15)

add = createButton("ADD FOOD")
///add.color("yellow")
add.position(400,15)
add.mousePressed(AddFood)
  feed.mousePressed(FeedDog)

  home=new Game();
  home.hey();
} 



function draw(){
  background(46,139,87);

  
 foodobject.display();
 
 
 
  

  fill(255,255,254);
 textSize(15);

   text("",130,10,300,20);
   
 
   drawSprites();

}
function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position)
 
  
}

function showError(){
  console.log("Error in writing to the database");
}


function AddFood(){
position++
database.ref('/').update({
  Food:position
}

)
}

function FeedDog(){

dog.addImage(dogimg2)
foodobject.updateFoodStock(foodobject.getFoodStock()-1)
 database.ref('/').update({
   Food:foodobject.getFoodStock()
   
 })
}
