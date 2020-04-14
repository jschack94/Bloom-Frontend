import React from "react";
import LoggedInHeader from "./LoggedInHeader";
import Search from "./Search";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../actions";
import RequestMentorButton from "./RequestMentorButton";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow
} from "mdbreact";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
    marginLeft: 150,
    marginRight: 150,
    position: "relative",
    top: 80,
    zIndex: 1
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  text: {
    margin: theme.spacing.unit
  }
});

class Browse extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.props.fetchAllMentors();
    this.props.fetchAllConnections(this.props.user.id);
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const desiredMentors = this.props.allMentors.filter(mentor =>
      mentor.job_title.includes(this.state.searchTerm)
    );

    return (
      <div className={classes.root}>
        <p></p>
        <p></p>
        <p></p>

        <MDBRow>
          <MDBCol>
            <MDBPagination className="mb-5">
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Previous</span>
                </MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav>1</MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav>2</MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav>3</MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Next</span>
                </MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </MDBCol>
        </MDBRow>
        <LoggedInHeader />

        <h3>
          Mentors near {this.props.user.location.city},{" "}
          {this.props.user.location.state}
        </h3>
        <Search handleChange={this.handleChange} />

        {!this.props.allMentors || !this.props.allConnections
          ? null
          : desiredMentors.map(mentor =>
              this.props.allConnections.find(
                connection => connection.mentor.id === mentor.id
              ) ? (
                <Paper className={classes.paper} elevation={1} key={mentor.id}>
                  <img
                    src={mentor.profile_pic}
                    alt="Profile Pic"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "5%"
                    }}
                  />
                  <div
                    style={{ width: "75%", height: "150px", float: "right" }}
                  >
                    <div className={classes.text}>
                      <Typography variant="headline" component="h3">
                        {mentor.first_name} {mentor.last_name}
                      </Typography>
                      <Typography variant="subheading">
                        {mentor.job_title.charAt(0).toUpperCase()}
                        {mentor.job_title.slice(1).toLowerCase()}
                      </Typography>
                      {mentor.expertiseArray !== "" ? (
                        <Typography component="p">
                          Expertise:{" "}
                          {mentor.expertiseArray.split(",").join(", ")}
                        </Typography>
                      ) : null}
                      {mentor.bio !== "" ? (
                        <Typography component="p">Bio: {mentor.bio}</Typography>
                      ) : null}
                      {/* LinkedIn:
                  GitHub:
                  Personal Website: */}
                    </div>
                    <RequestMentorButton disable={true} mentor={mentor} />
                  </div>
                </Paper>
              ) : (
                <Paper className={classes.paper} elevation={1} key={mentor.id}>
                  <img
                    src={mentor.profile_pic}
                    alt="Profile Pic"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "5%"
                    }}
                  />
                  <div
                    style={{ width: "75%", height: "150px", float: "right" }}
                  >
                    <div className={classes.text}>
                      <Typography variant="headline" component="h3">
                        {mentor.first_name} {mentor.last_name}
                      </Typography>
                      <Typography variant="subheading">
                        {mentor.job_title.charAt(0).toUpperCase()}
                        {mentor.job_title.slice(1).toLowerCase()}
                      </Typography>
                      {mentor.expertiseArray !== "" ? (
                        <Typography component="p">
                          Expertise:{" "}
                          {mentor.expertiseArray.split(",").join(", ")}
                        </Typography>
                      ) : null}
                      {mentor.bio !== "" ? (
                        <Typography component="p">Bio: {mentor.bio}</Typography>
                      ) : null}
                      {/* LinkedIn:
                  GitHub:
                  Personal Website: */}
                    </div>
                    <RequestMentorButton disable={false} mentor={mentor} />
                  </div>
                </Paper>
              )
            )}
      </div>
    );
  }
}

function mapStateToProps({
  usersReducer: { user },
  browseReducer: { allMentors, allConnections }
}) {
  return {
    user,
    allMentors,
    allConnections
  };
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, actions)
)(Browse);
