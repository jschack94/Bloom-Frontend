import React from "react";
import { Link } from "react-router-dom";

import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Email = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">Thank You For Your Email</h2>
            <p className="lead">
              Your message is important to us. A member of our team will get
              back to you within the next 48 hours.
            </p>
            <hr className="my-2" />

            <p className="lead">
              <MDBBtn color="primary">
                <Link to="/Home" style={{ color: "black" }}>
                  Go Back
                </Link>
              </MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Email;
