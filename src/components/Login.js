import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../actions";
import LoggedOutHeader from "./LoggedOutHeader";
import Welcome from "react-welcome-page";
import {
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBJumbotron,
  MDBModalFooter,
  MDBBtn,
  MDBCardUp,
  MDBAvatar,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    width: "auto",
    marginLeft: 130,
    marginRight: 130
  },
  paper: {
    ...theme.mixins.gutters(),
    width: "50%",
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Login extends React.Component {
  state = {
    email_address: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    this.props.logIn(this.state.email_address, this.state.password);
    this.setState({
      email_address: "",
      password: ""
    });
  };

  errorFlash = error => {
    alert(error);
    this.props.closeAlertError();
  };

  render() {
    const { classes, loggedIn, error } = this.props;
    const { email_address, password } = this.state;

    if (loggedIn) {
      return <Redirect to={"/dashboard"} />;
    } else {
      return (
        <div className={classes.root}>
          {error ? this.errorFlash(error) : null}
          <LoggedOutHeader />
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <br></br>
          <br></br>
          <br></br>
          <p></p>
          <p></p>
          <p></p>
          <br></br>
          <br></br>
          <br></br>

          <MDBContainer className="align-middle">
            <MDBRow>
              <MDBCol md="12" className="align-middle">
                <p></p>
                <p></p>
                <p></p>

                <MDBCard>
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5">
                        <strong>Welcome Back</strong>
                        <h5>
                          Don't miss your next opportunity. Sign in to stay
                          conncted with your mentor
                        </h5>
                      </h3>
                    </div>
                    <form
                      onSubmit={this.handleLoginSubmit}
                      className={classes.container}
                      noValidate
                      autoComplete="off"
                    >
                      <MDBInput
                        id="email_address"
                        label="Email Address"
                        value={email_address}
                        onChange={this.handleChange}
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                      />
                      <MDBInput
                        id="password"
                        label="Password"
                        value={password}
                        onChange={this.handleChange}
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                      />
                      <MDBBtn
                        type="submit"
                        gradient="blue"
                        rounded
                        className="btn-block z-depth-1a"
                      >
                        Sign in
                      </MDBBtn>
                      <p className="font-small blue-text d-flex justify-content-end pb-3">
                        Forgot
                        <a href="#!" className="blue-text ml-1">
                          Password?
                        </a>
                      </p>
                    </form>
                  </MDBCardBody>
                  <p style={{ textAlign: "center" }}>
                    Don't have an account?{" "}
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      Sign Up
                    </Link>
                  </p>
                  <MDBModalFooter className="mx-5 pt-3 mb-1"></MDBModalFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ usersReducer: { loggedIn, error } }) => {
  return {
    loggedIn,
    error
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(Login);
