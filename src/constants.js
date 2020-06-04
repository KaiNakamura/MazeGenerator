const CELLS_ACROSS = 16;
const CELLS_DOWN = 12;
const CELL_SIZE = 50;
const STROKE_WEIGHT = 12.5;

const Direction = {
	LEFT: "LEFT",
	RIGHT: "RIGHT",
	TOP: "TOP",
	BOTTOM: "BOTTOM"
}

function getOppositeDirection(direction) {
	switch(direction) {
		case Direction.LEFT:
			return Direction.RIGHT;
		case Direction.RIGHT:
			return Direction.LEFT;
		case Direction.TOP:
			return Direction.BOTTOM;
		case Direction.BOTTOM:
			return Direction.TOP;
	}
}
