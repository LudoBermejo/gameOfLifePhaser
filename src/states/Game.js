/* globals __DEV__ */
import Phaser from 'phaser'
import Board from '../gamelife/Board'
import Mushroom from '../sprites/Mushroom'
import {setResponsiveWidth} from '../utils'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    /**    let banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'Phaser + ES6 + Webpack')
    banner.font = 'Nunito'
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.anchor.setTo(0.5)

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: 'mushroom'
    })

    // set the sprite width to 30% of the game width
    setResponsiveWidth(this.mushroom, 30, this.game.world)
    this.game.add.existing(this.mushroom) */

    this.sizeOfCell = 5;

    if(this.game != undefined) {
      console.log(this.game.add.graphics())
      this.graphics = this.game.add.graphics(this.game.width, this.game.height);
      this.board = new Board(
        {
          width: this.game.width / this.sizeOfCell,
          height: this.game.height / this.sizeOfCell
        }
      )
      this.board.randomFillIslands(1);
    }
  }


  update () {
    this.graphics.beginFill(0xFF0000);
    this.graphics.lineStyle(1,0xFF0000,1);

    let cellsAlive = this.board.getLifeCells();
    console.log(cellsAlive);
    cellsAlive.forEach(function(cell) {
      this.graphics.drawRect(
        cell.x*this.sizeOfCell,
        cell.y*this.sizeOfCell,
        (cell.x+1)*this.sizeOfCell,
        (cell.y+1)*this.sizeOfCell
      )
    })

  }
  render () {
    if (__DEV__) {

//      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
