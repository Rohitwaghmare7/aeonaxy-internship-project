import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailIcon from "../images/email.png";
import { Link } from "react-router-dom"

export default function Email() {

  const storedEmail = sessionStorage.getItem('email');

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center">Please verify your email...</h2>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="text-center">
            <img className="mt-3 mb-3" src={emailIcon} alt="Email Icon" style={{ maxWidth: "100px" }} />
            <p>Please verify your email address. We've sent a confirmation email to:</p>
            <p><strong>{storedEmail}</strong></p>
            <p>Click the confirmation link in that email to begin using the service.</p>
            <Container className="d-flex justify-content-center mt-3">
              <p style={{ maxWidth: "70%" }} className="text-center">
                Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span style={{ color: "#EA4B8B", fontWeight: "bold" }}>resend the confirmation email.</span>
              </p>
            </Container>

            <p>
              Wrong email address? <Link to="/home" style={{ color: "#EA4B8B", fontWeight: "bold" }}>Change it</Link>.
            </p>

          </div>
        </Col>
      </Row>
    </Container>
  );
}
