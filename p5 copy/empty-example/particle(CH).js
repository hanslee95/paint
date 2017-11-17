function Particle() {
	this.pos = createVector(random(width), random(height));
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);
	// created a maximum velocity or max speed so particles don't increase speed
	this.max = 3;
	this.prevPos = this.pos.copy();
	this.h = 0;

	this.update = function() {
		this.vel.add(this.acc);
		// the limit for velocity will be 4.
		this.vel.limit(this.max);
		this.pos.add(this.vel);
		this.acc.mult(0);

	}

	this.follow = function(vectors) {
		//based on my(the particle) x and y position. scale me down into a specific column and row. look up the corresponding vector in that array
		// then take that vector and apply it as a force.
		var x = floor(this.pos.x / scl);
		var y = floor(this.pos.y / scl);
		// this is equation for puting 2 dimensional value in one dimensional array.
		var index = x + y * cols;
		var force =vectors[index];
		this.applyForce(force);
	}

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.show = function() {
		// gives it that smooth foggy look like hair, the alpha or opacity of the stroke does.
		stroke(this.h, 255, 255, 9);
		this.h = this.h + 1;
		// if h is 255 reset it to 0 and increment again though all the 
		if(this.h > 255) {
			this.h =0;
		}
		strokeWeight(1);
		line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
		this.updatePrev();

	}

	this.updatePrev = function() {
		this.prevPos.x = this.pos.x;
		this.prevPos.y = this.pos.y;
	}


	this.edges = function() {
		if (this.pos.x > width) {
			this.pos.x = 0;
			this.updatePrev();
		}
		if (this.pos.x < 0) {
			this.pos.x = width;
			this.updatePrev();
		}
		if (this.pos.y > height) {
			this.pos.y = 0;
			this.updatePrev();
		}
		if (this.pos.y < 0) {
			this.pos.y = height;
			this.updatePrev();
		}

	}
}





