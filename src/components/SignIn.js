import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import smallImageSrc from "../images/boy.png";
import Alert from "./Alert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
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

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
        showAlert("Please fill in all fields", "danger");
        return;
    }
    else{
        navigate("/home");
    }
};

    return (
        <Container fluid style={{ height: "100vh", overflowY: "auto" }}>
            <Row className="justify-content-md-center align-items-center" style={{ height: "100%" }}>
                <Col md={7} className="order-md-2">
                    <div className="d-flex justify-content-end align-items-center mb-3 mt-2">
                        <strong>
                            <span>Not a member? </span>
                        </strong>
                        <Link to="/" className="text-decoration-none mx-1">
                            Sign up
                        </Link>
                    </div>
                    <div className="p-4" style={{ border: "none", paddingTop: "30px" }}>
                        <div className="d-flex justify-content-center">
                            <div className="w-100" style={{ maxWidth: "400px", padding: "20px" }}>
                                <h4 className="m-1 ">Sign In To Your Account</h4>
                                <Alert alert={alert} />
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formBasicEmail" className="mt-3">
                                    <Form.Label style={{ fontWeight: "bold" }}>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{ padding: "10px" }} // Adding padding to email input
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword" className="mt-3">
                                    <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            style={{ padding: "10px" }}
                                        />
                                    </Form.Group>

                                    <Button
                                        type="submit"
                                        style={{
                                            backgroundColor: "#EA4B8B",
                                            paddingLeft: "40px",
                                            paddingRight: "40px",
                                            paddingTop: "10px",
                                            paddingBottom: "10px"
                                        }}
                                        className="mt-3"
                                    >
                                        Login
                                    </Button>
                                </Form>

                            </div>
                        </div>
                    </div>

                </Col>
                <Col
                    md={5}
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
            </Row>
        </Container>
    );
}
