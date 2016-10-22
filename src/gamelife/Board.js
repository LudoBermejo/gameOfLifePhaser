/*export default class {


  constructor ({ width, height }) {
    this.width = width
    this.height = height
    let array = Array(this.width-1);
    let array2 = Array(this.height-1).fill(0)
    this.board = array.fill(array2)
  }

  randomFillIslands(number=30) {
    while(number--) {
      this.createIsland({
        x: Math.floor(Math.random() * (this.width)),
        y: Math.floor(Math.random() * (this.height))
      })
    }
    return number
  }

  createIsland({x, y}) {
    for(let cx=x-1;cx<=x+1;cx++) {
      for(let cy=cy-1;cy<=cy+1;cy++) {
        this.board[x][y] =  Math.round(Math.random());
      }
    }
  }


}
*/
