import Rules from '../../gamelife/Rules';
import Cell from '../../gamelife/Cell';

let rules = null;
beforeEach(function() {
  rules = new Rules()
});

describe('Rules', () => {
  it('if cell doesn\'t have any neightbours, then dies', () => {
    const cellWithZeroNeightbours = new Cell(0, Cell.ALIVE);
    const cellNext = rules.cellHasLessThatTwoNeightbourds(cellWithZeroNeightbours)
    expect(
      cellNext.state
    ).toBe(Cell.DEATH);
  });
  it('if cell have only one neighbour, then dies', () => {
    const cellOneN = new Cell(1, Cell.ALIVE);
    const cellNext = rules.cellHasLessThatTwoNeightbourds(cellOneN)
    expect(
      cellNext.state
    ).toBe(Cell.DEATH);
  });
  it('if cell have two neighbour, then survives', () => {
    const cellTwoN = new Cell(2, Cell.ALIVE);
    const cellNext = rules.cellHasTwoOrThreeNeightbourds(cellTwoN)
    expect(
      cellNext.state
    ).toBe(Cell.ALIVE);
  });
  it('if cell have three neighbour, then survives', () => {
    const cellWithThreeN = new Cell(3, Cell.ALIVE);
    const cellNext = rules.cellHasTwoOrThreeNeightbourds(cellWithThreeN)
    expect(
      cellNext.state
    ).toBe(Cell.ALIVE);
  });
  it('if cell have more than three neighbour, then dies', () => {
    const cellWithMoreThatThreeN = new Cell(4, Cell.ALIVE);
    const cellNext = rules.cellHasMoreThanThreeNeighbours(cellWithMoreThatThreeN)
    expect(
      cellNext.state
    ).toBe(Cell.DEATH);
  });
  it('if a dead cell has three neighbours, then comes alive', () => {
    const deadCellWithThreeN = new Cell(3, Cell.DEATH);
    const cellNext = rules.deadCellHasThreeNeighbours(deadCellWithThreeN)
    expect(
      cellNext.state
    ).toBe(Cell.ALIVE);
  });
});

