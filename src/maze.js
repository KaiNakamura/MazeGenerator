class Maze {
	constructor(width, height) {
		this.width = width;
		this.height = height;

		this.cells = [];

		for(let i = 0; i < this.width; i++) {
			this.cells[i] = [];
			for(let j = 0; j < this.height; j++) {
				this.cells[i][j] = new Cell(this, i, j);
			}
		}

		this.currentCell = this.cells[this.width - 1][this.height - 1];
		this.generationPath = [];
	}

	draw() {
		for(let i = 0; i < this.width; i++) {
			for(let j = 0; j < this.height; j++) {
				this.cells[i][j].draw();
			}
		}
	}

	step() {
		let availableDirections = this.getAvailableDirections(this.currentCell);

		let i = 0;
		while(availableDirections.length == 0) {
			if(i == this.generationPath.length) {
				return 0;
			}
			this.currentCell = this.generationPath[i];
			availableDirections = this.getAvailableDirections(this.currentCell);
			i++;
		}

		let randomDirection = availableDirections[Math.floor(Math.random() * availableDirections.length)];
		let randomCell = this.currentCell.getNeighbor(randomDirection);

		this.currentCell.getWall(randomDirection).state = false;
		randomCell.getWall(getOppositeDirection(randomDirection)).state = false;
		this.currentCell = randomCell;
		this.generationPath.unshift(randomCell);

		return 1;
	}

	generate() {
		while(true) {
			if(this.step() == 0) {
				break;
			}
		}
	}

	getAvailableDirections(cell) {
		let availableDirections = [];

		if(cell.leftCellIsDefined() && cell.getLeftCell().allWallsClosed()) {
			availableDirections.push(Direction.LEFT);
		}
		if(cell.rightCellIsDefined() && cell.getRightCell().allWallsClosed()) {
			availableDirections.push(Direction.RIGHT);
		}
		if(cell.topCellIsDefined() && cell.getTopCell().allWallsClosed()) {
			availableDirections.push(Direction.TOP);
		}
		if(cell.bottomCellIsDefined() && cell.getBottomCell().allWallsClosed()) {
			availableDirections.push(Direction.BOTTOM);
		}

		return availableDirections;
	}
}
