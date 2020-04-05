import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'


import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import DashboardRounded from '@material-ui/icons/DashboardRounded'
import ExploreRounded from '@material-ui/icons/ExploreRounded'
import NotificationsRounded from '@material-ui/icons/NotificationsRounded'


const styles = {
  layout: {
    width: 'auto',
    marginLeft: 130,
    marginRight: 130,
  },
  root: {
    flexGrow: 1,
    zIndex: 2,
  },
  grow: {
    flexGrow: 1,
  },
}

class LoggedInHeader extends React.Component {

  

  render() {

    const { classes } = this.props
    

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <div className={classes.layout}>
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.grow}>
              <Link to="/" style={{ textDecoration: 'none', color:'white'}}> 
                  BLOOM <img src={'https://seeklogo.com/images/B/blue-flower-design-logo-F4C2DC0C40-seeklogo.com.png'} alt="Logo" align="middle" width="75" height="75"/>
                </Link>
              </Typography>
              <div>
                <Link to="/dashboard" style={{ color:'white'}}>
                  <IconButton color="inherit">
                    <DashboardRounded />
                  </IconButton>
                </Link>
                <Link to="/browse" style={{ color:'white'}}>
                  <IconButton color="inherit">
                    <ExploreRounded />
                  </IconButton>
                </Link>
                <IconButton
                aria-haspopup="true"
                  color="inherit">          
                <NotificationsRounded />
                </IconButton>
                <IconButton
                aria-haspopup="true"
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                </div>
            </Toolbar>
          </div>
        </AppBar>
      </div>
    )
  }
}

LoggedInHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

function mapStateToProps({ usersReducer: { user, logOut, newNotifications }, dashboardReducer: { profileMenu, notificationsMenu } }) {
  return {
    user,
    logOut,
    newNotifications,
    profileMenu,
    notificationsMenu,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(LoggedInHeader)