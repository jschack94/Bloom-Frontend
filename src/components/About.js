import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBJumbotron,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import LoggedOutHeader from "./LoggedOutHeader";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <div>
      <p></p>
      <p></p>
      <br></br>
      <br></br>

      <LoggedOutHeader />
      <p></p>
      <p></p>
      <br></br>
      <br></br>

      <p></p>
      <p></p>

      <MDBJumbotron className="d-block p-2 bg-primary text-white" fluid>
        <MDBContainer>
          <h2 className="display-4">Welcome to Bloom</h2>
          <p className="lead">Welcome to Your Professional Community.</p>
          <MDBBtn color="black" floating size="sm">
            <MDBIcon fab icon="facebook-f" size="lg" />
          </MDBBtn>
          <MDBBtn color="black" floating size="sm">
            <MDBIcon fab icon="twitter" size="lg" />
          </MDBBtn>
          <MDBBtn color="black" floating size="sm">
            <MDBIcon fab icon="google-plus-g" size="lg" />
          </MDBBtn>
        </MDBContainer>
      </MDBJumbotron>

      <MDBContainer>
        <MDBRow>
          <MDBCol md="8">
            <MDBCard>
              <MDBCardBody>
                <a
                  href="#!"
                  className="activator waves-effect waves-light mr-4"
                ></a>
                <MDBCardTitle>
                  <h2>Our Mission</h2>
                </MDBCardTitle>
                <hr />
                <MDBCardText>
                  We are the world's largest professional network.The mission of
                  Bloom is simple: connect the world’s professionals to make
                  them more productive and successful.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBRow>
              <MDBCol md="4">
                <MDBCard>
                  <MDBCardImage
                    top
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQFE0tYLh-ttZA/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=QGwV1w2_D1KdqiWhKPmjW-qYgc9OWorPLO7SoNT9qBI"
                    overlay="white-slight"
                    hover
                    waves
                    alt="MDBCard image cap"
                  />
                  <MDBCardBody className="elegant-color white-text rounded-bottom">
                    <MDBCardTitle>Izzy got out of unemployment</MDBCardTitle>
                    <hr className="hr-light" />
                    <MDBCardText className="white-text">
                      “After I lost my job, one of the first things I did was
                      update my Bloom profile. I had a recruiter reach out to
                      me....”
                    </MDBCardText>
                    <a
                      href="#!"
                      className="black-text d-flex justify-content-end"
                    >
                      <h5 className="white-text">
                        Read more
                        <MDBIcon icon="angle-double-right" className="ml-2" />
                      </h5>
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard>
                  <MDBCardImage
                    top
                    src="https://pbs.twimg.com/profile_images/982034353763962880/RY7ezgst_400x400.jpg"
                    overlay="white-slight"
                    hover
                    waves
                    alt="MDBCard image cap"
                  />
                  <MDBCardBody className="elegant-color white-text rounded-bottom">
                    <MDBCardTitle>
                      Aaron was matched with a recruiter
                    </MDBCardTitle>
                    <hr className="hr-light" />
                    <MDBCardText className="white-text">
                      “I was having a very hard time finding a job. A supervisor
                      reached out to me on Bloom. We set up an interview and...”
                    </MDBCardText>
                    <a
                      href="#!"
                      className="black-text d-flex justify-content-end"
                    >
                      <h5 className="white-text">
                        Read more
                        <MDBIcon icon="angle-double-right" className="ml-2" />
                      </h5>
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard>
                  <MDBCardImage
                    top
                    src="https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/brad-shulkin-8829c399"
                    overlay="white-slight"
                    hover
                    waves
                    alt="MDBCard image cap"
                  />
                  <MDBCardBody className="elegant-color white-text rounded-bottom">
                    <MDBCardTitle>Brad regained his confidence</MDBCardTitle>
                    <hr className="hr-light" />
                    <MDBCardText className="white-text">
                      “I didn’t think I could make it in the city. I went on
                      LinkedIn and found a lot of jobs - I realized, I am
                      qualified. So, I applied. And I got it!”
                    </MDBCardText>
                    <a
                      href="#!"
                      className="black-text d-flex justify-content-end"
                    >
                      <h5 className="white-text">
                        Read more
                        <MDBIcon icon="angle-double-right" className="ml-2" />
                      </h5>
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard wide cascade>
              <form>
                <p className="h5 text-center mb-4">
                  <p></p>Have a question or just want to chat? Email us below:
                </p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Subject"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    type="textarea"
                    rows="2"
                    label="Your message"
                    icon="pencil-alt"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="primary">
                    <Link to="/Email" style={{ color: "black" }}>
                      Send Email
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </Link>
                  </MDBBtn>
                </div>
              </form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default About;
