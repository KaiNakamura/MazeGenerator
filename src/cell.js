class Cell {
	constructor(maze, x, y) {
		this.maze = maze;
		this.x = x;
		this.y = y;

		this.left = this.x * CELL_SIZE + STROKE_WEIGHT / 2.0;
		this.right = this.left + CELL_SIZE;
		this.top = this.y * CELL_SIZE + STROKE_WEIGHT / 2.0;
		this.bottom = this.top + CELL_SIZE;

		this.leftWall = new Wall(this, Direction.LEFT, true);
		this.rightWall = new Wall(this, Direction.RIGHT, true);
		this.topWall = new Wall(this, Direction.TOP, true);
		this.bottomWall = new Wall(this, Direction.BOTTOM, true);

		this.walls = [
			this.leftWall,
			this.rightWall,
			this.topWall,
			this.bottomWall
		];
	}

	draw() {
		for(let wall of this.walls) {
			if(wall.state) {
				wall.draw();
			}
		}
	}

	mouseIsOver() {
		return mouseX >= this.left && mouseX <= this.right && mouseY >= this.top && mouseY <= this.bottom;
	}

	setState(state) {
		for(let wall of this.walls) {
			wall.state = state;
		}
	}

	getWall(direction) {
		switch(direction) {
			case Direction.LEFT:
				return this.leftWall;
			case Direction.RIGHT:
				return this.rightWall;
			case Direction.TOP:
				return this.topWall;
			case Direction.BOTTOM:
				return this.bottomWall;
		}
	}

	getLeftCell() {
		if(!this.leftCellIsDefined()) {
			return null;
		}
		return maze.cells[this.x - 1][this.y];
	}

	getRightCell() {
		if(!this.rightCellIsDefined()) {
			return null;
		}
		return maze.cells[this.x + 1][this.y];
	}

	getTopCell() {
		if(!this.topCellIsDefined()) {
			return null;
		}
		return maze.cells[this.x][this.y - 1];
	}

	getBottomCell() {
		if(!this.bottomCellIsDefined()) {
			return null;
		}
		return maze.cells[this.x][this.y + 1];
	}

	leftCellIsDefined() {
		return this.x != 0;
	}

	rightCellIsDefined() {
		return this.x != (this.maze.cells.length - 1);
	}

	topCellIsDefined() {
		return this.y != 0;
	}

	bottomCellIsDefined() {
		return this.y != (this.maze.cells[0].length - 1);
	}

	allWallsClosed() {
		for(let wall of this.walls) {
			if(!wall.state) {
				return false;
			}
		}
		return true;
	}

	getNeighbor(direction) {
		switch(direction) {
			case Direction.LEFT:
				if(this.leftCellIsDefined()) {
					return this.getLeftCell();
				}
				return null;
			case Direction.RIGHT:
				if(this.rightCellIsDefined()) {
					return this.getRightCell();
				}
				return null;
			case Direction.TOP:
				if(this.topCellIsDefined()) {
					return this.getTopCell();
				}
				return null;
			case Direction.BOTTOM:
				if(this.bottomCellIsDefined()) {
					return this.getBottomCell();
				}
				return null;
		}
	}

	getNeighbors() {
		let neighbors = [];
		if(this.leftCellIsDefined()) {
			neighbors.push(this.getLeftCell());
		}
		if(this.rightCellIsDefined()) {
			neighbors.push(this.getRightCell());
		}
		if(this.topCellIsDefined()) {
			neighbors.push(this.getTopCell());
		}
		if(this.bottomCellIsDefined()) {
			neighbors.push(this.getBottomCell());
		}
		return neighbors;
	}

	getClosedNeighbors() {
		let neighbors = this.getNeighbors();
		let closedNeighbors = [];
		for(let neighbor of neighbors) {
			if(neighbors.allWallsClosed()) {
				closedNeighbors.push(neighbor);
			}
		}
		return closedNeighbors;
	}

	getRandomNeighbor() {
		return this.getNeighbors()[Math.floor(Math.random() * neighbors.length)];
	}

	getRandomClosedNeighbor() {
		return this.getClosedNeighbors()[Math.floor(Math.random() * neighbors.length)];
	}
}
