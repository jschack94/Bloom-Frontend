import React, { Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../actions";
import Signup from "./Signup";
import { ActionCable } from "react-actioncable-provider";
import Login from "./Login";
import Dashboard from "./Dashboard";
import About from "./About";
import Browse from "./Browse";
import CoffeeMap from "./CoffeeMap";
import Profile from "./Profile";

import Email from "./Email";


const App = (props) => {
  return (
    <Fragment>
      <ActionCable
        channel={{ channel: "NotificationsChannel" }}
        onReceived={props.receivedNotifications}
      />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/Email" component={Email} />
       

        <Route exact path="/about" component={About} />
        <Route exact path="/coffeemap" component={CoffeeMap} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />

        <Route render={() => <Redirect to="/login" />} />
      </Switch>
      <p
        style={{
          zIndex: 2,
          margin: 0,
          position: "fixed",
          bottom: 0,
          textAlign: "center",
          width: "100%",
          backgroundColor: "white"
        }}
      >
        Bloom 2020 by Jonathan. Made with love during quarantine
      </p>
    </Fragment>
  );
};

export default compose(withRouter, connect(null, actions))(App);