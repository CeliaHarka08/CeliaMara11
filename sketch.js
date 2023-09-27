function setup() {
    createCanvas(800,800);
  background("white");
  } 
  
  function draw() {
    
    stroke('white')
    fill("blue");
    
  // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
  rect(mouseX,mouseY,45,35);
    } 
  }