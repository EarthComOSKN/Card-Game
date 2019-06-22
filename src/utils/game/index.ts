import { Player } from "utils/player";

export class Board {
  private playerOne:Player = null ;
  private playerTwo:Player = null ;
  private currentTurn = 0 ;
  // private Fields = null
  constructor() {

  }
  playerJoinGame = (player:Player) => {
    if(this.playerOne === null){
      player.addAbility({
        attackOpposite: this.attackPlayer2
      })
      this.playerOne = player
      console.log('Player 1 Join');
      return true
    }
    else if(this.playerTwo === null){
      player.addAbility({
        attackOpposite: this.attackPlayer1
      })
      this.playerTwo = player 
      console.log('Player 2 Join');
      return true
    }
    else return false
  }
  attackPlayer1 = (damage) => {
    this.playerOne.getDamage(damage)
  }
  attackPlayer2 = (damage) => {
    this.playerTwo.getDamage(damage)
  }
  activatePlayer = () => {
    const nextPlayer:Player = this.currentTurn % 2 ? this.playerOne : this.playerTwo;
    console.log(nextPlayer.name);
    nextPlayer.playTurn()
  }
  endCondition = () =>  {return this.currentTurn === 10}
  startGame = () => {
    console.log('Game Start !!!!');
    if(this.playerOne === null || this.playerTwo === null) throw new Error('Not enough PLayer')
    while(!this.endCondition()){
      console.log('Turn ',this.currentTurn);
      this.activatePlayer()
      this.currentTurn += 1
    }

  }

}