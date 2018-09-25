function preload(){
  // put preload code here
}

function setup() {
  createCanvas(500,500);

  // put setup code here
}

function draw() {
  // put drawing code here
  background(204,203,203);

  //razzetto
  fill(80,194,232,60);
  ellipse(250,410,39,104);
  fill(80,194,232,80);
  ellipse(250,395,39,83);
  fill(80,194,232);
  ellipse(250,385,39,63);

  //corpo
  fill(60,60,59);
  strokeWeight(5);
  stroke(255,255,255,95);
  ellipse(250,373,55,71);
  noStroke();
  fill(0);
  ellipse(250,264,108,108);
  fill(0);
  ellipse(250,325,153,153);

  //braccio dx
  fill(80,194,232);
  ellipse(313,325,18,29);
  fill(80,194,232,80);
  ellipse(311,325,20,35);

  fill(60,60,59);
  ellipse(325,355,34,99);

  //braccio sx
  fill(80,194,232);
  ellipse(187,325,18,29);
  fill(80,194,232,80);
  ellipse(189,325,20,35);

  fill(60,60,59);
  ellipse(177,355,34,99);

  //occhio
  fill(80,194,232);
  strokeWeight(3);
  stroke(60,60,59);
  ellipse(250,264,28,28);
  noStroke()
  fill(80,194,232,60);
  ellipse(250,264,54,54);
  noStroke()
  fill(80,194,232,90);
  ellipse(250,264,43,43);
  fill(255);
  ellipse(250,264,9,9);


  //details
  fill(229,47,20);
  ellipse(280,243,5,5);
  fill(229,47,20);
  rect(168,350,4,12);
  fill(229,47,20);
  rect(163,350,2,12);

}
