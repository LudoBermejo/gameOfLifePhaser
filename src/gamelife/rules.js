import Cell from './Cell';

export function rule(cell) {
  return cell;
}

export function diesIfNeightboursIsLessThanTwo(cell) {
  if(cell.numberOfAliveNeighbours < 2) {
    const nextCell = new Cell();
    nextCell.state = Cell.DEAD;
    return nextCell;
  }
  return cell;
}
