import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import LoggedOutHeader from "./LoggedOutHeader";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const About = () => {
  return (
    <div>
      <LoggedOutHeader />
      <p></p>
      <p></p>
      <br></br>
	  <br></br>


      <Jumbotron>
        <h1><strong>About Bloom</strong></h1>
		<h5><strong>What Do We Do</strong></h5>
        <p>Connecting the world's professionals to make them more productive and
          successful.</p>
		<h5><strong>How Do We Do It</strong></h5>  
		<p>Connect with Mentors in your network to get professional advice.</p>
		<h5><strong>Why Do We Do It</strong></h5>
		<p>Filling the gap that Linkedin does not provide. We strictly focus on building relationships.</p>
      </Jumbotron>
	  <Jumbotron fluid>
  <Container>
  <h1><strong>Payment Options</strong></h1>
    <p>$25 one time fee to access our network. Payment is due on signup.</p>
  </Container>
</Jumbotron>
	  
    </div>
  );
};

export default About;
