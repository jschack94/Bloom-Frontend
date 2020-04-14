import React from "react";
import LoggedInHeader from "./LoggedInHeader";
import MentorsContainer from "./MentorsContainer";
import MenteesContainer from "./MenteesContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../actions";
import withAuth from "../hocs/withAuth";
import { MDBContainer, MDBAlert } from "mdbreact";
import Welcome from "react-welcome-page";

import YourList from "./YourList";

import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
    marginLeft: 150,
    marginRight: 150,
    position: "relative",
    top: 100,
    zIndex: 1
  }
});


class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      yourMentors: []

    };
  }

  addMentor = (mentor) => {
    if(!this.state.yourMentors.includes(mentor)) {
      this.setState({
        yourMentors: [...this.state.yourMentors, mentor]
      })
    }
  }
  
    removeMentor = (mentor) => {
      this.setState({
        yourMentors: this.state.yourMentors.filter(m => m !== mentor) 
      })
    }
  
render() {
 
  return (
    <div className={this.props.classes.root}>
      <LoggedInHeader />
      <Welcome
        loopDuration={1800}
        data={[
          {
            image:
              "https://seeklogo.com/images/B/blue-flower-design-logo-F4C2DC0C40-seeklogo.com.png",
            text: "LOADING...",
            imageAnimation: "bounce",
            textAnimation: "flipInX",
            backgroundColor: "#daf0f2",
            textColor: "#002134"
          },
          {
            image:
              "https://seeklogo.com/images/B/blue-flower-design-logo-F4C2DC0C40-seeklogo.com.png",
            text: <strong>WELCOME TO BLOOM</strong>,
            backgroundColor: "#daf0f2"
          }
        ]}
      />
      <MDBContainer>
        <MDBAlert color="warning" dismiss>
          <strong>You have successfully logged in! </strong>
          <p></p> Check to see if you have received any notifications from your
          mentors.
        </MDBAlert>
      </MDBContainer>
      <AppBar  position="relative" color="default">
        <Tabs
          value={this.props.dashboardTab}
          onChange={(event, value) => this.props.dashboardClickTab(event, value)}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="My Mentors" />
          <Tab label="My Mentees" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={this.props.theme.direction === "rtl" ? "x-reverse" : "x"}
        index={this.props.dashboardTab}
        onChangeIndex={index => this.props.dashboardChangeTab(index)}
      >
        <TabContainer dir={this.props.theme.direction}>
          <MentorsContainer addMentor={this.addMentor} />
          
        
          <YourList yourMentors={this.state.yourMentors} removeMentor={this.removeMentor} />
          
        </TabContainer>
        <TabContainer dir={this.props.theme.direction}>
          <MenteesContainer />
        </TabContainer>
      </SwipeableViews>
    </div>
  );
};
}

function mapStateToProps({ dashboardReducer: { dashboardTab } }) {
  return {
    dashboardTab
  };
}

export default withAuth(
  compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, actions)
  )(Dashboard)
);
