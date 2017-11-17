// *Paint + Erase*  This is a super simple interactive design I started off with that gives users the power to paint and erase.
// I made a big sized paint brush so it wouldn't take long for the user to paint and erase the entire page. Within that limitation, 
// I created a striped design. Paint the canvas with your cursor.

var start = 255;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(start);
}

// used to resize the canvas if the browser is resized to maintain a full screen.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	noStroke();
	// if mouse is pressed(holding the mouse down and dragging to apply eraser, you need to erase with white.
	// check whether or not the user presses mouse or not, then fill the color then draw the shape.
	if (mouseIsPressed) {
		fill(start);
	} else {
		fill(color(44, 224, 212));
	}
	ellipse(mouseX, mouseY, 300, 300);
}

// used to resize the canvas if the browser is resized to maintain a full screen.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


