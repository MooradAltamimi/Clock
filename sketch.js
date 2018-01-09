function setup() {
  createCanvas( windowWidth,windowHeight-140);

}

function draw() {
  background("#000033");
  var sc = second()
  var mn = minute()
  var hr = hour()
    normalMode(2.2,sc,6)
  	normalMode(2.5,mn,6)
  	normalMode(3,hr,15)
  textSize(80)
  	strokeWeight(1)
  	text((hr+":"+mn+":"+sc),width/2.5,100)
}

function normalMode(size,angle,value) {
	noFill()
  strokeWeight(10)
  stroke(22, 150, 224)
  angleMode(DEGREES)
	arc(windowWidth/2,height/2,windowHeight/size,windowHeight/size,0,angle*value)
}

function lineMode() {}

function circleMode() {}

function pixelMode() {}