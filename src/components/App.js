import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import Browse from './Browse'



const App = () => {

  return (
    <Fragment>
      
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/browse" />} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route render={() => <Redirect to="/browse" />} />
      </Switch>
      
    </Fragment>
  )
}

export default compose(
  withRouter,
  connect(null, actions)
)(App)