import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Main from '@/game/Main'
import { gameState } from './GameConfig'

import './index.scss'

class Game extends React.Component<RouteComponentProps> {
  componentDidMount() {
    egret.registerClass(Main, 'Main')
    // tslint:disable-next-line:no-string-literal
    window['Main'] = Main
  }

  render() {
    const { history } = this.props
    const isHidden = !history.location.pathname.includes('/game')
    if (isHidden && gameState.clearGame) {
      gameState.clearGame()
    }
    return (
      <div
        className="egret-player game-demo"
        data-entry-class="Main"
        data-orientation="portrait"
        data-scale-mode="noScale"
        data-frame-rate="60"
        data-content-width="640"
        data-content-height="960"
        data-show-paint-rect="true"
        data-multi-fingered="1"
        data-show-fps="false"
        data-show-log="false"
        data-log-filter=""
        data-show-fps-style="x:0,y:0,size:20,textColor:0x00c200,bgAlpha:0.8"
        hidden={isHidden}
      />
    )
  }
}

export default withRouter(Game)
