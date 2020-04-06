import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import Browse from './Browse'
import CoffeeMap from './CoffeeMap'





const App = () => {

  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/coffeemap" component={CoffeeMap} />

        <Route exact path="/dashboard" component={Dashboard} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
      <p style={{zIndex: 2, margin: 0, position: 'fixed', bottom: 0, textAlign: 'center', width: '100%', backgroundColor: 'white'}}>BLOOM 2020 by Jonathan Schack <img src={'https://media.glassdoor.com/sqll/964142/flatiron-school-squarelogo-1479222088421.png'} alt="Logo" align="middle"width="50" height="50"/></p>
    </Fragment>
  )
}

export default compose(
  withRouter,
  connect(null, actions)
)(App)