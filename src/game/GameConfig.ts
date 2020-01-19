class GameState {
  totalScore: number
  onGameOver: () => void
  restartGame: () => void
  clearGame: () => void

  constructor() {
    this.setInitialState()
  }

  setInitialState = () => {
    this.totalScore = 0
  }

  setOnGameOver = (gameOver: () => void) => {
    this.onGameOver = gameOver
  }

  setRestartGame = (restartGame: () => void) => {
    this.restartGame = restartGame
  }

  setClearGame = (clearGame: () => void) => {
    this.clearGame = clearGame
  }
}

export const gameState = new GameState()
