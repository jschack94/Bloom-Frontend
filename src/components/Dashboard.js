import React from 'react'
import LoggedInHeader from './LoggedInHeader'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'


import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 'auto',
    marginLeft: 150,
    marginRight: 150,
    position: 'relative',
    top: 100,
    zIndex: 1,
  },
})

const Dashboard = (props) => {

  const { classes, theme } = props

  return (
    //CREATE A TERNERARY TO ROUTE TO HOME BEFORE LOGIN AND THEN TO THE BOTTOM RESULT AFTER LOGGING IN
    <div className={classes.root}>
      <LoggedInHeader />
      <p></p>
      <p></p>
      <br></br>
      <AppBar position="relative" color="default">
        <Tabs
          value={props.dashboardTab}
          onChange={(event, value) => props.dashboardClickTab(event, value)}
          indicatorColor="primary"
          textColor="primary"
          fullWidth >
          <Tab label="My Mentors" />
          <Tab label="My Mentees" />
        </Tabs>
      </AppBar>
      
      
   
    </div>
  )
}

function mapStateToProps({ dashboardReducer: { dashboardTab } }) {
  return {
    dashboardTab,
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, actions)
)(Dashboard)
