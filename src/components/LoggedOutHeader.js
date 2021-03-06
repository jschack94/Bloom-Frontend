import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  layout: {
    width: "auto",
    marginLeft: 130,
    marginRight: 130
  },

  grow: {
    flexGrow: 1
  }
};

const LoggedOutHeader = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" variant="dense">
        <div className={classes.layout}>
          <Toolbar>
            <Typography variant="title" className={classes.grow}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <img
                  src={
                    "https://seeklogo.com/images/B/blue-flower-design-logo-F4C2DC0C40-seeklogo.com.png"
                  }
                  alt="Logo"
                  align="left"
                  width="75"
                  height="75"
                />
              </Link>
            </Typography>
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <Button variant="contained" color="primary">
                Home
              </Button>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button variant="contained" color="primary">
                Log In
              </Button>
            </Link>

            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </Link>
      
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
};

LoggedOutHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoggedOutHeader);
