// A sketch that displays an endless loop. Tried to incorporate a class to practice better style habits. It took a while to figure out
// the adding of a new loop but discovered redraw() function in the p5 library which solved the problem of duplicating the 
// behavior of the first square. click-to-generate-a-new-square. Spotify color scheme.


var s1;
function setup() {
	createCanvas(windowWidth, windowHeight);
	// background placed here so we can see progression of the squares. putting background in draw would erase the squares
	// once you click your mouse.
	background(0);
	s1 = new Square();
}

function draw() {
	// keeps looping through this draw function of the square and increments that same square unless I redraw
	// by clicking the mouse press function. then the redraw square is incremented until it becomes connected 
	// to the prev square, then that square starts to increment again.
	s1.increase();
	s1.show();

}


// ///////////////////////////////////////////////////////////FUNCTIONS///////////////////////////////////////////////////////////////
// reseting a new square to size 1.
function mousePressed() {
	s1.size = 1;
	// redraw a new square. It executes draw one time. When it hits the bigger square it connects with it.
	redraw();
}

// used to resize the canvas if the browser is resized to maintain a full screen.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// ////////////////////////////////////////////////////////SQUARE CLASS/////////////////////////////////////////////////////////////


// square class that includes x/y position and the size that is created and increased
function Square() {
	this.x = windowWidth/2;
	this.y = windowHeight/2;
	this.size = 1;


	this.show = function() {
		c = color(106, 227, 104);
		// so rectangle is starting in center of screen.
		rectMode(CENTER);
		strokeWeight(30);
		stroke(c);
		fill(0);

		rect(this.x, this.y, this.size, this.size);
	}

	this.increase = function() {
		this.size++;
	}
}



