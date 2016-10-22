export default class Cell {


  constructor (neighbours, state) {
    this.neighbours = neighbours;
    this.state = state;
  }


}

Cell.ALIVE = "ALIVE";
Cell.DEATH = "DEATH";
