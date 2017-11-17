// The steps we took: we basically had to understand the patterns of the perlin noise() see below
//perlin noise() stays at one point in time. Doesn't move through the bounded numbers uniformally. Random moves uniformally.
// giving noise(5) will always return same number.
// we then turned the line of the noise() graph into vectors using x and y (2D) then created 3D with Z offset(making the vectors move
// in a back and forth motion. Then dropped parrticles, and made them move by the force applied by the vector that the particle was next to)
// create lines between points and decreased opacity which created the hair line visual. We put the background() function in setup
// so it wouldn't repeat and restart the lines, we want a continous line.

// xoff is x offset
// var xoff1 = 0;
// var xoff2 = 10000;
var inc = .1;
var scl = 10;
var cols, rows;
var zoff = 0;
var particles = [];
var flowfield;

function setup() {
	cnv =createCanvas(800, 800);
	// to center canvas
	var x = (windowWidth - width) / 2;
  	var y = (windowHeight - height) / 2;
  	cnv.position(x, y);
	// 20columns and 20 rows
	// colorMode HSB on the internet displayed a rainbow set color 
	
	cols = floor(width/scl);
	rows = floor(height/scl);
	for(var i = 0; i < 500; i++){
		particles[i] = new Particle();
	}
	flowfield = new Array(cols * rows);
	// drawing background only once now.
	background(255);

	var x = (windowWidth - width) / 2;
  	var y = (windowHeight - height) / 2;
  	cnv.position(x, y);

	
}


// draw loops run everytime.
function draw() {


	var yoff = 0;


	// for every x point on the graph
	for (var y = 0; y < rows; y++){
		var xoff = 0;
		for (var x = 0; x < cols; x++){
			var index = (x + y * cols);

			// get range of colors
			 //multiplied by 4 so particles go everywhere on the page. if only 2pi then particles would go from right to left.
			var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
			var v = p5.Vector.fromAngle(angle);
			// how strong the particles will follow the direction of the vectors
			v.setMag(.5);
			flowfield[index] = v;
			xoff += inc;
			stroke(0,50);
			strokeWeight(1);
			// push();
			// translate(x * scl, y * scl);
			// rotate(v.heading());
			// line(0, 0, scl, 0);

			pop();
		}
		yoff += inc;
		zoff += .0003;
	}

	for(var j = 0; j < particles.length; j++){
		particles[j].follow(flowfield);
		particles[j].edges();
		particles[j].show();
		particles[j].update();
		

	}


}
	// noLoop();


	// var x = random(width);
	// first argument is number to be converted. Then the next two is the bounds of current range of numbers.
	// The 0 and width is the target range.
	// var x = map(noise(xoff1), 0, 1, 0, width);
	// var y = map(noise(xoff2), 0, 1, 0, height);
	// xoff1 += .02;
	// xoff2 += .02;

	// ellipse(x, y, 20, 20);
