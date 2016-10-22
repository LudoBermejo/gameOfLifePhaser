import Cell from '../../gamelife/Cell';
import { rule, diesIfNeightboursIsLessThanTwo } from '../../gamelife/rules';

describe('Cell', () => {
  it('has a state', () => {
    const cell = new Cell();

    expect(cell.state).toBeDefined();
  });
});

describe('Rule', () => {
  it('can be applied to a cell and returns a cell', () => {
    const cell = new Cell();

    const result = rule(cell);

    expect(result).toEqual(jasmine.any(Cell));
  });
});

describe('Rule', () => {
  it('any live cell with fever that two live neight dies', () => {
    const numberOfAliveNeighbours = 1;
    const cell = new Cell(numberOfAliveNeighbours);

    const nextCell = diesIfNeightboursIsLessThanTwo(cell);

    expect(nextCell.state).toBe(Cell.DEAD);
  });

  it('any live cell with two or more live neighbours does not change', () => {
    const numberOfAliveNeighbours = 2;
    const cell = new Cell(numberOfAliveNeighbours);

    const nextCell = diesIfNeightboursIsLessThanTwo(cell);

    expect(nextCell).toBe(cell);
  });
});

