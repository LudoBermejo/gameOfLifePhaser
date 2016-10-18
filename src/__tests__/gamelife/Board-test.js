import Board from '../../gamelife/Board';

// Variables
let board = null;

beforeEach(function() {
 board = new Board({
    width: 1200,
    height: 1200
  })
});

describe('Board', () => {
  it('should return the state object', () => {
    expect(board).toBeDefined();
  });
});

describe('Board', () => {
  it('should return zero after randomFills', () => {
    const resultFill = board.randomFillIslands();
    expect(resultFill).toBe(-1);
  });
});
