function preload(){

}

function setup() {
    canvas = createCanvas(400,400)
    canvas.position(110,350)
    video = createCapture(VIDEO)
    video.hide()


}
  
  
  function draw() {
    image(video,0,0,640,480)
    background(255);
    fill("pink");
    rect(50,25,300,10);
    rect(50,355,300,10);
    rect(45,40,10,310);
    rect(350,40,10,310);
    
    fill("black");
    circle(50,30,40);
    circle(350,30,40);
    circle(50,360,40);
    circle(350,360,40);
    
  }


  function clickpic(){
        save('Utsavi.png')

  }