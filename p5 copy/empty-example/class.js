var bubbles = [];

function setup() {
	createCanvas(600, 400);
	// creating new object instances
	// to create 5 bubbles adding in array.
	// for (var i = 0; i<5; i++){
	// 	var x = random(width);
	// 	var y = random(height);
	// 	var r = random(10, 50);
	// 	var b = new Bubble(x, y , r);
	// 	bubbles.push(b);
	// }
}


// draw loops run everytime.
function draw() {
	background(0);
	// looping the array to move and show every bubble.
	for (var i = 0 ; i<bubbles.length; i++) {
		// when hovering over the bubble
		if(bubbles[i].clicked(mouseX, mouseY)){
			// change color if your over the bubble
			bubbles[i].changeColor(255);
			// chagne it back when your not over the bubble
		} else {
			bubbles[i].changeColor(0);
		}
		// the draggin of mouse will appear bubbles because of this part.
		bubbles[i].move();
		bubbles[i].show();
	}
	// removing a bubble in an array everytime it hits length of 50 bubbles. so youll always have a trail of 
	// 49 bubbles
	if(bubbles.length > 50) {
		bubbles.splice(0,1);
	}
	

}

function mouseDragged() {
	// when you hold the mouse and drag it, you will be creating and adding bubbles
	// only appears on screen because of draw() funciton .move() and .show().
	
	var radius = 40;
	var b = new Bubble(mouseX, mouseY , radius);
	bubbles.push(b);

	

}

// function mousePressed() {
// 	// looping every bubble to access and click on when you need to
// 	for (var i = bubbles.length-1; i >= 0; i --) {
// 		// when you actually click the bubble
// 		if(bubbles[i].clicked(mouseX, mouseY)){
// 			// deletes the array when you hover over that bubble.
// 			bubbles.splice(i, 1);
// 		}
// 	} 
// }
	
	



class Bubble {
	// the first things what the bubble is. Were constructing the bubble.
	constructor(x, y , r) {
		// putting this because this is the object that's being created. this is dynamic and is always changing. 
		// referring to data part of the bubble object.
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}

	move() {
		this.x = this.x + random(-2,2);
		this.y = this.y + random(-2,2);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		fill(this.brightness, 100);
		ellipse(this.x, this.y, this.r);
	}

	changeColor(bright){
		this.brightness = bright;
	}

	clicked(px, py) {
		var d = dist(px, py, this.x, this.y);
		if (d < this.r) {
			return true;
		} else {
			return false;
		}
	}

}


