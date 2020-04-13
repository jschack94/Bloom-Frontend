import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../actions";
import Notifications from "./Notifications";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DashboardRounded from "@material-ui/icons/DashboardRounded";
import ExploreRounded from "@material-ui/icons/ExploreRounded";
import NotificationsRounded from "@material-ui/icons/NotificationsRounded";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Badge from "@material-ui/core/Badge";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const styles = {
  layout: {
    width: "auto",
    marginLeft: 130,
    marginRight: 130
  },
  root: {
    flexGrow: 1,
    zIndex: 2
  },
  grow: {
    flexGrow: 1
  }
};

class LoggedInHeader extends React.Component {
  state = {
    profileMenu: null,
    notificationsMenu: null
  };

  openProfileMenu = (event) => {
    this.setState({
      profileMenu: event.currentTarget
    });
  };

  closeProfileMenu = () => {
    this.setState({
      profileMenu: null
    });
  };

  openNotificationsMenu = (event) => {
    this.setState(
      {
        notificationsMenu: event.currentTarget
      },
      this.props.clearNotifications(this.props.user.id)
    );
  };

  closeNotificationsMenu = () => {
    this.setState({
      notificationsMenu: null
    });
  };

  render() {
    const { classes } = this.props;
    const openProfile = Boolean(this.state.profileMenu);
    const openNotifications = Boolean(this.state.notificationsMenu);

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <div className={classes.layout}>
            <Toolbar>
              <Typography
                variant="title"
                color="inherit"
                className={classes.grow}
              >
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
              <div>
                <Link to="/dashboard" style={{ color: "white" }}>
                  <IconButton color="inherit">
                    <DashboardRounded />
                  </IconButton>
                </Link>
                <Link to="/browse" style={{ color: "white" }}>
                  <IconButton color="inherit">
                    <SearchRoundedIcon />
                  </IconButton>
                </Link>
                <Link to="/coffeemap" style={{ color: "white" }}>
                  <IconButton color="inherit">
                    <RoomRoundedIcon />
                  </IconButton>
                </Link>

                <IconButton
                  aria-owns={openNotifications ? "notifications" : null}
                  aria-haspopup="true"
                  onClick={(event) => this.openNotificationsMenu(event)}
                  color="inherit"
                >
                  {" "}
                  {this.props.newNotifications > 0 ? (
                    <Badge
                      badgeContent={this.props.newNotifications}
                      color="secondary"
                    >
                      <NotificationsRounded />
                    </Badge>
                  ) : (
                    <NotificationsRounded />
                  )}
                </IconButton>
                <Menu
                  id="notifications"
                  anchorEl={this.state.notificationsMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={openNotifications}
                  onClose={() => this.closeNotificationsMenu()}
                >
                  <Notifications />
                </Menu>
                <IconButton
                  aria-owns={openProfile ? "account-circle" : null}
                  aria-haspopup="true"
                  onClick={(event) => this.openProfileMenu(event)}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="account-circle"
                  anchorEl={this.state.profileMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  open={openProfile}
                  onClose={() => this.closeProfileMenu()}
                >
                  <Link to="/profile" style={{ color: "white" }}>
                    <MenuItem onClick={() => this.closeProfileMenu}>
                      Profile
                    </MenuItem>
                  </Link>
                  <Link to="/Pay" style={{ color: "white" }}>
                    <MenuItem onClick={() => this.closeProfileMenu}>
                      Make Payment
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={() => this.props.logOut()}>Logout</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </div>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({
  usersReducer: { user, newNotifications, logOut },
  dashboardReducer: { profileMenu, notificationsMenu }
}) {
  return {
    user,
    logOut,
    newNotifications,
    profileMenu,
    notificationsMenu
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(LoggedInHeader);
