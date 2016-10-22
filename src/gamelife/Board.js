export default class {

  constructor  ({width, height}) {

    this.arrayV = new Array(width)
    for(let i=0;i<=this.arrayV.length-1;i++) {
      this.arrayV[i] =  new Array(height).fill(0);
    }



  }


getCell(x,y){
  if((x < 0 || x > this.arrayV.length) || (y < 0 || y > this.arrayV[0].length))
    return undefined;

  return this.arrayV[x][y];
}

  setCell(x,y,alive){
    if((x < 0 || x > this.arrayV.length) || (y < 0 || y > this.arrayV[0].length))
      return false;
    this.arrayV[x][y] = alive;
    return true;
  }
  getCellsAlive(){
    i = 0;
    for ();
  }

 /* constructor ({ width, height }) {
    this.width = width
    this.height = height
    let array = Array(this.width-1);
    let array2 = Array(this.height-1).fill(0)
    this.board = array.fill(array2)
  }

  _randomBetweenNumbers(min, max) {
    return Math.floor(Math.random() * max) + min
  }

  randomFillIslands(number=30) {
    while(number--) {
      this.createIsland({
        x: this._randomBetweenNumbers(1, this.width-1),
        y: this._randomBetweenNumbers(1, this.height-1)
      })
    }
    return number
  }

  createIsland({x, y}) {
    for(let cx=x-1;cx<=x+1;cx++) {
      for(let cy=y-1;cy<=y+1;cy++) {
        console.log("Enchufo en ", cx, cy)
        this.board[cx][cy] = 1
      }
    }
  }

  getLifeCells() {
    const arrayResults = [];
    for(let cx=0;cx<=this.board[cx].length-1;cx++) {
      for(let cy=0;cy<=this.board[cx].length-1;cy++) {
        console.log(cx, cy, this.board[cx][cy])
        if(this.board[cx][cy] === 1) {
          console.log("FOUND");
          arrayResults.push( { cx, cy })
        }
      }
    }
    return arrayResults;
  }

*/
}
