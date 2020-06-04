var maze;

function setup() {
	createCanvas(CELLS_ACROSS * CELL_SIZE + STROKE_WEIGHT, CELLS_DOWN * CELL_SIZE + STROKE_WEIGHT);

	maze = new Maze(CELLS_ACROSS, CELLS_DOWN);

	rectMode(CORNERS);
	strokeWeight(STROKE_WEIGHT);

	background(128);
	maze.generate();
	maze.draw();
}

function draw() {

}
