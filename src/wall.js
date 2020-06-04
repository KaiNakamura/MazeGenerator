class Wall {
	constructor(cell, direction, state) {
		this.cell = cell;
		this.direction = direction;
		this.state = state;

		let weight = STROKE_WEIGHT / 2.0;
		switch(direction) {
			case Direction.LEFT:
				this.left = this.cell.left - weight;
				this.right = this.cell.left + weight;
				this.top = this.cell.top - weight;
				this.bottom = this.cell.bottom + weight;
				break;
			case Direction.RIGHT:
				this.left = this.cell.right - weight;
				this.right = this.cell.right + weight;
				this.top = this.cell.top - weight;
				this.bottom = this.cell.bottom + weight;
				break;
			case Direction.TOP:
				this.left = this.cell.left - weight;
				this.right = this.cell.right + weight;
				this.top = this.cell.top - weight;
				this.bottom = this.cell.top + weight;
				break;
			case Direction.BOTTOM:
				this.left = this.cell.left - weight;
				this.right = this.cell.right + weight;
				this.top = this.cell.bottom - weight;
				this.bottom = this.cell.bottom + weight;
				break;
		}
	}

	draw() {
		fill(0);
		noStroke(0);

		rect(this.left, this.top, this.right, this.bottom);
	}

	mouseIsOver() {
		return mouseX >= this.left && mouseX <= this.right && mouseY >= this.top && mouseY <= this.bottom;
	}

	setState(state) {
		this.state = state;
	}
}
