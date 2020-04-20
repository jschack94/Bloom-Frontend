import React from "react";
import LoggedOutHeader from "./LoggedOutHeader";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBCarousel,

  MDBIcon,
  MDBInput,
  MDBJumbotron,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCarouselCaption,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBTypography,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import "../app.css";

class Home extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <LoggedOutHeader />
        <Router>
          <div>{this.state.collapsed && overlay}</div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      Welcome to your Professional Community
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      Bloom is the best place to learn about the industry and
                      build relationships with likeminded individuals who are determined
                      to help you along the way.
                    </h6>
                    
                  
                    
                    <br></br>
                    <ul class="actions">
                      <br></br>
                      <li>
                      
                        Click Arrow to Learn More
                        <br></br>
                        <a
                          href="#header"
                          
                          class="fas fa-arrow-down icon fa-3x" 
                        >
                         
                          
                          
                        </a>
                      </li>
                    </ul>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src="https://seeklogo.com/images/B/blue-flower-design-logo-F4C2DC0C40-seeklogo.com.png"
                      alt=""
                      className="img-fluid"
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <MDBJumbotron fluid
        id="header">
          <MDBContainer>
            <MDBTypography
              
              tag="h4"
              className="blue-text"
              variant="display-1"
              
            >
              Who is Bloom For?
            </MDBTypography>

            <h1 className="display-4" className="blue-text">
              Anyone looking to navigate their professional life, but needs that
              extra push from someone else.
            </h1>
           
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
                  <h2 className="display-4">
                    Our Mission
                  </h2>
                </MDBCardTitle>
                <hr />
                <MDBCardText>
                  <h4> We are the world's largest professional network.The mission of
                  Bloom is simple: connect the world’s professionals to make
                  them more productive and successful.</h4>
        
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBRow>
              <MDBCol md="4">
                <MDBCard>
                  
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
  }
}

export default Home;
