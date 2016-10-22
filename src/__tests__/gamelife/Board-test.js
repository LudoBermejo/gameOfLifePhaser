import Board from "../../gamelife/Board";

// Variables
let board = null;

const w = 1200;
const h = 1200;
beforeEach(function () {
  board = new Board({
    width: w,
    height: h
  })
});

describe('Board', () => {
  it('test the board existence', () => {
      expect(board).toBeDefined();
    }
  )

  it('should return 0 to any x,y contained in the board', () => {
    board.arrayV.forEach(function (colum) {
      colum.forEach(function (cell) {
        expect(cell).toBe(0);
      })

    })
  })
  it('should return undefined for any position not contained in the board', () => {
      expect(board.getCell(-1, -1)).toBeUndefined();
    }
  )
  describe('Board.setCell', () => {
    it('should return false if we set cell in an invalid pos', () => {
        expect(board.setCell(-1, -1, 1)).toBe(false);

      }
    );
    it('should return true if we set cell in a valid pos', () => {
        expect(board.setCell(3, 3, 1)).toBe(true)
      }
    );
    it('should return the value after alive assignation', () => {
        expect(board.setCell(3, 3, 1)).toBe(true);
        expect(board.getCell(3, 3)).toBe(1);
      }
    );

    it('should return the value after death assignation', () => {
        expect(board.setCell(3, 3, 0)).toBe(true);
        expect(board.getCell(3, 3)).toBe(0);
      }
    )

  })

  describe('Board.generateLive', () => {
    it('should return true after creation', () => {
      expect(board.generateLive(20)).toBe(true);
      }
    );
    it('should return false if creation cells number is minor 0', () => {
        expect(board.generateLive(-1)).toBe(false);
      }
    );
    it('should return false if creation cells is superior that board size', () => {
        expect(board.generateLive((w*h)+1)).toBe(false);
      }
    );
    it('should return the number of alive cells after creation', () => {
        board.generateLive(20);
        expect(board.getCellsAlive()).toBe(20);

      }
    );
  })

});

