import React from "react";
import LoggedOutHeader from "./LoggedOutHeader";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import {
  MDBNavbar,
  MDBJumbotron,
  MDBNavbarBrand,
  MDBCarousel,
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
                      build relationships with likeminded individuals who want
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
        <MDBJumbotron fluid>
          <MDBContainer>
            <MDBTypography
              id="header"
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
      </div>
    );
  }
}

export default Home;
