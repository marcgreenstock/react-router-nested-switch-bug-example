'use strict'

import React, { Component} from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

const Home = ({match: {url}}) => {
  console.log('Home', url)
  return (
    <h1>Home</h1>
  )
}

const Level1Home = ({match: {url}}) => {
  console.log('Level1Home', url)
  return (
    <div>
      <h1>Level 1</h1>
      <ul>
        <li><Link to={`${url}/level2`}>Level 2</Link></li>
      </ul>
    </div>
  )
}

const Level2 = ({match: {url}}) => {
  console.log('Level2', url)
  return (
    <h1>Level 2</h1>
  )
}

const Level1 = ({match: {url}}) => {
  console.log('Level1', url)
  return (
    <Switch>
      <Route exact path={url} component={Level1Home} />
      <Route path={`${url}/level2`} component={Level2} />
    </Switch>
  )
}

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/level1'>Level 1</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/level1' component={Level1} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

render(
  <App />,
  document.getElementById('react_mount')
)
