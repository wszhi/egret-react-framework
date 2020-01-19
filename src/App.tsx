import React from 'react'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { GamePage, HomePage } from './pages'
import Game from '@/game'

class App extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/home">Home Page</Link>
          </li>
          <li>
            <Link to="/game">Game Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/game" key="/game" component={GamePage} />
          <Route path="/home" key="/home" component={HomePage} />
        </Switch>
        <Game />
      </Router>
    )
  }
}

export default App
