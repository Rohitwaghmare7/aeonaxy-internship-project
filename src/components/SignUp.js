import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import smallImageSrc from "../images/boy.png";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    let isValid = true;
    formData.forEach((value) => {
      if (!value) {
        showAlert("Please fill in all fields", "danger");
        isValid = false;
        return;
      }
    });

    const email = formData.get("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("Please enter a valid email address", "danger");
      isValid = false;
    }

    const termsCheckbox = event.target.querySelector("#termsCheckbox");
    if (!termsCheckbox.checked) {
      showAlert("Please agree to the terms", "danger");
      isValid = false;
    }

    if (isValid) {
      try {
        const email = formData.get("email");
        sessionStorage.setItem("email", email);
        navigate("/createProfile");
      } catch (error) {
        showAlert("Error submitting form", "danger");
        console.error("There was a problem with your fetch operation:", error);
      }
    }
  };

  return (
    <Container fluid style={{ height: "100vh", overflowY: "auto" }}>
      <Row className="justify-content-md-center align-items-center" style={{ height: "100%" }}>
        <Col
          md={{ order: 1, span: 5 }}
          className="order-md-1 d-flex flex-column"
          style={{ backgroundColor: "#F2D184", height: "100%" }}
        >
          <div className="logo mx-5 mt-5" style={{ color: "#856115" }}>
            project
          </div>
          <div
            className="mb-3 mx-5 "
            style={{
              width: "80%",
              fontSize: "28px",
              fontWeight: "bold",
              color: "#856115"
            }}
          >
            Discover the world's top Designers & Creatives.
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={smallImageSrc}
              alt=""
              className="signup-image"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Col>
        <Col
          md={{ order: 2, span: 7 }}
          className="order-md-2"
        >
          <div className="d-flex justify-content-end align-items-center mb-3 mt-3">
            <strong>
              <span>Already a member? </span>
            </strong>
            <Link to="/SignIn" className="text-decoration-none mx-1">
              Sign in
            </Link>
          </div>
          <div className="p-4" style={{ border: "none" }}>
            <div className="d-flex justify-content-center">
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <h4 className="m-1">Sign Up To Project</h4>
                <Alert alert={alert} />
                <Form onSubmit={handleSubmit}>
                  <div className="px-3 mt-3">
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formBasicName">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          style={{ padding: "10px" }}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formBasicUsername">
                        <Form.Label style={{ fontWeight: "bold" }}>
                          Username
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          placeholder="Enter username"
                          style={{ padding: "10px" }}
                        />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        style={{ padding: "10px" }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        style={{ padding: "10px" }}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 d-flex align-items-start"
                      controlId="formBasicCheckbox"
                    >
                      <input
                        type="checkbox"
                        id="termsCheckbox"
                        className="mt-1"
                      />
                      <label
                        htmlFor="termsCheckbox"
                        style={{ fontSize: "13px", marginBottom: "0", marginLeft: "5px" }}
                      >
                        By signing up, you agree to our Terms, Data Policy, and Cookies Policy.
                      </label>
                    </Form.Group>

                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "#EA4B8B",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        border: "none"
                      }}
                    >
                      Create Account
                    </Button>
                    <div
                      style={{
                        fontSize: "12px",
                        marginBottom: "0px",
                        marginLeft: "5px",
                        marginTop: "25px"
                      }}
                    >
                      This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
