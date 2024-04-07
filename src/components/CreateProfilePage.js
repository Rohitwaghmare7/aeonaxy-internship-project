import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import defaultAvatar from "../images/default.png";
import { countries } from "countries-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Alert from "./Alert";

const countryOptions = Object.keys(countries).map((countryCode) => ({
  value: countryCode,
  label: countries[countryCode].name,
}));

export default function CreateProfilePage() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleMenuOpen = () => {
    setMenuIsOpen(true);
  };

  const handleMenuClose = () => {
    setMenuIsOpen(false);
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const dataURL = event.target.result;
      setSelectedImage(dataURL);
      sessionStorage.setItem("profileImage", dataURL); // Store the image in sessionStorage
    };
  
    reader.readAsDataURL(file);
  };

  const handleNextButtonClick = () => {
    if (!selectedImage) {
      showAlert("Please select an image", "danger");
      return;
    }
    if (!selectedCountry) {
      showAlert("Please select a country", "danger");
      return;
    }
    // Navigate to the next component
    navigate("/createProfile2");
  };

  return (
    <Container className="d-flex flex-column">
      <Row>
        <div
          className="align-items-start top-0 start-0 mt-3 ml-3 logo"
          style={{ color: "#EA4B8B", fontWeight: "bold", fontSize: "40px" }}
        >
          project
        </div>
      </Row>

      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <header>
            <h2>Welcome! Let's create your profile</h2>
            <p className="mt-3" style={{ fontSize: "15px" }}>
              Let others get to know you better! You can do these later
            </p>
          </header>
          <section className="mt-0">
            <Alert alert={alert} />
            <strong style={{ fontSize: "18px", fontWeight: "bold" }}>
              Add an avatar
            </strong>
            <Row className="align-items-center justify-content-center mt-4">
              <Col xs={6} className="text-right">
                <div className="avatar-upload">
                  <img
                    src={selectedImage ? selectedImage : defaultAvatar}
                    alt="Avatar"
                    style={{
                      border: "1px solid",
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Col>
              <Col
                xs={6}
                className="d-flex flex-column justify-content-center align-items-start"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  style={{ display: "none" }}
                  id="avatar-upload"
                />
                <label htmlFor="avatar-upload">
                  <Button
                    as="span"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid black",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Choose Image
                  </Button>
                </label>
                <p
                  className="mt-2"
                  style={{ color: "gray", fontSize: "14px" }}
                >
                  <FontAwesomeIcon icon={faChevronRight} /> Or choose one of
                  our defaults
                </p>
              </Col>
            </Row>
          </section>

          <section className="mt-5">
            <strong className="mx-2" style={{ fontSize: "18px", fontWeight: "bold" }}>
              Add your location
            </strong>
            <Select
              value={selectedCountry}
              onChange={(value) => setSelectedCountry(value)}
              options={countryOptions}
              onMenuOpen={handleMenuOpen}
              onMenuClose={handleMenuClose}
              menuIsOpen={menuIsOpen}
              menuPlacement="bottom"
              maxMenuHeight={200}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  borderBottom: menuIsOpen ? "none" : "1px solid black",
                  borderLeft: "none",
                  borderRight: "none",
                  borderTop: "none",
                  marginTop: "20px",
                  boxShadow: state.isFocused ? "none" : provided.boxShadow,
                }),
                option: (provided, state) => ({
                  ...provided,
                  fontWeight: state.isSelected ? "bold" : "normal",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  fontWeight: "bold",
                  fontSize: "14px",
                }),
              }}
            />
          </section>

          <div className="mt-5">
            <Button
              onClick={handleNextButtonClick}
              style={{
                backgroundColor: "#EA4B8B",
                paddingLeft: "60px",
                paddingRight: "60px",
                border: "none",
              }}
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
