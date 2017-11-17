var b1 = [];

function setup() {
	createCanvas(1440, 732);
	for (var i = 0; i < 300; i++){
		b1[i] = new Bubble(random(width),random(height));
	}


}
function draw() {
	background(0);
	for (var i = 0; i < b1.length; i++) {
		b1[i].move();
		b1[i].show();
		b1[i].wall();

		for (var j = 0; j < b1.length; j++){
			if(i != j && b1[i].intersects(b1[j])){
				b1[i].othermove();
				b1[j].othermove();
			}
		}

	}
}






class Bubble {
	// the first things what the bubble is. Were constructing the bubble.
	constructor(x, y , r) {
		// putting this because this is the object that's being created. this is dynamic and is always changing. 
		// referring to data part of the bubble object.
		this.x = random(width);
		this.y = y;
		this.r = 10;
		this.col = color(255);
	}

	wall() {
		if (this.x +1 > width - this.r || this.x +1 < this.r){
			this.x = this.x ;
		}
		if (this.y + 1 > width - this.r || this.y + 1 < this.r){
			this.y = this.y - random(1);
		}

	}
	intersects(other) {
		var d = dist(this.x, this.y, other.x, other.y);
		if(d < this.r + other.r) {
			return true;
		} else{
			return false;
		}

	}
	
	othermove() {
		this.x = this.x 
		this.y = this.y - random(1);
	}
	move() {
		this.x = this.x ;
		this.y = this.y + random(-5);
	}

	show() {
		stroke(255);
		
		fill(this.col);
		ellipse(this.x, this.y, this.r*2);
	}

	changeColor(){
		this.col = color(random(255), random(255), random(255));
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


