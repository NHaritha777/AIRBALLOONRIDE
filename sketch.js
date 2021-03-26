var balloon, database, height, ballposition;

function preload(){
  bg = loadImage("cityImage.png");
  hotairballoon= loadImage("HotAirBallon-03.png");
}

function setup() {
  database= firebase.database();

  createCanvas(1300,650);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(hotairballoon);

}

function draw() {
  background(bg);  



  if(keyDown(LEFT_ARROW)){
    balloon.x= balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x= balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y= balloon.y - 10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y= balloon.y + 10;
  }

  if(keyDown(UP_ARROW)){
  balloon.scale= balloon.scale - 0.01;
  }

  if(keyDown(DOWN_ARROW)){
    balloon.scale= balloon.scale + 0.01;
    }

  drawSprites();

}


function readHeight(data){
height  = data.val();
balloon.x = height.x;
balloon.y = height.y;
}

function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x + x,
    'y': height.y + y
  })
}
