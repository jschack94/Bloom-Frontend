import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import About from './About'
import Browse from './Browse'
import CoffeeMap from './CoffeeMap'
import Profile from './Profile'






const App = () => {

  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/coffeemap" component={CoffeeMap} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />

        <Route render={() => <Redirect to="/l" />} />
      </Switch>
      <p></p>
      <p style={{zIndex: 20, margin: 0, position: 'fixed', bottom: -30, textAlign: 'center', width: '100%', height: '-300%', backgroundColor: 'white'}}>BLOOM 2020 by Jonathan Schack <img src={'https://media.glassdoor.com/sqll/964142/flatiron-school-squarelogo-1479222088421.png'} alt="Logo" align="middle"width="10" height="10"/></p>
    </Fragment>
  )
}

export default compose(
  withRouter,
  connect(null, actions)
)(App)