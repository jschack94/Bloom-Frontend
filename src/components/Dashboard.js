import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from  '../actions'
import withAuth from '../hocs/withAuth'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}


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


class Dashboard extends React.Component{

    render(){

    const {loggedIn} = this.props
      return(
        <div className="home">
        
  
        {loggedIn? (
          <div>
          <h2>CONGRATS WE HIT THE DASHBOARD</h2>
          
          
        </div>
      ) : (
          <h2>Bloom <p></p>  Please <Link to={"/login"} >Log in</Link> or <Link to={"/signup"}>Register</Link></h2>
      )
    }
  
        </div>
      )
    }
  }
  

function mapStateToProps({ dashboardReducer: { dashboardTab }, usersReducer: { loggedIn }  }) {
  return {
    dashboardTab,
    loggedIn,
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, actions)
)(Dashboard)