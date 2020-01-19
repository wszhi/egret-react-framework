import React from 'react'

class GamePage extends React.PureComponent {
  start = () => {
    egret.runEgret({ renderMode: 'webgl', audioType: 0 })
  }

  render() {
    return (
      <div>
        <div onClick={this.start}>开始游戏</div>
      </div>
    )
  }
}

export default GamePage
