export default class Cell {
  constructor(numberOfAliveNeighbours) {
    this.state = null;
    this.numberOfAliveNeighbours = numberOfAliveNeighbours;
  }
}

Cell.DEAD = 'DEAD';




