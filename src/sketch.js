var maze;

function setup() {
	createCanvas(CELLS_ACROSS * CELL_SIZE + STROKE_WEIGHT, CELLS_DOWN * CELL_SIZE + STROKE_WEIGHT);

	maze = new Maze(CELLS_ACROSS, CELLS_DOWN);

	rectMode(CORNERS);
	strokeWeight(STROKE_WEIGHT);

}

function draw() {
	maze.step();
	background(128);
	maze.draw();
}
