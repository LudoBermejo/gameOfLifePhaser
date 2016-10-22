import Cell from "./Cell";

export default class {


  constructor() {
  }

  cellHasLessThatTwoNeightbourds(cell) {
    if (cell.neighbours < 2) {
      cell.state = Cell.DEATH;
    }
    return cell;
  }

  cellHasTwoOrThreeNeightbourds(cell) {
    if (cell.state == Cell.ALIVE && (cell.neighbours == 2 || cell.neighbours == 3)) {
      cell.state = Cell.ALIVE;
    }
    return cell;
  }

  cellHasMoreThanThreeNeighbours(cell) {
    if (cell.state == Cell.ALIVE && cell.neighbours > 3) {
      cell.state = Cell.DEATH;
    }
    return cell;
  }
  deadCellHasThreeNeighbours(cell){
    if(cell.state == Cell.DEATH && cell.neighbours == 3){
      cell.state = Cell.ALIVE;
    }
    return cell;
  }

}

