import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";

class MentorDetails extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, ...other } = this.props;
    const {
      first_name,
      last_name,
      job_title,
      expertise,
      profile_pic,
      bio,
      email_address,
      linkedin,
      github,
      personal_website
    } = this.props.mentor;

    return (
      <Dialog
        maxWidth="lg"
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <Card className={classes.card} style={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              height="300"
              image={profile_pic}
              title="title"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {first_name} {last_name}
              </Typography>
              <Typography variant="subheading">
                {job_title}
                <Typography component="p">
                  <strong> Email Address:</strong> {email_address}
                </Typography>
              </Typography>
              {expertise !== "" ? (
                <Typography component="p">{expertise}</Typography>
              ) : null}
              {bio !== "" ? (
                <Typography component="p">
                  <strong> Bio:</strong> {bio}
                </Typography>
              ) : null}
              {linkedin !== "" ? (
                <Typography component="p">
                  <strong>Linkedin:</strong> {linkedin}
                </Typography>
              ) : null}
              {github !== "" ? (
                <Typography component="p">
                  <strong> Github: </strong> {github}
                </Typography>
              ) : null}
              {personal_website !== "" ? (
                <Typography component="p">
                  <strong> Website:</strong> {personal_website}
                </Typography>
              ) : null}
            </CardContent>
          </CardActionArea>
        </Card>
      </Dialog>
    );
  }
}

export default MentorDetails;
