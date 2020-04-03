import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'


import Dashboard from './Dashboard'


class App extends Component {
    _isMounted = false;

    state = {
        user: {},
        login: false,
        isLoading: true
        };

    componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.setState({ isLoading: false });
    }
  }    

    newUserSubmitHandler = (event, userInfo) => {
    event.preventDefault();
    localStorage.getItem("token");
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: userInfo.name,
        username: userInfo.username,
        password: userInfo.password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        this.setState({
          user: data.user,
          login: true
        });

        this.props.history.push("/dashboard");
        
      });
  };

  render() { 
  return (
    <div>
        <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        
        <Route exact path="/dashboard" component={Dashboard} />
        <Route render={() => <Redirect to="/dashboard" />} />
        </Switch>
    </div>

  );
  }
}




export default withRouter(App);