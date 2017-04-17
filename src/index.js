import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

window.React = React

render(
  <Router>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route path="*" component={Whoops404}/>
    </Switch>
  </Router>,
  document.getElementById('react-container')
)
