var bubble1;
var bubble2;
function setup() {
	createCanvas(600, 400);
	// creating new object instances
	bubble1 = new Bubble(400, 200, 74);
	bubble2 = new Bubble(200, 250, 24);
}


// draw loops run everytime.
function draw() {
	background(0);
	bubble1.move();
	bubble1.show();
	bubble2.move();
	bubble2.show();


}

class Bubble {
	// the first things what the bubble is. Were constructing the bubble.
	constructor(x, y , size) {
		// putting this because this is the object that's being created. this is dynamic and is always changing. 
		// referring to data part of the bubble object.
		this.x = x;
		this.y = y;
		this.size = size;
	}

	move() {
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, this.size);

	}

}


